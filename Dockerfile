FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
ARG GIT_SHA=unknown
ENV GIT_SHA=${GIT_SHA}
RUN bun run build

FROM oven/bun:1-slim AS runtime
WORKDIR /app
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.ts ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
# Drizzle schema + config so a one-shot migration Job can run
# `bunx drizzle-kit push` against the shared database (auth tables in `public`).
COPY --from=build /app/drizzle.config.ts ./
COPY --from=build /app/db ./db
COPY --from=build /app/tsconfig.json ./

ENV NODE_ENV=production
EXPOSE 3000

# Static assets from dist/client + SSR via dist/server/index.js (see server.ts)
CMD ["bun", "server.ts"]
