# Dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Убедитесь, что путь к `index.js` корректен
CMD ["node", "dist/index.js"]
