FROM node:16-buster-slim
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENTRYPOINT node index.js
