# Use the official lightweight Node.js image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend JavaScript code into the container
COPY backend.js ./

# Expose port 5000 for the backend service
EXPOSE 5000

# Command to run the backend server
CMD ["npm", "start"]
