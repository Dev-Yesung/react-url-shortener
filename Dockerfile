FROM nginx
RUN mkdir /app
WORKDIR /app
RUN mkdir ./build
ADD ./build ./build
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

# 네트워크 : url-shortener-network

# 리액트 : url-shortener-react(3000:3000)
# docker run -d -p 3000:3000 --name url-shortener-react --network url-shortener-network yosongsong/url-shortener-react

# 스프링부트 : url-shortener-springboot(8081:8081)
# docker run -d -p 8081:8081 --name url-shortener-springboot --network url-shortener-network yosongsong/url-shortener-springboot

# mysql : url-shortener-mysql  (포트: 3306:3306, root: 12345)
# docker run -d -p 3306:3306 --name url-shortener-mysql -e MYSQL_ROOT_PASSWORD=12345 --network url-shortener-network mysql:latest

# redis : url-shortener-redis (포트: 6379:6379)
# docker run -d -p 6379:6379 --name url-shortener-redis --network url-shortener-network redis:latest