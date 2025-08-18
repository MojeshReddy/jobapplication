# backend/Dockerfile (multi-stage, production)
# BUILD stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
# install all deps (including dev deps if you have build step)
RUN npm ci
COPY . .
# If TypeScript: build
RUN npm run build

# RUNTIME stage
FROM node:18-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
# copy only artifacts & production package.json
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist   # or /app/build for JS
RUN npm ci --only=production
EXPOSE 4000
USER node
CMD ["node", "dist/index.js"]
