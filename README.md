### Demo
[heroku](https://teadealer.herokuapp.com/)

### Installation

Clone the repository on your computer:

`git clone git@github.com: ...`

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
