# Maple Web UI

React/TypeScript frontend for the Maple CI/CD platform.

Built with Bun and rsbuild, served by TanStack Start (SSR).

## Development

Requires [Bun](https://bun.sh) (Node 24 for tooling — see `.nvmrc`).

```bash
bun install
bun run dev
```

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Dev server |
| `bun run build` | Type-check + production build |
| `bun run preview` | Preview production build |
| `bun run test` | Run tests (Vitest) |
| `bun run lint` | Lint (Biome) |
| `bun run format` | Format (Biome) |
| `bun run typecheck` | TypeScript check |

## Build

```bash
bun run build
bun run preview
```

## Deployment

Docker image is built and pushed to `ghcr.io/minimac-jpg/frontend` by
`.github/workflows/build-deploy.yml`, then deployed to k3s via `k8s/`.

## Tech Stack

- Bun + rsbuild 2
- React 19 / TypeScript 5.8
- TanStack Start (SSR), Router, Query, Table
- Tailwind CSS 4 / Shadcn/ui
- Drizzle ORM (migrations via `drizzle-kit push`)
- Biome (lint/format), Vitest (testing)
