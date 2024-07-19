# Stage 1: Build the React app
FROM scratch AS build

# Add Ubuntu root filesystem
ADD rootfs.tar.gz /

# Install Node.js and npm from NodeSource
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app with nginx
FROM scratch

# Add Ubuntu root filesystem
ADD rootfs.tar.gz /

# Install nginx
RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Copy the built app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
