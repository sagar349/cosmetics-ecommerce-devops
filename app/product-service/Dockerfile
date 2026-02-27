# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ../../app/product-service/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY ../../app/product-service/ .

# Expose port
EXPOSE 5000

# Start the service
CMD ["npm", "start"]