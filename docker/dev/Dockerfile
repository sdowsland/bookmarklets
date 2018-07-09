FROM node:8

RUN npm install -g bookmarklet

WORKDIR /usr/local/app

ADD package.json .
ADD package-lock.json .

RUN npm install

CMD tail -f /dev/null