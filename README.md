# docker-NeteaseMusic
感谢 [jsososo/NeteaseMusic](https://github.com/jsososo/NeteaseMusic)!

## 配置QQ音乐绿钻Cookie (QQ登录关键步骤)

1.通过Api接口设置

[传送门](https://github.com/jsososo/QQMusicApi#%E8%AE%BE%E7%BD%AE%E7%94%A8%E6%88%B7Cookie)


2.配置cookie文件 `apiQ/data/cookie.json`，因为没有绿钻，就偷懒从原作者的音乐站点获取了。

```
    curl -A 'Mozilla/5.0 (Windows NT 6.1)' https://api.qq.jsososo.com/user/cookie | jq '.data.userCookie' >> apiQ/data/cookie.json
```

3.修改配置的QQ号 `apiQ/bin/config.js`，QQ号必须与cookie一致。

```
    # 从cookie同步QQ号
    sed -i 's/'1234567'/'$(cat data/cookie.json | jq .uin)'/g' apiQ/bin/config.js

```

## docker 

```
    docker run -it -p 80:80 --name=music clovernet/neteasemusic:latest
```
  
## nginx 反向代理

```
    listen       80;
    server_name  localhost; # 可换为你的域名

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    location /api/ {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://localhost:3000/;
    }
    
    location /apiMix/ {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://localhost:3600/;
    }
    
    location /apiQ/ {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://localhost:3300/;
    }
```
