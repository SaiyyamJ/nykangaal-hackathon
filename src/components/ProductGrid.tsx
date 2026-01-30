import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductGrid = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              NEVER BOUGHT PRODUCTS
            </h2>
            <p className="text-muted-foreground">
              The most hated products by our beauty community
            </p>
          </div>
          <Button variant="outline" className="self-start md:self-auto rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
