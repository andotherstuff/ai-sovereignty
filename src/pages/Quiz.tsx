import { useSeoMeta } from '@unhead/react';
import { PageLayout } from '@/components/PageLayout';
import { Quiz as QuizComponent } from '@/components/Quiz';

export default function Quiz() {
  useSeoMeta({
    title: 'Find Your Tool | FATE - Freedom AI Tool Evaluator',
    description: 'Find the AI coding tool that respects your sovereignty. Answer questions about your project needs, privacy requirements, and values.',
    ogTitle: 'Find Your Tool | FATE',
    ogDescription: 'Find the AI coding tool that respects your sovereignty and aligns with your values.',
    ogImage: '/og-image.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterImage: '/og-image.png',
  });

  return (
    <PageLayout>
      <QuizComponent />
    </PageLayout>
  );
}
