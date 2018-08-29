FROM node:10
WORKDIR /opt/app
COPY package.json /opt/app


RUN npm install

COPY . /opt/app

RUN npm i -g @adonisjs/cli
RUN npm run boot

CMD node server.js

EXPOSE 3333
