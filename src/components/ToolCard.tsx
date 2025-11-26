import { ExternalLink, Check, X, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import type { AITool } from '@/lib/tools';

interface ToolCardProps {
  tool: AITool;
  expanded?: boolean;
  onToggleExpand?: () => void;
  rank?: number;
}

const openSourceLabels: Record<string, { label: string; color: string }> = {
  'fully-open': { label: 'Fully Open Source', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  'partially-open': { label: 'Partially Open', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  'proprietary': { label: 'Proprietary', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
};

const privacyLabels: Record<string, { label: string; color: string }> = {
  'high': { label: 'Privacy-First', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  'medium': { label: 'Some Privacy', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  'low': { label: 'Limited Privacy', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
};

export function ToolCard({ tool, expanded = false, onToggleExpand, rank }: ToolCardProps) {
  const osInfo = openSourceLabels[tool.openSourceLevel];
  const privacyInfo = privacyLabels[tool.privacyLevel];
  
  // Calculate overall score (weighted average)
  const overallScore = Math.round(
    (tool.scores.openSource * 1.5 + 
     tool.scores.privacy * 1.5 + 
     tool.scores.protocolSupport * 1.2 + 
     tool.scores.easeOfUse + 
     tool.scores.costEfficiency + 
     tool.scores.capabilities) / 7.2 * 20
  );

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:border-amber-500/30 ${
      expanded ? 'border-amber-500/30' : ''
    } ${rank === 1 ? 'ring-2 ring-amber-500/30' : ''}`}>
      {/* Rank Badge */}
      {rank && (
        <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg ${
          rank === 1 ? 'bg-amber-500 text-black' : 
          rank === 2 ? 'bg-muted-foreground/20 text-muted-foreground' :
          'bg-muted text-muted-foreground/60'
        }`}>
          {rank}
        </div>
      )}

      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          {/* Logo placeholder */}
          <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-2xl font-serif text-amber-400 shrink-0">
            {tool.name.charAt(0)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-xl font-semibold truncate">{tool.name}</h3>
              <Badge variant="outline" className={osInfo.color}>
                {osInfo.label}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm">{tool.tagline}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Quick Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className={privacyInfo.color}>
            {privacyInfo.label}
          </Badge>
          <Badge variant="outline" className="bg-muted/50">
            {tool.pricing.type === 'free' ? 'Free' : 
             tool.pricing.type === 'freemium' ? 'Freemium' : 
             tool.pricing.type === 'pay-as-you-go' ? 'Pay As You Go' : 'Paid'}
          </Badge>
          {tool.protocols.find(p => p.name === 'Nostr' && p.supported) && (
            <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
              Nostr Ready
            </Badge>
          )}
          {tool.protocols.find(p => p.name === 'Bitcoin/Lightning' && p.supported) && (
            <Badge variant="outline" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
              ₿ Bitcoin
            </Badge>
          )}
        </div>

        {/* Score Bars */}
        <div className="space-y-3">
          <ScoreBar label="Open Source" value={tool.scores.openSource} />
          <ScoreBar label="Privacy" value={tool.scores.privacy} />
          <ScoreBar label="Protocol Support" value={tool.scores.protocolSupport} />
          <ScoreBar label="Ease of Use" value={tool.scores.easeOfUse} />
          <ScoreBar label="Cost Efficiency" value={tool.scores.costEfficiency} />
          <ScoreBar label="Capabilities" value={tool.scores.capabilities} />
        </div>

        {/* Expanded Content */}
        {expanded && (
          <div className="space-y-6 pt-4 border-t border-border animate-fade-in">
            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              {tool.description}
            </p>

            {/* Features & Limitations */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-emerald-400 mb-2">✓ Strengths</h4>
                <ul className="space-y-1.5">
                  {tool.features.slice(0, 5).map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-amber-400 mb-2">⚠ Considerations</h4>
                <ul className="space-y-1.5">
                  {tool.limitations.map((limitation, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best For */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Best For</h4>
              <div className="flex flex-wrap gap-2">
                {tool.bestFor.map((useCase, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Protocol Support */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Protocol Support</h4>
              <div className="grid grid-cols-2 gap-2">
                {tool.protocols.map((protocol) => (
                  <div 
                    key={protocol.name}
                    className={`flex items-center gap-2 text-sm p-2 rounded-lg ${
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
                      <span className="text-xs text-muted-foreground">({protocol.quality})</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="p-4 rounded-lg bg-muted/30">
              <h4 className="text-sm font-medium text-foreground mb-1">Pricing</h4>
              <p className="text-amber-400 font-medium">{tool.pricing.startingPrice || 'Free'}</p>
              <p className="text-sm text-muted-foreground mt-1">{tool.pricing.details}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
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
            className="text-amber-400 border-amber-500/30 hover:bg-amber-500/10"
            asChild
          >
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              Visit Site
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Overall Score */}
        <div className="absolute bottom-4 right-4 text-right">
          <div className="text-3xl font-serif text-amber-400">{overallScore}</div>
          <div className="text-xs text-muted-foreground">/ 100</div>
        </div>
      </CardContent>
    </Card>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  const percentage = (value / 5) * 100;
  
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-foreground font-medium">{value}/5</span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2 bg-muted"
      />
    </div>
  );
}
