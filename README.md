### Tech stack
![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)
![Redux](https://img.shields.io/badge/-Redux-black?style=flat-square&logo=redux)
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript)
![HTML5](https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3)
![Webpack](https://img.shields.io/badge/-Webpack-black?style=flat-square&logo=webpack)
![NPM](https://img.shields.io/badge/-NPM-black?style=flat-square&logo=npm)
![Git](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)
![Eslint](https://img.shields.io/badge/-Eslint-black?style=flat-square&logo=eslint)
![Stylelint](https://img.shields.io/badge/-Stylelint-black?style=flat-square&logo=stylelint)
![Nodejs](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js)
![Express](https://img.shields.io/badge/-Express-black?style=flat-square&logo=express)

- classnames
- react-dnd
- uuid

### Layout

[![Figma](https://img.shields.io/badge/-Figma-black?style=flat-square&logo=figma)](https://www.figma.com/file/vbRrCeW3YFaiJfEzw9u4Na?)

### Demo

[![Netlify](https://img.shields.io/badge/-Netlify-black?style=flat-square&logo=netlify)](https://delicate-blancmange-5a0a6d.netlify.app/)

### Installation

```bash
# clone the repository on your computer
git clone git@github.com:bmazurme/dealer.git

# install dependencies
$ npm install

# build
$ npm run build

# launch
$ npm start

# run dev
$ npm run dev

# run test
$ npm run test
```

### .env

create .env in root

```
DB_HOST= #

DB_USER= #

DB_PASSWORD= #

DB_NAME= #
```

docker

`docker-compose build`

`docker-compose up`

`docker-compose stop`

### Deploy

tag image to match Heroku naming conventions

`heroku container:login`

`heroku create my-app`

`heroku container:push web`

`heroku container:release web`

`heroku open`

`docker buildx build --platform linux/amd64 -t teadealer .`

`docker tag teadealer registry.heroku.com/teadealer/web`

`docker push registry.heroku.com/teadealer/web`

`heroku container:release web -a teadealer`

```
# on an M1 mac…

`--platform linux/amd64`
```

Identify what is running in port 5432: `sudo lsof -i :5432`

Kill all the processes that are running under this port: `sudo kill -9 <pid>`

Run the command again to verify no process is running now: `sudo lsof -i :5432`
