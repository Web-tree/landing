FROM nginx

EXPOSE 80

RUN rm /usr/share/nginx/html/*
COPY dist /usr/share/nginx/html

ENTRYPOINT /bin/bash -c "nginx -g 'daemon off;'"
CMD /bin/bash -c "nginx -g 'daemon off;'"
