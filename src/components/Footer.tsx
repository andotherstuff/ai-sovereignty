import { ExternalLink, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="font-serif text-lg text-gradient mb-3">Freedom AI Tool Evaluator</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Helping freedom-minded creators find AI tools that respect their sovereignty,
                privacy, and values.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://opensource.org/osd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                  >
                    Open Source Definition
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://soapbox.pub/blog/our-stance-on-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                  >
                    Soapbox on AI
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://nostr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                  >
                    Learn about Nostr
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Parent Org */}
            <div>
              <h4 className="font-medium mb-4">A Project Of</h4>
              <a
                href="https://andotherstuff.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-amber-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 font-serif font-bold">
                    AOS
                  </div>
                  <div>
                    <div className="font-medium text-sm">And Other Stuff</div>
                    <div className="text-xs text-muted-foreground">Technology for Human Thriving</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} And Other Stuff. Built for the freedom tech community.
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a
                href="https://soapbox.pub/mkstack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Heart className="w-4 h-4 text-amber-500" />
                Vibed with MKStack
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
