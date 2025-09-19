FROM node:20.12.2-alpine

WORKDIR /app

COPY package.json package-lock.json ./
# COPY tsconfig.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 80

CMD ["npm", "run", "dev"]