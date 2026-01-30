import { useState } from "react";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: `₹${product.price.toLocaleString()}`,
    });
    setTimeout(() => setIsAdding(false), 300);
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
            {product.badge}
          </div>
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-12 px-2 py-1 bg-coral text-primary-foreground text-xs font-bold rounded-full">
            -{discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Quick Add Button */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full gradient-primary text-primary-foreground font-semibold gap-2"
            disabled={isAdding}
          >
            <ShoppingBag className={`w-4 h-4 ${isAdding ? 'animate-scale-in' : ''}`} />
            Add to Bag
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Brand */}
        <p className="text-xs font-semibold text-primary uppercase tracking-wide">
          {product.brand}
        </p>

        {/* Name */}
        <h3 className="font-medium text-foreground line-clamp-2 text-sm leading-snug group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5 bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs font-semibold">
            <Star className="w-3 h-3 fill-current" />
            {product.rating}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 pt-1">
          <span className="font-bold text-foreground">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
