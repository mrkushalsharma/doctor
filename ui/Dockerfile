### STAGE 1: Build ###
FROM node:18.19.0 AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --force
COPY . .
RUN npm run prod:aws

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/hospital/browser /usr/share/nginx/html
