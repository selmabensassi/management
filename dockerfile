FROM node:21.6.2-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html