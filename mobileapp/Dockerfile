FROM node:6.9.1-slim

RUN     npm cache clean
RUN     npm install -g n
RUN     n stable
RUN     curl -L https://npmjs.org/install.sh | sh

RUN npm install -g ionic@extlib

RUN npm install -g ionic cordova


WORKDIR /opt/maktaba
