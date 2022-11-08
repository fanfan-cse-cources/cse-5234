FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

CMD [ "node", "dist/main.js" ]

EXPOSE 8000

LABEL org.opencontainers.image.title="nest-back"
