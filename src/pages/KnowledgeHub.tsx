import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { 
  BookOpen, 
  Clock, 
  Search, 
  Leaf,
  TrendingUp,
  Heart,
  Brain,
  Sparkles
} from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  featured: boolean;
  icon: any;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Understanding Your Dosha: A Complete Guide",
    excerpt: "Discover the three fundamental energies that govern your mind, body, and spirit according to Ayurveda.",
    content: "Learn how Vata, Pitta, and Kapha doshas shape your physical characteristics, mental tendencies, and health patterns...",
    category: "Fundamentals",
    readTime: "8 min",
    featured: true,
    icon: Brain
  },
  {
    id: 2,
    title: "Ayurvedic Daily Routines (Dinacharya)",
    excerpt: "Ancient practices for modern life: establish a daily routine that aligns with natural rhythms.",
    content: "Dinacharya refers to the Ayurvedic concept of daily routine. Following a consistent daily schedule helps maintain balance...",
    category: "Lifestyle",
    readTime: "6 min",
    featured: true,
    icon: TrendingUp
  },
  {
    id: 3,
    title: "The Science Behind Ayurvedic Herbs",
    excerpt: "Modern research validates ancient wisdom about powerful healing plants.",
    content: "Explore scientific studies on Ashwagandha, Turmeric, Triphala and other traditional herbs...",
    category: "Research",
    readTime: "10 min",
    featured: true,
    icon: Sparkles
  },
  {
    id: 4,
    title: "Eating for Your Dosha",
    excerpt: "Personalized nutrition guidelines based on your Ayurvedic constitution.",
    content: "Learn which foods balance or aggravate each dosha type and create meals that support optimal health...",
    category: "Nutrition",
    readTime: "7 min",
    featured: false,
    icon: Heart
  },
  {
    id: 5,
    title: "Seasonal Ayurveda: Ritucharya",
    excerpt: "Adjust your lifestyle and diet with the changing seasons for year-round wellness.",
    content: "Ayurveda recognizes six seasons and provides specific recommendations for each to maintain dosha balance...",
    category: "Lifestyle",
    readTime: "5 min",
    featured: false,
    icon: Leaf
  },
  {
    id: 6,
    title: "Yoga and Dosha Types",
    excerpt: "Discover which yoga practices are most beneficial for your constitution.",
    content: "Different doshas benefit from different styles of yoga. Learn the best practices for Vata, Pitta, and Kapha...",
    category: "Practice",
    readTime: "6 min",
    featured: false,
    icon: Heart
  },
  {
    id: 7,
    title: "Ayurvedic Sleep Wisdom",
    excerpt: "Ancient techniques for deeper, more restorative sleep aligned with your dosha.",
    content: "Quality sleep is essential for health. Ayurveda offers dosha-specific recommendations for better rest...",
    category: "Lifestyle",
    readTime: "5 min",
    featured: false,
    icon: Brain
  },
  {
    id: 8,
    title: "Understanding Agni: Digestive Fire",
    excerpt: "The cornerstone of Ayurvedic health - your digestive capacity and metabolic strength.",
    content: "Agni, or digestive fire, is considered the most important factor in maintaining health according to Ayurveda...",
    category: "Fundamentals",
    readTime: "8 min",
    featured: false,
    icon: Sparkles
  },
  {
    id: 9,
    title: "Ayurvedic Skin Care",
    excerpt: "Natural beauty rituals based on your dosha for radiant, healthy skin.",
    content: "Learn which herbs, oils, and practices are best for your skin type according to Ayurvedic principles...",
    category: "Beauty",
    readTime: "6 min",
    featured: false,
    icon: Heart
  }
];

const KnowledgeHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Fundamentals", "Lifestyle", "Nutrition", "Research", "Practice", "Beauty"];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-gradient-hero pattern-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Knowledge Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore ancient Ayurvedic wisdom backed by modern science. 
            Your comprehensive resource for holistic wellness.
          </p>
        </div>

        {/* Search & Filter */}
        <Card className="shadow-medium mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className={selectedCategory === cat ? "gradient-secondary text-white" : ""}
                  >
                    {cat === "all" ? "All Topics" : cat}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-accent" />
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredArticles.map(article => {
                const Icon = article.icon;
                return (
                  <Card key={article.id} className="shadow-medium hover:shadow-strong transition-smooth overflow-hidden group">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge className="gradient-accent text-primary border-0">
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <div className="w-12 h-12 rounded-full gradient-nature flex items-center justify-center transform group-hover:scale-110 transition-smooth">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="font-playfair text-xl font-semibold text-primary leading-tight">
                        {article.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {article.excerpt}
                      </p>

                      <Button variant="ghost" className="w-full text-accent hover:bg-accent/10 hover:text-accent">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        {regularArticles.length > 0 && (
          <div>
            <h2 className="font-playfair text-2xl font-bold text-primary mb-6">
              All Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regularArticles.map(article => {
                const Icon = article.icon;
                return (
                  <Card key={article.id} className="shadow-medium hover:shadow-strong transition-smooth overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-smooth">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">
                              {article.category}
                            </Badge>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>

                          <h3 className="font-playfair text-lg font-semibold text-primary leading-tight">
                            {article.title}
                          </h3>

                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {article.excerpt}
                          </p>

                          <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10 hover:text-accent -ml-2">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Read More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <Card className="shadow-medium">
            <CardContent className="p-12 text-center">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                No articles found matching your search. Try different keywords or categories.
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

export default KnowledgeHub;