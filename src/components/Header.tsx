import { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Clock, Star } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Our Difference', href: '#our-difference' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro-bar for quick local info */}
      <div className="bg-obsidian-deep text-silver-muted text-xs border-b border-graphite-border/40 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-silver-soft">
              <MapPin className="w-3.5 h-3.5 text-lime-accent" />
              1E Alpha Road, London E4 6TD
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-silver-dim" />
              Open daily until 7:00 PM <span className="text-[10px] text-lime-accent/80">(Hours to confirm)</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-silver-soft">
              <Star className="w-3 h-3 fill-lime-accent text-lime-accent" />
              <strong className="text-white font-semibold">5.0</strong>
              <span className="text-silver-muted">/ 5.0 (76 Google Reviews)</span>
            </span>
            <a
              href={BUSINESS_CONFIG.contact.phoneTel}
              className="text-lime-accent font-medium hover:underline transition-all"
            >
              Call: {BUSINESS_CONFIG.contact.phoneLocal}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-obsidian/95 backdrop-blur-md shadow-premium border-b border-graphite-border/70 py-3'
            : 'bg-obsidian/80 backdrop-blur-sm border-b border-graphite-border/30 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark Logo */}
            <a
              href="#hero"
              className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-lime-accent rounded-sm outline-none"
              aria-label="Chingford Car Wash Ltd Home"
            >
              {/* Bespoke Abstract Water-drop / Automotive Icon */}
              <div className="relative w-10 h-10 rounded-lg bg-graphite flex items-center justify-center border border-graphite-border group-hover:border-lime-accent/60 transition-colors">
                <svg
                  className="w-5 h-5 text-lime-accent transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2.5C12 2.5 5 11 5 15.5C5 19.0899 8.13401 22 12 22C15.866 22 19 19.0899 19 15.5C19 11 12 2.5 12 2.5Z" />
                  <path d="M12 8C12 8 8 13 8 15.5C8 17.5 9.8 19 12 19" strokeOpacity="0.5" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="1.5" fill="#C6F36A" stroke="none" />
                </svg>
              </div>

              {/* Text Wordmark */}
              <div className="flex flex-col leading-tight">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-lime-accent transition-colors">
                  CHINGFORD
                </span>
                <span className="text-[11px] font-semibold tracking-widest text-silver-muted uppercase">
                  CAR WASH <span className="text-[9px] text-lime-accent font-normal">LTD</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-silver-muted hover:text-white transition-colors duration-200 relative py-1 focus-visible:text-lime-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: CTA Phone Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.contact.phoneTel}
                className="inline-flex items-center gap-2 bg-lime-accent hover:bg-lime-hover text-obsidian px-4 py-2.5 rounded-md font-bold text-xs tracking-wider uppercase shadow-sm hover:shadow-lime-glow transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5 fill-obsidian stroke-obsidian" />
                <span>CALL NOW</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:hidden">
              <a
                href={BUSINESS_CONFIG.contact.phoneTel}
                aria-label="Call Chingford Car Wash"
                className="p-2 bg-lime-accent text-obsidian rounded-md font-bold"
              >
                <Phone className="w-4 h-4 fill-obsidian" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-silver-soft hover:text-white bg-graphite border border-graphite-border rounded-md focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-graphite-border bg-obsidian-deep/98 px-4 pt-3 pb-6 mt-3 space-y-3 animate-fadeIn">
            <div className="py-2 text-xs text-silver-muted border-b border-graphite-border/50">
              <div className="flex items-center gap-1.5 text-lime-accent mb-1">
                <Star className="w-3 h-3 fill-lime-accent" />
                <span className="font-semibold text-white">5.0 Google Rating</span> (76 verified reviews)
              </div>
              <p>1E Alpha Road, London E4 6TD</p>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-silver-soft hover:text-lime-accent hover:bg-graphite transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-graphite-border/60 flex flex-col gap-2.5">
              <a
                href={BUSINESS_CONFIG.contact.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-lime-accent text-obsidian py-3 rounded-md font-bold text-sm tracking-wider uppercase text-center"
              >
                <Phone className="w-4 h-4 fill-obsidian" />
                CALL NOW (+44 7438 936000)
              </a>
              <a
                href={BUSINESS_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-graphite text-silver-soft hover:text-white py-2.5 rounded-md font-medium text-sm text-center border border-graphite-border"
              >
                <MapPin className="w-4 h-4 text-lime-accent" />
                GET DIRECTIONS (E4 6TD)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
