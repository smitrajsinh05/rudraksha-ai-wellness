import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const KnowledgeHub = () => {
  return (
    <div className="min-h-screen bg-gradient-hero pattern-subtle">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Card className="shadow-medium max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-playfair text-3xl text-primary">
              Knowledge Hub
            </CardTitle>
            <p className="text-muted-foreground">
              Ancient wisdom meets modern science
            </p>
          </CardHeader>
          <CardContent className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-6">
              Our comprehensive library of Ayurvedic knowledge is being prepared. 
              Soon you'll have access to articles, guides, and expert insights.
            </p>
            <Button variant="outline">
              Subscribe to Updates
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default KnowledgeHub;