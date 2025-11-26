import { useSeoMeta } from '@unhead/react';
import { PageLayout } from '@/components/PageLayout';
import { Quiz as QuizComponent } from '@/components/Quiz';

export default function Quiz() {
  useSeoMeta({
    title: 'Find Your AI Tool | FATE - Freedom AI Tool Evaluator',
    description: 'Take our quiz to find the AI coding assistant that best matches your values, privacy needs, and project requirements.',
    ogTitle: 'Find Your AI Tool | FATE',
    ogDescription: 'Answer a few questions about your project needs and values to find your perfect AI coding assistant.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  });

  return (
    <PageLayout>
      <QuizComponent />
    </PageLayout>
  );
}
