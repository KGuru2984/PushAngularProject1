# Stage 1: Build Angular application
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Run the Angular application with Node.js server
FROM node:18-alpine

WORKDIR /app

# RUN npm install express
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist/docker-angular-prj-demo .

COPY server.js .

EXPOSE 4200

CMD ["node", "server.js"]
