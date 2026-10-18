# Deploying AchsoKumpel

AchsoKumpel runs on DEVHUBPOINT01 (`89.117.60.47`) in `~/achsokumpel`, as three
Docker containers:

| Container | Port | Domain |
|---|---|---|
| `achsokumpel-web-1` (landing at `/`, web app at `/app/`) | `127.0.0.1:3030` | achsokumpel.deviofy.com |
| `achsokumpel-api-1` | `127.0.0.1:4030` | achsokumpelapi.deviofy.com |
| `achsokumpel-db-1` (PostgreSQL 17) | `127.0.0.1:5440` | none, SSH tunnel only |

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

It needs `deploy/secrets/server.env`, which holds the database password and is not in git. If it's missing on your computer, see [deploy/secrets/README.md](../deploy/secrets/README.md).

## One-time host setup (needs sudo)

You only do this once, when the domains are new:

```bash
ssh -t -i ~/.ssh_hubpoint/dev_key web_deploy@89.117.60.47 "sudo bash ~/achsokumpel-setup/host-setup.sh"
```

It installs the two nginx vhosts from `deploy/nginx/` and gets a Let's Encrypt
certificate for both domains. If a vhost already exists, the script leaves it alone.

## Database

Accounts, sessions and progress live in PostgreSQL, database `achsokumpel`, in the
Docker volume `achsokumpel-pgdata`. Deploys keep it. The phone app and the web
app both talk to the same API, so they always see the same data.

The user, password and connection strings are in `deploy/secrets/server.env`.
To open a SQL shell on the server:

```bash
docker exec -it achsokumpel-db-1 psql -U achsokumpel achsokumpel
```

To use a database tool (DBeaver, TablePlus) from your computer, open a tunnel and
connect to `localhost:5440`:

```bash
ssh -N -L 5440:127.0.0.1:5440 -i ~/.ssh_hubpoint/dev_key web_deploy@89.117.60.47
```

To back up the database:

```bash
docker exec achsokumpel-db-1 pg_dump -U achsokumpel achsokumpel | gzip > achsokumpel-$(date +%F).sql.gz
```
