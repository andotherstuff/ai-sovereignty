import { ArrowDown, Sparkles, Globe, Database, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  onExplore: () => void;
  onFindTool: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/earth-background.png)',
        }}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      {/* Atmospheric glow effect on the right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Subtle star particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-1 h-1 bg-white/60 rounded-full animate-pulse" />
        <div className="absolute top-32 left-[25%] w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-48 left-[15%] w-1 h-1 bg-cyan-300/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-16 left-[35%] w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-64 left-[5%] w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <a
            href="https://andotherstuff.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8 animate-fade-in hover:bg-cyan-500/20 transition-colors backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>A project of And Other Stuff</span>
          </a>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient-glow">AI Sovereignty</span>
            <br />
            <span className="text-foreground">Index</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Navigate the AI landscape with <span className="text-cyan-400 font-medium">sovereignty</span> in mind
          </p>

          {/* Tagline */}
          <p className="max-w-xl text-base md:text-lg text-muted-foreground/80 mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            We champion <span className="text-cyan-400 font-medium">open protocols</span> that prevent vendor lock-in,
            <span className="text-sky-400 font-medium"> open models</span> you can run anywhere, and{' '}
            <span className="text-blue-400 font-medium">open tools</span> that respect your sovereignty—so you can build with AI that aligns with your values.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/quiz">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold glow-blue-sm transition-all duration-300 hover:scale-105 group"
              >
                Find Your Tool
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
              onClick={onExplore}
            >
              Explore Open AI
            </Button>
          </div>

          {/* Three Pillars of Open AI */}
          <div className="grid md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Link to="/open-protocol" className="group p-5 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 hover:bg-card/80">
              <Globe className="w-7 h-7 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold mb-2 text-sm">Open Protocol</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">One universal API standard that lets you switch providers freely</p>
            </Link>
            <Link to="/open-models" className="group p-5 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-md hover:border-sky-500/40 transition-all duration-300 hover:bg-card/80">
              <Database className="w-7 h-7 text-sky-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold mb-2 text-sm">Open Models</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">AI with accessible weights, transparent training, and freedom to modify</p>
            </Link>
            <Link to="/open-tools" className="group p-5 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-md hover:border-blue-500/40 transition-all duration-300 hover:bg-card/80">
              <Wrench className="w-7 h-7 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold mb-2 text-sm">Open Tools</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Vibe coding assistants evaluated for openness, privacy, and protocol support</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-cyan-500/60" />
      </div>
    </section>
  );
}
