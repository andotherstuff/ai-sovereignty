import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

  const navItems = [
    { id: 'manifesto', label: 'Why Open AI' },
    { id: 'rubric', label: 'Rubric' },
    { id: 'compare', label: 'Compare' },
    { id: 'quiz', label: 'Find Your Tool' },
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
            <span className="text-xl md:text-2xl font-serif text-gradient">FATE</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => handleNavClick(item.id)}
                className="text-muted-foreground hover:text-foreground hover:bg-amber-500/10"
              >
                {item.label}
              </Button>
            ))}
            <a
              href="https://andotherstuff.org"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button
                variant="outline"
                size="sm"
                className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
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
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className="justify-start text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Button>
            ))}
            <a
              href="https://andotherstuff.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button
                variant="outline"
                className="w-full border-amber-500/30 text-amber-400"
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
