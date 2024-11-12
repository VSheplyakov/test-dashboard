  # Stage 1: Build the application
  FROM node:14-alpine AS build
  
  # Set the working directory
  WORKDIR /app
  
  # Copy the package.json and install dependencies
  COPY package.json package-lock.json ./
  RUN npm install
  
  # Copy the rest of the application code
  COPY . .
  
  # Build the React application
  RUN npm run build
  
  # Stage 2: Serve the application
  FROM nginx:stable-alpine
  
  # Copy the built React files from the previous stage
  COPY --from=build /app/build /usr/share/nginx/html
  
  # Expose port 80 to the outside
  EXPOSE 80
  
  # Start the Nginx server
  CMD ["nginx", "-g", "daemon off;"]