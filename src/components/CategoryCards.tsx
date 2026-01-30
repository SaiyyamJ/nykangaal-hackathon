import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

const CategoryCards = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by your mood 
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of beauty essentials to make you broke...
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-card hover:shadow-hover transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-2">
                {category.count.toLocaleString()}+ Products
                </p>
                <div className="flex items-center justify-center gap-1 text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
