# base image
FROM node:14.20.0

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install --legacy-peer-deps

# Bundle app source
COPY . .

# Specify port
# EXPOSE 3000

# start app
# CMD ["npm", "start"]

# Build app
RUN npm run build
# COPY /build .

EXPOSE 3000
CMD [ "npm", "start" ]
# FROM nginx:1.12-alpine
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]