import { getDb, eq } from "./drizzle";

export async function getUserById(id: string) {
  const db = getDb();
  const result = await db
    .select()
    .from(tables.users)
    .where(eq(tables.users.id, id));
  return result[0];
}

export async function getUserByEmail(email: string) {
  const db = getDb();
  const result = await db
    .select()
    .from(tables.users)
    .where(eq(tables.users.email, email));
  return result[0];
}

type NewUser = typeof tables.users.$inferInsert;
export async function createUser(user: NewUser) {
  const db = getDb();
  return await db.insert(tables.users).values(user);
}
