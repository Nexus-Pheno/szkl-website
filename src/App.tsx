import { useEffect, useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, LockKeyhole } from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { FadeUp } from './components/FadeUp';
import { SiteHeader } from './components/SiteHeader';
import { COPY, type Language } from './i18n';
import { PHENO_PORTAL_URL, PULSE_LOCKUP, PULSE_URL, VIDEO_SOURCE } from './site';

function ExternalArrow() {
  return (
    <ArrowUpRight
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    />
  );
}

function App() {
  const [language, setLanguage] = useState<Language>(() =>
    window.localStorage.getItem('szkl-language') === 'zh' ? 'zh' : 'en',
  );
  const copy = COPY[language];
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.28,
  });
  const heroKeywordGradientPosition = useTransform(
    smoothProgress,
    [0, 0.18],
    ['12% 50%', '88% 50%'],
  );
  const heroVideoY = useTransform(scrollYProgress, [0, 0.16], [0, 110]);
  const heroContentY = useTransform(scrollYProgress, [0, 0.16], [0, 74]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0.36]);
  const signalRotation = useTransform(scrollYProgress, [0, 0.3], [0, 38]);
  const marqueeX = useTransform(scrollYProgress, [0.08, 0.58], [100, -760]);
  const aboutOrbY = useTransform(scrollYProgress, [0.05, 0.34], [-120, 180]);
  const cultureOrbY = useTransform(scrollYProgress, [0.36, 0.72], [-100, 210]);
  const pulseOrbY = useTransform(scrollYProgress, [0.5, 0.9], [-80, 170]);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.body.dataset.language = language;
    document.title = copy.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.metaDescription);
    window.localStorage.setItem('szkl-language', language);
  }, [copy.metaDescription, copy.metaTitle, language]);

  return (
    <main className="min-w-0 overflow-hidden bg-[#f2f1ec] text-[#111]">
      <motion.div
        className="scroll-progress fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-[linear-gradient(90deg,#ffffff_0%,#aab3ff_48%,#5967ff_100%)]"
        style={{ scaleX: smoothProgress }}
        aria-hidden="true"
      />
      <section id="home" className="relative min-h-[100svh] scroll-mt-0 overflow-hidden bg-black text-white">
        <motion.video
          className="hero-video absolute inset-0 h-full w-full scale-[1.02] object-cover"
          src={VIDEO_SOURCE}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          style={{ y: shouldReduceMotion ? 0 : heroVideoY }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.86)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(93,107,255,0.26),transparent_33%)]" />

        <motion.div
          className="signal-field pointer-events-none absolute right-[-16vw] top-[18vh] h-[72vw] max-h-[920px] w-[72vw] max-w-[920px]"
          style={{ rotate: shouldReduceMotion ? 0 : signalRotation }}
          aria-hidden="true"
        >
          <span className="signal-ring signal-ring-one" />
          <span className="signal-ring signal-ring-two" />
          <span className="signal-ring signal-ring-three" />
        </motion.div>

        <div className="hero-shell relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-10 xl:px-8">
          <SiteHeader language={language} onLanguageChange={setLanguage} />

          <motion.div
            className="my-auto grid min-w-0 gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_310px] lg:items-center lg:gap-14 lg:py-12"
            style={{
              y: shouldReduceMotion ? 0 : heroContentY,
              opacity: shouldReduceMotion ? 1 : heroContentOpacity,
            }}
          >
            <div className="min-w-0">
              <FadeUp
                as="h1"
                delay={0.08}
                y={38}
                className="max-w-[980px] text-[clamp(3.25rem,13vw,4.3rem)] font-medium leading-[0.86] tracking-[-0.07em] sm:text-[clamp(4.6rem,8.2vw,7.6rem)]"
                ariaLabel={PULSE_LOCKUP.headline}
              >
                <span className="block">
                  Make{' '}
                  <motion.span
                    className="hero-keyword inline-block"
                    style={{
                      backgroundPosition: shouldReduceMotion
                        ? '50% 50%'
                        : heroKeywordGradientPosition,
                    }}
                  >
                    Knowledge
                  </motion.span>
                </span>
                <span className="block">Count.</span>
              </FadeUp>
              <FadeUp
                as="p"
                delay={0.16}
                y={28}
                className="mt-7 max-w-3xl text-[clamp(1.05rem,2.2vw,1.5rem)] leading-[1.42] text-white/72"
              >
                {PULSE_LOCKUP.supporting}
              </FadeUp>
            </div>

            <FadeUp delay={0.22} className="min-w-0 rounded-[1.75rem] border border-white/18 bg-black/30 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:mb-1">
              <div
                className="mb-6 flex h-12 max-w-full items-center gap-2"
                role="img"
                aria-label="Pulse"
              >
                <img
                  src="/pulse-icon-official.png"
                  alt=""
                  className="brand-logo-on-dark h-12 w-auto object-contain"
                  aria-hidden="true"
                  draggable="false"
                />
                <img
                  src="/pulse-wordmark-official.png"
                  alt=""
                  className="brand-logo-on-dark h-10 w-auto object-contain"
                  aria-hidden="true"
                  draggable="false"
                />
              </div>
              <p className="text-base leading-relaxed text-white/78">
                {copy.hero.body}
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={PULSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="pulse-cta group flex items-center justify-between rounded-full bg-white px-5 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {copy.experiencePulse}
                  <ExternalArrow />
                </a>
                <a
                  href="#about"
                  className="group flex items-center justify-between rounded-full border border-white/18 px-5 py-3.5 text-sm text-white/70 transition-colors duration-300 hover:border-white/38 hover:text-white"
                >
                  {copy.hero.explore}
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            </FadeUp>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative scroll-mt-0 overflow-hidden px-5 py-20 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <motion.div
          className="ambient-orb pointer-events-none absolute -right-44 top-20 h-[480px] w-[480px] rounded-full bg-[#6d79ff]/10 blur-[95px]"
          style={{ y: shouldReduceMotion ? 0 : aboutOrbY }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.31fr_minmax(0,1fr)] lg:gap-20">
          <div>
            <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-black/42">
              {copy.about.label}
            </FadeUp>
            <FadeUp as="p" delay={0.08} className="mt-7 max-w-xs text-sm leading-relaxed text-black/50">
              {copy.about.intro}
            </FadeUp>
          </div>
          <div className="min-w-0">
            <FadeUp as="h2" y={30} mobileX={14} className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.048em] sm:text-6xl lg:text-7xl">
              {copy.about.title}
            </FadeUp>
            <div className="mt-12 grid gap-8 border-t border-black/20 pt-8 md:grid-cols-2">
              <FadeUp as="p" delay={0.08} className="max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
                {copy.about.mission}
              </FadeUp>
              <FadeUp as="p" delay={0.14} className="max-w-md text-sm leading-relaxed text-black/48 md:justify-self-end">
                {copy.about.belief}
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section
        className="kinetic-marquee relative overflow-hidden border-y border-white/10 bg-[#0c0d13] py-7 text-white sm:py-9"
        aria-label={copy.motionLine}
      >
        <motion.div
          className="flex w-max min-w-max items-center gap-14 whitespace-nowrap text-[clamp(2rem,5.2vw,5rem)] font-medium tracking-[-0.045em] text-white/90"
          style={{ x: shouldReduceMotion ? 0 : marqueeX }}
          aria-hidden="true"
        >
          {[0, 1, 2].map((item) => (
            <span key={item} className="inline-flex items-center gap-14">
              {copy.motionLine}
              <span className="h-3 w-3 rounded-full bg-[#9ba7ff] shadow-[0_0_26px_rgba(155,167,255,0.9)]" />
            </span>
          ))}
        </motion.div>
      </section>

      <section id="ecosystem" className="scroll-mt-0 bg-[#090909] px-5 py-20 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-end">
            <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-white/42">
              {copy.ecosystem.label}
            </FadeUp>
            <FadeUp as="h2" y={30} className="max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:justify-self-end">
              {copy.ecosystem.title}
            </FadeUp>
          </div>

          <div className="mt-16 grid min-w-0 gap-3 lg:grid-cols-3">
            <FadeUp y={72} scale={0.92} rotate={-1.5} blur={10} mobileX={-18} className="h-full min-w-0">
              <motion.article
                className="ecosystem-card ecosystem-card-company grid h-full min-h-[440px] min-w-0 grid-rows-[auto_112px_minmax(0,1fr)_auto] gap-y-6 rounded-[2rem] border border-white/14 bg-black p-7 sm:p-9"
                whileHover={shouldReduceMotion ? undefined : { y: -7, scale: 1.012 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24, mass: 0.55 }}
              >
                <span className="ecosystem-card-sheen" aria-hidden="true" />
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-white/38">
                  <span>01</span>
                  <span>{copy.ecosystem.companyLabel}</span>
                </div>
                <div className="flex min-w-0 items-center">
                  <span className="relative block h-[78px] w-[232px] max-w-full overflow-hidden">
                    <img
                      src="/szkl-logo-official.png"
                      alt={copy.brandAlt}
                      className="szkl-logo-on-dark absolute left-1/2 top-1/2 w-[332px] max-w-none -translate-x-1/2 -translate-y-1/2"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </span>
                </div>
                <p className="text-base leading-relaxed text-white/55">
                  {copy.ecosystem.companyBody}
                </p>
                <a
                  href="#about"
                  className="group inline-flex min-h-11 w-fit items-center gap-3 rounded-full border border-white/22 px-5 py-3 text-sm font-medium text-white/78 transition-colors hover:border-white/45 hover:text-white"
                >
                  {copy.ecosystem.companyAction}
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
              </motion.article>
            </FadeUp>

            <FadeUp delay={0.08} y={72} scale={0.9} rotate={1.5} blur={10} mobileX={18} className="h-full min-w-0">
              <motion.article
                className="ecosystem-card ecosystem-card-pulse pulse-card grid h-full min-h-[440px] min-w-0 grid-rows-[auto_112px_minmax(0,1fr)_auto] gap-y-6 overflow-hidden rounded-[2rem] p-7 text-white sm:p-9"
                whileHover={shouldReduceMotion ? undefined : { y: -7, scale: 1.012 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24, mass: 0.55 }}
              >
                <span className="ecosystem-card-sheen" aria-hidden="true" />
                <div className="relative z-10 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-white/60">
                  <span>02</span>
                  <span>{copy.ecosystem.pulseLabel}</span>
                </div>
                <div className="flex min-w-0 items-center">
                  <img
                    src="/pulse-logo-official.png"
                    alt="Pulse"
                    className="brand-logo-on-dark w-[104px] object-contain sm:w-[112px]"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </div>
                <p className="text-base leading-relaxed text-white/72">
                  {copy.ecosystem.pulseBody}
                </p>
                <a
                  href={PULSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="pulse-cta group inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {copy.experiencePulse}
                  <ExternalArrow />
                </a>
              </motion.article>
            </FadeUp>

            <FadeUp delay={0.16} y={72} scale={0.92} rotate={-1} blur={10} mobileX={-18} className="h-full min-w-0">
              <motion.article
                className="ecosystem-card ecosystem-card-pheno grid h-full min-h-[440px] min-w-0 grid-rows-[auto_112px_minmax(0,1fr)_auto] gap-y-6 rounded-[2rem] bg-[#f2f1ec] p-7 text-black sm:p-9"
                whileHover={shouldReduceMotion ? undefined : { y: -7, scale: 1.012 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24, mass: 0.55 }}
              >
                <span className="ecosystem-card-sheen" aria-hidden="true" />
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-black/42">
                  <span>03</span>
                  <span className="inline-flex items-center gap-2"><LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" /> {copy.ecosystem.phenoLabel}</span>
                </div>
                <div className="flex min-w-0 items-center">
                  <img
                    src="/pheno-logo-official.png"
                    alt="Pheno"
                    className="brand-logo-on-light h-auto w-[240px] max-w-full object-contain sm:w-[270px]"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </div>
                <p className="text-base leading-relaxed text-black/58">
                  {copy.ecosystem.phenoBody}
                </p>
                <a
                  href={PHENO_PORTAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 w-fit items-center gap-3 rounded-full border border-black/22 px-5 py-3 text-sm font-medium text-black transition-colors hover:border-black/55"
                >
                  {copy.ecosystem.phenoPortal}
                  <ExternalArrow />
                </a>
              </motion.article>
            </FadeUp>
          </div>
        </div>
      </section>

      <section id="culture" className="relative scroll-mt-0 overflow-hidden px-5 py-20 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <motion.div
          className="ambient-orb pointer-events-none absolute -left-52 top-24 h-[560px] w-[560px] rounded-full bg-[#8290ff]/9 blur-[115px]"
          style={{ y: shouldReduceMotion ? 0 : cultureOrbY }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.55fr_minmax(0,1fr)] lg:gap-20">
            <div>
              <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-black/42">
                {copy.culture.label}
              </FadeUp>
              <FadeUp as="h2" y={30} className="mt-6 max-w-xl text-[clamp(2.65rem,13vw,3rem)] font-medium leading-[0.96] tracking-[-0.05em] sm:text-7xl">
                {copy.culture.title}
              </FadeUp>
            </div>
            <FadeUp as="p" delay={0.08} className="max-w-2xl text-lg leading-relaxed text-black/58 lg:pt-10">
              {copy.culture.intro}
            </FadeUp>
          </div>

          <div className="mt-16 grid min-w-0 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {copy.culture.values.map((value, index) => (
              <FadeUp key={value.title} delay={(index % 4) * 0.05} y={46} scale={0.95} blur={8} mobileX={index % 2 === 0 ? -16 : 16} className="relative min-w-0 border-t border-black/15 py-7 sm:py-8 lg:min-h-[230px]">
                <motion.span
                  className="absolute left-0 top-[-1px] h-[2px] w-full origin-left bg-[linear-gradient(90deg,#5967ff_0%,rgba(89,103,255,0.08)_100%)]"
                  initial={shouldReduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.85, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden="true"
                />
                <span className="text-xs text-black/35">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-xl font-medium tracking-[-0.025em] sm:mt-9">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-black/52">{value.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section id="pulse" className="relative scroll-mt-0 overflow-hidden bg-[#111318] px-5 py-20 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <motion.div
          className="ambient-orb pointer-events-none absolute -right-48 top-20 h-[680px] w-[680px] rounded-full bg-[#4d5bff]/18 blur-[120px]"
          style={{ y: shouldReduceMotion ? 0 : pulseOrbY }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl min-w-0 gap-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.5fr)] lg:gap-16">
          <div className="min-w-0">
            <FadeUp y={24} scale={0.94} blur={6} className="mb-8">
              <img
                src="/pulse-logo-official.png"
                alt=""
                className="brand-logo-on-dark w-[94px] object-contain sm:w-[112px]"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </FadeUp>
            <FadeUp as="p" className="text-xs font-semibold uppercase tracking-[0.28em] text-[#aab3ff]">
              {copy.pulse.label}
            </FadeUp>
            <FadeUp as="h2" y={30} className="mt-6 max-w-5xl text-[clamp(2.65rem,13vw,3rem)] font-medium leading-[0.92] tracking-[-0.055em] sm:text-7xl">
              {copy.pulse.title}
            </FadeUp>
            <FadeUp as="p" delay={0.1} className="mt-10 max-w-3xl text-base leading-relaxed text-white/62 sm:text-lg sm:leading-relaxed">
              {copy.pulse.intro}
            </FadeUp>
            <FadeUp delay={0.16}>
              <a
                href={PULSE_URL}
                target="_blank"
                rel="noreferrer"
                className="pulse-cta group mt-9 inline-flex items-center gap-4 rounded-full bg-[#aab3ff] px-6 py-4 text-sm font-medium text-[#10121a] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {copy.experiencePulse}
                <ExternalArrow />
              </a>
            </FadeUp>
          </div>

          <div className="min-w-0 border-t border-white/20">
            {copy.pulse.directions.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.05} y={42} scale={0.975} blur={7} mobileX={index % 2 === 0 ? -14 : 14} className="grid min-w-0 grid-cols-[42px_minmax(0,1fr)] gap-5 border-b border-white/15 py-7">
                <div className="pt-1 text-xs text-white/30">
                  {String(index + 1).padStart(2, '0')}
                  <motion.span
                    className="mt-3 block h-1.5 w-1.5 rounded-full bg-[#aab3ff] shadow-[0_0_16px_rgba(170,179,255,0.7)]"
                    initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: 0.15 + index * 0.06 }}
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-medium tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/48">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-32 lg:px-10 lg:py-36" aria-labelledby="learning-loop-title">
        <div className="mx-auto max-w-7xl">
          <div className="flex min-w-0 items-end justify-between gap-8">
            <div className="min-w-0">
              <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-black/40">
                {copy.learning.label}
              </FadeUp>
              <FadeUp as="h2" id="learning-loop-title" y={30} className="mt-5 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.045em] sm:text-6xl">
                {copy.learning.title}
              </FadeUp>
            </div>
            <ArrowDownRight className="hidden h-12 w-12 shrink-0 text-black/25 sm:block" aria-hidden="true" />
          </div>

          <div className="relative mt-16 grid min-w-0 border-t border-black/20 md:grid-cols-2 lg:grid-cols-5">
            <motion.div
              className="absolute left-0 top-[-2px] z-10 h-[3px] w-full origin-left bg-[linear-gradient(90deg,#5967ff_0%,#aab3ff_52%,rgba(170,179,255,0.12)_100%)] shadow-[0_0_18px_rgba(89,103,255,0.22)]"
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.35, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            />
            {copy.learning.steps.map((step, index) => (
              <FadeUp
                key={step.title}
                delay={0.12 + index * 0.08}
                y={50}
                scale={0.95}
                blur={8}
                mobileX={index % 2 === 0 ? -14 : 14}
                className={`min-w-0 border-b border-black/15 py-7 sm:py-8 md:min-h-[220px] md:border-r md:px-5 md:last:border-r-0 ${
                  index % 2 === 0 ? 'md:pl-0' : 'md:border-r-0 md:pr-0'
                } lg:min-h-[240px] lg:border-b-0 lg:border-r lg:px-5 ${
                  index === 0 ? 'lg:pl-0' : ''
                } ${index === copy.learning.steps.length - 1 ? 'lg:border-r-0 lg:pr-0' : ''}`}
              >
                <span className="inline-flex items-center gap-3 text-xs text-black/32">
                  <motion.span
                    className="h-2 w-2 rounded-full bg-[#5967ff] shadow-[0_0_14px_rgba(89,103,255,0.5)]"
                    initial={shouldReduceMotion ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: 0.28 + index * 0.09 }}
                    aria-hidden="true"
                  />
                  {step.number}
                </span>
                <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em] sm:mt-10 md:mt-14">{step.title}</h3>
                <p className="mt-4 max-w-[180px] text-sm leading-relaxed text-black/50">{step.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="closing-stage relative scroll-mt-0 overflow-hidden bg-black px-5 pb-8 pt-20 text-white sm:px-8 sm:pt-32 lg:px-10 lg:pt-40">
        <motion.div
          className="pointer-events-none absolute -left-44 top-20 h-[560px] w-[560px] rounded-full bg-[#5967ff]/18 blur-[120px]"
          initial={shouldReduceMotion ? false : { scale: 0.72, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeUp as="p" className="text-xs font-medium uppercase tracking-[0.22em] text-white/38">
            {copy.closing.label}
          </FadeUp>
          <FadeUp as="h2" y={30} mobileX={-14} className="mt-6 max-w-6xl text-[clamp(2.65rem,12.8vw,3rem)] font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            {copy.closing.title}
          </FadeUp>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <FadeUp delay={0.1}>
              <a
                href={PULSE_URL}
                target="_blank"
                rel="noreferrer"
                className="pulse-cta group inline-flex items-center gap-4 rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                {copy.experiencePulse}
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
                {copy.ecosystem.phenoPortal}
                <ExternalArrow />
              </a>
            </FadeUp>
          </div>

          <footer className="mt-24 grid gap-6 border-t border-white/15 py-8 text-xs text-white/38 sm:mt-32 sm:grid-cols-3 sm:items-center">
            <span>{copy.brandAlt}</span>
            <span className="sm:text-center">{copy.closing.location}</span>
            <span className="sm:text-right">{copy.closing.motto}</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;
