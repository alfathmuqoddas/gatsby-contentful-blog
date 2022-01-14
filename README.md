## Gatsby Contentful Blog
Simple gatsby starter with Contentful as source and Bootstrap CSS

## Build and run with docker!

Build and run development image for docker:
- `$ docker build -t gatsby-contentful-blog:dev .`
- `$ docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 8000:8000 -e CHOKIDAR_USEPOLLING=true gatsby-contentful-blog:dev`
- Open `localhost:3001`
- Start developing and the look at app hot-reloading thanks to `-e CHOKIDAR_USERPOLLING=true`

Build and run production build:
- `$ docker build -f Dockerfile.prod -t react-app-simple:prod .`
- `$ docker run -it --rm -p 1337:80 react-app-simple:prod`