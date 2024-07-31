FROM node

LABEL author="Juan Pablo Delgado"

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install && npm run build

EXPOSE 3000

CMD [ "node", "./dist/index.js" ]