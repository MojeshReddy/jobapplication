FROM node:20

WORKDIR /usr/src/app

# Copy only package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all backend files
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
