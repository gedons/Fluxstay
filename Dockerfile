# Use an official Node.js image as the base image
FROM node:14 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build your Vue.js app
RUN npm run build

# Build the Tauri application
WORKDIR /app/src-tauri
RUN npm install
RUN npm run tauri build

# Create a new stage for the final image
FROM nginx:alpine

# Copy the built Vue.js app and Tauri build output from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/src-tauri/target/release/bundle.js /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
