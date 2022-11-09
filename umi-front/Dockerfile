FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 8000

LABEL org.opencontainers.image.title="umi-front"
