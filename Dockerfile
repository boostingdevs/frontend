FROM node:latest as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine 
COPY --from=build /app/dist/frontend/browser usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]