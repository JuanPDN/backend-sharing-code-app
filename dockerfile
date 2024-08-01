FROM node:lts-slim

LABEL author="Juan Pablo Delgado"

WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app

RUN npm install && npm uninstall vercel

COPY ./dist /usr/src/app

EXPOSE 3000

CMD [ "node", "index.js" ]