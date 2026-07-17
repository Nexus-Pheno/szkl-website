import { ArrowDown, ArrowDownRight, ArrowUpRight, LockKeyhole } from 'lucide-react';
import { FadeUp } from './components/FadeUp';
import { SiteHeader } from './components/SiteHeader';
import { PHENO_PORTAL_URL, PULSE_URL, VIDEO_SOURCE } from './site';

const CULTURE = [
  {
    title: 'Ownership',
    body: 'Take responsibility for the thinking, the decision, and the outcome.',
  },
  {
    title: 'Respect without hierarchy',
    body: 'Ideas are judged by their value—not by title, seniority, or visibility.',
  },
  {
    title: 'Team over visibility',
    body: 'Share knowledge freely and optimize for the strength of the whole system.',
  },
  {
    title: 'Learn broadly',
    body: 'Useful signals can come from customers, colleagues, competitors, or failure.',
  },
  {
    title: 'Precision and vision',
    body: 'Execute today with discipline while building what tomorrow will require.',
  },
  {
    title: 'Systems, not heroics',
    body: 'Document, structure, and make breakthroughs understandable and repeatable.',
  },
  {
    title: 'Truth early',
    body: 'Evidence overrides opinion. Problems surface early and become material for learning.',
  },
  {
    title: 'Impact beyond ourselves',
    body: 'Choose meaningful problems and build work that remains useful over time.',
  },
];

const PULSE_DIRECTION = [
  {
    title: 'Useful workflows first',
    body: 'Create immediate value for researchers before asking them to change how they work.',
  },
  {
    title: 'Traceable by design',
    body: 'Connect recommendations to sources, assumptions, confidence, and decision history.',
  },
  {
    title: 'Customer controlled',
    body: 'Permissions, provenance, auditability, and knowledge boundaries belong in the product.',
  },
  {
    title: 'Human approved',
    body: 'AI expands what people can see and compare. People remain responsible for judgment.',
  },
  {
    title: 'Memory that compounds',
    body: 'Every experiment, failure, and outcome should make the next question easier to answer well.',
  },
];

const LEARNING_LOOP = [
  { number: '01', title: 'Observe', body: 'Begin with a real scientific question.' },
  { number: '02', title: 'Structure', body: 'Turn activity into permissioned evidence.' },
  { number: '03', title: 'Reason', body: 'Compare knowledge and expose assumptions.' },
  { number: '04', title: 'Test', body: 'Put recommendations against real work.' },
  { number: '05', title: 'Learn', body: 'Feed verified results into the next decision.' },
];

