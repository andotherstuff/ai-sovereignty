import { RUBRIC_CATEGORIES } from '@/lib/tools';
import { Code, Shield, Network, Sparkles, Coins, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Network: <Network className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Coins: <Coins className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
};

const weightColors: Record<string, string> = {
  critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  important: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  moderate: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

export function Rubric() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Our <span className="text-gradient">Evaluation</span> Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We rate every AI coding tool across six dimensions. Here's exactly how we score them.
          </p>
        </div>

        {/* Rubric Categories */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {RUBRIC_CATEGORIES.map((category, index) => (
              <AccordionItem 
                key={category.id} 
                value={category.id}
                className="border border-border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm data-[state=open]:border-amber-500/30 transition-colors duration-300"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-amber-500/5 transition-colors">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400">
                      {iconMap[category.icon]}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-semibold">{category.name}</h3>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${weightColors[category.weight]}`}
                        >
                          {category.weight}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                    <span className="text-3xl font-serif text-amber-500/50 mr-4">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="ml-16 space-y-3 pt-2">
                    <h4 className="text-sm font-medium text-amber-400 mb-3">Scoring Guide</h4>
                    {category.details.map((detail, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium shrink-0 ${
                          i === 0 ? 'bg-emerald-500/20 text-emerald-400' :
                          i === 4 ? 'bg-red-500/20 text-red-400' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {5 - i}
                        </span>
                        <span className={i === 0 ? 'text-foreground' : ''}>
                          {detail.split(' = ')[1]}
                        </span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Methodology Note */}
        <div className="max-w-4xl mx-auto mt-12 p-6 rounded-xl bg-muted/30 border border-border">
          <h4 className="font-semibold mb-2">About Our Methodology</h4>
          <p className="text-sm text-muted-foreground">
            Our scores are based on publicly available information, hands-on testing, and community feedback. 
            We prioritize <span className="text-amber-400">openness</span> and <span className="text-amber-400">privacy</span> as critical factors 
            because these are foundational to digital freedom. We update scores as tools evolve.
            Have feedback?{' '}
            <a 
              href="https://andotherstuff.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300"
            >
              Let us know
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
