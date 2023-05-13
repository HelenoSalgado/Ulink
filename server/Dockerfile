FROM node:alpine

WORKDIR /usr/app

COPY package*.json /usr/app
COPY tsconfig.json /usr/app

# RUN npm install -g npm@9.6.6
# NODE_ENV=development 
RUN yarn install

COPY . /usr/app

RUN yarn build

#RUN npm run prisma:migrate

EXPOSE 3000

CMD ["yarn", "start"]