function ExternalArrow() {
  return (
    <ArrowUpRight
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <main className="min-w-0 overflow-hidden bg-[#f2f1ec] text-[#111]">
      <section id="home" className="relative min-h-[100svh] scroll-mt-0 overflow-hidden bg-black text-white">
        <video
          className="hero-video absolute inset-0 h-full w-full scale-[1.02] object-cover"
          src={VIDEO_SOURCE}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.86)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(93,107,255,0.26),transparent_33%)]" />

        <div className="signal-field pointer-events-none absolute right-[-16vw] top-[18vh] h-[72vw] max-h-[920px] w-[72vw] max-w-[920px]" aria-hidden="true">
          <span className="signal-ring signal-ring-one" />
          <span className="signal-ring signal-ring-two" />
          <span className="signal-ring signal-ring-three" />
          <span className="signal-core" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-10 xl:px-8">
          <SiteHeader />

          <div className="mt-7 flex items-center justify-between gap-6 border-t border-white/15 pt-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 sm:mt-9 sm:text-xs">
            <span>Company behind Pulse</span>
            <span className="text-right">Shenzhen · Scientific intelligence</span>
          </div>

          <div className="mt-auto grid min-w-0 gap-8 pb-8 pt-24 lg:grid-cols-[minmax(0,1fr)_310px] lg:items-end lg:gap-14 lg:pb-12">
            <div className="min-w-0">
              <FadeUp as="p" className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-white/65">
                <span className="h-2 w-2 rounded-full bg-[#9ba7ff] shadow-[0_0_20px_rgba(155,167,255,0.95)]" />
                Shenzhen Knowledge Labs
              </FadeUp>
              <FadeUp
                as="h1"
                delay={0.08}
                y={38}
                className="max-w-[1050px] text-[clamp(4.15rem,11.7vw,10.2rem)] font-medium leading-[0.77] tracking-[-0.075em]"
              >
                <span className="block">SCIENCE</span>
                <span className="block">SHOULD</span>
                <span className="hero-accent block">REMEMBER.</span>
              </FadeUp>
            </div>

            <FadeUp delay={0.22} className="min-w-0 rounded-[1.75rem] border border-white/18 bg-black/30 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:mb-1">
              <p className="text-base leading-relaxed text-white/78">
                We build trusted intelligence systems that turn scientific evidence, experiments, and decisions into compounding advantage.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={PULSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-full bg-white px-5 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Experience Pulse
                  <ExternalArrow />
                </a>
                <a
                  href="#about"
                  className="group flex items-center justify-between rounded-full border border-white/18 px-5 py-3.5 text-sm text-white/70 transition-colors duration-300 hover:border-white/38 hover:text-white"
                >
                  Explore SZKL
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-0 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.31fr_minmax(0,1fr)] lg:gap-20">
          <div>
            <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-black/42">
              About SZKL
            </FadeUp>
            <FadeUp as="p" delay={0.08} className="mt-7 max-w-xs text-sm leading-relaxed text-black/50">
              The company and long-term home behind Pulse, working alongside Pheno from Shenzhen.
            </FadeUp>
          </div>
          <div className="min-w-0">
            <FadeUp as="h2" y={30} className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.048em] sm:text-6xl lg:text-7xl">
              We turn fragmented scientific work into a trusted system that keeps learning.
            </FadeUp>
            <div className="mt-12 grid gap-8 border-t border-black/20 pt-8 md:grid-cols-2">
              <FadeUp as="p" delay={0.08} className="max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
                Our mission is to build intelligence infrastructure that turns evidence into better decisions—and every decision into reusable learning.
              </FadeUp>
              <FadeUp as="p" delay={0.14} className="max-w-md text-sm leading-relaxed text-black/48 md:justify-self-end">
                The advantage belongs not to the team that produces the most data, but to the one that learns the most from every source, experiment, and outcome.
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="scroll-mt-0 bg-[#090909] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-end">
            <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-white/42">
              The SZKL ecosystem
            </FadeUp>
            <FadeUp as="h2" y={30} className="max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:justify-self-end">
              One home. Two connected paths to better science.
            </FadeUp>
          </div>

          <div className="mt-16 grid min-w-0 gap-3 lg:grid-cols-3">
            <FadeUp className="flex min-h-[410px] min-w-0 flex-col justify-between rounded-[2rem] border border-white/14 p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-white/38">
                <span>01</span>
                <span>The company</span>
              </div>
              <div>
                <h3 className="text-5xl font-medium tracking-[-0.055em]">SZKL</h3>
                <p className="mt-5 text-base leading-relaxed text-white/55">
                  The home for the people, products, and long-term systems that help scientific work become usable intelligence.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.08} className="pulse-card flex min-h-[410px] min-w-0 flex-col justify-between overflow-hidden rounded-[2rem] p-7 text-white sm:p-9">
              <div className="relative z-10 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-white/60">
                <span>02</span>
                <span>Public platform</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-5xl font-medium tracking-[-0.055em]">Pulse</h3>
                <p className="mt-5 text-base leading-relaxed text-white/72">
                  The intelligence layer for scientific work—connecting evidence, experiments, decisions, and organizational memory.
                </p>
                <a
                  href={PULSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Experience Pulse
                  <ExternalArrow />
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.16} className="flex min-h-[410px] min-w-0 flex-col justify-between rounded-[2rem] bg-[#f2f1ec] p-7 text-black sm:p-9">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-black/42">
                <span>03</span>
                <span className="inline-flex items-center gap-2"><LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" /> Internal</span>
              </div>
              <div>
                <h3 className="text-5xl font-medium tracking-[-0.055em]">Pheno</h3>
                <p className="mt-5 text-base leading-relaxed text-black/58">
                  A materials innovation company whose scientific rigor, closed-loop experimentation, and platform thinking shape how we work.
                </p>
                <a
                  href={PHENO_PORTAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 border-b border-black/30 pb-1 text-sm font-medium text-black transition-colors hover:border-black"
                >
                  Pheno employee portal
                  <ExternalArrow />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section id="culture" className="scroll-mt-0 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.55fr_minmax(0,1fr)] lg:gap-20">
            <div>
              <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-black/42">
                How we work
              </FadeUp>
              <FadeUp as="h2" y={30} className="mt-6 max-w-xl text-5xl font-medium leading-[0.96] tracking-[-0.05em] sm:text-7xl">
                Culture is an operating system.
              </FadeUp>
            </div>
            <FadeUp as="p" delay={0.08} className="max-w-2xl text-lg leading-relaxed text-black/58 lg:pt-10">
              Our culture shares Pheno’s conviction that great work should come from disciplined people, honest evidence, respectful collaboration, and systems that keep learning—not isolated heroics.
            </FadeUp>
          </div>

          <div className="mt-16 grid min-w-0 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {CULTURE.map((value, index) => (
              <FadeUp key={value.title} delay={(index % 4) * 0.05} className="min-w-0 border-t border-black/20 py-8 lg:min-h-[230px]">
                <span className="text-xs text-black/35">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-9 text-xl font-medium tracking-[-0.025em]">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-black/52">{value.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section id="pulse" className="relative scroll-mt-0 overflow-hidden bg-[#111318] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="pointer-events-none absolute -right-48 top-20 h-[680px] w-[680px] rounded-full bg-[#4d5bff]/18 blur-[120px]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl min-w-0 gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)] lg:gap-24">
          <div className="min-w-0">
            <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-[#aab3ff]">
              Pulse · Open to the public
            </FadeUp>
            <FadeUp as="h2" y={30} className="mt-6 max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              From evidence to better R&amp;D decisions.
            </FadeUp>
            <FadeUp as="p" delay={0.1} className="mt-10 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Pulse gives SZKL its product direction: practical intelligence that connects what a team knows, what it has tried, what the world is doing, and what should happen next.
            </FadeUp>
            <FadeUp delay={0.16}>
              <a
                href={PULSE_URL}
                target="_blank"
                rel="noreferrer"
                className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#aab3ff] px-6 py-4 text-sm font-medium text-[#10121a] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Experience Pulse
                <ExternalArrow />
              </a>
            </FadeUp>
          </div>

          <div className="min-w-0 border-t border-white/20">
            {PULSE_DIRECTION.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.05} className="grid min-w-0 grid-cols-[42px_minmax(0,1fr)] gap-5 border-b border-white/15 py-7">
                <span className="pt-1 text-xs text-white/30">{String(index + 1).padStart(2, '0')}</span>
                <div className="min-w-0">
                  <h3 className="text-xl font-medium tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/48">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-36" aria-labelledby="learning-loop-title">
        <div className="mx-auto max-w-7xl">
          <div className="flex min-w-0 items-end justify-between gap-8">
            <div className="min-w-0">
              <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-black/40">
                The learning loop
              </FadeUp>
              <FadeUp as="h2" id="learning-loop-title" y={30} className="mt-5 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.045em] sm:text-6xl">
                Every cycle should make the next one better.
              </FadeUp>
            </div>
            <ArrowDownRight className="hidden h-12 w-12 shrink-0 text-black/25 sm:block" aria-hidden="true" />
          </div>

          <div className="mt-16 grid min-w-0 border-t border-black/20 md:grid-cols-5">
            {LEARNING_LOOP.map((step, index) => (
              <FadeUp key={step.title} delay={index * 0.06} className="min-w-0 border-b border-black/15 py-8 md:min-h-[240px] md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <span className="text-xs text-black/32">{step.number}</span>
                <h3 className="mt-14 text-2xl font-medium tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-4 max-w-[180px] text-sm leading-relaxed text-black/50">{step.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-0 bg-black px-5 pb-8 pt-24 text-white sm:px-8 sm:pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-white/38">
            The future we are building
          </FadeUp>
          <FadeUp as="h2" y={30} className="mt-6 max-w-6xl text-5xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Science should remember. Teams should learn. Better decisions should compound.
          </FadeUp>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <FadeUp delay={0.1}>
              <a
                href={PULSE_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-4 rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Experience Pulse
                <ExternalArrow />
              </a>
            </FadeUp>
            <FadeUp delay={0.16}>
              <a
                href={PHENO_PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm text-white/68 transition-colors hover:border-white/40 hover:text-white"
              >
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                Pheno employee portal
                <ExternalArrow />
              </a>
            </FadeUp>
          </div>

          <footer className="mt-24 grid gap-6 border-t border-white/15 py-8 text-xs text-white/38 sm:mt-32 sm:grid-cols-3 sm:items-center">
            <span>SZKL — Shenzhen Knowledge Labs</span>
            <span className="sm:text-center">Shenzhen · China</span>
            <span className="sm:text-right">We don’t wait. We don’t blame. We build.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;
