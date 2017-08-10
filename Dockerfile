FROM node:7.10
MAINTAINER Nick Cutillo

WORKDIR /app
RUN pwd

# setup
RUN apt-get update -y
RUN apt-get install --no-install-recommends -y apt-utils
RUN apt-get install --no-install-recommends -y curl git build-essential ca-certificates python


# install yarn and other globals
# RUN npm install -g yarn

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN npm run build:production

EXPOSE 4000
CMD node /app/dist/server/index.js
