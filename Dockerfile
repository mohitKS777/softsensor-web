FROM tensorflow/tensorflow:2.5.0 AS tensorflow-source

# ENV LANG="C.UTF-8"


# # Setup Python3.7
RUN apt purge -y python3.6*
RUN apt update -y && apt install -y git python3.7 python3-pip python3-distutils python3-apt build-essential nginx ffmpeg libsm6 libxext6
RUN rm -rf /usr/bin/python3 && ln -s /usr/bin/python3.7 /usr/bin/python3

# # Setup NodeJS14
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt install nodejs -y
RUN npm_config_unsafe_perm=true npm install -global yarn

# # Setup Python Server
# WORKDIR /usr/src/python
# COPY ./server .
# RUN python3 -m pip install --upgrade pip setuptools wheel
# RUN python3 -m pip install --upgrade tensorflow
# RUN python3 -m pip install --upgrade -r requirements.txt

# # Setup Node Server
# # WORKDIR /usr/src/node
# # COPY . .
# # RUN rm -rf server webapp
# # RUN yarn global add pm2
# # RUN yarn install

# # Setup React Server
WORKDIR /usr/src/react
COPY ./webapp/package.json ./
RUN yarn install
COPY ./webapp ./
RUN yarn run build

WORKDIR /usr/src

COPY ./scripts/webapp.conf /etc/nginx/conf.d/webapp.conf
COPY ./scripts/run.sh /usr/src/run.sh

EXPOSE 8080
EXPOSE 5000
EXPOSE 8000

CMD [ "sh", "/usr/src/run.sh" ]

