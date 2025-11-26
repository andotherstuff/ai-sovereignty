import { ExternalLink, Check, X, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { AITool } from '@/lib/tools';

interface ToolCardProps {
  tool: AITool;
  expanded?: boolean;
  onToggleExpand?: () => void;
  rank?: number;
}

const openSourceLabels: Record<string, { label: string; color: string }> = {
  'fully-open': { label: 'Fully Open Source', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  'partially-open': { label: 'Partially Open', color: 'bg-yellow-500/20 text-yellow-200 border-yellow-500/30' },
  'proprietary': { label: 'Proprietary', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
};

const privacyLabels: Record<string, { label: string; color: string }> = {
  'high': { label: 'Privacy-First', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  'medium': { label: 'Some Privacy', color: 'bg-yellow-500/20 text-yellow-200 border-yellow-500/30' },
  'low': { label: 'Limited Privacy', color: 'bg-red-500/20 text-red-300 border-red-500/30' },
};

export function ToolCard({ tool, expanded = false, onToggleExpand, rank }: ToolCardProps) {
  const osInfo = openSourceLabels[tool.openSourceLevel];
  const privacyInfo = privacyLabels[tool.privacyLevel];

  // Calculate overall score (weighted average)
  const overallScore = Math.round(
    (tool.scores.openSource * 1.5 +
     tool.scores.privacy * 1.5 +
     tool.scores.protocolSupport * 1.2 +
     tool.scores.openModelSupport * 1.2 +
     tool.scores.decentralization * 1.0 +
     tool.scores.easeOfUse +
     tool.scores.costEfficiency +
     tool.scores.capabilities) / 9.4 * 20
  );

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30 ${
      expanded ? 'border-cyan-500/30' : ''
    } ${rank === 1 ? 'ring-2 ring-cyan-500/30' : ''}`}>
      {/* Rank Badge */}
      {rank && (
        <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg ${
          rank === 1 ? 'bg-cyan-500 text-black' :
          rank === 2 ? 'bg-muted-foreground/20 text-muted-foreground' :
          'bg-muted text-muted-foreground/60'
        }`}>
          {rank}
        </div>
      )}

      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
            {tool.logo ? (
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <span className="text-2xl font-display font-bold text-cyan-400">
                {tool.name.charAt(0)}
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-xl font-display font-semibold truncate">{tool.name}</h3>
              <Badge variant="outline" className={osInfo.color}>
                {osInfo.label}
              </Badge>
            </div>
            <p className="text-muted-foreground">{tool.tagline}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Quick Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className={privacyInfo.color}>
            {privacyInfo.label}
          </Badge>
          <Badge variant="outline" className="bg-muted/50 text-foreground">
            {tool.pricing.type === 'free' ? 'Free' :
             tool.pricing.type === 'freemium' ? 'Freemium' :
             tool.pricing.type === 'pay-as-you-go' ? 'Pay As You Go' : 'Paid'}
          </Badge>
          {tool.protocols.find(p => p.name === 'Nostr' && p.supported) && (
            <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              Nostr Ready
            </Badge>
          )}
          {tool.protocols.find(p => p.name === 'Bitcoin/Lightning' && p.supported) && (
            <Badge variant="outline" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
              ₿ Bitcoin
            </Badge>
          )}
        </div>

        {/* Score Bars */}
        <div className="space-y-3">
          <ScoreBar label="Open Source" value={tool.scores.openSource} color="amber" />
          <ScoreBar label="Privacy" value={tool.scores.privacy} color="yellow" />
          <ScoreBar label="Open Protocol" value={tool.scores.protocolSupport} color="lime" />
          <ScoreBar label="Open Models" value={tool.scores.openModelSupport} color="emerald" />
          <ScoreBar label="Decentralization" value={tool.scores.decentralization} color="teal" />
          <ScoreBar label="Ease of Use" value={tool.scores.easeOfUse} color="cyan" />
          <ScoreBar label="Cost Efficiency" value={tool.scores.costEfficiency} color="sky" />
          <ScoreBar label="Capabilities" value={tool.scores.capabilities} color="violet" />
        </div>

        {/* Expanded Content */}
        {expanded && (
          <div className="space-y-6 pt-4 border-t border-border animate-fade-in">
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {tool.description}
            </p>

            {/* Features & Limitations */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-display font-medium text-emerald-300 mb-3">✓ Strengths</h4>
                <ul className="space-y-2">
                  {tool.features.slice(0, 5).map((feature, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-medium text-cyan-300 mb-3">⚠ Considerations</h4>
                <ul className="space-y-2">
                  {tool.limitations.map((limitation, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best For */}
            <div>
              <h4 className="font-display font-medium text-foreground mb-3">Best For</h4>
              <div className="flex flex-wrap gap-2">
                {tool.bestFor.map((useCase, i) => (
                  <Badge key={i} variant="secondary" className="text-foreground">
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Protocol Support */}
            <div>
              <h4 className="font-display font-medium text-foreground mb-3">Protocol Support</h4>
              <div className="grid grid-cols-2 gap-2">
                {tool.protocols.map((protocol) => (
                  <div
                    key={protocol.name}
                    className={`flex items-center gap-2 p-3 rounded-lg ${
                      protocol.supported ? 'bg-emerald-500/10' : 'bg-muted/30'
                    }`}
                  >
                    {protocol.supported ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground" />
                    )}
                    <span className={protocol.supported ? 'text-foreground' : 'text-muted-foreground'}>
                      {protocol.name}
                    </span>
                    {protocol.supported && (
                      <span className="text-sm text-muted-foreground">({protocol.quality})</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="p-4 rounded-lg bg-muted/30">
              <h4 className="font-display font-medium text-foreground mb-1">Pricing</h4>
              <p className="text-cyan-300 font-medium text-lg">{tool.pricing.startingPrice || 'Free'}</p>
              <p className="text-muted-foreground mt-1">{tool.pricing.details}</p>
            </div>
          </div>
        )}

        {/* Actions and Score */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-border/50">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={onToggleExpand}
            >
              {expanded ? 'Show Less' : 'Show More'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/10"
              asChild
            >
              <a href={tool.url} target="_blank" rel="noopener noreferrer">
                Visit Site
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Overall Score */}
          <div className="text-right">
            <div className="text-2xl font-display font-bold text-cyan-400">{overallScore}<span className="text-base text-muted-foreground font-normal">/100</span></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

type ScoreColor = 'amber' | 'yellow' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'violet';

// Using lighter color variants for better accessibility on dark backgrounds
const colorClasses: Record<ScoreColor, { bar: string; text: string; label: string }> = {
  amber: {
    bar: 'bg-amber-400',
    text: 'text-amber-300',
    label: 'text-amber-200'
  },
  yellow: {
    bar: 'bg-yellow-400',
    text: 'text-yellow-200',
    label: 'text-yellow-100'
  },
  lime: {
    bar: 'bg-lime-400',
    text: 'text-lime-300',
    label: 'text-lime-200'
  },
  emerald: {
    bar: 'bg-emerald-400',
    text: 'text-emerald-300',
    label: 'text-emerald-200'
  },
  teal: {
    bar: 'bg-teal-400',
    text: 'text-teal-300',
    label: 'text-teal-200'
  },
  cyan: {
    bar: 'bg-cyan-400',
    text: 'text-cyan-300',
    label: 'text-cyan-200'
  },
  sky: {
    bar: 'bg-sky-400',
    text: 'text-sky-300',
    label: 'text-sky-200'
  },
  violet: {
    bar: 'bg-violet-400',
    text: 'text-violet-300',
    label: 'text-violet-200'
  },
};

function ScoreBar({ label, value, color }: { label: string; value: number; color: ScoreColor }) {
  const percentage = (value / 5) * 100;
  const colors = colorClasses[color];

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className={colors.label}>{label}</span>
        <span className={`font-medium ${colors.text}`}>{value}/5</span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${colors.bar}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
