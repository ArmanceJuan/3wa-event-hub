FROM node:20.12.2-alpine

WORKDIR /app

COPY package.json tsconfig.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start"]