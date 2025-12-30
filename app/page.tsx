import FeatureSection from "@/components/LandingPage/feature-page";
import HeroSection from "@/components/LandingPage/landing-page";
import LaunchPage from "@/components/LandingPage/launch-page";
import ProductSkeleton from "@/components/product/ProductSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Suspense fallback={<ProductSkeleton />}>
        <LaunchPage />
      </Suspense>
    </>
  );
}
