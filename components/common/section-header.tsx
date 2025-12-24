import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard";

const featuredProducts = [
  {
    id: 1,
    title: "Parity Kit",
    icon: "star",
    description:
      "Maximize your global revenue with intelligent price localization. Automatically adjust pricing based on purchasing power parity to increase conversions worldwide",
    url: "www.google.com",
    tags: ["Saas", "Pricing", " Global"],
    votes: 1,
    isFeatured: true,
  },
  {
    id: 2,
    title: "User Info",
    icon: "star",
    description:
      "Maximize your global revenue with intelligent price localization. Automatically adjust pricing based on purchasing power parity to increase conversions worldwide",
    url: "www.google.com",
    votes: 2,
    tags: ["Saas", "Pricing", "Global"],
    isFeatured: true,
  },
  {
    id: 3,
    title: "Gistify",
    icon: "star",
    description:
      "Maximize your global revenue with intelligent price localization. Automatically adjust pricing based on purchasing power parity to increase conversions worldwide",
    url: "www.google.com",
    votes: 3,
    tags: ["Saas", "Pricing", "Global"],
    isFeatured: true,
  },
];

const SectionHeader = ({
  title,
  icon: Icon,
  description,
}: {
  title: string;
  icon: LucideIcon;
  description: string;
}) => {
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
            <ProductCard key={items.title} product={items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
