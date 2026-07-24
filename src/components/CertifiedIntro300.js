// Section 1 after the hero on the live Wix 300-Hour page: course title +
// modules line + Yoga Alliance line, mint "BOOK MY FREE CALL" CTA, and the
// RYS 300 seal on the right over a faint lotus watermark.
const MINT = '#7CC7B0';

const CALENDLY_URL =
  'https://calendly.com/akasha-yoga-academy/300-hour-discovery-call';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/c15a18_5c73f145ca4842c9a23c2f2d8f6c2080~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/lotus.jpg';

const RYS300 =
  'https://static.wixstatic.com/media/cd7168_f62cf380bbe147498c4be45bb51db557~mv2.png/v1/crop/x_0,y_7,w_718,h_703/fill/w_480,h_470,al_c,q_85,enc_avif,quality_auto/RYS300.png';

export default function CertifiedIntro300() {
  return (
    <section className="relative overflow-hidden bg-[#F5F4F1]">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-180px] top-1/2 -translate-y-1/2 w-[420px] md:w-[560px] opacity-[0.35]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <h2
              className="font-heading text-akasha-gray-1 leading-snug"
              style={{ fontSize: 'clamp(1.55rem, 3.2vw, 2.15rem)', fontWeight: 400 }}
            >
              300-Hour Advanced Yoga &amp; Meditation Teacher Training
            </h2>

            <p className="font-body text-akasha-gray-1 mt-5 text-sm md:text-[15px] leading-relaxed">
              Hatha Yoga, Pranayama, Yin Yoga, Mindfulness &amp; Meditation.
            </p>
            <p className="font-body text-akasha-gray-1 mt-1 text-sm md:text-[15px] leading-relaxed">
              Fully certified by the international Yoga Alliance.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.18em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
                style={{ backgroundColor: MINT, fontWeight: 600, fontSize: '0.8rem' }}
              >
                Book My Free Call
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={RYS300}
              alt="Yoga Alliance Registered Yoga School RYS 300"
              loading="lazy"
              decoding="async"
              className="w-48 md:w-64 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
