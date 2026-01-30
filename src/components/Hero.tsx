import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              New Season Collection
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Unlock Your
              <span className="block text-primary"> Existential Dread</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Discover overpriced goop cursted just for you. From skincare essentials that do nothing ,luxurious fragrances that smell like desperation, find everything to elevate your debt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="gradient-primary text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-soft hover:shadow-hover transition-all duration-300 group">
  <span className="group-hover:hidden transition-all">
    Shop Now
  </span>

  <span className="hidden group-hover:inline transition-all">
    Don’t
  </span>

  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
</Button>

              <Button
  variant="outline"
  className="group px-8 py-6 text-lg font-semibold rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
>
  Explore <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity italic">(regrets)</span>
</Button>

            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">Too Much</div>
                <div className="text-sm text-muted-foreground">Debt</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">Too Many</div>
                <div className="text-sm text-muted-foreground">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">0+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-hover">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=800&fit=crop"
                  alt="Beauty products collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 bg-background rounded-2xl p-4 shadow-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center">
                    <span className="text-2xl">💄</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Top Rated</div>
                    <div className="text-xs text-muted-foreground">Lipsticks</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-background rounded-2xl p-4 shadow-card animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Flash Sale</div>
                    <div className="text-xs text-primary font-bold">Up to 50% Off</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 33.3C384 33.3 480 41.7 576 50C672 58.3 768 66.7 864 62.5C960 58.3 1056 41.7 1152 37.5C1248 33.3 1344 41.7 1392 45.8L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
