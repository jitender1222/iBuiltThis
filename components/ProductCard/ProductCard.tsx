import { ChevronDown, ChevronUp, Star } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { InferSelectModel } from "drizzle-orm";
import { Products } from "@/db/schema";

type Products = InferSelectModel<typeof Products>;

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <div className="">
      <Link href={`/products/${product.id}`}>
        <Card className=" card-hover hover:text-pink-700 flex p-4">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  {product.voteCount > 100 && (
                    <Badge>
                      <Star /> Featured
                    </Badge>
                  )}
                </div>
                <CardDescription>{product.description}</CardDescription>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="h-8 w-8 text-primary hover:bg-primary/20"
                >
                  <ChevronUp className="size-6" />
                </Button>
                <p>{product.voteCount}</p>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="h-8 w-8 text-primary hover:bg-primary/20"
                >
                  <ChevronDown className="size-6" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-2">
              {product.tags?.map((items) => (
                <Badge variant="secondary" key={items}>
                  {items}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
