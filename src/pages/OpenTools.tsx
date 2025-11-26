import { useSeoMeta } from '@unhead/react';
import { PageLayout } from '@/components/PageLayout';
import { Rubric } from '@/components/Rubric';
import { ToolComparison } from '@/components/ToolComparison';
import { QuickPick } from '@/components/QuickPick';
import { Quiz } from '@/components/Quiz';
import { 
  Wrench,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export default function OpenTools() {
  useSeoMeta({
    title: 'Open Tools | FATE - Freedom AI Tool Evaluator',
    description: 'Compare AI coding assistants through the lens of openness, privacy, and protocol support. Find the perfect vibe coding tool that aligns with your values.',
    ogTitle: 'Open Tools | FATE',
    ogDescription: 'Compare AI coding tools evaluated for openness, privacy, and freedom tech support.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  });

  const quizRef = useRef<HTMLDivElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);

  const scrollToQuiz = () => {
    if (quizRef.current) {
      const headerOffset = 80;
      const elementPosition = quizRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToCompare = () => {
    if (compareRef.current) {
      const headerOffset = 80;
      const elementPosition = compareRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-background to-background" />
        <div className="absolute top-20 left-[30%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8">
              <Wrench className="w-4 h-4" />
              <span>AI Coding Tool Comparison</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Find Your <span className="text-gradient-glow">Open Tool</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Compare AI coding assistants through the lens of
              <span className="text-cyan-400 font-medium"> openness</span>,
              <span className="text-sky-400 font-medium"> privacy</span>, and
              <span className="text-blue-400 font-medium"> protocol support</span>.
            </p>

            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12">
              Not all vibe coding tools are created equal. We evaluate each one on the metrics 
              that matter to freedom-minded creators, so you can choose with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold glow-blue-sm transition-all duration-300 hover:scale-105"
                onClick={scrollToQuiz}
              >
                Find Your Tool
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                onClick={scrollToCompare}
              >
                Compare All Tools
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rubric Section */}
      <Rubric />

      {/* Tool Comparison */}
      <div ref={compareRef}>
        <ToolComparison />
      </div>

      {/* Quick Pick */}
      <QuickPick />

      {/* Quiz */}
      <div ref={quizRef}>
        <Quiz />
      </div>
    </PageLayout>
  );
}
