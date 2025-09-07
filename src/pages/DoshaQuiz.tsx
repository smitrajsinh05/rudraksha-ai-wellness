import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface Question {
  id: number;
  question: string;
  options: { text: string; dosha: "vata" | "pitta" | "kapha" }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How would you describe your body frame?",
    options: [
      { text: "Thin, light, and delicate", dosha: "vata" },
      { text: "Medium build with good muscle tone", dosha: "pitta" },
      { text: "Large, strong, and well-built", dosha: "kapha" }
    ]
  },
  {
    id: 2,
    question: "How is your appetite typically?",
    options: [
      { text: "Irregular, sometimes forget to eat", dosha: "vata" },
      { text: "Strong and regular, get irritated when hungry", dosha: "pitta" },
      { text: "Steady but can go long periods without food", dosha: "kapha" }
    ]
  },
  {
    id: 3,
    question: "How do you handle stress?",
    options: [
      { text: "I worry and feel anxious", dosha: "vata" },
      { text: "I become irritated and angry", dosha: "pitta" },
      { text: "I tend to withdraw and become lethargic", dosha: "kapha" }
    ]
  },
  {
    id: 4,
    question: "What's your sleep pattern like?",
    options: [
      { text: "Light sleeper, often interrupted sleep", dosha: "vata" },
      { text: "Moderate sleep, but sound when I sleep", dosha: "pitta" },
      { text: "Deep, long sleep, hard to wake up", dosha: "kapha" }
    ]
  },
  {
    id: 5,
    question: "How do you prefer the weather?",
    options: [
      { text: "Warm and humid weather", dosha: "vata" },
      { text: "Cool and well-ventilated spaces", dosha: "pitta" },
      { text: "Warm and dry weather", dosha: "kapha" }
    ]
  }
];

const DoshaQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (dosha: string) => {
    const newAnswers = { ...answers, [currentQuestion]: dosha };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateDosha = () => {
    const scores = { vata: 0, pitta: 0, kapha: 0 };
    Object.values(answers).forEach(answer => {
      scores[answer as keyof typeof scores]++;
    });

    const maxScore = Math.max(...Object.values(scores));
    const primaryDosha = Object.keys(scores).find(key => scores[key as keyof typeof scores] === maxScore) as string;
    
    // Find secondary dosha
    const secondaryScores = { ...scores };
    delete secondaryScores[primaryDosha as keyof typeof secondaryScores];
    const secondaryMaxScore = Math.max(...Object.values(secondaryScores));
    const secondaryDosha = Object.keys(secondaryScores).find(key => secondaryScores[key as keyof typeof secondaryScores] === secondaryMaxScore);

    return `${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)}-${secondaryDosha?.charAt(0).toUpperCase() + secondaryDosha?.slice(1)}`;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const doshaType = calculateDosha();
    
    return (
      <div className="min-h-screen bg-gradient-hero pattern-subtle">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-medium">
              <CardHeader className="text-center">
                <CardTitle className="font-playfair text-3xl text-primary mb-4">
                  Your Dosha Result
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="p-8 bg-gradient-nature rounded-lg text-white">
                  <h3 className="text-2xl font-playfair mb-2">Your Dosha Type:</h3>
                  <p className="text-4xl font-bold">{doshaType}</p>
                </div>
                
                <p className="text-muted-foreground">
                  Congratulations! You've discovered your unique dosha constitution. 
                  This personalized profile will help guide your wellness journey.
                </p>
                
                <div className="space-y-3">
                  <Button 
                    onClick={() => navigate('/dashboard')}
                    className="w-full gradient-primary text-white hover:opacity-90 transition-smooth"
                  >
                    View Your Wellness Profile
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers({});
                      setShowResult(false);
                    }}
                    className="w-full"
                  >
                    Retake Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                <CardTitle className="font-playfair text-2xl text-primary text-center">
                  Discover Your Dosha
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% Complete</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-center">
                  {questions[currentQuestion].question}
                </h3>
                
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full text-left justify-start h-auto p-4 hover:bg-accent/10 transition-smooth"
                      onClick={() => handleAnswer(option.dosha)}
                    >
                      {option.text}
                    </Button>
                  ))}
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