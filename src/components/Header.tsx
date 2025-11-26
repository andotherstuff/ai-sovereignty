import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionNavItems = [
    { id: 'manifesto', label: 'Why Open AI' },
    { id: 'pillars', label: 'The Pillars' },
  ];

  const learnNavItems = [
    { to: '/open-protocol', label: 'Open Protocol' },
    { to: '/open-models', label: 'Open Models' },
    { to: '/open-tools', label: 'Open Tools' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <span className="text-xl md:text-2xl font-display font-bold text-gradient">FATE</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {sectionNavItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => handleNavClick(item.id)}
                className="text-muted-foreground hover:text-foreground hover:bg-cyan-500/10 font-display font-medium"
              >
                {item.label}
              </Button>
            ))}

            {/* Learn Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground hover:bg-cyan-500/10 font-display font-medium"
                >
                  Learn
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                {learnNavItems.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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
            {sectionNavItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className="justify-start text-muted-foreground hover:text-foreground font-display"
              >
                {item.label}
              </Button>
            ))}

            {/* Learn section in mobile */}
            <div className="py-2 border-t border-border/50 mt-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wide px-4">Learn</span>
            </div>
            {learnNavItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground font-display"
                >
                  {item.label}
                </Button>
              </Link>
            ))}

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
