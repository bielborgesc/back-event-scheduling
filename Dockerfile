FROM node:alpine

WORKDIR usr/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]