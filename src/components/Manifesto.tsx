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

              {/* For Activists & Privacy Seekers - Expanded Section */}
              <div className="rounded-3xl bg-gradient-to-br from-cyan-950/40 via-card/60 to-background border border-cyan-500/30 overflow-hidden">
                {/* Section Header with Hero Image Mosaic */}
                <div className="relative">
                  {/* Image Mosaic Grid */}
                  <div className="grid grid-cols-4 h-48 md:h-64">
                    <div className="relative overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                        alt="Journalist working in the field"
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                        alt="Activist holding a sign for freedom"
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                        alt="Human rights defender speaking"
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/4427627/pexels-photo-4427627.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                        alt="Privacy advocate working securely"
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
                      {/* Story Card 1 */}
                      <a
                        href="https://cpj.org/2024/02/journalist-surveillance-digital-safety/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="h-full p-5 rounded-xl bg-card/50 border border-border hover:border-cyan-500/40 transition-all duration-300 hover:bg-card/80">
                          <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                            <img
                              src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                              alt="Journalist with camera documenting events"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                          </div>
                          <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide">CPJ Report</span>
                          <h5 className="font-display font-semibold text-foreground mt-1 mb-2 group-hover:text-cyan-300 transition-colors">
                            Journalists Under Digital Surveillance
                          </h5>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            How reporters worldwide face unprecedented digital threats to their sources and work.
                          </p>
                          <span className="inline-flex items-center gap-1 text-cyan-400 text-sm mt-3 group-hover:gap-2 transition-all">
                            Read more
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </a>

                      {/* Story Card 2 */}
                      <a
                        href="https://www.eff.org/deeplinks/2024/01/surveillance-ai-tools"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="h-full p-5 rounded-xl bg-card/50 border border-border hover:border-cyan-500/40 transition-all duration-300 hover:bg-card/80">
                          <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                            <img
                              src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                              alt="Activists marching for digital rights"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                          </div>
                          <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide">EFF Analysis</span>
                          <h5 className="font-display font-semibold text-foreground mt-1 mb-2 group-hover:text-cyan-300 transition-colors">
                            AI & Surveillance Concerns
                          </h5>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            Understanding the privacy implications of AI tools for activists and civil liberties.
                          </p>
                          <span className="inline-flex items-center gap-1 text-cyan-400 text-sm mt-3 group-hover:gap-2 transition-all">
                            Read more
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </a>

                      {/* Story Card 3 */}
                      <a
                        href="https://hrf.org/programs/freedom-tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="h-full p-5 rounded-xl bg-card/50 border border-border hover:border-cyan-500/40 transition-all duration-300 hover:bg-card/80">
                          <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                            <img
                              src="https://images.pexels.com/photos/7691705/pexels-photo-7691705.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                              alt="Human rights advocate speaking to crowd"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                          </div>
                          <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide">HRF Initiative</span>
                          <h5 className="font-display font-semibold text-foreground mt-1 mb-2 group-hover:text-cyan-300 transition-colors">
                            Freedom Tech Program
                          </h5>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            How technology can protect dissidents and human rights defenders worldwide.
                          </p>
                          <span className="inline-flex items-center gap-1 text-cyan-400 text-sm mt-3 group-hover:gap-2 transition-all">
                            Read more
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

                  {/* Testimonial Avatars */}
                  <div className="mt-8 pt-8 border-t border-border/50">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                          <img
                            src="https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                            alt="Privacy advocate"
                            className="w-10 h-10 rounded-full border-2 border-background object-cover"
                          />
                          <img
                            src="https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                            alt="Digital rights activist"
                            className="w-10 h-10 rounded-full border-2 border-background object-cover"
                          />
                          <img
                            src="https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                            alt="Independent journalist"
                            className="w-10 h-10 rounded-full border-2 border-background object-cover"
                          />
                          <div className="w-10 h-10 rounded-full border-2 border-background bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-300 font-medium">
                            +
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <span className="text-foreground font-medium">Trusted by activists worldwide</span>
                          <br />
                          <span className="text-xs">From journalists to human rights defenders</span>
                        </p>
                      </div>

                      <a
                        href="https://hrf.org/program/ai-for-individual-rights/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all group"
                      >
                        Learn about AI for Human Rights
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
    </section>
  );
}
