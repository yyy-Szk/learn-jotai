FROM node:20.19-alpine

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY . .

CMD ["yarn", "start"]

EXPOSE 5173
