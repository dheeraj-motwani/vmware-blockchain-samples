# Copyright 2019 VMware, all rights reserved.
# This software is released under MIT license.
# The full license information can be found in LICENSE in the root directory of this project.


FROM node:8.15.1 as node
LABEL Description="Supply Chain dApp"

WORKDIR /app

COPY package-lock.json /app/
COPY package.json /app/

RUN npm install
RUN npm install -g truffle@4.1.14

COPY ./ /app/

ARG env=prod

EXPOSE 4200

