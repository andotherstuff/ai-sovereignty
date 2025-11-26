import { useSeoMeta } from '@unhead/react';
import { PageLayout } from '@/components/PageLayout';
import { 
  Scale, 
  Eye, 
  GitFork, 
  Share2, 
  CheckCircle2, 
  Cpu,
  Sparkles,
  ExternalLink,
  Database,
  BookOpen,
  Server,
  Zap,
  Users,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export default function OpenModels() {
  useSeoMeta({
    title: 'Open Models | FATE - Freedom AI Tool Evaluator',
    description: 'Discover truly open AI models with accessible weights, transparent training, and freedom to modify. Based on the OSI Open Source AI Definition.',
    ogTitle: 'Open Models | FATE',
    ogDescription: 'Highlighting truly open AI models and the inference engines that power them.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  });

  const osiPrinciples = [
    {
      icon: Scale,
      title: 'Accessible Weights',
      description: 'Model weights are freely available for download without restrictive terms. You can run the model locally on your own hardware.',
      color: 'cyan',
    },
    {
      icon: Eye,
      title: 'Transparent Training',
      description: 'Training data, methodology, and processes are documented and available for scrutiny. You understand what went into the model.',
      color: 'sky',
    },
    {
      icon: GitFork,
      title: 'Freedom to Modify',
      description: 'You can fine-tune, adapt, and build upon the model for your specific needs without legal barriers.',
      color: 'blue',
    },
    {
      icon: Share2,
      title: 'Freedom to Redistribute',
      description: 'Share your modifications and derivatives with others, fostering a collaborative ecosystem.',
      color: 'indigo',
    },
  ];

  const openModels = [
    {
      name: 'Llama 3.1',
      creator: 'Meta',
      description: 'Meta\'s flagship open model family. Llama 3.1 405B rivals GPT-4 class models while being fully open weight.',
      sizes: ['8B', '70B', '405B'],
      highlights: ['Multilingual', 'Long context (128K)', 'Tool use'],
      openness: 'Open Weight',
      link: 'https://llama.meta.com/',
    },
    {
      name: 'Mistral',
      creator: 'Mistral AI',
      description: 'Efficient, high-performance models from Paris. Known for excellent reasoning and instruction following.',
      sizes: ['7B', '8x7B (MoE)', '8x22B (MoE)'],
      highlights: ['Mixture of Experts', 'Apache 2.0', 'Fast inference'],
      openness: 'Open Weight',
      link: 'https://mistral.ai/',
    },
    {
      name: 'Qwen 2.5',
      creator: 'Alibaba',
      description: 'Powerful multilingual models excelling at math, coding, and reasoning tasks.',
      sizes: ['0.5B', '1.5B', '7B', '14B', '32B', '72B'],
      highlights: ['Code specialist', 'Math focused', '128K context'],
      openness: 'Open Weight',
      link: 'https://qwenlm.github.io/',
    },
    {
      name: 'DeepSeek V3',
      creator: 'DeepSeek',
      description: 'Chinese AI lab producing competitive open models with strong reasoning capabilities.',
      sizes: ['7B', '67B', '671B (MoE)'],
      highlights: ['MoE architecture', 'Strong reasoning', 'MIT License'],
      openness: 'Open Weight',
      link: 'https://www.deepseek.com/',
    },
    {
      name: 'Gemma 2',
      creator: 'Google',
      description: 'Google\'s lightweight open models designed for efficiency and easy deployment.',
      sizes: ['2B', '9B', '27B'],
      highlights: ['Efficient', 'Good for fine-tuning', 'Google research'],
      openness: 'Open Weight',
      link: 'https://ai.google.dev/gemma',
    },
    {
      name: 'Phi-3',
      creator: 'Microsoft',
      description: 'Small but mighty models that punch above their weight in reasoning and code.',
      sizes: ['3.8B', '7B', '14B'],
      highlights: ['Small & capable', 'MIT License', 'Great for edge'],
      openness: 'Open Weight',
      link: 'https://azure.microsoft.com/en-us/products/phi-3',
    },
    {
      name: 'Command R+',
      creator: 'Cohere',
      description: 'Enterprise-focused model with strong RAG and tool-use capabilities.',
      sizes: ['35B', '104B'],
      highlights: ['RAG optimized', 'Tool use', 'Long context'],
      openness: 'Open Weight',
      link: 'https://cohere.com/command',
    },
    {
      name: 'Yi',
      creator: '01.AI',
      description: 'Bilingual (Chinese-English) models with strong performance across benchmarks.',
      sizes: ['6B', '9B', '34B'],
      highlights: ['Bilingual', 'Apache 2.0', 'Vision variants'],
      openness: 'Open Weight',
      link: 'https://www.01.ai/',
    },
  ];

  const inferenceEngines = [
    {
      name: 'Ollama',
      description: 'The easiest way to run LLMs locally. One-command setup, automatic model management, and OpenAI-compatible API.',
      features: ['One-click install', 'Model library', 'OpenAI API compatible'],
      platform: 'Desktop & Server',
      link: 'https://ollama.ai/',
    },
    {
      name: 'LM Studio',
      description: 'Beautiful desktop app for discovering, downloading, and running local models with a chat interface.',
      features: ['GUI interface', 'Model search', 'Easy setup'],
      platform: 'Desktop',
      link: 'https://lmstudio.ai/',
    },
    {
      name: 'llama.cpp',
      description: 'The foundational C/C++ inference engine. Maximum performance and flexibility for developers.',
      features: ['Lightweight', 'CPU & GPU', 'GGUF format'],
      platform: 'All',
      link: 'https://github.com/ggerganov/llama.cpp',
    },
    {
      name: 'vLLM',
      description: 'High-throughput serving engine optimized for production deployments and batched inference.',
      features: ['PagedAttention', 'High throughput', 'OpenAI compatible'],
      platform: 'Server',
      link: 'https://vllm.ai/',
    },
    {
      name: 'Text Generation Inference',
      description: 'Hugging Face\'s production inference server with optimizations for transformer models.',
      features: ['Hugging Face', 'Tensor parallelism', 'Docker ready'],
      platform: 'Server',
      link: 'https://huggingface.co/docs/text-generation-inference',
    },
    {
      name: 'LocalAI',
      description: 'Drop-in replacement for OpenAI API that runs locally. Supports multiple backends and model types.',
      features: ['OpenAI drop-in', 'Multi-backend', 'Docker compose'],
      platform: 'Server',
      link: 'https://localai.io/',
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-background to-background" />
        <div className="absolute top-20 left-[20%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8">
              <Database className="w-4 h-4" />
              <span>Truly Open AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="text-gradient-glow">Open Models</span>
              <br />
              <span className="text-foreground">You Can Own</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              AI models with accessible weights, transparent training, and the 
              <span className="text-cyan-400 font-medium"> freedom to modify and redistribute</span>.
            </p>

            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12">
              Not all "open" models are truly open. We follow the OSI Open Source AI Definition 
              to highlight models that respect your freedom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/open-protocol">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold glow-blue-sm transition-all duration-300 hover:scale-105"
                >
                  Learn the Protocol
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a
                href="https://opensource.org/ai/open-source-ai-definition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                >
                  OSI Definition
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OSI Definition Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background" />
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium text-sm uppercase tracking-wide">OSI Definition</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What Makes AI <span className="text-gradient">Truly Open</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Open Source Initiative defines Open Source AI as models with these four essential freedoms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {osiPrinciples.map((principle, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-${principle.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <principle.icon className={`w-6 h-6 text-${principle.color}-400`} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Definition Quote */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-card/50 to-background border border-cyan-500/20">
              <blockquote className="text-center">
                <p className="text-lg md:text-xl text-foreground font-medium italic mb-4">
                  "Open Source AI means models with accessible weights, transparent training processes, 
                  and the freedom to modify and redistribute."
                </p>
                <cite className="text-muted-foreground text-sm">
                  — Based on the{' '}
                  <a 
                    href="https://opensource.org/ai/open-source-ai-definition" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    OSI Open Source AI Definition
                  </a>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Open Models Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium text-sm uppercase tracking-wide">Model Directory</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Truly <span className="text-gradient">Open Models</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading open-weight models you can download, run locally, and modify freely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {openModels.map((model, index) => (
              <a
                key={index}
                href={model.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="h-full p-6 rounded-2xl bg-card/50 border border-border hover:border-cyan-500/40 transition-all duration-300 hover:bg-card/80">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-lg group-hover:text-cyan-300 transition-colors">
                        {model.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{model.creator}</p>
                    </div>
                    <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
                      {model.openness}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {model.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1.5">Sizes</p>
                      <div className="flex flex-wrap gap-1.5">
                        {model.sizes.map((size, i) => (
                          <span key={i} className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-muted-foreground mb-1.5">Highlights</p>
                      <div className="flex flex-wrap gap-1.5">
                        {model.highlights.map((highlight, i) => (
                          <span key={i} className="px-2 py-0.5 text-xs rounded-md bg-cyan-500/10 text-cyan-400">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mt-4 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Inference Engines Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background" />
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Server className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium text-sm uppercase tracking-wide">Inference Engines</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Run Models <span className="text-gradient">Anywhere</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The tools and engines that let you run open models on your own hardware—from laptops to data centers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {inferenceEngines.map((engine, index) => (
              <a
                key={index}
                href={engine.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="h-full p-6 rounded-2xl bg-card/50 border border-border hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-semibold text-lg group-hover:text-cyan-300 transition-colors">
                      {engine.name}
                    </h3>
                    <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                      {engine.platform}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {engine.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {engine.features.map((feature, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs text-cyan-400">
                        <CheckCircle2 className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 mt-4 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Get started</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Open Models Matter */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Why Open Models <span className="text-gradient">Matter</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Sovereignty</h3>
                <p className="text-muted-foreground text-sm">
                  Run on your hardware, keep your data private, and never worry about API changes or shutdowns.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Open models enable a vibrant ecosystem of fine-tunes, tools, and shared knowledge.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  When anyone can inspect and improve models, progress accelerates for everyone.
                </p>
              </div>
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
                Find Your <span className="text-gradient">Perfect Tool</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to start coding with open AI? Use FATE to compare vibe coding tools 
                and find the one that supports the models you want.
              </p>
              <Link to="/">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold glow-blue-sm transition-all duration-300 hover:scale-105"
                >
                  Compare Tools
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
