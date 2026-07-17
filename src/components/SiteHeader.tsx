import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../site';

type SiteHeaderProps = {
  currentPath: '/' | '/about-us';
};

function Brand() {
  return (
    <a
      href="/"
      className="group inline-flex shrink-0 transition-opacity hover:opacity-80"
      aria-label="SZKL home"
    >
      <span className="relative block h-[58px] w-[190px] overflow-hidden sm:h-16 sm:w-[210px]">
        <img
          src="/szkl-logo-official.png"
          alt="SZKL — Shenzhen Knowledge Labs"
          className="absolute left-1/2 top-1/2 w-72 max-w-none -translate-x-1/2 -translate-y-1/2 invert mix-blend-screen sm:w-[318px]"
          draggable="false"
        />
      </span>
    </a>
  );
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => href === currentPath;

  return (
    <header className="relative z-50 flex items-center justify-between">
      <Brand />

      <nav
        className="hidden items-center rounded-full border border-white/20 bg-black/10 px-2 py-1 backdrop-blur-[3px] lg:flex"
        aria-label="Main navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
              isActive(link.href) ? 'text-white' : 'text-white/65 hover:text-white'
            }`}
            aria-current={link.href === currentPath ? 'page' : undefined}
          >
            {link.label}
            {link.label === 'Contact' && (
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            )}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-white/60 hover:bg-white/10 lg:hidden"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {menuOpen && (
        <nav
          className="absolute left-0 right-0 top-[76px] rounded-3xl border border-white/15 bg-black/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              {link.label === 'Contact' && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
