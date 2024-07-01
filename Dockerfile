# Étape 1: Construire l'application
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2: Servir l'application à partir de Nginx

EXPOSE 3000
CMD ["npm", "start"]