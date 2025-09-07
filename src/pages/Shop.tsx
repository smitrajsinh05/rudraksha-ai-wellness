import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Shop = () => {
  return (
    <div className="min-h-screen bg-gradient-hero pattern-subtle">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Card className="shadow-medium max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-playfair text-3xl text-primary">
              Ayurvedic Shop
            </CardTitle>
            <p className="text-muted-foreground">
              Curated wellness products for your journey
            </p>
          </CardHeader>
          <CardContent className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-6">
              Our shop is coming soon! We're carefully curating the finest Ayurvedic products 
              tailored to your dosha constitution.
            </p>
            <Button variant="outline">
              Get Notified When We Launch
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Shop;