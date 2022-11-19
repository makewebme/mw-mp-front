FROM node:16.18.1-slim
WORKDIR /app
COPY . .
COPY ./environment/.env.production ./.env
RUN yarn && yarn build
CMD ["yarn", "start"]
