// server/utils/drizzle.ts
export { sql, eq, and, or } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "~/drizzle/schema";

export const tables = schema;

export function getDb() {
  const runtimeConfig = useRuntimeConfig();
  const sqlInstance = neon(runtimeConfig.databaseUrl);
  return drizzle(sqlInstance, { schema });
}

export type User = typeof schema.users.$inferSelect;
