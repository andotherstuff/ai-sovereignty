import { useState } from 'react';
import { AI_TOOLS } from '@/lib/tools';
import { ToolCard } from './ToolCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type SortOption = 'freedom' | 'ease' | 'overall';

export function ToolComparison() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('freedom');

  const sortedTools = [...AI_TOOLS].sort((a, b) => {
    switch (sortBy) {
      case 'freedom':
        // Prioritize open source and privacy
        const freedomA = a.scores.openSource * 2 + a.scores.privacy * 2 + a.scores.protocolSupport;
        const freedomB = b.scores.openSource * 2 + b.scores.privacy * 2 + b.scores.protocolSupport;
        return freedomB - freedomA;
      case 'ease':
        return b.scores.easeOfUse - a.scores.easeOfUse;
      case 'overall':
        const overallA = Object.values(a.scores).reduce((sum, v) => sum + v, 0);
        const overallB = Object.values(b.scores).reduce((sum, v) => sum + v, 0);
        return overallB - overallA;
      default:
        return 0;
    }
  });

  return (
    <section id="compare" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Compare <span className="text-gradient">AI Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how each tool stacks up on the metrics that matter to freedom-loving creators.
          </p>
        </div>

        {/* Sort Options */}
        <div className="flex justify-center mb-10">
          <Tabs value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
            <TabsList className="bg-muted/50">
              <TabsTrigger 
                value="freedom"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
              >
                🔓 Freedom First
              </TabsTrigger>
              <TabsTrigger 
                value="ease"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
              >
                ✨ Ease of Use
              </TabsTrigger>
              <TabsTrigger 
                value="overall"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
              >
                📊 Balanced
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Tool Grid */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {sortedTools.map((tool, index) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              rank={index + 1}
              expanded={expandedId === tool.id}
              onToggleExpand={() => setExpandedId(expandedId === tool.id ? null : tool.id)}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
          Scores are based on our evaluation criteria and may change as tools evolve. 
          We encourage you to do your own research and try the tools yourself.
        </p>
      </div>
    </section>
  );
}
