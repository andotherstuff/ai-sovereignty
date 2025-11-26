import { useSeoMeta } from '@unhead/react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Rubric } from '@/components/Rubric';
import { ToolComparison } from '@/components/ToolComparison';
import { QuickPick } from '@/components/QuickPick';
import { GlobeHero } from '@/components/GlobeHero';
import {
  Wrench,
} from 'lucide-react';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function OpenTools() {
  useSeoMeta({
    title: 'Open Tools | FATE - Freedom AI Tool Evaluator',
    description: 'Compare AI coding assistants through the lens of openness, privacy, and protocol support. Find the perfect vibe coding tool that aligns with your values.',
    ogTitle: 'Open Tools | FATE',
    ogDescription: 'Compare AI coding tools evaluated for openness, privacy, and freedom tech support.',
    ogImage: '/og-image.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterImage: '/og-image.png',
  });

  const navigate = useNavigate();
  const compareRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.hash) {
      // Handle hash targets (like #shakespeare for tool cards)
      setTimeout(() => {
        const targetId = location.hash.slice(1); // Remove the # prefix
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

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
      {/* Hero Section with Globe */}
      <GlobeHero
        badge={{
          icon: <Wrench className="w-4 h-4" />,
          text: 'AI Coding Tool Comparison',
        }}
        title={
          <>
            <span className="text-gradient-glow">Open Tools</span>
            <br />
            <span className="text-foreground">for Vibe Coding</span>
          </>
        }
        subtitle="Compare AI coding assistants through the lens of openness, privacy, and protocol support"
        description="Not all vibe coding tools are created equal. We evaluate each one on the metrics that matter to freedom-minded creators, so you can choose with confidence."
        primaryAction={{
          label: 'Find Your Tool',
          onClick: () => navigate('/quiz'),
        }}
        secondaryAction={{
          label: 'Compare All Tools',
          onClick: scrollToCompare,
        }}
      />

      {/* Rubric Section */}
      <Rubric />

      {/* Tool Comparison */}
      <div ref={compareRef}>
        <ToolComparison />
      </div>

      {/* Quick Pick */}
      <QuickPick />
    </PageLayout>
  );
}
