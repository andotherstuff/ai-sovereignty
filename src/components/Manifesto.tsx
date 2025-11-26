import { ExternalLink } from 'lucide-react';

export function Manifesto() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/5 to-background" />
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Why <span className="text-gradient">Open AI</span> Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The tools we use shape the world we build. When AI is open, we all benefit.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              
              <div className="p-8 rounded-2xl bg-card/50 border border-amber-500/20">
                <h3 className="text-2xl font-serif text-foreground mb-4">The Promise of AI—And The Peril</h3>
                <p>
                  Artificial intelligence is transforming how we create software. "Vibe coding"—building applications through natural language conversation with AI—is making development accessible to millions who never wrote a line of code before.
                </p>
                <p className="mt-4">
                  But here's the critical question: <span className="text-amber-400 font-medium">Who controls these AI tools?</span>
                </p>
                <p className="mt-4">
                  When the AI you depend on is a black box controlled by a corporation, you've traded one form of gatekeeping for another. Your creativity flows through their servers. Your ideas pass through their filters. Your sovereignty over your own tools is an illusion.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-card/30 border border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-3">🔒 Closed AI</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Your data trains their models</li>
                    <li>• No visibility into how it works</li>
                    <li>• Can be shut down or censored</li>
                    <li>• Lock-in to their ecosystem</li>
                    <li>• Terms can change anytime</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <h4 className="text-lg font-semibold text-foreground mb-3">🔓 Open AI</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Audit what runs on your machine</li>
                    <li>• Self-host for true privacy</li>
                    <li>• Can't be taken away from you</li>
                    <li>• Community-driven improvements</li>
                    <li>• Freedom to fork and modify</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card/50 border border-border">
                <h3 className="text-2xl font-serif text-foreground mb-4">The Open Source Definition</h3>
                <p>
                  We follow the{' '}
                  <a 
                    href="https://opensource.org/osd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    Open Source Initiative's definition
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  . True open source means:
                </p>
                <ul className="mt-4 space-y-2">
                  <li><span className="text-amber-400">→</span> Free redistribution</li>
                  <li><span className="text-amber-400">→</span> Access to source code</li>
                  <li><span className="text-amber-400">→</span> Right to create derivatives</li>
                  <li><span className="text-amber-400">→</span> No discrimination against persons or fields</li>
                  <li><span className="text-amber-400">→</span> License must not restrict other software</li>
                </ul>
                <p className="mt-4 text-sm italic">
                  "Open source" isn't a marketing term—it's a commitment to user freedom.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-950/30 to-background border border-amber-500/20">
                <h3 className="text-2xl font-serif text-foreground mb-4">For Activists & Privacy Seekers</h3>
                <p>
                  If you're building tools for activism, journalism, or communities under surveillance, the stakes are even higher. Proprietary AI tools can:
                </p>
                <ul className="mt-4 space-y-2">
                  <li><span className="text-amber-400">⚠️</span> Log your prompts and creations</li>
                  <li><span className="text-amber-400">⚠️</span> Be compelled to share data with authorities</li>
                  <li><span className="text-amber-400">⚠️</span> Refuse to help with "sensitive" topics</li>
                  <li><span className="text-amber-400">⚠️</span> Shut down your account without warning</li>
                </ul>
                <p className="mt-4">
                  Open-source, self-hostable AI tools give you <span className="text-amber-400 font-medium">true sovereignty</span>. No one can see what you're building. No one can stop you.
                </p>
              </div>

              <blockquote className="border-l-4 border-amber-500 pl-6 py-4 my-8 bg-card/30 rounded-r-xl">
                <p className="text-xl italic text-foreground">
                  "The choice of AI tools is not just a technical decision—it's a political one. Every time we choose open over closed, we vote for a future where technology serves humanity, not the other way around."
                </p>
                <footer className="mt-4 text-muted-foreground flex items-center gap-2">
                  — Inspired by{' '}
                  <a 
                    href="https://soapbox.pub/blog/our-stance-on-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    Soapbox's stance on AI
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </footer>
              </blockquote>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
