# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
WORKDIR /app

# Dependencias de producción (usadas en runtime)
FROM base AS prod-deps
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Dependencias completas + build
FROM base AS build
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Imagen de runtime
FROM base AS runtime
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
