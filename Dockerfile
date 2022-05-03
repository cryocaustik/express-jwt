FROM node:14

WORKDIR /app
COPY package*.json /app/
COPY .env .env

RUN npm install

COPY src/ .

ENV NODE_ENV=production

# EXPOSE ${PORT}
# CMD [ "node", "index.js" ]
