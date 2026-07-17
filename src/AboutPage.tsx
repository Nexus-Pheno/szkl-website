import { ArrowDownRight } from 'lucide-react';
import { FadeUp } from './components/FadeUp';
import { SiteHeader } from './components/SiteHeader';
import { VIDEO_SOURCE } from './site';

const CULTURE = [
  {
    title: 'Ownership',
    body: 'Look inward first. Take responsibility for the thinking, the decision, and the outcome.',
  },
  {
    title: 'Respect without hierarchy',
    body: 'Ideas are judged by their value—not by the title, seniority, or visibility of the person offering them.',
  },
  {
    title: 'Team over visibility',
    body: 'We share knowledge, support one another, and optimize for the strength of the whole system.',
  },
  {
    title: 'Learn broadly',
    body: 'Useful information can come from customers, colleagues, competitors, failed experiments, or unexpected sources.',
  },
  {
    title: 'Precision and vision',
    body: 'Execute today with discipline while deliberately building the capabilities the future will require.',
  },
  {
    title: 'Systems, not heroics',
    body: 'Document, structure, and standardize. The best breakthrough is one a team can understand and repeat.',
  },
  {
    title: 'Truth early',
    body: 'Evidence overrides opinion. Problems are surfaced early, and failure becomes material for learning.',
  },
  {
    title: 'Impact beyond ourselves',
    body: 'Choose meaningful problems, think long term, and build work that remains useful after any one person or idea.',
  },
];

const PULSE_DIRECTION = [
  {
    title: 'Useful workflows first',
    body: 'Create immediate value for researchers before asking them to change how they work or structure more data.',
  },
  {
    title: 'Traceable by design',
    body: 'Connect recommendations to sources, assumptions, confidence, alternatives, and decision history.',
  },
  {
    title: 'Customer controlled',
    body: 'Permissions, provenance, auditability, and knowledge boundaries belong in the product—not in the fine print.',
  },
  {
    title: 'Human approved',
    body: 'AI expands what people can see and compare. Scientists and leaders remain responsible for judgment.',
  },
  {
    title: 'Memory that compounds',
    body: 'Every experiment, failure, decision, and outcome should make the next question easier to answer well.',
  },
];

const LEARNING_LOOP = [
  { number: '01', title: 'Observe', body: 'Begin with a real scientific question.' },
  { number: '02', title: 'Structure', body: 'Turn activity into permissioned evidence.' },
  { number: '03', title: 'Reason', body: 'Compare knowledge and expose assumptions.' },
  { number: '04', title: 'Test', body: 'Put recommendations against real work.' },
  { number: '05', title: 'Learn', body: 'Feed verified results into the next decision.' },
];

