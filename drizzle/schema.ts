import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: text("id").notNull().unique(),
  name: text("name"),
  email: text("email").notNull().unique(),
  role: text("role")
    .$type<"admin" | "user" | "hotel-admin" | "hotel-user">()
    .default("user"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
