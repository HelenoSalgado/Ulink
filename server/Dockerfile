FROM node:alpine

ENV HOME=/home/app

COPY package.json yarn.lock $HOME/server/

WORKDIR $HOME/server/

RUN yarn install

COPY . $HOME/server/

RUN npx prisma generate
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]