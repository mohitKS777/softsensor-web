#! /bin/bash
echo "starting nginx server"
nginx
echo "starting node js server"
# pm2 start /usr/src/node/app.js
echo "starting flask server"
# cd /usr/src/python && flask run --host=0.0.0.0
