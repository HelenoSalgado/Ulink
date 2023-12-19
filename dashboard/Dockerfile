FROM node:alpine

WORKDIR /home/app/dashboard

COPY package.json yarn.lock ./

RUN npm install && npm i -g http-server

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]