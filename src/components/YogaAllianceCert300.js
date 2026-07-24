// Section 15 from the live Wix 300-Hour page: "YOGA ALLIANCE CERTIFICATE"
// credibility copy + the four YA badges (RYS 200, RYS 300, E-RYT 500, YACEP).
const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/c15a18_5c73f145ca4842c9a23c2f2d8f6c2080~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/lotus.jpg';

const BASE = 'https://static.wixstatic.com/media/';

const BADGES = [
  {
    src: BASE + 'cd7168_977ee408f17b46a29edd503ef69e6617~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/RYS200.png',
    alt: 'Yoga Alliance Registered Yoga School RYS 200',
  },
  {
    src: BASE + 'cd7168_c00f00faf1c442759dff116c1d8acaf0~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/RYS300.png',
    alt: 'Yoga Alliance Registered Yoga School RYS 300',
  },
  {
    src: BASE + 'cd7168_24994c4ef3af4e9585efa50e9c37c8eb~mv2.png/v1/fill/w_180,h_178,al_c,q_85,enc_avif,quality_auto/ERYT500.png',
    alt: 'Yoga Alliance Experienced Registered Yoga Teacher E-RYT 500',
  },
  {
    src: BASE + 'cd7168_bfe8b6337c45401bac9708fcaf7c99ad~mv2.png/v1/fill/w_180,h_178,al_c,q_85,enc_avif,quality_auto/YACEP.png',
    alt: 'Yoga Alliance Continuing Education Provider YACEP',
  },
];

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

export default function YogaAllianceCert300() {
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

      <div className="section relative z-10 py-14 md:py-20 text-center">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em]"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Yoga Alliance
          <br />
          Certificate
        </h2>

        <div className="max-w-3xl mx-auto mt-8 space-y-5 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed text-left">
          <p>
            The Akasha Yoga Academy has been a Registered Yoga School for{' '}
            <B>over a decade</B>.
          </p>
          <p>
            With a verified review score of 4.9, we&rsquo;re among the{' '}
            <B>highest-ranking schools globally</B>.
          </p>
          <p>
            The curriculum of this <B>Advanced 300-Hour TTC meets</B> &amp; exceeds
            the official requirements, and it is <B>fully accredited</B> by the
            renowned international <B>Yoga Alliance</B>.
          </p>
          <p>
            Our certified training consists of live &amp; recorded online classes,
            transformational assignments, group exploration &amp; interactive
            practical evaluation.
          </p>
          <p>
            This 300-Hour Advanced TTC (combined with a{' '}
            <B>200-Hour Yoga Alliance certified TTC</B>) <B>entitles</B> you to
            sign up as a <B>Registered Yoga Teacher</B> at the prestigious{' '}
            <B>500-Hour Level</B>.
          </p>
          <p>
            <B>(200+300 = RYT 500)</B>
          </p>
        </div>

        <ul
          className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          aria-label="Yoga Alliance registered credentials"
        >
          {BADGES.map((b) => (
            <li key={b.alt}>
              <img
                src={b.src}
                alt={b.alt}
                loading="lazy"
                decoding="async"
                className="w-24 md:w-28 h-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
