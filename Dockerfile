# This is being pulled from this article with tweaks from myself.
# https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html
FROM node:8.11

# install simple http server for serving static content
RUN npm install -g @vue/cli

# make the 'app' folder the current working directory
WORKDIR /src

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

# Troubleshooting
ENV http_proxy localhost:8080
ENV https_proxy localhost:8080

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
