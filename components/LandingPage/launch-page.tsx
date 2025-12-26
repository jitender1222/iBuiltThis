import { getRecentDateProduct } from "@/lib/products/featured-products";
import { Calendar, Rocket } from "lucide-react";
import ProductCard from "../ProductCard/ProductCard";

const LaunchPage = async () => {
  const productLaunch = await getRecentDateProduct();

  return (
    <div className="mt-20 wrapper">
      <div className="flex text-3xl gap-2 items-center font-bold">
        <Rocket className="text-red-600" /> Recently Launched
      </div>
      <p className="text-lg mt-4 pb-8">
        Discover the latest products from our community
      </p>
      <div className="p-4 grid-wrapper">
        {productLaunch.length > 0 ? (
          <>
            {productLaunch.map((prodcut) => (
              <ProductCard key={prodcut.id} product={prodcut} />
            ))}
          </>
        ) : (
          <>
            <div className="border p-10 text-center flex flex-col justify-center items-center gap-4 mt-10 bg-muted/10">
              <div>
                <Calendar className="size-10 text-gray-500" />
              </div>
              <div className="text-2xl">
                <p>
                  No products launched in the last week. Check back soon for new
                  launches.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LaunchPage;
