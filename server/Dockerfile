FROM node:alpine

WORKDIR /home/app/server

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npx prisma generate
#RUN npx prisma migrate
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]