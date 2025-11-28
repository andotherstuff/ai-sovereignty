import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface GlobeHeroProps {
  badge?: {
    icon: ReactNode;
    text: string;
    href?: string;
  };
  title: ReactNode;
  subtitle?: string;
  description: string;
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  showScrollIndicator?: boolean;
}

export function GlobeHero({
  badge,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  showScrollIndicator = true,
}: GlobeHeroProps) {
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
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30 dark:via-background/90 dark:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40 dark:via-transparent dark:to-background/50" />

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
          {badge && (
            badge.href ? (
              <a
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-700/10 border border-cyan-700/30 text-cyan-700 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400 text-sm mb-8 animate-fade-in hover:bg-cyan-500/20 transition-colors backdrop-blur-sm"
              >
                {badge.icon}
                <span>{badge.text}</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-700/10 border border-cyan-700/30 text-cyan-700 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400 text-sm mb-8 animate-fade-in backdrop-blur-sm">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            )
          )}

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
          )}

          {/* Description */}
          <p className="max-w-xl text-base md:text-lg text-muted-foreground/80 mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            {description}
          </p>

          {/* CTA Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {primaryAction && (
                primaryAction.href ? (
                  <a href={primaryAction.href}>
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold glow-blue-sm transition-all duration-300 hover:scale-105 group"
                    >
                      {primaryAction.label}
                      <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </a>
                ) : (
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold glow-blue-sm transition-all duration-300 hover:scale-105 group"
                    onClick={primaryAction.onClick}
                  >
                    {primaryAction.label}
                    <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </Button>
                )
              )}
              {secondaryAction && (
                secondaryAction.href ? (
                  <a href={secondaryAction.href}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-cyan-700/40 text-cyan-700 hover:bg-cyan-500/10 hover:border-cyan-700/60 dark:border-cyan-500/30 dark:text-cyan-400 dark:hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                    >
                      {secondaryAction.label}
                    </Button>
                  </a>
                ) : (
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-cyan-700/40 text-cyan-700 hover:bg-cyan-500/10 hover:border-cyan-700/60 dark:border-cyan-500/30 dark:text-cyan-400 dark:hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                    onClick={secondaryAction.onClick}
                  >
                    {secondaryAction.label}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ArrowDown className="w-6 h-6 text-cyan-500/60" />
        </div>
      )}
    </section>
  );
}
