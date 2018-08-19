FROM nginx

EXPOSE 80

RUN rm /usr/share/nginx/html/*
COPY dist/* /usr/share/nginx/html/
