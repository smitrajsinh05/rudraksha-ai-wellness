import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-image.jpg";
import { 
  Brain, 
  Heart, 
  ShoppingBag, 
  Users, 
  Leaf, 
  Sparkles,
  ArrowRight,
  BookOpen
} from "lucide-react";

const Index = () => {
  const howItWorksSteps = [
    {
      icon: Brain,
      title: "Take the Dosha Quiz",
      description: "Discover your unique Ayurvedic constitution through our comprehensive assessment"
    },
    {
      icon: Heart,
      title: "Get Your Wellness Profile",
      description: "Receive personalized insights and recommendations based on your dosha type"
    },
    {
      icon: ShoppingBag,
      title: "Personalized Products",
      description: "Shop curated wellness products specifically chosen for your constitution"
    }
  ];

  const featuredProducts = [
    {
      name: "Ashwagandha",
      description: "Adaptogenic herb for stress relief and energy balance",
      benefits: "Reduces stress, improves energy",
      emoji: "🌿"
    },
    {
      name: "Triphala",
      description: "Traditional blend for digestive health and detoxification",
      benefits: "Supports digestion, natural detox",
      emoji: "🍃"
    },
    {
      name: "Mahanarayan Oil",
      description: "Therapeutic oil for joint and muscle wellness",
      benefits: "Soothes muscles, promotes mobility",
      emoji: "🫒"
    }
  ];

  const knowledgeArticles = [
    {
      title: "Understanding Your Dosha: A Beginner's Guide",
      excerpt: "Learn about the three doshas and how they influence your health and wellbeing...",
      readTime: "5 min read"
    },
    {
      title: "Ayurvedic Daily Routines for Modern Life", 
      excerpt: "Discover how to integrate ancient wisdom into your contemporary lifestyle...",
      readTime: "7 min read"
    },
    {
      title: "The Science Behind Ayurvedic Herbs",
      excerpt: "Explore the research-backed benefits of traditional Ayurvedic medicines...",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white space-y-8">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight">
              Wisdom of Ayurveda, 
              <span className="text-accent"> Power of AI</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Discover your unique dosha and receive personalized wellness guidance 
              rooted in 5,000 years of ancient wisdom
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                asChild
                size="lg"
                className="gradient-accent text-primary font-semibold hover:opacity-90 transition-smooth"
              >
                <Link to="/quiz">Take the Dosha Quiz</Link>
              </Button>
              <Button 
                asChild
                variant="secondary"
                size="lg"
                className="bg-white/10 text-white border border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm transition-smooth"
              >
                <Link to="/shop">Explore Shop</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-hero pattern-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your journey to personalized wellness begins here. Follow these simple steps 
              to unlock your Ayurvedic potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 mx-auto gradient-nature rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                    {index < howItWorksSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-accent" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Wellness Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully curated Ayurvedic products to support your unique constitution and wellness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{product.emoji}</div>
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-success font-medium bg-success/10 px-3 py-1 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      {product.benefits}
                    </div>
                  </div>
                  <Button className="w-full gradient-secondary text-white hover:opacity-90 transition-smooth">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Hub Preview */}
      <section className="py-20 bg-gradient-hero pattern-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              Knowledge Hub
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deepen your understanding of Ayurveda with our comprehensive library of articles and guides.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {knowledgeArticles.map((article, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-accent">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm font-medium">{article.readTime}</span>
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-primary">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {article.excerpt}
                  </p>
                  <Button variant="ghost" className="w-full text-accent hover:bg-accent/10">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/knowledge">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-accent" />
                <span className="font-playfair font-semibold text-lg">Rudraksha Ayurvedic</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Bridging ancient Ayurvedic wisdom with modern AI technology for personalized wellness.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link to="/quiz" className="hover:text-accent transition-smooth">Dosha Quiz</Link></li>
                <li><Link to="/dashboard" className="hover:text-accent transition-smooth">Wellness Dashboard</Link></li>
                <li><Link to="/shop" className="hover:text-accent transition-smooth">Shop</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link to="/knowledge" className="hover:text-accent transition-smooth">Knowledge Hub</Link></li>
                <li><a href="#" className="hover:text-accent transition-smooth">About Ayurveda</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-smooth">Contact Us</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">FAQ</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2025 Rudraksha Ayurvedic. All rights reserved. | Wisdom meets technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;