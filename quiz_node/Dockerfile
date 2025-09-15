# Use official Node.js LTS Alpine image for smaller size and security
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
# Use npm ci for faster, reliable, reproducible builds
# Clean npm cache to reduce image size
RUN npm ci  && \
    npm cache clean --force

# Copy application code
COPY . .

# Set proper permissions for the application
RUN chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port 3000
EXPOSE 3000

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node healthcheck.js || exit 1

# Set environment variables
ENV PORT=3000

# Start the application
CMD ["npm", "start"]
