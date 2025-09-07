import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { Sunrise, Sun, Moon, Leaf, Droplets, Flame } from "lucide-react";

const WellnessDashboard = () => {
  // Mock user data - in real app this would come from user's quiz results
  const userDosha = "Pitta-Vata";
  const doshaBalance = {
    vata: 35,
    pitta: 45,
    kapha: 20
  };

  const dailyRecommendations = {
    morning: [
      "Start with warm lemon water",
      "Practice gentle yoga or stretching",
      "Meditate for 10-15 minutes"
    ],
    midday: [
      "Have your largest meal between 12-1 PM",
      "Take a short walk after eating",
      "Stay hydrated with cool water"
    ],
    evening: [
      "Light dinner before 7 PM",
      "Practice calming breathing exercises",
      "Apply sesame oil massage before bed"
    ]
  };

  const suggestedProducts = [
    {
      name: "Ashwagandha Capsules",
      description: "Stress relief and energy balance",
      price: "$24.99",
      image: "🌿"
    },
    {
      name: "Cooling Coconut Oil",
      description: "Perfect for Pitta constitution",
      price: "$18.99",
      image: "🥥"
    },
    {
      name: "Triphala Powder",
      description: "Digestive support and detox",
      price: "$21.99",
      image: "🍃"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pattern-subtle">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Welcome Section */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="font-playfair text-3xl text-primary">
                Welcome to Your Wellness Journey
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Your constitution: <span className="font-semibold text-secondary">{userDosha}</span>
              </p>
            </CardHeader>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Dosha Balance Chart */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-playfair text-xl">
                    <Leaf className="w-5 h-5 text-success" />
                    Your Dosha Balance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Droplets className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">Vata (Air & Space)</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{doshaBalance.vata}%</span>
                      </div>
                      <Progress value={doshaBalance.vata} className="h-3" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Flame className="w-4 h-4 text-red-500" />
                          <span className="font-medium">Pitta (Fire & Water)</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{doshaBalance.pitta}%</span>
                      </div>
                      <Progress value={doshaBalance.pitta} className="h-3" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Leaf className="w-4 h-4 text-success" />
                          <span className="font-medium">Kapha (Earth & Water)</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{doshaBalance.kapha}%</span>
                      </div>
                      <Progress value={doshaBalance.kapha} className="h-3" />
                    </div>
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm">
                      <strong>Your Profile:</strong> As a Pitta-Vata constitution, focus on cooling and grounding practices. 
                      Avoid excessive heat and maintain regular routines to balance your dynamic energy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Knowledge Snippet */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="font-playfair text-lg">Today's Wisdom</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need." - Ayurvedic Proverb
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Daily Recommendations */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="font-playfair text-xl">Daily Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <Sunrise className="w-5 h-5" />
                    Morning (6-10 AM)
                  </div>
                  <ul className="space-y-2 text-sm">
                    {dailyRecommendations.morning.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <Sun className="w-5 h-5" />
                    Midday (10 AM-6 PM)
                  </div>
                  <ul className="space-y-2 text-sm">
                    {dailyRecommendations.midday.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <Moon className="w-5 h-5" />
                    Evening (6 PM+)
                  </div>
                  <ul className="space-y-2 text-sm">
                    {dailyRecommendations.evening.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suggested Products */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="font-playfair text-xl">Recommended for You</CardTitle>
              <p className="text-muted-foreground">Personalized products for your Pitta-Vata constitution</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {suggestedProducts.map((product, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardContent className="p-6 space-y-4">
                      <div className="text-4xl text-center">{product.image}</div>
                      <div className="text-center space-y-2">
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                        <p className="font-semibold text-accent">{product.price}</p>
                      </div>
                      <Button className="w-full gradient-secondary text-white">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WellnessDashboard;