#! /bin/bash
echo "app.js"
node /usr/src/node/app.js
echo "flask"
cd /usr/src/python && flask run
echo "nginx"
nginx -d