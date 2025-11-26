import { useState } from 'react';
import { LayoutGrid, TableIcon } from 'lucide-react';
import { AI_TOOLS } from '@/lib/tools';
import { ToolCard } from './ToolCard';
import { ComparisonTable } from './ComparisonTable';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

type SortOption = 'freedom' | 'ease' | 'overall';
type ViewMode = 'cards' | 'table';

export function ToolComparison() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('freedom');
  const [viewMode, setViewMode] = useState<ViewMode>('cards');

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

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-lg">
            <Button
              variant={viewMode === 'cards' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('cards')}
              className={viewMode === 'cards' ? 'bg-amber-500/20 text-amber-400' : ''}
            >
              <LayoutGrid className="w-4 h-4 mr-2" />
              Cards
            </Button>
            <Button
              variant={viewMode === 'table' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('table')}
              className={viewMode === 'table' ? 'bg-amber-500/20 text-amber-400' : ''}
            >
              <TableIcon className="w-4 h-4 mr-2" />
              Table
            </Button>
          </div>

          {/* Sort Options (only for cards view) */}
          {viewMode === 'cards' && (
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
          )}
        </div>

        {/* Content */}
        {viewMode === 'cards' ? (
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
        ) : (
          <ComparisonTable />
        )}

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
          Scores are based on our evaluation criteria and may change as tools evolve.
          We encourage you to do your own research and try the tools yourself.
        </p>
      </div>
    </section>
  );
}
