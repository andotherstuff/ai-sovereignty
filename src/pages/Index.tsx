import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Manifesto } from '@/components/Manifesto';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Globe,
  Database,
  Wrench,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const Index = () => {
  useSeoMeta({
    title: 'AI Sovereignty Index',
    description: 'Navigate the AI landscape with sovereignty in mind. We champion open protocols that prevent vendor lock-in, open models you can run anywhere, and open tools that respect your autonomy.',
    ogTitle: 'AI Sovereignty Index',
    ogDescription: 'Navigate the AI landscape with sovereignty in mind. Open protocols, open models, and open tools that respect your autonomy.',
    ogImage: '/og-image.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterImage: '/og-image.png',
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const pillars = [
    {
      to: '/open-protocol',
      icon: Globe,
      title: 'Open Protocol',
      subtitle: 'Universal API Standard',
      description: 'The OpenAI API specification enables developers to switch between providers without changing application code. One API, dozens of providers, complete freedom.',
      highlights: ['Provider Independence', 'Self-Hosting Ready', 'Standard Authentication'],
      color: 'cyan',
      cta: 'Learn the Protocol',
    },
    {
      to: '/open-models',
      icon: Database,
      title: 'Open Models',
      subtitle: 'Truly Open AI',
      description: 'AI models with accessible weights, transparent training, and freedom to modify. Following the OSI definition of Open Source AI.',
      highlights: ['Accessible Weights', 'Transparent Training', 'Freedom to Modify'],
      color: 'sky',
      cta: 'Explore Models',
    },
    {
      to: '/open-tools',
      icon: Wrench,
      title: 'Open Tools',
      subtitle: 'Vibe Coding Comparison',
      description: 'Compare AI coding assistants through the lens of openness, privacy, and protocol support. Find the tool that matches your values.',
      highlights: ['Freedom Scored', 'Privacy Rated', 'Protocol Support'],
      color: 'blue',
      cta: 'Compare Tools',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onNavigate={scrollToSection} />

      <main>
        {/* Hero Section */}
        <Hero
          onExplore={() => scrollToSection('pillars')}
          onFindTool={() => window.location.href = '/open-tools'}
        />

        {/* Why Open AI Matters */}
        <Manifesto />

        {/* Three Pillars Section */}
        <section id="pillars" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background" />

          <div className="relative container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                The Three <span className="text-gradient">Pillars</span> of Open AI
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                True freedom in AI requires openness at every layer—from the protocols we use,
                to the models we run, to the tools we build with.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pillars.map((pillar, index) => (
                <Link
                  key={index}
                  to={pillar.to}
                  className="group block"
                >
                  <div className="h-full p-8 rounded-3xl bg-card/50 border border-border hover:border-cyan-500/40 transition-all duration-500 hover:bg-card/80 hover:shadow-xl hover:shadow-cyan-500/5">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-${pillar.color}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <pillar.icon className={`w-7 h-7 text-${pillar.color}-400`} />
                      </div>
                      <div>
                        <span className={`text-xs font-medium text-${pillar.color}-400 uppercase tracking-wide`}>
                          {pillar.subtitle}
                        </span>
                        <h3 className="text-2xl font-display font-bold group-hover:text-cyan-300 transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-8">
                      {pillar.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 text-${pillar.color}-400`} />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                      <span>{pillar.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-950/30 via-card/50 to-background border border-cyan-500/20">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Ready to Find Your <span className="text-gradient">Freedom Tool</span>?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Take our quiz to get a personalized recommendation, or dive straight into
                  comparing all the tools on our evaluation rubric.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/quiz">
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold glow-blue-sm transition-all duration-300 hover:scale-105"
                    >
                      Find Your Tool
                      <Sparkles className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/open-models">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      Explore Open Models
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
