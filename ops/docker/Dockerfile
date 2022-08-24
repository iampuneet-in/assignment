# Choose the Image which has Node installed already
FROM node:14.14.0

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'yarn-lock.json' (if available)
COPY package*.json ./
COPY yarn.lock .

# install project dependencies
RUN yarn install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN yarn build

EXPOSE 8080
CMD [ "yarn", "serve" ]
