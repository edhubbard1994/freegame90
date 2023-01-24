FROM ubuntu:22.10


RUN useradd -ms /bin/bash freegame

WORKDIR /home/freegame

RUN apt-get update

RUN apt-get install -y nodejs python3 g++ python3-dev make
RUN mkdir app

RUN apt-get install -y npm
COPY ./package.json /home/freegame/app

WORKDIR /home/freegame/app

RUN npm i

COPY ./ .

RUN npm run build

EXPOSE 3000

USER freegame

CMD ["npm", "run",  "start"]



