Run the whole project
```bash
docker compose -f ./docker/docker-compose.yml --profile all up -d
```

Run front-end only
```bash
docker compose -f ./docker/docker-compose.yml --profile front up -d
```

Run back-end only
```bash
docker compose -f ./docker/docker-compose.yml --profile back up -d
```
