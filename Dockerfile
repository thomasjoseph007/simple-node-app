FROM public.ecr.aws/docker/library/node:10-alpine3.11
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node","app.js"]
