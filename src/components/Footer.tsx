import { Link } from 'react-router-dom';
import { ExternalLink, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="font-display font-bold text-lg text-gradient mb-3">Freedom AI Tool Evaluator</h3>
              <p className="text-muted-foreground leading-relaxed">
                Helping freedom-minded creators find AI tools that respect their sovereignty,
                privacy, and values.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-display font-medium text-lg mb-4">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/open-protocol"
                    className="text-muted-foreground hover:text-cyan-300 transition-colors"
                  >
                    Open Protocol
                  </Link>
                </li>
                <li>
                  <Link
                    to="/open-models"
                    className="text-muted-foreground hover:text-cyan-300 transition-colors"
                  >
                    Open Models
                  </Link>
                </li>
                <li>
                  <Link
                    to="/open-tools"
                    className="text-muted-foreground hover:text-cyan-300 transition-colors"
                  >
                    Open Tools
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-display font-medium text-lg mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://opensource.org/ai/open-source-ai-definition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    OSI AI Definition
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gnu.org/philosophy/free-sw.en.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    Free Software Def.
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://hrf.org/program/ai-for-individual-rights/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    HRF AI Rights
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Parent Org */}
            <div>
              <h4 className="font-display font-medium text-lg mb-4">A Project Of</h4>
              <a
                href="https://andotherstuff.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <img
                  src="/logos/aos.png"
                  alt="And Other Stuff logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <div className="font-display font-medium group-hover:text-cyan-300 transition-colors">And Other Stuff</div>
                  <div className="text-muted-foreground text-sm">Technology for Human Thriving</div>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground">
              Licensed under{' '}
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors"
              >
                AGPL-3.0
              </a>
              . Built for the freedom tech community.
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/open-tools#shakespeare"
                className="text-muted-foreground hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-cyan-400" />
                Made with Shakespeare
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
