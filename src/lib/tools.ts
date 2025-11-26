// AI Tool Types and Data

export interface AITool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  logo?: string;
  scores: ToolScores;
  features: string[];
  limitations: string[];
  bestFor: string[];
  pricing: PricingInfo;
  protocols: Protocol[];
  privacyLevel: 'high' | 'medium' | 'low';
  openSourceLevel: 'fully-open' | 'partially-open' | 'proprietary';
}

export interface ToolScores {
  openSource: number; // 1-5
  privacy: number; // 1-5
  protocolSupport: number; // 1-5 (Nostr, Bitcoin, etc.)
  easeOfUse: number; // 1-5
  costEfficiency: number; // 1-5
  capabilities: number; // 1-5
}

export interface PricingInfo {
  type: 'free' | 'freemium' | 'paid' | 'pay-as-you-go';
  freetier: boolean;
  startingPrice?: string;
  details: string;
}

export interface Protocol {
  name: string;
  supported: boolean;
  quality: 'excellent' | 'good' | 'limited' | 'none';
}

export const AI_TOOLS: AITool[] = [
  {
    id: 'shakespeare',
    name: 'Shakespeare',
    tagline: 'The freedom-first vibe coding companion',
    description: 'Shakespeare is a fully open-source AI coding assistant built for the freedom tech community. It runs in your browser, connects to Nostr for identity, and helps you build decentralized applications with ease. No accounts needed—just your Nostr keys.',
    url: 'https://shakespeare.diy',
    scores: {
      openSource: 5,
      privacy: 5,
      protocolSupport: 5,
      easeOfUse: 4,
      costEfficiency: 5,
      capabilities: 4
    },
    features: [
      'Fully open-source (MIT License)',
      'Browser-based, no installation required',
      'Native Nostr integration for identity & payments',
      'Bitcoin Lightning payments for credits',
      'Excellent at building Nostr & Bitcoin apps',
      'Real-time preview of your creations',
      'Bring your own API keys option',
      'No central server storing your data',
      'Self-hostable'
    ],
    limitations: [
      'Newer platform, smaller community',
      'Focused primarily on web applications',
      'Requires understanding of Nostr for full benefits'
    ],
    bestFor: [
      'Building Nostr applications',
      'Privacy-conscious developers',
      'Freedom tech enthusiasts',
      'Bitcoin/Lightning integrations',
      'Activists who need sovereignty over their tools'
    ],
    pricing: {
      type: 'pay-as-you-go',
      freetier: true,
      startingPrice: 'Pay with Bitcoin',
      details: 'Bring your own API keys for free, or pay with Bitcoin Lightning for convenience. No accounts, no subscriptions.'
    },
    protocols: [
      { name: 'Nostr', supported: true, quality: 'excellent' },
      { name: 'Bitcoin/Lightning', supported: true, quality: 'excellent' },
      { name: 'ActivityPub', supported: false, quality: 'none' },
      { name: 'AT Protocol', supported: false, quality: 'limited' }
    ],
    privacyLevel: 'high',
    openSourceLevel: 'fully-open'
  },
  {
    id: 'lovable',
    name: 'Lovable',
    tagline: 'AI-powered full-stack app development',
    description: 'Lovable is a commercial AI coding platform that generates full-stack web applications from natural language prompts. It creates React applications with Supabase backends and handles deployment.',
    url: 'https://lovable.dev',
    scores: {
      openSource: 1,
      privacy: 2,
      protocolSupport: 1,
      easeOfUse: 5,
      costEfficiency: 3,
      capabilities: 5
    },
    features: [
      'Highly polished user experience',
      'Full-stack app generation',
      'Integrated database (Supabase)',
      'One-click deployment',
      'Real-time collaboration',
      'Extensive template library',
      'Strong general-purpose capabilities'
    ],
    limitations: [
      'Fully proprietary, closed-source',
      'No support for decentralized protocols',
      'Requires account and stores your data',
      'Subscription-based pricing',
      'Lock-in to their platform'
    ],
    bestFor: [
      'Rapid prototyping',
      'Traditional SaaS applications',
      'Users who prioritize ease over sovereignty',
      'Business applications with standard backends'
    ],
    pricing: {
      type: 'freemium',
      freetier: true,
      startingPrice: '$20/month',
      details: 'Limited free tier, paid plans for more features and usage. Enterprise pricing available.'
    },
    protocols: [
      { name: 'Nostr', supported: false, quality: 'none' },
      { name: 'Bitcoin/Lightning', supported: false, quality: 'none' },
      { name: 'ActivityPub', supported: false, quality: 'none' },
      { name: 'AT Protocol', supported: false, quality: 'none' }
    ],
    privacyLevel: 'low',
    openSourceLevel: 'proprietary'
  },
  {
    id: 'replit',
    name: 'Replit',
    tagline: 'Cloud IDE with AI coding assistance',
    description: 'Replit is a cloud-based development environment with integrated AI capabilities. It supports multiple programming languages and provides collaborative features, deployment, and hosting.',
    url: 'https://replit.com',
    scores: {
      openSource: 2,
      privacy: 2,
      protocolSupport: 2,
      easeOfUse: 5,
      costEfficiency: 3,
      capabilities: 5
    },
    features: [
      'Multi-language support',
      'Integrated development environment',
      'Real-time collaboration',
      'Built-in hosting and deployment',
      'Large community and templates',
      'AI code completion (Ghostwriter)',
      'Mobile app available'
    ],
    limitations: [
      'Primarily proprietary platform',
      'Data stored on their servers',
      'No native decentralized protocol support',
      'Can be expensive at scale',
      'Some open-source contributions but core is closed'
    ],
    bestFor: [
      'Learning to code',
      'Multi-language projects',
      'Collaborative development',
      'Quick prototypes',
      'Educational environments'
    ],
    pricing: {
      type: 'freemium',
      freetier: true,
      startingPrice: '$7/month',
      details: 'Free tier with limitations. Paid plans unlock more compute, AI features, and private projects.'
    },
    protocols: [
      { name: 'Nostr', supported: false, quality: 'limited' },
      { name: 'Bitcoin/Lightning', supported: false, quality: 'limited' },
      { name: 'ActivityPub', supported: false, quality: 'none' },
      { name: 'AT Protocol', supported: false, quality: 'none' }
    ],
    privacyLevel: 'low',
    openSourceLevel: 'partially-open'
  },
  {
    id: 'v0',
    name: 'v0 by Vercel',
    tagline: 'AI-powered UI generation',
    description: 'v0 is Vercel\'s AI tool focused on generating React UI components from natural language descriptions. It excels at creating beautiful, responsive interfaces using shadcn/ui and Tailwind CSS.',
    url: 'https://v0.dev',
    scores: {
      openSource: 1,
      privacy: 2,
      protocolSupport: 1,
      easeOfUse: 5,
      costEfficiency: 3,
      capabilities: 4
    },
    features: [
      'Excellent UI/UX generation',
      'Uses modern stack (React, Tailwind, shadcn)',
      'Easy to iterate on designs',
      'Copy-paste ready code',
      'Good at responsive design',
      'Integrates with Vercel ecosystem'
    ],
    limitations: [
      'Fully proprietary',
      'UI-focused, not full applications',
      'Requires Vercel account',
      'No decentralized protocol awareness',
      'Limited to frontend generation'
    ],
    bestFor: [
      'UI component generation',
      'Design-to-code workflows',
      'React/Next.js projects',
      'Rapid UI prototyping'
    ],
    pricing: {
      type: 'freemium',
      freetier: true,
      startingPrice: '$20/month',
      details: 'Limited free generations per month. Pro plan for more generations and features.'
    },
    protocols: [
      { name: 'Nostr', supported: false, quality: 'none' },
      { name: 'Bitcoin/Lightning', supported: false, quality: 'none' },
      { name: 'ActivityPub', supported: false, quality: 'none' },
      { name: 'AT Protocol', supported: false, quality: 'none' }
    ],
    privacyLevel: 'low',
    openSourceLevel: 'proprietary'
  },
  {
    id: 'goose',
    name: 'Goose by Block',
    tagline: 'Open-source AI agent for development',
    description: 'Goose is an open-source AI agent developed by Block (formerly Square). It runs locally on your machine, respects your privacy, and can be extended with custom tools and integrations.',
    url: 'https://github.com/block/goose',
    scores: {
      openSource: 5,
      privacy: 5,
      protocolSupport: 3,
      easeOfUse: 3,
      costEfficiency: 4,
      capabilities: 4
    },
    features: [
      'Fully open-source (Apache 2.0)',
      'Runs locally on your machine',
      'Extensible with custom tools',
      'Works with multiple LLM providers',
      'Privacy-preserving by design',
      'Backed by Block (Jack Dorsey\'s company)',
      'Active development and community'
    ],
    limitations: [
      'Requires local setup',
      'Command-line focused',
      'Steeper learning curve',
      'Limited protocol-specific knowledge currently',
      'Requires you to bring your own LLM API keys'
    ],
    bestFor: [
      'Privacy-conscious developers',
      'Those who prefer local tools',
      'Developers who want extensibility',
      'Open-source advocates',
      'Command-line power users'
    ],
    pricing: {
      type: 'free',
      freetier: true,
      startingPrice: 'Free (BYO API keys)',
      details: 'Completely free and open-source. You provide your own LLM API keys (OpenAI, Anthropic, etc.).'
    },
    protocols: [
      { name: 'Nostr', supported: false, quality: 'limited' },
      { name: 'Bitcoin/Lightning', supported: true, quality: 'good' },
      { name: 'ActivityPub', supported: false, quality: 'none' },
      { name: 'AT Protocol', supported: false, quality: 'none' }
    ],
    privacyLevel: 'high',
    openSourceLevel: 'fully-open'
  }
];

