FROM node:alpine

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/dashboard/

WORKDIR $HOME/dashboard/

RUN npm install && npm i -g http-server

COPY . $HOME/dashboard/

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]