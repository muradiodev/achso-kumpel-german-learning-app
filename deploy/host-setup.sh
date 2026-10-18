#!/usr/bin/env bash
# One-time host setup for AchsoKumpel (the only step that needs sudo):
#   sudo bash ~/achsokumpel-setup/host-setup.sh
# Installs both nginx vhosts (proxies to 127.0.0.1:3030 and :4030) and gets a
# Let's Encrypt certificate for both hostnames. Deploys after this are sudo-free.
set -euo pipefail

SETUP_DIR="$(cd "$(dirname "$0")" && pwd)"

for host in achsokumpel.deviofy.com achsokumpelapi.deviofy.com; do
  if [ -f "/etc/nginx/conf.d/$host.conf" ]; then
    echo "$host.conf already exists, leaving it as is"
  else
    cp "$SETUP_DIR/$host.conf" /etc/nginx/conf.d/
  fi
done

nginx -t
systemctl reload nginx

certbot --nginx --non-interactive --redirect \
  -d achsokumpel.deviofy.com -d achsokumpelapi.deviofy.com

nginx -t
systemctl reload nginx
echo "Done. Deploy with ./deploy.sh from the project folder."
