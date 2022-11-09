# Installation

## macOS

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$ nvm -v
0.39.1

$ nvm install 16
$ nvm use 16
$ node -v
v16.10.0

$ npm i -g corepack
$ yarn global add umi

$ cp ./nest-back/envs/dev ./nest-back/.env
```

## Docker

### Start

```bash
$ cp ./nest-back/envs/docker ./nest-back/.env
$ docker-compose -d --env-file ./nest-back/.env up
```

### Stop

```bash
$ docker-compose --env-file ./nest-back/.env down
```
