# Choose the Image which has Node installed already
FROM node:16

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'yarn-lock.json' (if available)nopt@6.0.0: 
COPY package*.json ./
COPY yarn.lock .

# install project dependencies
RUN yarn install --ignore-engines

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN yarn build

EXPOSE 8080
CMD [ "yarn", "serve" ]
