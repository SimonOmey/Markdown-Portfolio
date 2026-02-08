# Stage 1: Build the Quartz site
FROM node:22-slim AS builder
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code
COPY . .

# Build the site (outputs to /usr/src/app/public)
RUN npx quartz build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the build output from the builder stage
COPY --from=builder /usr/src/app/public /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]