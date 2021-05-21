# Demo
Demonstrates using react-pdf with nginx (in Docker) to partially load pages on demand (HTTP range).

    yarn install
    yarn build
    docker run  -p 8011:80 -v `pwd`/build:/usr/share/nginx/html nginx

