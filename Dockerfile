FROM ubuntu

WORKDIR /usr/src/web

COPY . .

#RUN npm install

RUN apt-get install node

EXPOSE 5000

CMD ["node","./backend/test.js"]