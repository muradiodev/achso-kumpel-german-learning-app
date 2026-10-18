# Deploying AchsoKumpel

AchsoKumpel runs on DEVHUBPOINT01 (`89.117.60.47`) in `~/achsokumpel`, as two
Docker containers:

| Container | Port | Domain |
|---|---|---|
| `achsokumpel-web-1` (landing at `/`, web app at `/app/`) | `127.0.0.1:3030` | achsokumpel.deviofy.com |
| `achsokumpel-api-1` | `127.0.0.1:4030` | achsokumpelapi.deviofy.com |

Host nginx proxies each domain to its port.

## Deploy

From the project folder (Git Bash):

```bash
./deploy.sh          # website + API
./deploy.sh web      # only the website
./deploy.sh api      # only the API
```

The script builds the site, uploads it, rebuilds only AchsoKumpel's containers,
and checks that each one answers. It uses `~/.ssh_hubpoint/dev_key` and doesn't need sudo.

## One-time host setup (needs sudo)

You only do this once, when the domains are new:

```bash
ssh -t -i ~/.ssh_hubpoint/dev_key web_deploy@89.117.60.47 "sudo bash ~/achsokumpel-setup/host-setup.sh"
```

It installs the two nginx vhosts from `deploy/nginx/` and gets a Let's Encrypt
certificate for both domains. If a vhost already exists, the script leaves it alone.

## Accounts and backups

All accounts and progress live in the Docker volume `achsokumpel-data`. Deploys
keep it. To copy the database off the container:

```bash
docker cp achsokumpel-api-1:/data/achsokumpel.db ./achsokumpel-backup.db
```
