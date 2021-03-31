# Dockerfile

# base image
FROM node:14-alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install npm@latest
RUN npm install

# start app
RUN npm run build
EXPOSE 8080
CMD npm run start