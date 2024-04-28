
```bash
$ GCO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o gomovies ./cmd/api
```

```bash
pg_dump --no-owner -h localhost -p 5432 -U postgres movies > movies.sql

# dear docker
$ docker exec f5ad4ee44b8b pg_dump --no-owner -h localhost -p 5432 -U postgres movies > movies.sql
```
