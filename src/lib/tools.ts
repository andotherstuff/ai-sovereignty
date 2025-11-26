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
  protocolSupport: number; // 1-5 (OpenAI API compatibility)
  openModelSupport: number; // 1-5 (Support for open models like Llama, Mistral, etc.)
  decentralization: number; // 1-5 (Nostr, Bitcoin, etc.)
  easeOfUse: number; // 1-5
  portability: number; // 1-5 (Freedom from vendor lock-in)
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
    logo: '/logos/shakespeare.png',
    scores: {
      openSource: 5,
      privacy: 5,
      protocolSupport: 5, // Supports any OpenAI-compatible provider including OpenRouter, local models via Ollama
      openModelSupport: 5, // Can use any model via OpenRouter, Ollama, or other compatible providers
      decentralization: 5, // Native Nostr, Bitcoin/Lightning support
      easeOfUse: 4,
      portability: 5, // No vendor lock-in: self-hostable, BYO API keys, local storage, deploy anywhere, no subscriptions
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
      'Supports any OpenAI-compatible provider',
      'Works with OpenRouter for 100+ models',
      'Can connect to local models (Ollama, LM Studio)',
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
      'Activists who need sovereignty over their tools',
      'Using open models like Llama, Mistral, Qwen'
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
    id: 'cursor',
    name: 'Cursor',
    tagline: 'AI-first code editor built on VS Code',
    description: 'Cursor is an AI-powered code editor forked from VS Code. It provides intelligent code completion, chat, and editing features. While the editor is partially open, it primarily uses proprietary AI backends.',
    url: 'https://cursor.sh',
    logo: '/logos/cursor.png',
    scores: {
      openSource: 2, // Editor is VS Code fork, but AI backend is proprietary
      privacy: 2, // Sends code to their servers for AI processing
      protocolSupport: 4, // Supports OpenAI API, can configure custom endpoints
      openModelSupport: 3, // Can use Azure OpenAI, some local model support via API
      decentralization: 1, // No support for Nostr, Bitcoin, or decentralized protocols
      easeOfUse: 5, // Excellent UX, familiar VS Code interface
      portability: 4, // Code stays local on your machine, can use any deployment, but subscription for AI features
      capabilities: 5 // Very capable, excellent code understanding
    },
    features: [
      'Built on VS Code - familiar interface',
      'Excellent AI code completion (Tab)',
      'Chat with codebase context',
      'Multi-file editing capabilities',
      'Supports custom OpenAI-compatible endpoints',
      'Can use Azure OpenAI',
      'Local model support via API configuration',
      'Active development and updates'
    ],
    limitations: [
      'AI backend is proprietary',
      'Sends code to external servers by default',
      'No decentralized protocol support',
      'Subscription model for full features',
      'Privacy concerns with code telemetry'
    ],
    bestFor: [
      'Professional developers wanting AI assistance',
      'VS Code users looking for AI upgrade',
      'Teams working on large codebases',
      'Those who prioritize capabilities over privacy'
    ],
    pricing: {
      type: 'freemium',
      freetier: true,
      startingPrice: '$20/month',
      details: 'Free tier with limited completions. Pro plan for unlimited AI features. Business plans available.'
    },
    protocols: [
      { name: 'Nostr', supported: false, quality: 'none' },
      { name: 'Bitcoin/Lightning', supported: false, quality: 'none' },
      { name: 'ActivityPub', supported: false, quality: 'none' },
      { name: 'AT Protocol', supported: false, quality: 'none' }
    ],
    privacyLevel: 'low',
    openSourceLevel: 'partially-open'
  },
  {
    id: 'lovable',
    name: 'Lovable',
    tagline: 'AI-powered full-stack app development',
    description: 'Lovable is a commercial AI coding platform that generates full-stack web applications from natural language prompts. It creates React applications with Supabase backends and handles deployment.',
    url: 'https://lovable.dev',
    logo: '/logos/lovable.png',
    scores: {
      openSource: 1,
      privacy: 2,
      protocolSupport: 1, // Locked to their proprietary AI backend
      openModelSupport: 1, // No support for custom models
      decentralization: 1, // No support for Nostr, Bitcoin, etc.
      easeOfUse: 5,
      portability: 2, // Platform lock-in: managed Supabase, their deployment, subscription required, GitHub sync available
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
      'Lock-in to their platform',
      'Cannot use custom AI providers or models',
      'No OpenAI API compatibility'
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
    id: 'base44',
    name: 'Base44',
    tagline: 'AI-powered app builder for rapid prototyping',
    description: 'Base44 is a commercial AI coding platform that generates full-stack web applications from natural language descriptions. It provides an integrated development environment with database, authentication, and deployment built-in.',
    url: 'https://base44.com',
    logo: '/logos/base44.png',
    scores: {
      openSource: 1, // Fully proprietary, closed-source
      privacy: 2, // Requires account, stores code on their servers
      protocolSupport: 1, // Locked to their proprietary AI backend
      openModelSupport: 1, // No support for custom models
      decentralization: 1, // No support for Nostr, Bitcoin, etc.
      easeOfUse: 5, // Very user-friendly, natural language to app
      portability: 2, // Platform lock-in: their database, their deployment, subscription model
      capabilities: 4 // Good full-stack generation, slightly less mature than competitors
    },
    features: [
      'Natural language to full-stack app',
      'Integrated database and authentication',
      'One-click deployment',
      'Real-time preview',
      'Built-in hosting',
      'Template library',
      'Collaborative editing'
    ],
    limitations: [
      'Fully proprietary, closed-source',
      'No support for decentralized protocols',
      'Requires account and stores your data',
      'Subscription-based pricing',
      'Platform lock-in for database and hosting',
      'Cannot use custom AI providers or models',
      'No OpenAI API compatibility'
    ],
    bestFor: [
      'Rapid prototyping',
      'MVPs and proof of concepts',
      'Non-technical founders',
      'Traditional web applications'
    ],
    pricing: {
      type: 'freemium',
      freetier: true,
      startingPrice: '$19/month',
      details: 'Free tier with limitations. Paid plans for more features, apps, and usage.'
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
    logo: '/logos/replit.png',
    scores: {
      openSource: 2,
      privacy: 2,
      protocolSupport: 2, // Limited - uses their own AI, some model selection
      openModelSupport: 2, // Limited model options, no bring-your-own
      decentralization: 2, // Can build apps that use these, but no native support
      easeOfUse: 5,
      portability: 2, // Platform lock-in: code on their servers, their hosting, subscription for features, export possible but workflow tied to platform
      capabilities: 5
    },
    features: [
      'Multi-language support',
      'Integrated development environment',
      'Real-time collaboration',
      'Built-in hosting and deployment',
      'Large community and templates',
      'AI code completion (Ghostwriter)',
      'Mobile app available',
      'Some model selection available'
    ],
    limitations: [
      'Primarily proprietary platform',
      'Data stored on their servers',
      'No native decentralized protocol support',
      'Can be expensive at scale',
      'Some open-source contributions but core is closed',
      'Cannot bring your own AI providers',
      'Limited to their model offerings'
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
    logo: '/logos/v0.png',
    scores: {
      openSource: 1,
      privacy: 2,
      protocolSupport: 1, // Locked to Vercel's AI backend
      openModelSupport: 1, // No custom model support
      decentralization: 1, // No decentralized protocol awareness
      easeOfUse: 5,
      portability: 3, // Output is copy-paste code you own, but UI-only, requires Vercel account, subscription model
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
      'Limited to frontend generation',
      'Cannot use custom AI providers',
      'No OpenAI API compatibility'
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
    logo: '/logos/goose.png',
    scores: {
      openSource: 5,
      privacy: 5,
      protocolSupport: 5, // Supports any OpenAI-compatible provider
      openModelSupport: 5, // Works with Ollama, any OpenAI-compatible endpoint
      decentralization: 3, // Some Bitcoin awareness via Block, limited Nostr
      easeOfUse: 3,
      portability: 5, // No vendor lock-in: runs locally, fully open-source, BYO everything, no platform dependencies
      capabilities: 4
    },
    features: [
      'Fully open-source (Apache 2.0)',
      'Runs locally on your machine',
      'Extensible with custom tools',
      'Works with any OpenAI-compatible provider',
      'Supports Ollama for local models',
      'Works with Llama, Mistral, Qwen, and more',
      'Privacy-preserving by design',
      'Backed by Block (Jack Dorsey\'s company)',
      'Active development and community',
      'Can use OpenRouter for 100+ models'
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
      'Command-line power users',
      'Using open models locally'
    ],
    pricing: {
      type: 'free',
      freetier: true,
      startingPrice: 'Free (BYO API keys)',
      details: 'Completely free and open-source. You provide your own LLM API keys (OpenAI, Anthropic, etc.) or use local models.'
    },
    protocols: [
      { name: 'Nostr', supported: false, quality: 'limited' },
      { name: 'Bitcoin/Lightning', supported: true, quality: 'good' },
      { name: 'ActivityPub', supported: false, quality: 'none' },
      { name: 'AT Protocol', supported: false, quality: 'none' }
    ],
    privacyLevel: 'high',
    openSourceLevel: 'fully-open'
  },
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
    name: 'Open Protocol Support',
    description: 'Can it connect to any OpenAI-compatible AI provider?',
    weight: 'critical',
    icon: 'Globe',
    details: [
      '5 = Full OpenAI API compatibility, works with any provider',
      '4 = Supports multiple providers, good API compatibility',
      '3 = Limited provider options, some API support',
      '2 = Few provider choices, mostly locked to specific backends',
      '1 = Locked to proprietary AI backend, no API flexibility'
    ]
  },
  {
    id: 'openModelSupport',
    name: 'Open Model Support',
    description: 'Can it use open models like Llama, Mistral, Qwen, and DeepSeek?',
    weight: 'critical',
    icon: 'Database',
    details: [
      '5 = Full support for all major open models via Ollama, OpenRouter, etc.',
      '4 = Good support for most open models',
      '3 = Limited open model support, some options available',
      '2 = Very limited, only a few models supported',
      '1 = No open model support, proprietary models only'
    ]
  },
  {
    id: 'decentralization',
    name: 'Decentralization',
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
    id: 'portability',
    name: 'Portability',
    description: 'Can you take your code, data, and projects elsewhere? Free from vendor lock-in?',
    weight: 'critical',
    icon: 'Package',
    details: [
      '5 = Full ownership: self-hostable, local storage, deploy anywhere, no subscriptions required',
      '4 = Code stays local, flexible deployment, minor platform ties',
      '3 = Exportable output, but workflow tied to platform or subscription',
      '2 = Significant platform lock-in: managed databases, proprietary hosting, subscription walls',
      '1 = Severe lock-in: code/data trapped, no export, platform-dependent'
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
        weights: { shakespeare: 5, goose: 5, cursor: 2, lovable: 1, base44: 1, replit: 2, v0: 1 }
      },
      {
        id: 'ease',
        label: 'Ease of Use',
        description: 'I want to get things done quickly without complexity',
        weights: { shakespeare: 3, goose: 2, cursor: 5, lovable: 5, base44: 5, replit: 5, v0: 5 }
      },
      {
        id: 'capabilities',
        label: 'Maximum Capabilities',
        description: 'I want the most powerful tools regardless of other factors',
        weights: { shakespeare: 3, goose: 4, cursor: 5, lovable: 5, base44: 4, replit: 5, v0: 4 }
      },
      {
        id: 'cost',
        label: 'Cost Efficiency',
        description: 'I want to minimize expenses',
        weights: { shakespeare: 5, goose: 5, cursor: 2, lovable: 2, base44: 2, replit: 3, v0: 2 }
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
        weights: { shakespeare: 5, goose: 2, cursor: 1, lovable: 1, base44: 1, replit: 1, v0: 1 }
      },
      {
        id: 'bitcoin',
        label: 'Bitcoin/Lightning Apps',
        description: 'Wallets, payment integrations, Bitcoin tools',
        weights: { shakespeare: 4, goose: 4, cursor: 2, lovable: 1, base44: 1, replit: 2, v0: 1 }
      },
      {
        id: 'traditional',
        label: 'Traditional Web Apps',
        description: 'SaaS, e-commerce, or standard web applications',
        weights: { shakespeare: 3, goose: 3, cursor: 5, lovable: 5, base44: 5, replit: 5, v0: 4 }
      },
      {
        id: 'ui',
        label: 'UI/Design Projects',
        description: 'Component libraries, design systems, visual work',
        weights: { shakespeare: 3, goose: 2, cursor: 4, lovable: 4, base44: 3, replit: 3, v0: 5 }
      }
    ]
  },
  {
    id: 'models',
    question: 'Which AI models do you want to use?',
    description: 'Consider whether you want flexibility in model choice',
    options: [
      {
        id: 'open',
        label: 'Open models (Llama, Mistral, etc.)',
        description: 'I want to use open-weight models I can run locally',
        weights: { shakespeare: 5, goose: 5, cursor: 3, lovable: 1, base44: 1, replit: 2, v0: 1 }
      },
      {
        id: 'any',
        label: 'Any provider (OpenRouter, etc.)',
        description: 'I want to choose from many providers',
        weights: { shakespeare: 5, goose: 5, cursor: 4, lovable: 1, base44: 1, replit: 2, v0: 1 }
      },
      {
        id: 'proprietary',
        label: 'Best proprietary (GPT-4, Claude)',
        description: 'I want the best models regardless of openness',
        weights: { shakespeare: 4, goose: 4, cursor: 5, lovable: 5, base44: 4, replit: 4, v0: 4 }
      },
      {
        id: 'doesnt-matter',
        label: 'Doesn\'t matter',
        description: 'I just want something that works',
        weights: { shakespeare: 3, goose: 3, cursor: 4, lovable: 5, base44: 5, replit: 5, v0: 4 }
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
        weights: { shakespeare: 5, goose: 5, cursor: 1, lovable: 1, base44: 1, replit: 1, v0: 1 }
      },
      {
        id: 'important',
        label: 'Very Important',
        description: 'I care deeply about data sovereignty',
        weights: { shakespeare: 5, goose: 5, cursor: 2, lovable: 2, base44: 2, replit: 2, v0: 2 }
      },
      {
        id: 'moderate',
        label: 'Somewhat Important',
        description: 'I prefer privacy but it\'s not a dealbreaker',
        weights: { shakespeare: 4, goose: 4, cursor: 3, lovable: 3, base44: 3, replit: 3, v0: 3 }
      },
      {
        id: 'low',
        label: 'Not a Priority',
        description: 'I\'m okay with standard terms of service',
        weights: { shakespeare: 3, goose: 3, cursor: 4, lovable: 4, base44: 4, replit: 4, v0: 4 }
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
        weights: { shakespeare: 4, goose: 1, cursor: 4, lovable: 5, base44: 5, replit: 4, v0: 5 }
      },
      {
        id: 'some',
        label: 'Some Experience',
        description: 'I\'ve dabbled but I\'m not a developer',
        weights: { shakespeare: 4, goose: 2, cursor: 5, lovable: 5, base44: 5, replit: 5, v0: 5 }
      },
      {
        id: 'comfortable',
        label: 'Comfortable with Code',
        description: 'I can read and modify code',
        weights: { shakespeare: 5, goose: 4, cursor: 5, lovable: 4, base44: 4, replit: 5, v0: 4 }
      },
      {
        id: 'expert',
        label: 'Professional Developer',
        description: 'I write code daily',
        weights: { shakespeare: 5, goose: 5, cursor: 5, lovable: 3, base44: 3, replit: 4, v0: 4 }
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
        weights: { shakespeare: 5, goose: 5, cursor: 1, lovable: 0, base44: 0, replit: 1, v0: 0 }
      },
      {
        id: 'prefer',
        label: 'Strongly Prefer',
        description: 'I choose open source when possible',
        weights: { shakespeare: 5, goose: 5, cursor: 2, lovable: 2, base44: 2, replit: 2, v0: 2 }
      },
      {
        id: 'nice',
        label: 'Nice to Have',
        description: 'I appreciate open source but it\'s not required',
        weights: { shakespeare: 4, goose: 4, cursor: 4, lovable: 4, base44: 4, replit: 3, v0: 3 }
      },
      {
        id: 'indifferent',
        label: 'Doesn\'t Matter',
        description: 'I just want what works best',
        weights: { shakespeare: 3, goose: 3, cursor: 5, lovable: 5, base44: 5, replit: 5, v0: 5 }
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
