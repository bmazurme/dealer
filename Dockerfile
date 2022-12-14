FROM node:16.17
WORKDIR /var/www
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE $PORT
CMD npm run start
