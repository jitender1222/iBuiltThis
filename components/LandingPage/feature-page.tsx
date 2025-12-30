import { Star } from "lucide-react";
import ProductSkeleton from "../product/ProductSkeleton";

import SectionHeader from "../common/section-header";
import { Suspense } from "react";

const FeatureSection = () => {
  return (
    <div className="py-20 bg-muted/20">
      <Suspense fallback={<ProductSkeleton />}>
        <SectionHeader
          icon={Star}
          title="Featured Today"
          description="Top Picks from our community"
        />
      </Suspense>
    </div>
  );
};
export default FeatureSection;
