# Use an official lightweight nginx image as the base image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the static HTML, CSS, and JavaScript files into the nginx web server directory
COPY index.html style.css ./

# Expose port 3000 for the frontend service
EXPOSE 3000

# Overwrite the default nginx configuration to listen on port 3000
RUN sed -i 's/listen       80;/listen       3000;/' /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]



