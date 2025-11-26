import { useRef } from 'react';
import { useSeoMeta } from '@unhead/react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Manifesto } from '@/components/Manifesto';
import { Rubric } from '@/components/Rubric';
import { QuickPick } from '@/components/QuickPick';
import { ToolComparison } from '@/components/ToolComparison';
import { Quiz } from '@/components/Quiz';
import { Footer } from '@/components/Footer';

const Index = () => {
  useSeoMeta({
    title: 'Freedom AI Tool Evaluator (FATE)',
    description: 'Compare AI coding assistants through the lens of openness, privacy, and protocol support. Find the perfect tool for vibe coding that aligns with your values.',
    ogTitle: 'Freedom AI Tool Evaluator (FATE)',
    ogDescription: 'Compare AI coding assistants through the lens of openness, privacy, and protocol support.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  });

  const manifestoRef = useRef<HTMLDivElement>(null);
  const rubricRef = useRef<HTMLDivElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
      manifesto: manifestoRef,
      rubric: rubricRef,
      compare: compareRef,
      quiz: quizRef,
    };

    const ref = refs[sectionId];
    if (ref?.current) {
      const headerOffset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onNavigate={scrollToSection} />

      <main>
        <Hero
          onExplore={() => scrollToSection('compare')}
          onFindTool={() => scrollToSection('quiz')}
        />

        <div ref={manifestoRef}>
          <Manifesto />
        </div>

        <div ref={rubricRef}>
          <Rubric />
        </div>

        <QuickPick />

        <div ref={compareRef}>
          <ToolComparison />
        </div>

        <div ref={quizRef}>
          <Quiz />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
