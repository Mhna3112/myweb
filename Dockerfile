FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all website assets
COPY index.html /var/www/myweb/
COPY main.js /var/www/myweb/
COPY style.css /var/www/myweb/
COPY avatar.jpg /var/www/myweb/
COPY favicon.png /var/www/myweb/
COPY apple-touch-icon.png /var/www/myweb/
COPY og-image.jpg /var/www/myweb/
COPY robots.txt /var/www/myweb/
COPY sitemap.xml /var/www/myweb/
COPY site.webmanifest /var/www/myweb/
COPY 404.html /var/www/myweb/
COPY gplx /var/www/myweb/gplx/
COPY todo /var/www/myweb/todo/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
