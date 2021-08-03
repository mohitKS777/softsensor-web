#! /bin/bash
echo "nginx"
nginx -d
echo "app.js"
pm2 start /usr/src/node/app.js
echo "flask"
cd /usr/src/python && flask run
