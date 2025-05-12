# Fetching the minified node image on alpine linux
FROM node:slim

# Setting up the work directory
WORKDIR /express-docker

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

# Starting our application
CMD [ "node", "tripi.js" ]
