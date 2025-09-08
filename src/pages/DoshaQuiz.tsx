import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ayurvedicQuestions, doshaDescriptions, type AyurvedicQuestion } from "@/data/ayurvedicQuestions";
import { Leaf, Star, BookOpen } from "lucide-react";

interface DoshaScores {
  vata: number;
  pitta: number;
  kapha: number;
}

interface AnswerData {
  questionId: number;
  dosha: "vata" | "pitta" | "kapha";
  weight: number;
}

const DoshaQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswerData[]>([]);
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (dosha: "vata" | "pitta" | "kapha", weight: number) => {
    const newAnswer: AnswerData = {
      questionId: ayurvedicQuestions[currentQuestion].id,
      dosha,
      weight
    };
    
    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < ayurvedicQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateDoshaProfile = () => {
    const scores: DoshaScores = { vata: 0, pitta: 0, kapha: 0 };
    let totalWeight = 0;
    
    // Calculate weighted scores based on classical importance
    answers.forEach(answer => {
      scores[answer.dosha] += answer.weight;
      totalWeight += answer.weight;
    });

    // Convert to percentages
    const percentages = {
      vata: Math.round((scores.vata / totalWeight) * 100),
      pitta: Math.round((scores.pitta / totalWeight) * 100), 
      kapha: Math.round((scores.kapha / totalWeight) * 100)
    };

    // Determine constitution type
    const sortedDoshas = Object.entries(percentages)
      .sort(([,a], [,b]) => b - a)
      .map(([dosha]) => dosha);

    const [primary, secondary, tertiary] = sortedDoshas;
    const [primaryPercent, secondaryPercent] = [percentages[primary as keyof DoshaScores], percentages[secondary as keyof DoshaScores]];

    let constitutionType = "";
    let constitutionDescription = "";

    if (primaryPercent >= 60) {
      // Single dosha dominance
      constitutionType = `${primary.charAt(0).toUpperCase() + primary.slice(1)} Prakriti`;
      constitutionDescription = `You have a predominantly ${primary} constitution with ${primaryPercent}% dominance.`;
    } else if (primaryPercent - secondaryPercent <= 10) {
      // Dual dosha (Dwandwaja)
      constitutionType = `${primary.charAt(0).toUpperCase() + primary.slice(1)}-${secondary.charAt(0).toUpperCase() + secondary.slice(1)} Prakriti`;
      constitutionDescription = `You have a balanced dual constitution with ${primary} (${primaryPercent}%) and ${secondary} (${secondaryPercent}%).`;
    } else {
      // Primary with secondary
      constitutionType = `${primary.charAt(0).toUpperCase() + primary.slice(1)} Prakriti with ${secondary.charAt(0).toUpperCase() + secondary.slice(1)}`;
      constitutionDescription = `You have a ${primary}-dominant constitution (${primaryPercent}%) with significant ${secondary} influence (${secondaryPercent}%).`;
    }

    return {
      constitutionType,
      constitutionDescription,
      percentages,
      primaryDosha: primary as keyof DoshaScores,
      scores
    };
  };

  const progress = ((currentQuestion + 1) / ayurvedicQuestions.length) * 100;

  if (showResult) {
    const profile = calculateDoshaProfile();
    const primaryDoshaInfo = doshaDescriptions[profile.primaryDosha];
    
    return (
      <div className="min-h-screen bg-gradient-hero pattern-subtle">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Main Result Card */}
            <Card className="shadow-strong">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Leaf className="w-6 h-6 text-accent" />
                  <span className="text-sm text-muted-foreground font-medium">Classical Ayurvedic Assessment</span>
                </div>
                <CardTitle className="font-playfair text-3xl text-primary mb-2">
                  Your Prakruti (Constitution)
                </CardTitle>
                <Badge variant="secondary" className="text-sm">
                  Based on Charaka & Sushruta Samhitas
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Constitution Type */}
                <div className="text-center p-6 bg-gradient-nature rounded-lg text-white">
                  <h3 className="text-xl font-playfair mb-2">आपकी प्रकृति</h3>
                  <h2 className="text-3xl font-bold mb-2">{profile.constitutionType}</h2>
                  <p className="text-lg opacity-90">{primaryDoshaInfo.sanskrit}</p>
                </div>

                {/* Dosha Percentages */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-center text-primary">Dosha Distribution</h4>
                  {Object.entries(profile.percentages).map(([dosha, percentage]) => (
                    <div key={dosha} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium capitalize">{dosha}</span>
                        <span className="text-sm font-semibold">{percentage}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ${
                            dosha === 'vata' ? 'bg-blue-500' :
                            dosha === 'pitta' ? 'bg-red-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-center text-muted-foreground">
                  {profile.constitutionDescription}
                </p>
              </CardContent>
            </Card>

            {/* Detailed Dosha Information */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-primary flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Classical Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Elements (Panchamahabhuta)</h4>
                  <p className="text-sm text-muted-foreground">{primaryDoshaInfo.element}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Qualities (Gunas)</h4>
                  <p className="text-sm text-muted-foreground">{primaryDoshaInfo.qualities}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Characteristics</h4>
                  <p className="text-sm text-muted-foreground">{primaryDoshaInfo.characteristics}</p>
                </div>
                
                <div className="text-xs text-muted-foreground italic pt-2 border-t">
                  {primaryDoshaInfo.classical_reference}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/dashboard')}
                className="flex-1 gradient-primary text-white hover:opacity-90 transition-smooth"
              >
                <Star className="w-4 h-4 mr-2" />
                View Personalized Dashboard
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResult(false);
                }}
                className="flex-1"
              >
                Retake Assessment
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero pattern-subtle">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
            <Card className="shadow-medium">
              <CardHeader>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Leaf className="w-5 h-5 text-accent" />
                      <span className="text-sm text-muted-foreground font-medium">Prakruti Assessment</span>
                    </div>
                    <CardTitle className="font-playfair text-2xl text-primary">
                      Ayurvedic Constitution Analysis
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">
                      Based on Classical Samhitas
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Question {currentQuestion + 1} of {ayurvedicQuestions.length}</span>
                      <span>{Math.round(progress)}% Complete</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div className="flex justify-center">
                    <Badge variant="outline" className="capitalize">
                      {ayurvedicQuestions[currentQuestion].category.replace('_', ' ')} Assessment
                    </Badge>
                  </div>

                  {/* Question */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-medium">
                      {ayurvedicQuestions[currentQuestion].question}
                    </h3>
                    {ayurvedicQuestions[currentQuestion].sanskrit && (
                      <p className="text-sm text-muted-foreground italic">
                        {ayurvedicQuestions[currentQuestion].sanskrit}
                      </p>
                    )}
                  </div>
                  
                  {/* Options */}
                  <div className="space-y-3">
                    {ayurvedicQuestions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full text-left justify-start h-auto p-4 hover:bg-accent/10 transition-smooth relative"
                        onClick={() => handleAnswer(option.dosha, option.weight)}
                      >
                        <div className="flex-1">
                          {option.text}
                        </div>
                        <div className="flex items-center gap-1 ml-2">
                          {Array.from({ length: option.weight }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                          ))}
                        </div>
                      </Button>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="text-center text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span>Classical importance weight</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
};

export default DoshaQuiz;