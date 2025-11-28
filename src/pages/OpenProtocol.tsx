import { useSeoMeta } from '@unhead/react';
import { PageLayout } from '@/components/PageLayout';
import { GlobeHero } from '@/components/GlobeHero';
import {
  ArrowRightLeft,
  Server,
  Key,
  FileJson,
  CheckCircle2,
  Zap,
  Code,
  Globe,
  Layers,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function OpenProtocol() {
  useSeoMeta({
    title: 'Open Protocol | AI Sovereignty Index',
    description: 'Open protocols that prevent vendor lock-in. The universal API standard that lets you switch AI providers freely without changing your code.',
    ogTitle: 'Open Protocol | AI Sovereignty Index',
    ogDescription: 'Open protocols that prevent vendor lock-in. Switch AI providers freely without changing your code.',
    ogImage: '/og-image.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterImage: '/og-image.png',
  });

  const benefits = [
    {
      icon: ArrowRightLeft,
      title: 'Provider Independence',
      description: 'Switch between OpenAI, Anthropic, local models, and others without rewriting your application code.',
    },
    {
      icon: Server,
      title: 'Self-Hosting Freedom',
      description: 'Run compatible models on your own infrastructure with the same API your app already uses.',
    },
    {
      icon: Key,
      title: 'Unified Authentication',
      description: 'Standard Bearer token authentication works across all compatible providers.',
    },
    {
      icon: FileJson,
      title: 'Consistent Responses',
      description: 'Predictable JSON response formats mean your parsing logic works everywhere.',
    },
  ];

  const endpoints = [
    {
      method: 'POST',
      path: '/v1/chat/completions',
      description: 'Generate conversational responses with system, user, and assistant messages.',
    },
    {
      method: 'POST',
      path: '/v1/completions',
      description: 'Text completion for prompts (legacy, but widely supported).',
    },
    {
      method: 'POST',
      path: '/v1/embeddings',
      description: 'Generate vector embeddings for semantic search and similarity.',
    },
    {
      method: 'GET',
      path: '/v1/models',
      description: 'List available models from the provider.',
    },
  ];

  const compatibleProviders = [
    { name: 'OpenAI', description: 'The original API specification creator', native: true },
    { name: 'Anthropic', description: 'Claude models via compatible wrappers', native: false },
    { name: 'OpenRouter', description: 'Universal gateway to 100+ models', native: false },
    { name: 'Together AI', description: 'Open source models at scale', native: false },
    { name: 'Groq', description: 'Ultra-fast inference hardware', native: false },
    { name: 'Ollama', description: 'Local models on your machine', native: false },
    { name: 'LM Studio', description: 'Desktop app for local inference', native: false },
    { name: 'vLLM', description: 'High-throughput serving engine', native: false },
    { name: 'llama.cpp', description: 'Efficient CPU/GPU inference', native: false },
    { name: 'Hugging Face TGI', description: 'Text Generation Inference server', native: false },
  ];

  return (
    <PageLayout>
      {/* Hero Section with Globe */}
      <GlobeHero
        badge={{
          icon: <Globe className="w-4 h-4" />,
          text: 'Universal API Standard',
        }}
        title={
          <>
            <span className="text-gradient-glow">Open Protocol</span>
            <br />
            <span className="text-foreground">for AI</span>
          </>
        }
        subtitle="One API specification. Dozens of providers. Complete freedom to choose—and change."
        description="The OpenAI API specification has become the de facto standard for AI inference. By building to this spec, your applications become provider-agnostic, giving you true flexibility and avoiding vendor lock-in."
        primaryAction={{
          label: 'Explore Open Models',
          href: '/open-models',
        }}
        secondaryAction={{
          label: 'View API Docs',
          href: 'https://platform.openai.com/docs/api-reference',
        }}
      />

      {/* Benefits Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why <span className="text-gradient">Standardization</span> Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A common API specification creates a healthy ecosystem where providers compete
              on quality and cost, not lock-in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Endpoints Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background" />

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-gradient">Standardized</span> Endpoints
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The core API endpoints that make interoperability possible. Build once, deploy anywhere.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <span className={`inline-block px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                    endpoint.method === 'POST'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <code className="text-cyan-300 font-mono text-sm">{endpoint.path}</code>
                  <p className="text-muted-foreground text-sm mt-1">{endpoint.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="rounded-2xl bg-card border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-muted-foreground font-mono">Example: Chat Completion Request</span>
              </div>
              <pre className="p-6 overflow-x-auto text-sm">
                <code className="text-muted-foreground">{`curl https://api.openai.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{
    "model": "gpt-4",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ]
  }'`}
                </code>
              </pre>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4">
              This exact request format works with <span className="text-cyan-400">dozens of providers</span>—just change the base URL.
            </p>
          </div>
        </div>
      </section>

      {/* Compatible Providers Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-gradient">Compatible</span> Providers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A growing ecosystem of providers and tools that speak the same language.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {compatibleProviders.map((provider, index) => (
              <div
                key={index}
                className="group p-4 rounded-xl bg-card/30 border border-border hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-display font-medium text-sm">{provider.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background" />

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How <span className="text-gradient">Compatibility</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The key elements that make the OpenAI API spec a universal standard.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                <Layers className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Standard Endpoints</h3>
              <p className="text-muted-foreground text-sm">
                <code className="text-cyan-300">/v1/chat/completions</code> works the same everywhere—request format,
                response structure, and streaming support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                <Key className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Bearer Authentication</h3>
              <p className="text-muted-foreground text-sm">
                Simple <code className="text-cyan-300">Authorization: Bearer</code> header authentication
                that every HTTP client already supports.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">JSON Responses</h3>
              <p className="text-muted-foreground text-sm">
                Consistent JSON response format with <code className="text-cyan-300">choices</code>,
                <code className="text-cyan-300 ml-1">usage</code>, and standardized error handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-950/30 via-card/50 to-background border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Choose Your <span className="text-gradient">Open Models</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Now that you understand the protocol, discover the truly open AI models
                that you can use with any compatible provider.
              </p>
              <Link to="/open-models">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold glow-blue-sm transition-all duration-300 hover:scale-105"
                >
                  Explore Open Models
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
