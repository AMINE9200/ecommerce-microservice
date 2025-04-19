# Build stage
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm install -g vue-tsc vite
RUN npm run build

# Production stage
FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
