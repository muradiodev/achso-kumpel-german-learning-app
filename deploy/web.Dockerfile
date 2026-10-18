FROM nginx:1.27-alpine
COPY web.conf /etc/nginx/conf.d/default.conf
COPY site /usr/share/nginx/html
