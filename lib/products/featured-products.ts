import { db } from "@/db";
import { Products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { connection } from "next/server";

export const FeatureProduct = async () => {
  "use cache";
  const productList = await db
    .select()
    .from(Products)
    .where(eq(Products.status, "approved"))
    .orderBy(desc(Products.voteCount));
  return productList;
};

export const getRecentDateProduct = async () => {
  await connection();
  const productData = await FeatureProduct();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );
};
