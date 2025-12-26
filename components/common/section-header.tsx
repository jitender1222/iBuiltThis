import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard";
import { FeatureProduct } from "@/lib/products/featured-products";

const SectionHeader = async ({
  title,
  icon: Icon,
  description,
}: {
  title: string;
  icon: LucideIcon;
  description: string;
}) => {
  const featuredProducts = await FeatureProduct();
  return (
    <>
      <div className="wrapper">
        <div className="flex justify-between items-center pb-10">
          <div>
            <div className="flex gap-2">
              <Icon className=" mt-2 size-6 text-primary " />
              <h3 className="text-4xl font-bold">{title}</h3>
            </div>
            <div className="text-xl">
              <p>{description}</p>
            </div>
          </div>
          <div>
            <Button
              variant="outline"
              asChild
              className="hidden sm:flex cursor-pointer"
            >
              <Link href="/explore">
                View All
                <span>
                  <ArrowUpRight />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid-wrapper">
          {featuredProducts.map((items) => (
            <ProductCard key={items.id} product={items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
