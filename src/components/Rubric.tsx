import { RUBRIC_CATEGORIES } from '@/lib/tools';
import { Code, Shield, Network, Sparkles, Package, Zap, Globe, Database } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Map category IDs to their chart colors (matching ToolCard score bars)
const categoryColors: Record<string, { icon: string; bg: string }> = {
  openSource: { icon: 'text-orange-400', bg: 'bg-orange-500/10' },
  privacy: { icon: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  protocolSupport: { icon: 'text-lime-400', bg: 'bg-lime-500/10' },
  openModelSupport: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  decentralization: { icon: 'text-teal-400', bg: 'bg-teal-500/10' },
  easeOfUse: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  portability: { icon: 'text-sky-400', bg: 'bg-sky-500/10' },
  capabilities: { icon: 'text-violet-400', bg: 'bg-violet-500/10' },
};

const iconComponents: Record<string, React.ElementType> = {
  Code,
  Shield,
  Network,
  Globe,
  Database,
  Sparkles,
  Package,
  Zap,
};

const weightColors: Record<string, string> = {
  critical: 'bg-red-500/20 text-red-300 border-red-500/30',
  important: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  moderate: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
};

export function Rubric() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
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
                className="border border-border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm data-[state=open]:border-cyan-500/30 transition-colors duration-300"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-cyan-500/5 transition-colors">
                  <div className="flex items-center gap-4 w-full">
                    {(() => {
                      const colors = categoryColors[category.id] || { icon: 'text-cyan-400', bg: 'bg-cyan-500/10' };
                      const IconComponent = iconComponents[category.icon];
                      return (
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} ${colors.icon}`}>
                          {IconComponent && <IconComponent className="w-6 h-6" />}
                        </div>
                      );
                    })()}
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-display font-semibold">{category.name}</h3>
                        <Badge
                          variant="outline"
                          className={weightColors[category.weight]}
                        >
                          {category.weight}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                    <span className="text-3xl font-display font-bold text-cyan-500/50 mr-4">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="ml-16 space-y-3 pt-2">
                    <h4 className="font-display font-medium text-cyan-300 mb-4">Scoring Guide</h4>
                    {category.details.map((detail, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium shrink-0 ${
                          i === 0 ? 'bg-emerald-500/20 text-emerald-300' :
                          i === 4 ? 'bg-red-500/20 text-red-300' :
                          'bg-muted text-foreground'
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
          <h4 className="font-display font-semibold text-lg mb-3">About Our Methodology</h4>
          <p className="text-muted-foreground leading-relaxed">
            Our scores are based on publicly available information, hands-on testing, and community feedback.
            We prioritize <span className="text-cyan-300">openness</span> and <span className="text-cyan-300">privacy</span> as critical factors
            because these are foundational to digital freedom. We update scores as tools evolve.
            Have feedback?{' '}
            <a
              href="https://andotherstuff.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-200"
            >
              Let us know
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
