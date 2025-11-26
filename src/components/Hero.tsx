import { ArrowDown, Sparkles, Shield, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onExplore: () => void;
  onFindTool: () => void;
}

export function Hero({ onExplore, onFindTool }: HeroProps) {
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
            <span className="text-gradient-glow">Freedom AI</span>
            <br />
            <span className="text-foreground">Tool Evaluator</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Find the right <span className="text-cyan-400 font-medium">vibe coding</span> tool for you
          </p>

          {/* Tagline */}
          <p className="max-w-xl text-base md:text-lg text-muted-foreground/80 mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Not all AI is created equal. We evaluate coding assistants through the lens of{' '}
            <span className="text-cyan-400 font-medium">openness</span>,{' '}
            <span className="text-sky-400 font-medium">privacy</span>, and{' '}
            <span className="text-blue-400 font-medium">protocol support</span>—so you can code with tools that align with your values.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold glow-blue-sm transition-all duration-300 hover:scale-105 group"
              onClick={onFindTool}
            >
              Find Your Tool
              <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
              onClick={onExplore}
            >
              Explore Open AI
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="group p-5 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 hover:bg-card/80">
              <Code className="w-7 h-7 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold mb-2 text-sm">Open Source First</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">We prioritize tools you can audit, modify, and self-host</p>
            </div>
            <div className="group p-5 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-md hover:border-sky-500/40 transition-all duration-300 hover:bg-card/80">
              <Shield className="w-7 h-7 text-sky-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold mb-2 text-sm">Privacy Aware</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Know exactly what data each tool collects—and what it doesn't</p>
            </div>
            <div className="group p-5 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-md hover:border-blue-500/40 transition-all duration-300 hover:bg-card/80">
              <Zap className="w-7 h-7 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold mb-2 text-sm">Protocol Savvy</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Find tools that speak Nostr, Bitcoin, and freedom tech</p>
            </div>
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
