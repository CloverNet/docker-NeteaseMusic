FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./html /usr/share/nginx/html
RUN  sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories

RUN apk add --no-cache git nodejs npm bash jq && \
    git clone https://github.com/jsososo/QQMusicApi.git /usr/share/nginx/html/apiQ/ && \
    cd ./apiQ && \
    npm i
RUN git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git /usr/share/nginx/html/api/ && \
    cd ./api && \
    npm i
RUN git clone https://github.com/jsososo/MixMusicApi.git /usr/share/nginx/html/apiMix/ && \
    cd ./apiMix && \
    npm i
ADD ./start.sh /start.sh
ADD ./default.conf /etc/nginx/conf.d/default.conf
ADD ./nginx.conf /etc/nginx/nginx.conf

RUN chmod 777 /start.sh
EXPOSE 3300 3000 3600 80
ENTRYPOINT ["/bin/bash","/start.sh"]
