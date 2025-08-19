FROM node:20

WORKDIR /usr/src/app

# Copy root package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy backend files
COPY backend/ ./

EXPOSE 5000

CMD ["node", "server.js"]
