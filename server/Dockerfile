FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY / ./
RUN ls -la *

COPY package*.json ./

RUN npm install

EXPOSE 8001
CMD [ "node", "server.js" ]