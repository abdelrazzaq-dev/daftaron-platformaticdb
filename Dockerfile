FROM node:18-alpine AS production

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

CMD ["npm", "start"]
