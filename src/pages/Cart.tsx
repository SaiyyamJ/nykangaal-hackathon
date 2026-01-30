import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  const deliveryCharge = totalPrice >= 499 ? 0 : 49;
  const finalTotal = totalPrice + deliveryCharge;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4 py-16 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 bg-pink-light rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-primary" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              ATLEAST DO WINDOW SHOPPING
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              LOOKS LIKE U CANNOT AFFORD ANYTHING GO AND ADD SOMETHING
            </p>
            <Link to="/">
              <Button className="gradient-primary text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-soft hover:shadow-hover transition-all gap-2">
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="p-2 hover:bg-secondary rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Shopping Bag ({totalItems} {totalItems === 1 ? "item" : "items"})
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-card rounded-2xl p-4 md:p-6 shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-secondary">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                            {item.brand}
                          </p>
                          <h3 className="font-medium text-foreground text-sm md:text-base line-clamp-2">
                            {item.name}
                          </h3>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors flex-shrink-0"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="font-bold text-foreground text-lg">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </div>
                          {item.originalPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              ₹{(item.originalPrice * item.quantity).toLocaleString()}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                {/* Coupon Input */}
                <div className="flex gap-2 mb-6">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Coupon code"
                      className="pl-9 rounded-full"
                    />
                  </div>
                  <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Apply
                  </Button>
                </div>

                {/* Summary Details */}
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                    <span className="font-medium">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-medium">
                      {deliveryCharge === 0 ? (
                        <span className="text-primary">FREE</span>
                      ) : (
                        `₹${deliveryCharge}`
                      )}
                    </span>
                  </div>
                  {deliveryCharge > 0 && (
                    <div className="flex items-center gap-2 text-xs text-primary bg-pink-light p-3 rounded-xl">
                      <Truck className="w-4 h-4" />
                      Add ₹{499 - totalPrice} more for free delivery!
                    </div>
                  )}
                  <div className="border-t border-border pt-4 flex justify-between">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-bold text-lg text-foreground">
                      ₹{finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button className="w-full mt-6 gradient-primary text-primary-foreground py-6 text-lg font-semibold rounded-full shadow-soft hover:shadow-hover transition-all">
                  Proceed to Checkout
                </Button>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="text-lg">🔒</span> NON Secure Checkout
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-lg">✅</span> 0% Genuine
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-lg">↩️</span> NEVER Returns
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
