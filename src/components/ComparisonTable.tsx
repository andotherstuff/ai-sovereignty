import { Check, X } from 'lucide-react';
import { AI_TOOLS, RUBRIC_CATEGORIES } from '@/lib/tools';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

function ScoreCell({ value }: { value: number }) {
  const color = value >= 4 ? 'text-emerald-400' :
                value >= 3 ? 'text-amber-400' :
                'text-red-400';

  return (
    <span className={`font-medium ${color}`}>
      {value}/5
    </span>
  );
}

function BooleanCell({ value, quality }: { value: boolean; quality?: string }) {
  if (value) {
    return (
      <div className="flex items-center gap-1">
        <Check className="w-4 h-4 text-emerald-400" />
        {quality && <span className="text-xs text-muted-foreground">({quality})</span>}
      </div>
    );
  }
  return <X className="w-4 h-4 text-muted-foreground/50" />;
}

export function ComparisonTable() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-serif mb-3">
            Side-by-Side <span className="text-gradient">Comparison</span>
          </h3>
          <p className="text-muted-foreground">
            Quick reference for all tools across all categories
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[800px]">
            <Table>
              <TableHeader>
                <TableRow className="border-amber-500/20 hover:bg-transparent">
                  <TableHead className="w-[180px] font-semibold text-foreground">Tool</TableHead>
                  {RUBRIC_CATEGORIES.map((cat) => (
                    <TableHead key={cat.id} className="text-center text-foreground">
                      {cat.name}
                    </TableHead>
                  ))}
                  <TableHead className="text-center text-foreground">Nostr</TableHead>
                  <TableHead className="text-center text-foreground">Bitcoin</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {AI_TOOLS.map((tool) => {
                  const nostr = tool.protocols.find(p => p.name === 'Nostr');
                  const bitcoin = tool.protocols.find(p => p.name === 'Bitcoin/Lightning');

                  return (
                    <TableRow
                      key={tool.id}
                      className="border-border/50 hover:bg-amber-500/5"
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-sm font-serif text-amber-400 shrink-0">
                            {tool.name.charAt(0)}
                          </div>
                          <div>
                            <span className="block">{tool.name}</span>
                            <Badge
                              variant="outline"
                              className={`text-[10px] mt-1 ${
                                tool.openSourceLevel === 'fully-open'
                                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                  : tool.openSourceLevel === 'partially-open'
                                  ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                                  : 'bg-red-500/10 text-red-400 border-red-500/20'
                              }`}
                            >
                              {tool.openSourceLevel === 'fully-open' ? 'Open' :
                               tool.openSourceLevel === 'partially-open' ? 'Partial' : 'Closed'}
                            </Badge>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.openSource} />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.privacy} />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.protocolSupport} />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.easeOfUse} />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.costEfficiency} />
                      </TableCell>
                      <TableCell className="text-center">
                        <ScoreCell value={tool.scores.capabilities} />
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
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">4-5</span>
            <span>Excellent</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">3</span>
            <span>Good</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400">1-2</span>
            <span>Limited</span>
          </div>
        </div>
      </div>
    </section>
  );
}
