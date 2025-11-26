import { useState } from 'react';
import { ChevronRight, ChevronLeft, RotateCcw, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QUIZ_QUESTIONS, calculateQuizResults, type AITool } from '@/lib/tools';

interface QuizProps {
  onComplete?: () => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const question = QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleAnswer = (optionId: string) => {
    const newAnswers = { ...answers, [question.id]: optionId };
    setAnswers(newAnswers);

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    setStarted(false);
  };

  if (!started) {
    return (
      <section id="quiz" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/10 to-background" />

        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-10 h-10 text-cyan-400" />
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Find Your <span className="text-gradient">Perfect Tool</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Answer 5 quick questions and we'll recommend the AI coding assistant
              that best matches your values and needs.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                5 Questions
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                ~1 Minute
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                Personalized Results
              </span>
            </div>

            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-display font-medium glow-blue-sm transition-all duration-300 hover:scale-105"
              onClick={() => setStarted(true)}
            >
              Start the Quiz
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const results = calculateQuizResults(answers);
    return <QuizResults results={results} onReset={handleReset} onComplete={onComplete} />;
  }

  return (
    <section id="quiz" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/10 to-background" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-muted-foreground mb-3">
              <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2.5 bg-muted" />
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3">
              {question.question}
            </h2>
            {question.description && (
              <p className="text-muted-foreground text-lg">{question.description}</p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option) => {
              const isSelected = answers[question.id] === option.id;
              return (
                <Card
                  key={option.id}
                  className={`cursor-pointer transition-all duration-200 hover:border-cyan-500/50 ${
                    isSelected ? 'border-cyan-500 bg-cyan-500/10' : ''
                  }`}
                  onClick={() => handleAnswer(option.id)}
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                      isSelected ? 'border-cyan-500 bg-cyan-500' : 'border-muted-foreground'
                    }`}>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-black" />
                      )}
                    </div>
                    <div>
                      <div className="font-display font-medium text-lg">{option.label}</div>
                      {option.description && (
                        <div className="text-muted-foreground mt-1">
                          {option.description}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="text-muted-foreground"
            >
              <ChevronLeft className="mr-2 w-4 h-4" />
              Back
            </Button>
            <Button
              variant="ghost"
              onClick={handleReset}
              className="text-muted-foreground"
            >
              <RotateCcw className="mr-2 w-4 h-4" />
              Start Over
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface QuizResultsProps {
  results: { tool: AITool; score: number }[];
  onReset: () => void;
  onComplete?: () => void;
}

function QuizResults({ results, onReset }: QuizResultsProps) {
  const topResult = results[0];
  const maxScore = results[0].score;

  return (
    <section id="quiz" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/10 to-background" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Top Result */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 mb-6">
              <Sparkles className="w-4 h-4" />
              Your Perfect Match
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient">{topResult.tool.name}</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-6">
              {topResult.tool.tagline}
            </p>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              {topResult.tool.description}
            </p>

            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-display font-medium glow-blue-sm"
              asChild
            >
              <a href={topResult.tool.url} target="_blank" rel="noopener noreferrer">
                Try {topResult.tool.name}
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* All Results */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-medium text-center mb-6">How All Tools Ranked for You</h3>
            {results.map((result, index) => {
              const percentage = (result.score / maxScore) * 100;
              return (
                <Card key={result.tool.id} className={`overflow-hidden ${
                  index === 0 ? 'border-cyan-500/50 bg-cyan-500/5' : ''
                }`}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-lg shrink-0 ${
                        index === 0 ? 'bg-cyan-500 text-black' :
                        index === 1 ? 'bg-muted-foreground/30 text-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-display font-medium text-lg truncate">{result.tool.name}</span>
                          <span className="text-cyan-300 font-medium shrink-0 ml-4">
                            {Math.round(percentage)}%
                          </span>
                        </div>
                        <Progress value={percentage} className="h-2.5 bg-muted" />
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground shrink-0"
                        asChild
                      >
                        <a href={result.tool.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="outline"
              onClick={onReset}
              className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
            >
              <RotateCcw className="mr-2 w-4 h-4" />
              Take Quiz Again
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
