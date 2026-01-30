import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import LoginModal from "./LoginModal";

const categories = [
  { name: "Makeup", href: "#makeup" },
  { name: "Skin", href: "#skin" },
  { name: "Hair", href: "#hair" },
  { name: "Fragrance", href: "#fragrance" },
  { name: "Bath & Body", href: "#bath" },
  { name: "Nails", href: "#nails" },
  { name: "Brands", href: "#brands" },
  { name: "Luxe", href: "#luxe" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        {/* Top Banner */}
        <div className="gradient-primary text-primary-foreground text-center py-2 px-4 text-sm font-medium">
          ✨ Free Shipping on orders above 1kidney | Use code: kangaali for 0.1% off ✨
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="font-display text-2xl md:text-3xl font-bold text-primary tracking-tight">
                Ny-Kangaal
              </h1>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className={`relative w-full transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="w-full pl-10 pr-4 py-2 bg-secondary border-0 focus:ring-2 focus:ring-primary/30 rounded-full"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="hidden md:inline">Login</span>
              </button>

              <button className="hidden sm:flex items-center gap-2 p-2 hover:text-primary transition-colors">
                <Heart className="w-5 h-5" />
              </button>

              <Link
                to="/cart"
                className="relative flex items-center gap-2 p-2 hover:text-primary transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Category Links - Desktop */}
          <nav className="hidden lg:flex items-center justify-center gap-1 pb-3">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-full transition-all duration-200"
              >
                {category.name}
              </a>
            ))}
          </nav>

          {/* Search Bar - Mobile */}
          <div className="md:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 bg-secondary border-0 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="px-4 py-3 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium hover:bg-secondary rounded-lg transition-colors sm:hidden"
                >
                  <User className="w-5 h-5" />
                  Login / Register
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;
