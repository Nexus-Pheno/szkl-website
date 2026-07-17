import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS, PULSE_URL } from '../site';

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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 grid grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
      <Brand />

      <nav
        className="hidden items-center rounded-full border border-white/15 bg-black/20 px-2 py-1 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md lg:flex"
        aria-label="Main navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-white/62 transition-colors duration-300 hover:text-white"
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

      <a
        href={PULSE_URL}
        target="_blank"
        rel="noreferrer"
        className="group hidden items-center justify-self-end gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
      >
        Experience Pulse
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </a>

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
          <a
            href={PULSE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black"
            onClick={() => setMenuOpen(false)}
          >
            Experience Pulse
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
