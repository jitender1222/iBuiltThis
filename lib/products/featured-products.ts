import { db } from "@/db";
import { Products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export const FeatureProduct = async () => {
  const productList = await db
    .select()
    .from(Products)
    .where(eq(Products.status, "approved"))
    .orderBy(desc(Products.voteCount));
  return productList;
};

export const getRecentDateProduct = async () => {
  const productData = await FeatureProduct();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  console.log("oneweekago", oneWeekAgo);
  console.log(
    "prodcut",
    productData.filter((product) =>
      console.log("productData", product.createdAt)
    )
  );

  return productData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );
};
