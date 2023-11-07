FROM node:16.18.1-slim
WORKDIR /app
COPY . .
COPY ./environment/.env.production ./.env
RUN yarn && yarn build && apt update && apt -y install nginx
COPY ./environment/default.nginx.config /etc/nginx/sites-available/default
CMD ["/bin/bash", "-c", "nginx;sleep infinity"]
