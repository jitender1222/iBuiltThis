import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRightIcon,
  EyeIcon,
  RocketIcon,
  SparkleIcon,
  UserIcon,
} from "lucide-react";
import StatsCard from "./stats-card";

const statsData = [
  {
    icon: RocketIcon,
    label: "2.5K+",
    description: "Projects Shared",
  },
  {
    icon: UserIcon,
    label: "10.5K+",
    description: "Active Creators",
    hasBorder: true,
  },
  {
    icon: EyeIcon,
    label: "50.5K+",
    description: "Monthly Visitors",
  },
];

const HeroSection = () => {
  return (
    <section className="">
      <div className="wrapper flex flex-col items-center justify-center text-center lg:py-24 py-12">
        <Badge
          variant="outline"
          className="py-2 px-4 mb-8 text-sm backdrop-blur-sm"
        >
          <span className="h-2 w-2 relative mr-2">
            <span className="bg-primary opacity-75 h-full w-full rounded-full animate-ping absolute inline-flex"></span>
            <span className="bg-primary h-2 w-2 absolute rounded-full inline-flex"></span>
          </span>
          <span className="text-muted-foreground">
            Join Thousands of creators sharing their work
          </span>
        </Badge>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
          Share What You&apos;ve Built,Discover What&apos;s Launching{" "}
        </h1>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl text-muted-foreground tracking-wide">
          A community platform for creators to showcase their apps.AI tools,Saas
          products,and creative projects.Authentic launches,real
          builders,genuine feedback
        </p>
        <div className="flex flex-col sm:flex-row mb-16 gap-4 ">
          <Button
            asChild
            size="lg"
            variant="default"
            className="text-base px-8 shadow-lg"
          >
            <Link href="/submit">
              <SparkleIcon className="w-5" /> Share your projects
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base px-8 shadow-lg"
          >
            <Link href="/projects">
              Explore Projects <ArrowRightIcon className="w-5" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 p-4 gap-8 sm:gap-12 max-w-2xl">
          {statsData.map((items) => (
            <StatsCard key={items.label} {...items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
