FROM node:18.19.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "index.js" ]