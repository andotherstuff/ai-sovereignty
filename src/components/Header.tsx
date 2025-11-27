import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { type: 'scroll', id: 'manifesto', label: 'Why Open AI', homepageOnly: true },
    { type: 'link', to: '/open-protocol', label: 'Protocols' },
    { type: 'link', to: '/open-models', label: 'Models' },
    { type: 'link', to: '/open-tools', label: 'Tools' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.type === 'scroll' && item.id && onNavigate) {
      onNavigate(item.id);
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isHomepage = location.pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <span className="text-xl md:text-2xl font-display font-bold text-gradient">AI Sovereignty Index</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              // Skip homepage-only items when not on homepage
              if (item.homepageOnly && !isHomepage) return null;

              if (item.type === 'scroll') {
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNavClick(item)}
                    className="text-muted-foreground hover:text-foreground hover:bg-cyan-500/10 font-display font-medium"
                  >
                    {item.label}
                  </Button>
                );
              }

              return (
                <Link key={item.to} to={item.to!}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      'font-display font-medium',
                      isActive(item.to!)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-cyan-500/10'
                    )}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}

            <a
              href="https://andotherstuff.org"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-display font-medium"
              >
                AOS
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              // Skip homepage-only items when not on homepage
              if (item.homepageOnly && !isHomepage) return null;

              if (item.type === 'scroll') {
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => handleNavClick(item)}
                    className="justify-start text-muted-foreground hover:text-foreground font-display"
                  >
                    {item.label}
                  </Button>
                );
              }

              return (
                <Link key={item.to} to={item.to!} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full justify-start font-display',
                      isActive(item.to!)
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}

            <a
              href="https://andotherstuff.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button
                variant="outline"
                className="w-full border-cyan-500/30 text-cyan-400 font-display"
              >
                Visit And Other Stuff
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
