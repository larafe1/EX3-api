FROM node

WORKDIR /usr/app

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
