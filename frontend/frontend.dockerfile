# Use a imagem oficial do Node.js como base
FROM node:20

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do frontend para o diretório de trabalho
COPY . .

# Exponha a porta em que o Next.js ou React vai rodar
EXPOSE 3000

# Execute o comando para rodar o aplicativo
CMD ["npm", "run", "dev"]