export const RUBRIC_CATEGORIES = [
  {
    id: 'openSource',
    name: 'Open Source',
    description: 'Is the code open and auditable? Can you self-host it?',
    weight: 'critical',
    icon: 'Code',
    details: [
      '5 = Fully open-source, self-hostable, MIT/Apache licensed',
      '4 = Mostly open, some proprietary components',
      '3 = Partially open, core features closed',
      '2 = Source-available but restricted license',
      '1 = Fully proprietary, closed-source'
    ]
  },
  {
    id: 'privacy',
    name: 'Privacy & Security',
    description: 'How does it handle your data? Can you remain pseudonymous?',
    weight: 'critical',
    icon: 'Shield',
    details: [
      '5 = No accounts required, local-first, no data collection',
      '4 = Minimal data collection, strong encryption',
      '3 = Some data collection, decent privacy controls',
      '2 = Significant data collection, basic privacy options',
      '1 = Extensive data collection, limited privacy'
    ]
  },
  {
    id: 'protocolSupport',
    name: 'Protocol Support',
    description: 'Does it understand Nostr, Bitcoin, and other freedom protocols?',
    weight: 'important',
    icon: 'Network',
    details: [
      '5 = Native support for Nostr, Bitcoin, and decentralized protocols',
      '4 = Good support for some freedom tech protocols',
      '3 = Can build with protocols with some guidance',
      '2 = Limited awareness of decentralized tech',
      '1 = No support for freedom tech protocols'
    ]
  },
  {
    id: 'easeOfUse',
    name: 'Ease of Use',
    description: 'How accessible is it for non-technical users?',
    weight: 'important',
    icon: 'Sparkles',
    details: [
      '5 = Intuitive, no coding knowledge required',
      '4 = Easy to use with minimal learning curve',
      '3 = Moderate learning curve',
      '2 = Requires technical knowledge',
      '1 = Expert-level skills required'
    ]
  },
  {
    id: 'costEfficiency',
    name: 'Cost Efficiency',
    description: 'Is it affordable? Does it accept Bitcoin?',
    weight: 'moderate',
    icon: 'Coins',
    details: [
      '5 = Free/open-source, or accepts Bitcoin/Lightning',
      '4 = Affordable with flexible payment options',
      '3 = Reasonable pricing, traditional payments only',
      '2 = Expensive, subscription required',
      '1 = Very expensive, enterprise-focused'
    ]
  },
  {
    id: 'capabilities',
    name: 'Capabilities',
    description: 'How powerful and flexible is the AI?',
    weight: 'important',
    icon: 'Zap',
    details: [
      '5 = Highly capable, can build complex applications',
      '4 = Strong capabilities across most use cases',
      '3 = Good for common tasks',
      '2 = Limited to specific use cases',
      '1 = Basic capabilities only'
    ]
  }
];

