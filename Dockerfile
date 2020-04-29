FROM node:14.0-buster

WORKDIR /src/aflafrettir-web
COPY ./ /src/aflafrettir-web
RUN yarn install

EXPOSE 3000
ENTRYPOINT yarn start
