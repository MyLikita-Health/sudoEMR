# base image
FROM node:10.16.3-slim as builder

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install

# Bundle app source
COPY . .

# Specify port
# EXPOSE 3000

# start app
# CMD ["npm", "start"]

# Build app
RUN npm run build
# COPY /build .


# FROM nginx:1.12-alpine
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]