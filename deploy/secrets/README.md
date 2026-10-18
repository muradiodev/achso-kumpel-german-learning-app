# deploy/secrets

Everything in this folder except this README is ignored by git.

`server.env` holds the PostgreSQL user, database name and password. `deploy.sh`
uploads it to `~/achsokumpel/.env` on the server, where docker compose reads
it. The comments inside the file show how to connect to the database.

If the file is missing (for example on a new computer), copy it from the server:

```bash
scp -i ~/.ssh_hubpoint/dev_key web_deploy@89.117.60.47:~/achsokumpel/.env deploy/secrets/server.env
```

Don't create a new password for an existing database. Postgres only reads
`POSTGRES_PASSWORD` the first time it starts, so a new value locks the API out.
