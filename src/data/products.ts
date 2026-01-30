export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Warns men to stay away.",
    brand: "Red Flag Matte",
    price: "1/2 kidney",
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    category: "makeup",
    rating: 4.5,
    reviews: 2341,
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Does literally nothing, but the bottle is matte.",
    brand: "Placebo Cream",
    price: "Your Firstborn",
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    category: "skin",
    rating: 4.8,
    reviews: 5621,
    badge: "Top Rated",
  },
  {
    id: "3",
    name: "makes ur hair go bald",
    brand: "bald oil",
    price: 8499999,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop",
    category: "hair",
    rating: 4.3,
    reviews: 1892,
  },
  {
    id: "4",
    name: "Smells like grandmother's attic and capitalism",
    brand: "Channel No. 5 (Minutes of rent)",
    price: "your house",
    originalPrice: 3299,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    category: "fragrance",
    rating: 4.7,
    reviews: 3456,
    badge: "New",
  },

];
export const categories = [
  {
    id: "makeup",
    name: "Makeup",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
    count: "Guaranteed to crack",
  },
  {
    id: "skin",
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    count: "Smudges instantly",
  },
  {
    id: "hair",
    name: "Haircare",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=300&fit=crop",
    count: "Your Dignity",
  },
  {
    id: "fragrance",
    name: "Worst Fragrance",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop",
    count: "Smells like panic",
  },
  {
    id: "bath",
    name: "Bath & Body",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
    count: -1,
  },
  {
    id: "nails",
    name: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
    count: 0,
  },
];
