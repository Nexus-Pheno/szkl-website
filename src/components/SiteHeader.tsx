import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { COPY, type Language } from '../i18n';
import { NAV_LINKS, PULSE_URL } from '../site';

type SiteHeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

function Brand({ alt, homeLabel }: { alt: string; homeLabel: string }) {
  return (
    <a
      href="#home"
      className="group inline-flex shrink-0 transition-opacity hover:opacity-80"
      aria-label={homeLabel}
    >
      <span className="relative block h-12 w-[124px] overflow-hidden sm:h-16 sm:w-[210px]">
        <img
          src="/szkl-logo-official.png"
          alt={alt}
          className="szkl-logo-on-dark absolute left-1/2 top-1/2 w-[178px] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[300px]"
          draggable="false"
        />
      </span>
    </a>
  );
}

function LanguageToggle({ language, onLanguageChange }: SiteHeaderProps) {
  const copy = COPY[language];

  return (
    <div
      className="relative grid h-11 w-[88px] grid-cols-2 rounded-full border border-white/20 bg-black/30 shadow-[0_14px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
      role="group"
      aria-label={copy.languageLabel}
    >
      <span
        className={`pointer-events-none absolute left-0.5 top-0.5 h-10 w-10 rounded-full bg-white shadow-[0_5px_18px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out ${
          language === 'zh' ? 'translate-x-11' : 'translate-x-0'
        }`}
        aria-hidden="true"
      />
      <button
        type="button"
        className={`relative z-10 grid h-11 w-11 place-items-center rounded-full text-[10px] font-semibold tracking-[0.08em] transition-colors ${
          language === 'en' ? 'text-black' : 'text-white/58 hover:text-white'
        }`}
        onClick={() => onLanguageChange('en')}
        aria-label={copy.languageEnglish}
        aria-pressed={language === 'en'}
        title="English"
      >
        EN
      </button>
      <button
        type="button"
        className={`relative z-10 grid h-11 w-11 place-items-center rounded-full text-xs font-semibold transition-colors ${
          language === 'zh' ? 'text-black' : 'text-white/58 hover:text-white'
        }`}
        onClick={() => onLanguageChange('zh')}
        aria-label={copy.languageChinese}
        aria-pressed={language === 'zh'}
        title="中文"
      >
        中
      </button>
    </div>
  );
}

export function SiteHeader({ language, onLanguageChange }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = COPY[language];
  const navigationLabel = language === 'zh' ? '主导航' : 'Main navigation';

  return (
    <header className="relative z-50 grid grid-cols-[1fr_auto] items-center gap-2 sm:gap-4 xl:grid-cols-[1fr_auto_1fr]">
      <Brand alt={copy.brandAlt} homeLabel={language === 'zh' ? 'SZKL 首页' : 'SZKL home'} />

      <nav
        className="hidden items-center rounded-full border border-white/15 bg-black/20 px-2 py-1 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md xl:flex"
        aria-label={navigationLabel}
      >
        {NAV_LINKS.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            className="group inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 py-3 text-sm text-white/62 transition-colors duration-300 hover:text-white"
          >
            {copy.nav[index]}
            {index === NAV_LINKS.length - 1 && (
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            )}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-self-end gap-2">
        <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
        <a
          href={PULSE_URL}
          target="_blank"
          rel="noreferrer"
          className="pulse-cta group hidden min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5 xl:inline-flex"
        >
          {copy.experiencePulse}
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-white/60 hover:bg-white/10 xl:hidden"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-controls="mobile-navigation"
          aria-label={
            menuOpen
              ? language === 'zh'
                ? '关闭导航菜单'
                : 'Close navigation menu'
              : language === 'zh'
                ? '打开导航菜单'
                : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute left-0 right-0 top-[64px] max-h-[calc(100svh-92px)] overflow-y-auto rounded-3xl border border-white/15 bg-black/95 p-3 shadow-2xl backdrop-blur-xl sm:top-[76px] xl:hidden"
          aria-label={language === 'zh' ? '移动端导航' : 'Mobile navigation'}
        >
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {copy.nav[index]}
              {index === NAV_LINKS.length - 1 && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
            </a>
          ))}
          <a
            href={PULSE_URL}
            target="_blank"
            rel="noreferrer"
            className="pulse-cta mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black"
            onClick={() => setMenuOpen(false)}
          >
            {copy.experiencePulse}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
