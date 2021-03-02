FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN npm i

COPY src src

RUN npm run build 

CMD npm start