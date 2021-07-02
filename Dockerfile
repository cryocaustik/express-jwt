FROM node:14

WORKDIR /app
COPY package*.json .
COPY .env .env

RUN npm install

COPY src/ .


EXPOSE 8000
CMD [ "node", "index.js" ]