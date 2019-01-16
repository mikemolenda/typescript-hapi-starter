FROM node:8.1.2-alpine

LABEL mantainer="BlackBox Vision <hello@blackbox-vision.tech>"

RUN rm -rf PROJECT_DIR/node_modules

ADD ./src PROJECT_DIR

ADD ./tsconfig.json PROJECT_DIR
ADD ./package.json PROJECT_DIR
ADD ./package-lock.json PROJECT_DIR

WORKDIR PROJECT_DIR

EXPOSE PORT

RUN npm prune
RUN npm install