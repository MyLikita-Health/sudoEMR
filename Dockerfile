# base image
FROM node:14.20.0

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package*.json ./

# install all the packages
RUN npm install --legacy-peer-deps


# Bundle app source
COPY . .

# COPY /build .
EXPOSE 3000

# CMD ["nodemon", "index.js"]
CMD ["npm", "start"]