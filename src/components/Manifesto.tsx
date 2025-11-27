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

              {/* For Activists & Privacy Seekers - Expanded Section */}
              <div className="rounded-3xl bg-gradient-to-br from-cyan-950/40 via-card/60 to-background border border-cyan-500/30 overflow-hidden">
                {/* Section Header with Hero Image Mosaic */}
                <div className="relative">
                  {/* Image Mosaic Grid */}
                  <div className="grid grid-cols-4 h-48 md:h-64">
                    <div className="relative overflow-hidden">
                      <img
                        src="/activists/joey-siu.webp"
                        alt="Joey Siu, Hong Kong activist, speaks at Oslo Freedom Forum in Taiwan"
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src="/activists/off-lobby.webp"
                        alt="Attendees gather at the Oslo Freedom Forum lobby"
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src="/activists/discounted-lives-exhibit.png"
                        alt="'Discounted Lives' exhibit about Uyghur forced labor at Oslo Freedom Forum"
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src="/activists/gaelle-borgia.webp"
                        alt="Gaelle Borgia speaks about China and Russia's influence in Africa at Oslo Freedom Forum"
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  </div>

                  {/* Overlay Title */}
                  <div className="absolute inset-0 flex items-end justify-center pb-6">
                    <div className="text-center">
                      <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-sm font-medium mb-3 backdrop-blur-sm">
                        🛡️ For Those Who Need It Most
                      </span>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground drop-shadow-lg">
                        Activists & Privacy Seekers
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-8 md:p-10">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                    If you're building tools for activism, journalism, or communities under surveillance, the stakes are even higher. When your work challenges power, the tools you use can become vectors of vulnerability.
                  </p>

                  {/* Risk Cards */}
                  <div className="grid md:grid-cols-2 gap-4 mb-10">
                    <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20 group hover:border-red-500/40 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Data Logging</h4>
                          <p className="text-sm text-muted-foreground">Your prompts, creations, and patterns can be stored indefinitely—creating a digital trail that could be subpoenaed.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20 group hover:border-red-500/40 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🔍</span>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Compelled Disclosure</h4>
                          <p className="text-sm text-muted-foreground">Companies can be legally forced to share your data with authorities, often without notifying you.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20 group hover:border-red-500/40 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🚫</span>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Content Refusal</h4>
                          <p className="text-sm text-muted-foreground">AI tools may refuse to help with "sensitive" topics—even legitimate journalism or human rights documentation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20 group hover:border-red-500/40 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🔌</span>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Account Termination</h4>
                          <p className="text-sm text-muted-foreground">Your account can be shut down without warning or explanation, taking your work history with it.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Real Stories Section */}
                  <div className="mb-10">
                    <h4 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <span className="text-cyan-300">📖</span>
                      </span>
                      Real Stories, Real Stakes
                    </h4>

                    <div className="grid md:grid-cols-3 gap-5">
                      {/* Story Card 1 - AI for Activists */}
                      <a
                        href="https://hrf.org/program/ai-for-individual-rights/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="h-full p-5 rounded-xl bg-card/50 border border-border hover:border-pink-500/40 transition-all duration-300 hover:bg-card/80">
                          <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                            <img
                              src="/activists/ai-activists-workshop.webp"
                              alt="AI for Activists workshop at the 2025 Oslo Freedom Forum"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                          </div>
                          <span className="text-xs text-pink-400 font-medium uppercase tracking-wide">HRF</span>
                          <h5 className="font-display font-semibold text-foreground mt-1 mb-2 group-hover:text-pink-300 transition-colors">
                            AI for Activists Program
                          </h5>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            Training human rights defenders to leverage AI tools safely and effectively.
                          </p>
                          <span className="inline-flex items-center gap-1 text-pink-400 text-sm mt-3 group-hover:gap-2 transition-all">
                            Learn more
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </a>

                      {/* Story Card 2 - Freedom Tech */}
                      <a
                        href="https://hrf.org/program/financial-freedom/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="h-full p-5 rounded-xl bg-card/50 border border-border hover:border-pink-500/40 transition-all duration-300 hover:bg-card/80">
                          <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                            <img
                              src="/activists/freedom-tech-track.webp"
                              alt="Freedom Tech Track at the 2025 Oslo Freedom Forum"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                          </div>
                          <span className="text-xs text-pink-400 font-medium uppercase tracking-wide">HRF</span>
                          <h5 className="font-display font-semibold text-foreground mt-1 mb-2 group-hover:text-pink-300 transition-colors">
                            Freedom Tech Initiative
                          </h5>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            Open-source technology protecting dissidents and enabling free expression worldwide.
                          </p>
                          <span className="inline-flex items-center gap-1 text-pink-400 text-sm mt-3 group-hover:gap-2 transition-all">
                            Explore tools
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </a>

                      {/* Story Card 3 - Oslo Freedom Forum */}
                      <a
                        href="https://oslofreedomforum.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="h-full p-5 rounded-xl bg-card/50 border border-border hover:border-pink-500/40 transition-all duration-300 hover:bg-card/80">
                          <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                            <img
                              src="/activists/gustavo-tovar-arroyo.webp"
                              alt="Gustavo Tovar Arroyo speaks at Oslo Freedom Forum in Taiwan"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                          </div>
                          <span className="text-xs text-pink-400 font-medium uppercase tracking-wide">Global Movement</span>
                          <h5 className="font-display font-semibold text-foreground mt-1 mb-2 group-hover:text-pink-300 transition-colors">
                            Oslo Freedom Forum
                          </h5>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            Where the world's leading human rights defenders share their stories and strategies.
                          </p>
                          <span className="inline-flex items-center gap-1 text-pink-400 text-sm mt-3 group-hover:gap-2 transition-all">
                            Watch talks
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* The Solution */}
                  <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />

                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <span className="text-2xl">🔓</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-display font-bold text-foreground">The Open Source Advantage</h4>
                          <p className="text-sm text-cyan-400">True sovereignty starts with code you can control</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Open-source, self-hostable AI tools give you <span className="text-cyan-300 font-medium">true sovereignty</span>. Run them on your own hardware. Audit every line of code. No one can see what you're building. No one can stop you.
                      </p>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50">
                          <span className="text-cyan-400 text-xl">🏠</span>
                          <span className="text-sm font-medium">Self-Hosted</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50">
                          <span className="text-cyan-400 text-xl">🔍</span>
                          <span className="text-sm font-medium">Auditable</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50">
                          <span className="text-cyan-400 text-xl">🛡️</span>
                          <span className="text-sm font-medium">Uncensorable</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Oslo Freedom Forum Community */}
                  <div className="mt-8 pt-8 border-t border-border/50">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                      {/* Venancio Mondlane Image */}
                      <div className="relative w-full lg:w-1/3 h-32 rounded-xl overflow-hidden">
                        <img
                          src="/activists/venancio-mondlane.webp"
                          alt="Venancio Mondlane, Mozambique opposition leader, delivers a passionate speech at Oslo Freedom Forum"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60" />
                      </div>

                      {/* Text and CTA */}
                      <div className="flex-1 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                          <p className="text-foreground font-medium mb-1">
                            Join the global freedom movement
                          </p>
                          <p className="text-sm text-muted-foreground">
                            The Oslo Freedom Forum brings together human rights defenders, technologists, and activists from around the world.
                          </p>
                        </div>

                        <a
                          href="https://hrf.org/program/ai-for-individual-rights/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm font-medium hover:bg-pink-500/20 hover:border-pink-500/50 transition-all group"
                        >
                          AI for Activists
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
