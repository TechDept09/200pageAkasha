// Section 10 from the live Wix 80-Hour Meditation page: "LEARN FROM THE
// FOREMOST IN THE FIELD", ratings, 1100-instructors line, and YouTube trailer.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const ORANGE = '#ED5829';
const BASE = 'https://static.wixstatic.com/media/';

const LOTUS =
  BASE +
  'cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const STARS_5 =
  BASE + 'c15a18_8fa0b772c88940c48272a4b4bd8b70d1~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/5STARS.png';
const STARS_48 =
  BASE + 'c15a18_f12cd7a724664c91ba9269f6d94ffe41~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/4-8STARS.png';
const STARS_45 =
  BASE + 'c15a18_5eb16904ecc845d8af84aa36df5a615b~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/4-5stars.png';

const VIDEO_ID = 'obqPTX-QyNw';

const RATINGS = [
  {
    logo:
      BASE +
      'cd7168_36dc509e9f96492a8c136ed1b835ca86~mv2.png/v1/crop/x_0,y_605,w_1275,h_484/fill/w_232,h_88,al_c,q_85,enc_avif,quality_auto/facebook.png',
    stars: STARS_48,
    score: '4.8 / 5.0 based on 242 reviews',
    alt: 'Facebook',
  },
  {
    logo:
      BASE +
      'cd7168_0c28fd774d9d44debe05b3fd58ee3a66~mv2.png/v1/crop/x_0,y_583,w_1275,h_534/fill/w_210,h_88,al_c,q_85,enc_avif,quality_auto/yoga-alliance.png',
    stars: STARS_5,
    score: '4.93 / 5.0 based on 359 reviews',
    alt: 'Yoga Alliance',
  },
  {
    logo:
      BASE +
      'cd7168_3e34350a125b410d8a7ecb76c31f7fad~mv2.png/v1/crop/x_0,y_583,w_1275,h_484/fill/w_232,h_88,al_c,q_85,enc_avif,quality_auto/google.png',
    stars: STARS_5,
    score: '4.9 / 5.0 based on 163 reviews',
    alt: 'Google',
  },
];

const SECONDARY = [
  {
    logo:
      BASE +
      'cd7168_33ad209bedea4e979266d35a4acd3b35~mv2.png/v1/crop/x_0,y_583,w_1275,h_484/fill/w_232,h_88,al_c,q_85,enc_avif,quality_auto/bookretreats.png',
    stars: STARS_5,
    alt: 'BookRetreats',
  },
  {
    logo:
      BASE +
      'cd7168_e42549e238204a39b8393c325dc3bda2~mv2.png/v1/crop/x_0,y_583,w_1275,h_484/fill/w_232,h_88,al_c,q_85,enc_avif,quality_auto/byr.png',
    stars: STARS_45,
    alt: 'BookYogaRetreats by Tripaneer',
  },
];

const B = ({ children }) => (
  <strong style={{ fontWeight: 700, color: TEXT }}>{children}</strong>
);

const pStyle = {
  fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
  color: TEXT,
  fontWeight: 300,
  lineHeight: 1.65,
};

export default function StudyBest80Meditation() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[10%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-heading uppercase tracking-[0.1em]"
            style={{
              fontSize: 'clamp(1.35rem, 3.2vw, 2.15rem)',
              fontWeight: 300,
              color: '#6E6E6D',
            }}
          >
            Learn from the Foremost in the Field
          </h2>

          <div className="mt-8 md:mt-10 space-y-5 font-body" style={pStyle}>
            <p>
              Immerse yourself in our trusted and time-tested training. Elevate your
              practice and emerge as a confident and skilled Meditation Teacher. At
              Akasha, we pledge commitment, quality, and excellence in every educational
              program.
            </p>
            <p>
              Our essence lies in our heart-centric approach, enveloping learners in a
              familial, nurturing ambiance. You&rsquo;ll be mentored by fervent senior
              instructors, each one a Registered Yoga Teacher of the highest caliber
              (E-RYT-500).
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-16 text-center">
          <h2
            className="font-heading uppercase tracking-[0.1em]"
            style={{
              fontSize: 'clamp(1.35rem, 3.2vw, 2.15rem)',
              fontWeight: 300,
              color: '#6E6E6D',
            }}
          >
            We Know This Is a Big Step for You
          </h2>
          <p
            className="script mt-3 md:mt-4"
            style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', color: ORANGE }}
          >
            So we do everything to make this the best investment of your life
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto items-start">
            {RATINGS.map((r) => (
              <div key={r.alt} className="flex flex-col items-center gap-3">
                <img
                  src={r.logo}
                  alt={r.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-auto object-contain"
                />
                <img
                  src={r.stars}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-auto"
                />
                <p className="font-body text-sm" style={{ color: TEXT }}>
                  {r.score}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-10 items-center">
            {SECONDARY.map((r) => (
              <div key={r.alt} className="flex flex-col items-center gap-2">
                <img
                  src={r.logo}
                  alt={r.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-auto object-contain"
                />
                <img
                  src={r.stars}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-5 w-auto"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto space-y-3 font-body" style={pStyle}>
            <p>
              Over the past decade, we empowered more than{' '}
              <B>1100 awesome Yoga Instructors</B> — who are now successfully teaching on{' '}
              <B>all 6 continents</B>. Countless <B>genuine reviews</B> speak for
              themselves.
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-16 max-w-3xl mx-auto text-center">
          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 2.1rem)',
              fontWeight: 300,
              color: '#6E6E6D',
            }}
          >
            Watch This Video
          </h2>
          <p className="mt-3 font-body" style={pStyle}>
            Check out the premium quality of our life-changing program:
          </p>

          <div className="mt-8 relative w-full overflow-hidden rounded-sm aspect-video bg-black/40">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
              title="80-Hour Meditation TTC Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
