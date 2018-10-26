FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY process.yml /usr/src/app/

RUN npm install pm2 -g
RUN npm install

CMD ["pm2-docker", "process.yml"]