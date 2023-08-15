FROM node:alpine

WORKDIR /home/app/server

COPY package.json yarn.lock ./

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]