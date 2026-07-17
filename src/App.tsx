import { FadeUp } from './components/FadeUp';

const VIDEO_SOURCE =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4';

const HEADING = 'WE BUILD END-TO-END AI AUTOMATION SYSTEMS.';

function App() {
  const words = HEADING.split(' ');

  return (
    <main className="page-shell">
      <video
        className="background-video"
        src={VIDEO_SOURCE}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />

      <section className="automation-section" aria-labelledby="automation-heading">
        <div className="content-block">
          <h2 id="automation-heading" className="heading">
            {words.map((word, index) => (
              <FadeUp
                as="span"
                y={32}
                delay={0.15 + index * 0.08}
                key={`${word}-${index}`}
              >
                {word}
              </FadeUp>
            ))}
          </h2>

          <FadeUp as="p" className="subtext" delay={0.9}>
            We provide all-in-one AI automation services in one place.
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

export default App;
