import { Check, X } from 'lucide-react';
import { AI_TOOLS } from '@/lib/tools';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

type CategoryColor = 'amber' | 'yellow' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'violet';

// Using lighter color variants for better accessibility on dark backgrounds
const categoryColors: Record<CategoryColor, string> = {
  amber: 'text-amber-300',
  yellow: 'text-yellow-200',
  lime: 'text-lime-300',
  emerald: 'text-emerald-300',
  teal: 'text-teal-300',
  cyan: 'text-cyan-300',
  sky: 'text-sky-300',
  violet: 'text-violet-300',
};

function ScoreCell({ value, color }: { value: number; color: CategoryColor }) {
  // Dim the color if the score is low
  const opacity = value >= 4 ? '' : value >= 3 ? 'opacity-90' : 'opacity-60';

  return (
    <span className={`font-medium text-base ${categoryColors[color]} ${opacity}`}>
      {value}/5
    </span>
  );
}

function BooleanCell({ value, quality }: { value: boolean; quality?: string }) {
  if (value) {
    return (
      <div className="flex items-center justify-center gap-1.5">
        <Check className="w-5 h-5 text-emerald-400" />
        {quality && <span className="text-sm text-muted-foreground">({quality})</span>}
      </div>
    );
  }
  return <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />;
}

export function ComparisonTable() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Side-by-Side <span className="text-gradient">Comparison</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            Quick reference for all tools across all categories
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[1100px]">
            <Table>
              <TableHeader>
                <TableRow className="border-cyan-500/20 hover:bg-transparent">
                  <TableHead className="w-[180px] font-display font-semibold text-foreground text-base">Tool</TableHead>
                  <TableHead className="text-center font-display text-amber-300">Open Source</TableHead>
                  <TableHead className="text-center font-display text-yellow-200">Privacy</TableHead>
                  <TableHead className="text-center font-display text-lime-300">Open Protocol</TableHead>
                  <TableHead className="text-center font-display text-emerald-300">Open Models</TableHead>
                  <TableHead className="text-center font-display text-teal-300">Decentralized</TableHead>
                  <TableHead className="text-center font-display text-cyan-300">Ease of Use</TableHead>
                  <TableHead className="text-center font-display text-sky-300">Cost</TableHead>
                  <TableHead className="text-center font-display text-violet-300">Capabilities</TableHead>
                  <TableHead className="text-center font-display text-foreground">Nostr</TableHead>
                  <TableHead className="text-center font-display text-foreground">Bitcoin</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {AI_TOOLS.map((tool) => {
                  const nostr = tool.protocols.find(p => p.name === 'Nostr');
                  const bitcoin = tool.protocols.find(p => p.name === 'Bitcoin/Lightning');

                  return (
                    <TableRow
                      key={tool.id}
                      className="border-border/50 hover:bg-cyan-500/5"
                    >
                      <TableCell className="font-medium py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                            {tool.logo ? (
                              <img
                                src={tool.logo}
                                alt={`${tool.name} logo`}
                                className="w-7 h-7 object-contain"
                              />
                            ) : (
                              <span className="text-base font-display font-bold text-cyan-400">
                                {tool.name.charAt(0)}
                              </span>
                            )}
                          </div>
                          <div>
                            <span className="block font-display text-base">{tool.name}</span>
                            <Badge
                              variant="outline"
                              className={`text-xs mt-1 ${
                                tool.openSourceLevel === 'fully-open'
                                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                                  : tool.openSourceLevel === 'partially-open'
                                  ? 'bg-yellow-500/10 text-yellow-200 border-yellow-500/20'
                                  : 'bg-red-500/10 text-red-300 border-red-500/20'
                              }`}
                            >
                              {tool.openSourceLevel === 'fully-open' ? 'Open' :
                               tool.openSourceLevel === 'partially-open' ? 'Partial' : 'Closed'}
                            </Badge>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.openSource} color="amber" />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.privacy} color="yellow" />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.protocolSupport} color="lime" />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.openModelSupport} color="emerald" />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.decentralization} color="teal" />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.easeOfUse} color="cyan" />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.costEfficiency} color="sky" />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.capabilities} color="violet" />
                      </TableCell>
                      <TableCell className="text-center">
                        <BooleanCell
                          value={nostr?.supported || false}
                          quality={nostr?.quality}
                        />
                      </TableCell>
                      <TableCell className="text-center">
                        <BooleanCell
                          value={bitcoin?.supported || false}
                          quality={bitcoin?.quality}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <span>Open Source</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <span>Privacy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lime-400" />
            <span>Open Protocol</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span>Open Models</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-400" />
            <span>Decentralized</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400" />
            <span>Ease of Use</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-sky-400" />
            <span>Cost</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-violet-400" />
            <span>Capabilities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
