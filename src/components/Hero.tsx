import { ArrowDown, Sparkles, Shield, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onExplore: () => void;
  onFindTool: () => void;
}

export function Hero({ onExplore, onFindTool }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(38 92% 55% / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(38 92% 55% / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>A project of And Other Stuff</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient">LibreCoder</span>
        </h1>

        <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Find AI tools that respect your freedom
        </p>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Not all AI is created equal. We evaluate coding assistants through the lens of{' '}
          <span className="text-amber-400">openness</span>,{' '}
          <span className="text-amber-400">privacy</span>, and{' '}
          <span className="text-amber-400">protocol support</span>—so you can vibe code with tools that align with your values.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-amber-500 hover:bg-amber-400 text-black font-medium glow-gold-sm transition-all duration-300 hover:scale-105"
            onClick={onFindTool}
          >
            Find Your Tool
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300"
            onClick={onExplore}
          >
            Compare Tools
          </Button>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-amber-500/30 transition-colors duration-300">
            <Code className="w-8 h-8 text-amber-400 mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Open Source First</h3>
            <p className="text-sm text-muted-foreground">We prioritize tools you can audit, modify, and self-host</p>
          </div>
          <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-amber-500/30 transition-colors duration-300">
            <Shield className="w-8 h-8 text-amber-400 mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Privacy Aware</h3>
            <p className="text-sm text-muted-foreground">Know exactly what data each tool collects—and what it doesn't</p>
          </div>
          <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-amber-500/30 transition-colors duration-300">
            <svg className="w-8 h-8 text-amber-400 mb-4 mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <h3 className="font-semibold mb-2">Protocol Savvy</h3>
            <p className="text-sm text-muted-foreground">Find tools that speak Nostr, Bitcoin, and freedom tech</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}
