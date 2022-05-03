# express-jwt

signs payload with given secret, returning a JWT

## payload requirement

```json
{
  "secret": "<secret to sign with>",
  "payload": "<data to sign>"
}
```

## setup command 

```sh
# copy and edit env
cp .env.example .env 

# run docker container
docker compose up -d
```
