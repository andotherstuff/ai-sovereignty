import { ExternalLink } from 'lucide-react';

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/5 to-background" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Why <span className="text-gradient">Open AI*</span> Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The tools we use shape the world we build. When AI is open, we all benefit.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">

              <div className="p-8 rounded-2xl bg-card/50 border border-cyan-500/20">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">The Promise of AI—And The Peril</h3>
                <p>
                  Artificial intelligence is transforming how we create software. "Vibe coding"—building applications through natural language conversation with AI—is making development accessible to millions who never wrote a line of code before.
                </p>
                <p className="mt-4">
                  But here's the critical question: <span className="text-cyan-300 font-medium">Who controls these AI tools?</span>
                </p>
                <p className="mt-4">
                  When the AI you depend on is a black box controlled by a corporation, you've traded one form of gatekeeping for another. Your creativity flows through their servers. Your ideas pass through their filters. Your sovereignty over your own tools is an illusion.
                </p>
                <p className="mt-4">
                  <span className="text-cyan-300 font-medium">*OpenAI—the company—has hijacked the very meaning of "open."</span> Despite its name, OpenAI keeps its model weights locked away, refuses to disclose training data, and operates as one of the most closed AI companies in existence. They started as a non-profit promising to benefit humanity, then pivoted to a capped-profit structure backed by Microsoft. When we say "open AI," we mean the <em>opposite</em> of what OpenAI the company represents.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-card/30 border border-border">
                  <h4 className="text-xl font-display font-semibold text-foreground mb-4">🔒 Closed AI</h4>
                  <ul className="space-y-3">
                    <li>• Your data trains their models</li>
                    <li>• No visibility into how it works</li>
                    <li>• Can be shut down or censored</li>
                    <li>• Lock-in to their ecosystem</li>
                    <li>• Terms can change anytime</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <h4 className="text-xl font-display font-semibold text-foreground mb-4">🔓 Open AI</h4>
                  <ul className="space-y-3">
                    <li>• Audit what runs on your machine</li>
                    <li>• Self-host for true privacy</li>
                    <li>• Can't be taken away from you</li>
                    <li>• Community-driven improvements</li>
                    <li>• Freedom to fork and modify</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card/50 border border-border">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">The Open Source AI Definition</h3>
                <p>
                  We follow the{' '}
                  <a
                    href="https://opensource.org/ai/open-source-ai-definition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1"
                  >
                    Open Source Initiative's Open Source AI Definition
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  . True open source AI means:
                </p>
                <ul className="mt-4 space-y-3">
                  <li><span className="text-cyan-300">→</span> Freedom to use the system for any purpose</li>
                  <li><span className="text-cyan-300">→</span> Freedom to study how the system works</li>
                  <li><span className="text-cyan-300">→</span> Freedom to modify the system</li>
                  <li><span className="text-cyan-300">→</span> Freedom to share the system with others</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-background border border-cyan-500/20">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">For Activists & Privacy Seekers</h3>
                <p>
                  If you're building tools for activism, journalism, or communities under surveillance, the stakes are even higher. Proprietary AI tools can:
                </p>
                <ul className="mt-4 space-y-3">
                  <li><span className="text-cyan-300">⚠️</span> Log your prompts and creations</li>
                  <li><span className="text-cyan-300">⚠️</span> Be compelled to share data with authorities</li>
                  <li><span className="text-cyan-300">⚠️</span> Refuse to help with "sensitive" topics</li>
                  <li><span className="text-cyan-300">⚠️</span> Shut down your account without warning</li>
                </ul>
                <p className="mt-4">
                  Open-source, self-hostable AI tools give you <span className="text-cyan-300 font-medium">true sovereignty</span>. No one can see what you're building. No one can stop you.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
