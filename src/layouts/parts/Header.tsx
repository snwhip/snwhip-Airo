import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router";
const navLinks = [{
  label: 'Writing',
  href: '/writing'
}, {
  label: 'Web & Digital',
  href: '/web-digital'
}, {
  label: 'Selected Work',
  href: '/communications'
}, {
  label: 'About',
  href: '/about'
}, {
  label: 'Contact',
  href: '/contact'
}];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Name / Logo */}
        <Link to="/" className="font-heading text-base font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-200" style={{
        fontFamily: 'var(--font-heading)'
      }}>
          Scott N. Whipple
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
          const isActive = location.pathname === link.href;
          return <Link key={link.href} to={link.href} className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${isActive ? 'text-accent' : 'text-foreground/70 hover:text-foreground'}`} style={{
            fontFamily: 'var(--font-sans)'
          }}>
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>;
        })}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && <div className="md:hidden bg-background border-t border-border px-6 py-6">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-5">
            {navLinks.map(link => <Link key={link.href} to={link.href} className="text-base font-medium text-foreground/80 hover:text-accent transition-colors duration-200" style={{
          fontFamily: 'var(--font-sans)'
        }}>
                {link.label}
              </Link>)}
          </nav>
        </div>}
    </header>;
}
