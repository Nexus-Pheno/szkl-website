import { ArrowUpRight } from 'lucide-react';
import { ShinyText } from './components/ShinyText';
import { SiteHeader } from './components/SiteHeader';
import { VIDEO_SOURCE } from './site';

function App() {
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
        <SiteHeader currentPath="/" />

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
