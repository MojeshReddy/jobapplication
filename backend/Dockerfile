# Use full Node 20 image (not Alpine)
FROM node:20

# Set working directory inside container
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
# Add --legacy-peer-deps to avoid peer dependency errors
RUN npm install --legacy-peer-deps

# Copy the rest of the backend files
COPY . .

# Expose port and set start command
EXPOSE 5000

CMD ["node", "server.js"]
