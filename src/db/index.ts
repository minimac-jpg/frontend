import { config } from "dotenv";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const here = dirname(fileURLToPath(import.meta.url));
// Load the frontend's .env (local dev database), not the repo root .env.
config({ path: resolve(here, "../../.env") });

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

import * as schema from "../../db/schema";

const client = postgres(connectionString);
export const db = drizzle(client, { schema });
