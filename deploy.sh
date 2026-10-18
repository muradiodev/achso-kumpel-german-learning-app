#!/usr/bin/env bash
#
# AchsoKumpel one-command deploy to DEVHUBPOINT01.
#
#   ./deploy.sh          # deploy everything (website + API)
#   ./deploy.sh web      # only the website: landing + web app (-> 127.0.0.1:3030)
#   ./deploy.sh api      # only the API                        (-> 127.0.0.1:4030)
#
# Build locally -> tar -> scp -> docker compose up --build in ~/achsokumpel.
# No sudo needed; host nginx was set up once with deploy/host-setup.sh.
# Accounts live in the Docker volume achsokumpel-data and survive deploys.
#
set -euo pipefail

# ---- config (override via env if ever needed) ----
KEY="${AK_SSH_KEY:-$HOME/.ssh_hubpoint/dev_key}"
HOST="${AK_SSH_HOST:-web_deploy@89.117.60.47}"
SSH_OPTS=(-o BatchMode=yes -o StrictHostKeyChecking=accept-new -o ConnectTimeout=20)
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STAGE="$ROOT_DIR/.deploy-stage"

# ---- pretty output ----
cyan(){ printf '\n\033[1;36m==> %s\033[0m\n' "$*"; }
green(){ printf '\033[1;32m✓ %s\033[0m\n' "$*"; }
red(){ printf '\033[1;31m✗ %s\033[0m\n' "$*" >&2; }

ssh_do(){ ssh "${SSH_OPTS[@]}" -i "$KEY" "$HOST" "$@"; }
scp_up(){ scp "${SSH_OPTS[@]}" -i "$KEY" "$1" "$HOST:$2"; }

[ -f "$KEY" ] || { red "SSH key not found: $KEY"; exit 1; }

# wait until a URL on the server returns 200
check_health(){
  local url="$1" name="$2" code
  code=$(ssh_do "for i in \$(seq 1 20); do c=\$(curl -s -m5 -o /dev/null -w '%{http_code}' '$url' 2>/dev/null || true); [ \"\$c\" = 200 ] && break; sleep 2; done; echo \${c:-000}")
  if [ "$code" = "200" ]; then green "$name is healthy ($url -> 200)"; else red "$name health check FAILED ($url -> $code)"; return 1; fi
}

target="${1:-all}"
case "$target" in
  all) services="web api" ;;
  web) services="web" ;;
  api) services="api" ;;
  *) echo "usage: $0 [all|web|api]"; exit 1 ;;
esac
start=$SECONDS

# ---- build + stage ----
rm -rf "$STAGE" && mkdir -p "$STAGE"
cp "$ROOT_DIR/deploy/docker-compose.yml" "$ROOT_DIR/deploy/web.Dockerfile" "$ROOT_DIR/deploy/web.conf" "$STAGE/"

if [[ " $services " == *" web "* ]]; then
  cyan "WEBSITE: building landing + web app"
  (cd "$ROOT_DIR" && npm run -s build:site)
  cp -r "$ROOT_DIR/site" "$STAGE/site"
fi

if [[ " $services " == *" api "* ]]; then
  cyan "API: staging server/"
  mkdir -p "$STAGE/server"
  cp -r "$ROOT_DIR/server/src" "$ROOT_DIR/server/package.json" "$ROOT_DIR/server/package-lock.json" \
    "$ROOT_DIR/server/Dockerfile" "$ROOT_DIR/server/.dockerignore" "$STAGE/server/"
  (cd "$ROOT_DIR" && node scripts/write-version.mjs >/dev/null)
  cp "$ROOT_DIR/public/version.json" "$STAGE/server/version.json"
fi

# ---- upload ----
cyan "UPLOAD to $HOST:~/achsokumpel ($services)"
tgz="$ROOT_DIR/.deploy-achsokumpel.tgz"
tar czf "$tgz" -C "$STAGE" .
scp_up "$tgz" "/tmp/achsokumpel.tgz"
rm -rf "$tgz" "$STAGE"

# ---- build & run on the server (only this app's containers) ----
ssh_do "SERVICES='$services' bash -s" <<'REMOTE'
set -e
D="$HOME/achsokumpel"
mkdir -p "$D"
for s in $SERVICES; do
  [ "$s" = web ] && rm -rf "$D/site"
  [ "$s" = api ] && rm -rf "$D/server"
done
tar xzf /tmp/achsokumpel.tgz -C "$D" && rm -f /tmp/achsokumpel.tgz
cd "$D" && docker compose up -d --build $SERVICES
docker image prune -f >/dev/null
REMOTE

for s in $services; do
  case "$s" in
    web) check_health "http://127.0.0.1:3030/" "website"; check_health "http://127.0.0.1:3030/app/" "web app" ;;
    api) check_health "http://127.0.0.1:4030/health" "api" ;;
  esac
done

cyan "ALL DONE in $((SECONDS - start))s"
green "Live: https://achsokumpel.deviofy.com  |  https://achsokumpel.deviofy.com/app  |  https://achsokumpelapi.deviofy.com/health"
