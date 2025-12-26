import {
  index,
  integer,
  json,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const Products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 120 }).notNull(),
    slug: varchar("slug", { length: 140 }).notNull(),
    tagline: varchar("tagline", { length: 200 }),
    description: text("description"),

    websiteUrl: text("website_url"),
    tags: json("tags").$type<string[]>(),

    voteCount: integer("votecount").notNull().default(0),

    createdAt: timestamp("created_at", {
      withTimezone: true,
    }).defaultNow(),
    approvedAt: timestamp("approved_at", {
      withTimezone: true,
    }),
    status: varchar("status", { length: 20 }).default("pending"),
    submittedBy: varchar("submitted_by", { length: 120 }).default("anonymous"),
    userId: varchar("user_id", { length: 255 }),

    OrganizationId: varchar("organization_id", {
      length: 255,
    }),
  },
  (table) => ({
    slugIndx: uniqueIndex("product_slug_idx").on(table.slug),
    statusIdx: index("product_status_idx").on(table.status),
    organizationIdx: index("product_organization_idx").on(table.OrganizationId),
  })
);
