import { useSeoMeta } from '@unhead/react';
import { DMMessagingInterface } from '@/components/dm/DMMessagingInterface';

const Messages = () => {
  useSeoMeta({
    title: 'Messages | FATE',
    description: 'Private encrypted messaging on Nostr',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image',
    twitterImage: '/og-image.png',
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Messages</h1>
        </div>

        <DMMessagingInterface className="flex-1" />
      </div>
    </div>
  );
};

export default Messages;
