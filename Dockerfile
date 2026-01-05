# --- Build stage ---
FROM node:18-alpine AS builder

WORKDIR /app

# Install all dependencies for building
COPY package*.json ./
RUN npm ci

# Copy source and build the Next.js app
COPY . .
RUN npm run build


# --- Production stage ---
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy the build output and public assets from the builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "start"]