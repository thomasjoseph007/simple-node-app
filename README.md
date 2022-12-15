# simple-node-app
the docker file consists of...

*FROM node:10-alpine*

it will fetch the light version of the node js from docker repo

*WORKDIR /usr/src/app*

*COPY package*.json ./

it will create directory like wise in the path, here the docker will save our app code,json files etc...

*RUN npm install*

We are using node.js as our programming language, so the package for node is npm. so it will download npm package, after that npm will fetch and download required dependencies to run our application.

*COPY . .*

From this command it will copy the source code to the work directory 

*EXPOSE 8080*

Our app will listen to the port 8080, we are binding 

*CMD [ "node", "server.js" ]*

define the command to run your app using CMD which defines your runtime. Here we will use node server.js to start your server:
