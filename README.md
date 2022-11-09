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

### Layout
[figma](https://www.figma.com/file/vbRrCeW3YFaiJfEzw9u4Na?)

### Demo
[heroku](https://teadealer.herokuapp.com/)

### Installation

Clone the repository on your computer:

`git@github.com:bmazurme/dealer.git`

Install dependencies:

`npm install`

Launch:

`npm start`

run dev:

`npm run dev`

run test:

`npm run test`

### Deploy

tag image to match Heroku naming conventions

`docker buildx build --platform linux/amd64 -t teadealer .`

`docker tag myapp registry.heroku.com/myapp/web`

push

`docker push registry.heroku.com/myapp/web`

`heroku container:release web -a teadealer`
