import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ShinyText } from './components/ShinyText';

const VIDEO_SOURCE =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4';

const NAV_LINKS = [
  'Home',
  'About Us',
  'Courses',
  'Instructors',
  'Testimonials',
  'Blog',
];

function Brand() {
  return (
    <a
      href="#home"
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="home" className="relative h-screen min-h-[620px] overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SOURCE}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-10 xl:px-8">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Brand />

          <div className="hidden items-center rounded-full border border-gray-700/90 bg-black/10 px-2 py-1 backdrop-blur-[2px] lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="rounded-full px-3 py-2 text-sm text-white/80 transition-colors duration-300 hover:text-white xl:px-4"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact-us"
              className="group inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-white/80 transition-colors duration-300 hover:text-white xl:px-4"
            >
              Contact us
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-white/60 hover:bg-white/10 lg:hidden"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute left-5 right-5 top-[76px] z-20 rounded-3xl border border-white/15 bg-black/90 p-3 backdrop-blur-xl sm:left-8 sm:right-8 lg:hidden">
            {[...NAV_LINKS, 'Contact us'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link}
                {link === 'Contact us' && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
              </a>
            ))}
          </div>
        )}

        <section className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 lg:mt-14 lg:grid-cols-2 lg:gap-12" aria-label="Program outcomes">
          <p className="max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
            We deliver transformative programs that empower emerging product designers with
            cutting-edge expertise and vision to thrive globally.
          </p>
          <p className="text-sm leading-relaxed text-white/80 md:text-base lg:justify-self-end lg:text-right">
            8000+ Talented Designers Launched !
          </p>
        </section>

        <section className="flex flex-1 flex-col items-center justify-center pb-8 pt-8 text-center sm:pb-12 lg:pb-16" aria-labelledby="hero-heading">
          <p className="mb-4 text-xs uppercase tracking-tight text-white/80 md:mb-6 md:text-sm">
            Seats for Next Program Opening Soon
          </p>

          <h1
            id="hero-heading"
            className="text-5xl font-medium leading-[0.85] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            <span className="block text-white">Become</span>
            <ShinyText className="block" speed={3} gradientAngle={100}>
              Product Leader.
            </ShinyText>
          </h1>

          <a
            href="#apply"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-900 md:mt-10 md:px-8 md:py-4 md:text-base"
          >
            Apply for Next Enrollment
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </section>
      </div>
    </main>
  );
}

export default App;
