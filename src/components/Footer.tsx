import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "Makeup", href: "#" },
      { name: "Skincare", href: "#" },
      { name: "Haircare", href: "#" },
      { name: "Fragrance", href: "#" },
      { name: "Bath & Bodyworks", href: "#" },
      { name: "New Arrivals", href: "#" },
    ],
    help: [
      { name: "Never Contact Us", href: "#" },
      { name: "we will not answer", href: "#" },
      { name: "No Shipping Info", href: "#" },
      { name: "No Returns & Exchanges", href: "#" },
      { name: "No Track Order", href: "#" },
    ],
    about: [
      { name: "Our Story", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Affiliate Program", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter */}
      <div className="gradient-primary py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Join the Kangaali Club
            </h3>
            <p className="text-primary-foreground/80 mb-6">
  Because bankcrupty should come with privileges.
</p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 rounded-full"
              />
              <Button className="bg-primary-foreground text-primary font-semibold rounded-full hover:bg-primary-foreground/90 px-8">
                DONT Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h2 className="font-display text-3xl font-bold text-pink-medium mb-4">
              Ny-Kangaal
            </h2>
            <p className="text-primary-foreground/70 text-sm mb-6">
              run out of money on our platform
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-pink-medium transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-pink-medium transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-pink-medium transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                1800-123-4567
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                help@ny-kangaal.parody
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                123 Beauty Lane, Mumbai, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Ny-Kangaal. This is a parody website for demonstration purposes only.</p>
            <p>© 2024 Ny-Kangaal. This is a parody website for demonstration purposes only.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-pink-medium transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-medium transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-medium transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
