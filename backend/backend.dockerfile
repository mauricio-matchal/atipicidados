FROM node:20
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
EXPOSE 3002
CMD ["node", "dist/server.js"]