export interface QuizQuestion {
  id: string;
  question: string;
  description?: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  label: string;
  description?: string;
  weights: Partial<Record<string, number>>; // tool id -> weight
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'priority',
    question: 'What matters most to you?',
    description: 'Choose the value that should guide your tool selection',
    options: [
      {
        id: 'freedom',
        label: 'Freedom & Sovereignty',
        description: 'I want full control over my tools and data',
        weights: { shakespeare: 5, goose: 5, lovable: 1, replit: 2, v0: 1 }
      },
      {
        id: 'ease',
        label: 'Ease of Use',
        description: 'I want to get things done quickly without complexity',
        weights: { shakespeare: 3, goose: 2, lovable: 5, replit: 5, v0: 5 }
      },
      {
        id: 'capabilities',
        label: 'Maximum Capabilities',
        description: 'I want the most powerful tools regardless of other factors',
        weights: { shakespeare: 3, goose: 4, lovable: 5, replit: 5, v0: 4 }
      },
      {
        id: 'cost',
        label: 'Cost Efficiency',
        description: 'I want to minimize expenses',
        weights: { shakespeare: 5, goose: 5, lovable: 2, replit: 3, v0: 2 }
      }
    ]
  },
  {
    id: 'protocols',
    question: 'What are you building?',
    description: 'Select the type of application you want to create',
    options: [
      {
        id: 'nostr',
        label: 'Nostr Applications',
        description: 'Social apps, clients, or anything on the Nostr protocol',
        weights: { shakespeare: 5, goose: 2, lovable: 1, replit: 1, v0: 1 }
      },
      {
        id: 'bitcoin',
        label: 'Bitcoin/Lightning Apps',
        description: 'Wallets, payment integrations, Bitcoin tools',
        weights: { shakespeare: 4, goose: 4, lovable: 1, replit: 2, v0: 1 }
      },
      {
        id: 'traditional',
        label: 'Traditional Web Apps',
        description: 'SaaS, e-commerce, or standard web applications',
        weights: { shakespeare: 3, goose: 3, lovable: 5, replit: 5, v0: 4 }
      },
      {
        id: 'ui',
        label: 'UI/Design Projects',
        description: 'Component libraries, design systems, visual work',
        weights: { shakespeare: 3, goose: 2, lovable: 4, replit: 3, v0: 5 }
      }
    ]
  },
  {
    id: 'privacy',
    question: 'How important is privacy to you?',
    description: 'Consider your threat model and who might be interested in your work',
    options: [
      {
        id: 'critical',
        label: 'Critical - I\'m an activist/journalist',
        description: 'My safety may depend on privacy',
        weights: { shakespeare: 5, goose: 5, lovable: 1, replit: 1, v0: 1 }
      },
      {
        id: 'important',
        label: 'Very Important',
        description: 'I care deeply about data sovereignty',
        weights: { shakespeare: 5, goose: 5, lovable: 2, replit: 2, v0: 2 }
      },
      {
        id: 'moderate',
        label: 'Somewhat Important',
        description: 'I prefer privacy but it\'s not a dealbreaker',
        weights: { shakespeare: 4, goose: 4, lovable: 3, replit: 3, v0: 3 }
      },
      {
        id: 'low',
        label: 'Not a Priority',
        description: 'I\'m okay with standard terms of service',
        weights: { shakespeare: 3, goose: 3, lovable: 4, replit: 4, v0: 4 }
      }
    ]
  },
  {
    id: 'experience',
    question: 'What\'s your technical experience?',
    description: 'Be honest—this helps us find the right fit',
    options: [
      {
        id: 'beginner',
        label: 'Complete Beginner',
        description: 'Never written code before',
        weights: { shakespeare: 4, goose: 1, lovable: 5, replit: 4, v0: 5 }
      },
      {
        id: 'some',
        label: 'Some Experience',
        description: 'I\'ve dabbled but I\'m not a developer',
        weights: { shakespeare: 4, goose: 2, lovable: 5, replit: 5, v0: 5 }
      },
      {
        id: 'comfortable',
        label: 'Comfortable with Code',
        description: 'I can read and modify code',
        weights: { shakespeare: 5, goose: 4, lovable: 4, replit: 5, v0: 4 }
      },
      {
        id: 'expert',
        label: 'Professional Developer',
        description: 'I write code daily',
        weights: { shakespeare: 5, goose: 5, lovable: 3, replit: 4, v0: 4 }
      }
    ]
  },
  {
    id: 'openSource',
    question: 'How important is open source to you?',
    description: 'Open source means you can audit, modify, and self-host the tool',
    options: [
      {
        id: 'essential',
        label: 'Essential - Non-negotiable',
        description: 'I only use open-source software',
        weights: { shakespeare: 5, goose: 5, lovable: 0, replit: 1, v0: 0 }
      },
      {
        id: 'prefer',
        label: 'Strongly Prefer',
        description: 'I choose open source when possible',
        weights: { shakespeare: 5, goose: 5, lovable: 2, replit: 2, v0: 2 }
      },
      {
        id: 'nice',
        label: 'Nice to Have',
        description: 'I appreciate open source but it\'s not required',
        weights: { shakespeare: 4, goose: 4, lovable: 4, replit: 3, v0: 3 }
      },
      {
        id: 'indifferent',
        label: 'Doesn\'t Matter',
        description: 'I just want what works best',
        weights: { shakespeare: 3, goose: 3, lovable: 5, replit: 5, v0: 5 }
      }
    ]
  }
];

export function calculateQuizResults(answers: Record<string, string>): { tool: AITool; score: number }[] {
  const scores: Record<string, number> = {};
  
  // Initialize scores
  AI_TOOLS.forEach(tool => {
    scores[tool.id] = 0;
  });

  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = QUIZ_QUESTIONS.find(q => q.id === questionId);
    if (!question) return;
    
    const option = question.options.find(o => o.id === answerId);
    if (!option) return;

    Object.entries(option.weights).forEach(([toolId, weight]) => {
      scores[toolId] = (scores[toolId] || 0) + weight;
    });
  });

  // Convert to sorted array
  return AI_TOOLS
    .map(tool => ({ tool, score: scores[tool.id] || 0 }))
    .sort((a, b) => b.score - a.score);
}
