// "Yoga Alliance Certified" section, matching the live Wix 200-Hour page:
// the credibility paragraphs, the four Yoga Alliance badges (RYS-200,
// RYS-300, E-RYT-500, YACEP), the "Join a Legacy of Excellence" script
// heading, and the green Get Certified CTA, over the faint lotus watermark.
// Copy is verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

// Order and asset IDs match the live source: RYS-200, RYS-300, E-RYT-500,
// YACEP. Only the first has a labelled filename on Wix; the rest are stored
// under hash-only names, so alt text stays generic.
const BADGES = [
  'https://static.wixstatic.com/media/cd7168_977ee408f17b46a29edd503ef69e6617~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_977ee408f17b46a29edd503ef69e6617~mv2.png',
  'https://static.wixstatic.com/media/cd7168_c00f00faf1c442759dff116c1d8acaf0~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/cd7168_c00f00faf1c442759dff116c1d8acaf0~mv2.png',
  'https://static.wixstatic.com/media/cd7168_24994c4ef3af4e9585efa50e9c37c8eb~mv2.png/v1/fill/w_180,h_178,al_c,q_85,enc_avif,quality_auto/cd7168_24994c4ef3af4e9585efa50e9c37c8eb~mv2.png',
  'https://static.wixstatic.com/media/cd7168_bfe8b6337c45401bac9708fcaf7c99ad~mv2.png/v1/fill/w_180,h_178,al_c,q_85,enc_avif,quality_auto/cd7168_bfe8b6337c45401bac9708fcaf7c99ad~mv2.png',
];

export default function YogaAllianceCertified() {
  return (
    <section
      id="yoga-alliance"
      className="relative overflow-hidden bg-akasha-white"
      aria-labelledby="yoga-alliance-heading"
    >
      {/* Faint lotus watermark, bleeding off the left edge */}
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-140px] top-1/2 -translate-y-1/2 w-[420px] md:w-[620px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24 text-center">
        <h2
          id="yoga-alliance-heading"
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em]"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Yoga Alliance Certified
        </h2>

        <div className="max-w-2xl mx-auto mt-8 space-y-5 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          <p>
            We&rsquo;ve been a{' '}
            <strong className="font-semibold text-akasha-black">leading member</strong>{' '}
            of the international Yoga Alliance for{' '}
            <strong className="font-semibold text-akasha-black">more than 13 years</strong>.
            Our curriculum is{' '}
            <strong className="font-semibold text-akasha-black">
              officially accredited &amp; certified
            </strong>{' '}
            by this reputable organization.
          </p>
          <p>
            Our academy is{' '}
            <strong className="font-semibold text-akasha-black">globally recognized</strong>{' '}
            as the{' '}
            <strong className="font-semibold text-akasha-black">highest-ranked school</strong>,
            with more than 250 reviews. As a graduate, you&rsquo;ll be empowered to
            become a{' '}
            <strong className="font-semibold text-akasha-black">
              Registered Yoga Teacher (RYT-200)
            </strong>
            , equipped with the latest knowledge &amp; most comprehensive skills.
            Our{' '}
            <strong className="font-semibold text-akasha-black">time-proven, top-rated course</strong>{' '}
            will certainly provide you with a life-changing experience.
          </p>
        </div>

        {/* Four Yoga Alliance badges */}
        <ul
          className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          aria-label="Yoga Alliance registered credentials"
        >
          {BADGES.map((src) => (
            <li key={src} className="flex items-center">
              <img
                src={src}
                alt="Yoga Alliance credential"
                loading="lazy"
                decoding="async"
                className="h-20 md:h-24 w-auto"
              />
            </li>
          ))}
        </ul>

        {/* Join a Legacy of Excellence */}
        <p
          className="font-script text-akasha-orange mt-12 md:mt-14"
          style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}
        >
          Join a Legacy of Excellence
        </p>

        <div className="max-w-2xl mx-auto mt-6 space-y-5 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          <p>
            All lead instructors are Experienced Registered Yoga Teachers{' '}
            <strong className="font-semibold text-akasha-black">
              at the highest level (E-RYT-500)
            </strong>
            . You&rsquo;ll benefit from our{' '}
            <strong className="font-semibold text-akasha-black">
              superb level of expertise &amp; wisdom
            </strong>
            .{' '}
            <strong className="font-semibold text-akasha-black">Since 2012</strong>, we&rsquo;ve
            been a{' '}
            <strong className="font-semibold text-akasha-black">
              fully accredited &amp; officially Registered Yoga School
            </strong>{' '}
            (Registry-ID: 87485).
          </p>
          <p>
            For decades, we&rsquo;ve led the evolution of Yoga education. Our program{' '}
            <strong className="font-semibold text-akasha-black">
              meets &amp; exceeds the brand-new Yoga Alliance requirements
            </strong>
            , offering you the best possible experience.
          </p>
        </div>

        {/* Green CTA */}
        <div className="mt-12 md:mt-14">
          <a
            href="/200h-essential/enroll"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Get Certified
          </a>
          <p className="mt-3 font-body text-xs uppercase tracking-[0.2em] text-akasha-gray-2">
            Over 70% Off Until July 31st
          </p>
        </div>
      </div>
    </section>
  );
}
