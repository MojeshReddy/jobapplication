# Use uppercase FROM and proper casing
FROM node:20

# Set working directory inside container
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose port and set start command
EXPOSE 5000
CMD ["node", "server.js"]
