import { Star } from "lucide-react";

import SectionHeader from "../common/section-header";

const FeatureSection = () => {
  return (
    <div className="py-20 bg-muted/20">
      <SectionHeader
        icon={Star}
        title="Featured Today"
        description="Top Picks from our community"
      />
    </div>
  );
};
export default FeatureSection;
