import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { ShoppingCart, Filter, Leaf, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  doshas: string[];
  benefits: string[];
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ashwagandha Capsules",
    description: "Premium quality adaptogenic herb for stress relief and vitality",
    price: 28.99,
    category: "Supplements",
    doshas: ["Vata", "Kapha"],
    benefits: ["Reduces stress", "Improves energy", "Enhances immunity"],
    image: "🌿"
  },
  {
    id: 2,
    name: "Triphala Powder",
    description: "Traditional blend for digestive health and natural detoxification",
    price: 24.99,
    category: "Supplements",
    doshas: ["Vata", "Pitta", "Kapha"],
    benefits: ["Supports digestion", "Natural detox", "Balances all doshas"],
    image: "🍃"
  },
  {
    id: 3,
    name: "Mahanarayan Oil",
    description: "Therapeutic massage oil for joint and muscle wellness",
    price: 18.99,
    category: "Oils",
    doshas: ["Vata"],
    benefits: ["Soothes muscles", "Promotes mobility", "Warming effect"],
    image: "🫒"
  },
  {
    id: 4,
    name: "Brahmi Tablets",
    description: "Brain tonic for memory, focus and mental clarity",
    price: 26.99,
    category: "Supplements",
    doshas: ["Pitta", "Vata"],
    benefits: ["Enhances memory", "Improves focus", "Calms mind"],
    image: "🧠"
  },
  {
    id: 5,
    name: "Turmeric Golden Milk Mix",
    description: "Anti-inflammatory blend for daily wellness",
    price: 19.99,
    category: "Beverages",
    doshas: ["Pitta", "Kapha"],
    benefits: ["Anti-inflammatory", "Boosts immunity", "Antioxidant rich"],
    image: "🥛"
  },
  {
    id: 6,
    name: "Neem & Tulsi Face Wash",
    description: "Purifying cleanser for clear, radiant skin",
    price: 15.99,
    category: "Skincare",
    doshas: ["Pitta", "Kapha"],
    benefits: ["Purifies skin", "Controls oil", "Natural antibacterial"],
    image: "🧴"
  },
  {
    id: 7,
    name: "Chyawanprash",
    description: "Classic immunity booster with 40+ herbs",
    price: 32.99,
    category: "Supplements",
    doshas: ["Vata", "Kapha"],
    benefits: ["Boosts immunity", "Increases energy", "Rich in antioxidants"],
    image: "🍯"
  },
  {
    id: 8,
    name: "Kumkumadi Oil",
    description: "Luxurious facial oil for glowing, youthful skin",
    price: 42.99,
    category: "Skincare",
    doshas: ["Vata", "Pitta"],
    benefits: ["Brightens skin", "Anti-aging", "Deep nourishment"],
    image: "✨"
  },
  {
    id: 9,
    name: "Herbal Tea Sampler",
    description: "Collection of 6 dosha-balancing teas",
    price: 29.99,
    category: "Beverages",
    doshas: ["Vata", "Pitta", "Kapha"],
    benefits: ["Balances doshas", "Improves digestion", "Calming"],
    image: "🍵"
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDosha, setSelectedDosha] = useState<string>("all");

  const categories = ["all", "Supplements", "Oils", "Beverages", "Skincare"];
  const doshas = ["all", "Vata", "Pitta", "Kapha"];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const doshaMatch = selectedDosha === "all" || product.doshas.includes(selectedDosha);
    return categoryMatch && doshaMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-hero pattern-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Ayurvedic Wellness Shop
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover authentic Ayurvedic products carefully curated for your dosha constitution and wellness journey.
          </p>
        </div>

        {/* Filters */}
        <Card className="shadow-medium mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 text-primary">
                <Filter className="w-5 h-5" />
                <span className="font-semibold">Filter Products</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>
                        {cat === "all" ? "All Categories" : cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedDosha} onValueChange={setSelectedDosha}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Dosha" />
                  </SelectTrigger>
                  <SelectContent>
                    {doshas.map(dosha => (
                      <SelectItem key={dosha} value={dosha}>
                        {dosha === "all" ? "All Doshas" : `${dosha} Balancing`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="shadow-medium hover:shadow-strong transition-smooth overflow-hidden group">
              <CardContent className="p-6 space-y-4">
                {/* Product Image */}
                <div className="text-center">
                  <div className="text-7xl mb-4 transform group-hover:scale-110 transition-smooth">
                    {product.image}
                  </div>
                </div>

                {/* Category & Doshas */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  {product.doshas.map(dosha => (
                    <Badge key={dosha} variant="outline" className="text-xs">
                      {dosha}
                    </Badge>
                  ))}
                </div>

                {/* Product Name & Description */}
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-success">
                    <Sparkles className="w-4 h-4" />
                    <span>Key Benefits</span>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Leaf className="w-3 h-3 text-success" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <Button className="gradient-secondary text-white hover:opacity-90 transition-smooth">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <Card className="shadow-medium">
            <CardContent className="p-12 text-center">
              <p className="text-lg text-muted-foreground">
                No products found matching your filters. Try adjusting your selection.
              </p>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-accent" />
            <span className="font-playfair font-semibold text-lg">Rudraksha Ayurvedic</span>
          </div>
          <p className="text-sm text-primary-foreground/80">
            &copy; 2025 Rudraksha Ayurvedic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;