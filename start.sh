#!/bin/bash
cd /usr/share/nginx/html/ &
#获取qqcookie
curl -A 'Mozilla/5.0 (Windows NT 6.1)' https://api.qq.jsososo.com/user/cookie | jq '.data.userCookie' >> apiQ/data/cookie.json &  
#替换cookie中的qq号
sed -i 's/'1234567'/'$(cat apiQ/data/cookie.json | jq .uin)'/g' apiQ/bin/config.js &
cd /usr/share/nginx/html/apiQ && nohup npm start & 
cd /usr/share/nginx/html/api && nohup node app.js & 
cd /usr/share/nginx/html/apiMix && nohup npm start & 
nginx -g 'daemon off;'
