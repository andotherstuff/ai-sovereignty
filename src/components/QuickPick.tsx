import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function QuickPick() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-background to-background border border-cyan-500/20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-600/5 rounded-full blur-3xl" />

            <div className="relative">
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-cyan-400 fill-cyan-400" />
                <span className="text-cyan-300 font-display font-medium">Our Top Pick for Freedom</span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    <span className="text-gradient">Shakespeare</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    If you care about freedom, privacy, and building on open protocols like Nostr and Bitcoin,
                    Shakespeare is the clear winner. It's fully open-source, runs in your browser,
                    accepts Bitcoin payments, and is purpose-built for the freedom tech community.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                      Fully Open Source
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      Nostr Native
                    </Badge>
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                      ₿ Bitcoin Ready
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      Privacy First
                    </Badge>
                  </div>

                  <Button
                    size="lg"
                    className="bg-cyan-500 hover:bg-cyan-400 text-black font-display font-semibold group glow-blue-sm"
                    asChild
                  >
                    <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                      Try Shakespeare Free
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>

                {/* Score card */}
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <h4 className="font-display font-medium text-muted-foreground mb-4">Freedom Score</h4>

                  <div className="space-y-4">
                    <ScoreRow label="Open Source" value={5} />
                    <ScoreRow label="Privacy" value={5} />
                    <ScoreRow label="Open Protocol" value={5} />
                    <ScoreRow label="Open Models" value={5} />
                    <ScoreRow label="Decentralization" value={5} />
                    <ScoreRow label="Ease of Use" value={4} />
                    <ScoreRow label="Cost Efficiency" value={5} />
                    <ScoreRow label="Capabilities" value={4} />
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-muted-foreground">Overall Freedom Score</span>
                    <span className="text-2xl font-display font-bold text-cyan-400">96/100</span>
                  </div>
                </div>
              </div>

              {/* Not just for experts */}
              <div className="mt-8 p-5 rounded-xl bg-muted/30 border border-border/50">
                <p className="text-muted-foreground flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Not sure if Shakespeare is right for you?</strong>{' '}
                    Take our quiz below to get a personalized recommendation based on your specific needs and priorities.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i <= value ? 'bg-cyan-400' : 'bg-muted'
              }`}
            />
          ))}
        </div>
        <span className={`font-medium ${value >= 4 ? 'text-cyan-300' : 'text-foreground'}`}>
          {value}/5
        </span>
      </div>
    </div>
  );
}