function AboutPage() {
  return (
    <main className="bg-[#f2f1ec] text-[#111]">
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.12)_36%,rgba(0,0,0,0.88)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-10 xl:px-8">
          <SiteHeader currentPath="/about-us" />

          <div className="flex flex-1 flex-col justify-end pb-10 pt-28 sm:pb-14 lg:pb-16">
            <FadeUp as="p" className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-white/65">
              About SZKL
            </FadeUp>
            <FadeUp
              as="h1"
              delay={0.08}
              y={36}
              className="max-w-6xl text-[clamp(3.35rem,8.2vw,7.4rem)] font-medium leading-[0.86] tracking-[-0.065em]"
            >
              We turn scientific work into{' '}
              <span className="text-white/42">compounding intelligence.</span>
            </FadeUp>

            <div className="mt-12 grid gap-8 border-t border-white/25 pt-7 md:grid-cols-2 lg:mt-16">
              <FadeUp as="p" delay={0.2} className="max-w-xl text-base leading-relaxed text-white/82 sm:text-lg">
                Shenzhen Knowledge Labs is the company behind Pulse, working alongside Pheno to
                transform fragmented knowledge, experiments, and decisions into a trusted learning system.
              </FadeUp>
              <FadeUp as="p" delay={0.28} className="max-w-md text-sm leading-relaxed text-white/58 md:justify-self-end md:text-right">
                Built in Shenzhen for researchers, laboratories, and R&amp;D organizations working on
                problems that matter.
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.32fr_1fr] lg:gap-20">
          <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
            Our mission
          </FadeUp>
          <div>
            <FadeUp as="h2" y={30} className="max-w-5xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Build trusted intelligence infrastructure that turns scientific evidence into better decisions—and every decision into reusable learning.
            </FadeUp>
            <FadeUp as="p" delay={0.1} className="mt-10 max-w-2xl text-base leading-relaxed text-black/58 sm:text-lg">
              We believe the advantage belongs not to the team that produces the most data, but to the
              one that learns the most from every experiment, source, and outcome.
            </FadeUp>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="bg-[#0b0b0b] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-white/42">
              Our ecosystem
            </FadeUp>
            <FadeUp as="h2" y={30} className="max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:justify-self-end">
              One home. A connected system for learning.
            </FadeUp>
          </div>

          <div className="mt-16 grid gap-3 lg:grid-cols-3">
            <FadeUp className="flex min-h-[360px] flex-col justify-between rounded-[2rem] border border-white/15 p-7 sm:p-9">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/38">
                <span>01</span>
                <span>The company</span>
              </div>
              <div>
                <h3 className="text-4xl font-medium tracking-[-0.045em]">SZKL</h3>
                <p className="mt-5 text-base leading-relaxed text-white/58">
                  The home for the people, products, and long-term systems that help scientific work become usable intelligence.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.08} className="flex min-h-[360px] flex-col justify-between rounded-[2rem] bg-white p-7 text-black sm:p-9">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-black/40">
                <span>02</span>
                <span>The platform</span>
              </div>
              <div>
                <h3 className="text-4xl font-medium tracking-[-0.045em]">Pulse</h3>
                <p className="mt-5 text-base leading-relaxed text-black/58">
                  The intelligence layer for scientific work—connecting evidence, experiments, decisions, and organizational memory.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.16} className="flex min-h-[360px] flex-col justify-between rounded-[2rem] border border-white/15 p-7 sm:p-9">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/38">
                <span>03</span>
                <span>Alongside us</span>
              </div>
              <div>
                <h3 className="text-4xl font-medium tracking-[-0.045em]">Pheno</h3>
                <p className="mt-5 text-base leading-relaxed text-white/58">
                  A materials innovation company whose scientific rigor, closed-loop experimentation, and platform thinking shape how we work.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section id="culture" className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
            <div>
              <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-black/42">
                How we work
              </FadeUp>
              <FadeUp as="h2" y={30} className="mt-6 max-w-xl text-5xl font-medium leading-[0.96] tracking-[-0.05em] sm:text-7xl">
                Culture is an operating system.
              </FadeUp>
            </div>
            <FadeUp as="p" delay={0.08} className="max-w-2xl text-lg leading-relaxed text-black/58 lg:pt-10">
              Our culture borrows Pheno’s conviction that great work should not depend on isolated brilliance.
              It should come from disciplined people, honest evidence, respectful collaboration, and systems that keep learning.
            </FadeUp>
          </div>

          <div className="mt-16 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {CULTURE.map((value, index) => (
              <FadeUp key={value.title} delay={(index % 4) * 0.05} className="border-t border-black/20 py-8 lg:min-h-[230px]">
                <span className="text-xs text-black/35">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-9 text-xl font-medium tracking-[-0.025em]">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-black/52">{value.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section id="pulse" className="overflow-hidden bg-[#111318] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.75fr] lg:gap-24">
          <div>
            <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-[#9aaaff]">
              Our direction
            </FadeUp>
            <FadeUp as="h2" y={30} className="mt-6 max-w-4xl text-5xl font-medium leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              From evidence to better R&amp;D decisions.
            </FadeUp>
            <FadeUp as="p" delay={0.1} className="mt-10 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Pulse gives SZKL its product direction: practical intelligence that connects what a team knows,
              what it has tried, what the world is doing, and what should happen next.
            </FadeUp>
          </div>

          <div className="border-t border-white/20">
            {PULSE_DIRECTION.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.05} className="grid grid-cols-[42px_1fr] gap-5 border-b border-white/15 py-7">
                <span className="pt-1 text-xs text-white/30">{String(index + 1).padStart(2, '0')}</span>
                <div>
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
          <div className="flex items-end justify-between gap-8">
            <div>
              <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-black/40">
                The learning loop
              </FadeUp>
              <FadeUp as="h2" id="learning-loop-title" y={30} className="mt-5 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.045em] sm:text-6xl">
                Every cycle should make the next one better.
              </FadeUp>
            </div>
            <ArrowDownRight className="hidden h-12 w-12 text-black/25 sm:block" aria-hidden="true" />
          </div>

          <div className="mt-16 grid border-t border-black/20 md:grid-cols-5">
            {LEARNING_LOOP.map((step, index) => (
              <FadeUp key={step.title} delay={index * 0.06} className="border-b border-black/15 py-8 md:min-h-[240px] md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <span className="text-xs text-black/32">{step.number}</span>
                <h3 className="mt-14 text-2xl font-medium tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-4 max-w-[180px] text-sm leading-relaxed text-black/50">{step.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black px-5 pb-8 pt-24 text-white sm:px-8 sm:pt-32 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-white/38">
            The future we are building
          </FadeUp>
          <FadeUp as="h2" y={30} className="mt-6 max-w-6xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Science should remember. Teams should learn. Better decisions should compound.
          </FadeUp>
          <FadeUp as="p" delay={0.1} className="mt-10 max-w-2xl text-base leading-relaxed text-white/52 sm:text-lg">
            We are building SZKL for researchers and organizations that care about useful systems,
            trusted knowledge, and work that matters beyond any single project.
          </FadeUp>

          <footer className="mt-24 flex flex-col gap-6 border-t border-white/15 py-8 text-xs text-white/38 sm:mt-32 sm:flex-row sm:items-center sm:justify-between">
            <span>SZKL — Shenzhen Knowledge Labs</span>
            <span>We don’t wait. We don’t blame. We build.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
