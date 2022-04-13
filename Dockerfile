FROM ubuntu

WORKDIR /usr/src/web

COPY . .

#RUN npm install

RUN apt-get update && apt-get install nodejs -y

EXPOSE 5000

#CMD ["node","./backend/test.js"]