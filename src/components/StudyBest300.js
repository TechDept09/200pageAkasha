// Section 11 from the live Wix 300-Hour page: "STUDY WITH THE BEST" copy,
// Kea success-story video block, then "WE KNOW THIS IS A BIG STEP FOR YOU"
// with review ratings + 1100-instructors credibility line.
const MINT = '#7CC7B0';
const BASE = 'https://static.wixstatic.com/media/';

const LOTUS_WATERMARK =
  BASE +
  'c15a18_5c73f145ca4842c9a23c2f2d8f6c2080~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/lotus.jpg';

const KEA_POSTER =
  BASE +
  'cd7168_8317be1e896f4637bd4e3044a985cce1~mv2.jpg/v1/fill/w_960,h_540,al_c,q_85,enc_avif,quality_auto/bts-tablet.jpg';

const STARS_5 =
  BASE + 'c15a18_8fa0b772c88940c48272a4b4bd8b70d1~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/5STARS.png';
const STARS_48 =
  BASE + 'c15a18_f12cd7a724664c91ba9269f6d94ffe41~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/4-8STARS.png';
const STARS_45 =
  BASE + 'c15a18_5eb16904ecc845d8af84aa36df5a615b~mv2.png/v1/fill/w_200,h_48,al_c,q_85,enc_avif,quality_auto/4-5stars.png';

const RATINGS = [
  {
    logo: BASE + 'cd7168_36dc509e9f96492a8c136ed1b835ca86~mv2.png/v1/crop/x_0,y_605,w_1275,h_484/fill/w_232,h_88,al_c,q_85,enc_avif,quality_auto/facebook.png',
    stars: STARS_48,
    score: '4.8/5.0 based on 242 reviews',
    alt: 'Facebook',
  },
  {
    logo: BASE + 'cd7168_0c28fd774d9d44debe05b3fd58ee3a66~mv2.png/v1/crop/x_0,y_583,w_1275,h_534/fill/w_210,h_88,al_c,q_85,enc_avif,quality_auto/yoga-alliance.png',
    stars: STARS_5,
    score: '4.93/5.0 based on 359 reviews',
    alt: 'Yoga Alliance',
  },
  {
    logo: BASE + 'cd7168_3e34350a125b410d8a7ecb76c31f7fad~mv2.png/v1/crop/x_0,y_583,w_1275,h_484/fill/w_232,h_88,al_c,q_85,enc_avif,quality_auto/google.png',
    stars: STARS_5,
    score: '4.9/5.0 based on 163 reviews',
    alt: 'Google',
  },
];

const SECONDARY = [
  {
    logo: BASE + 'cd7168_33ad209bedea4e979266d35a4acd3b35~mv2.png/v1/crop/x_0,y_583,w_1275,h_484/fill/w_232,h_88,al_c,q_85,enc_avif,quality_auto/bookretreats.png',
    stars: STARS_5,
    alt: 'BookRetreats',
  },
  {
    logo: BASE + 'cd7168_e42549e238204a39b8393c325dc3bda2~mv2.png/v1/crop/x_0,y_583,w_1275,h_484/fill/w_232,h_88,al_c,q_85,enc_avif,quality_auto/byr.png',
    stars: STARS_45,
    alt: 'BookYogaRetreats by Tripaneer',
  },
];

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

export default function StudyBest300() {
  return (
    <>
      {/* Study with the best */}
      <section className="relative overflow-hidden bg-[#F5F4F1]">
        <img
          src={LOTUS_WATERMARK}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none select-none absolute left-[-180px] top-0 w-[420px] md:w-[560px] opacity-[0.35]"
        />
        <div className="section relative z-10 py-14 md:py-20 max-w-3xl mx-auto text-center">
          <h2
            className="font-heading uppercase text-akasha-gray-1 tracking-[0.12em]"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
          >
            Study with the Best
          </h2>
          <div className="mt-8 space-y-5 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            <p>
              Join our trusted &amp; time-proven advanced training to deepen your own
              practice. You&rsquo;ll get empowered as a competent &amp; confident
              practitioner &amp; teacher.
            </p>
            <p>
              Evolve in our world-class educational program that provides superb
              quality, <B>expertise &amp; excellence</B>.
            </p>
            <p>
              At Akasha, we put our heart &amp; soul into creating a nurturing &amp;
              loving family atmosphere. You will be guided by a team of passionate
              &amp; dedicated senior teachers, who are Experienced Registered Yoga
              Teachers at the highest level (E-RYT-500):
            </p>
            <p>
              The three lead teachers have been studying in Asia for decades. They
              have more than 60 years of combined teaching experience!
            </p>
            <p>
              You&rsquo;ll also get inspired by five awesome <B>guest teachers</B>:
              They have a combined teaching experience of 85 years, and are true
              experts in their respective fields.
            </p>
          </div>
        </div>
      </section>

      {/* Success story – Kea (video ID client-rendered on Wix; poster uses the BTS softbox still from the same Wix block) */}
      <section className="relative overflow-hidden bg-[#F5F4F1]">
        <div className="section relative z-10 py-10 md:py-14 max-w-3xl mx-auto text-center">
          <h2
            className="font-heading uppercase text-akasha-gray-1 tracking-[0.12em]"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
          >
            Success Story
          </h2>
          <p className="font-body text-akasha-gray-1 mt-3 text-base md:text-lg">
            Meet one of our Graduates Kea
          </p>
          <p
            className="script text-akasha-gray-1 mt-6"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
          >
            Hear from KEA
          </p>
          <div className="mt-6 aspect-video rounded-sm overflow-hidden bg-black/10 shadow-md">
            <img
              src={KEA_POSTER}
              alt="Behind-the-scenes filming at Akasha Yoga Academy"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* We know this is a big step */}
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
            className="font-heading uppercase text-akasha-gray-1 tracking-[0.1em]"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
          >
            We Know This Is a Big Step for You
          </h2>
          <p
            className="font-heading text-akasha-gray-1 mt-3 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)', fontWeight: 600 }}
          >
            So we do everything to make this the best investment of your life
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto items-start">
            {RATINGS.map((r) => (
              <div key={r.alt} className="flex flex-col items-center gap-3">
                <img src={r.logo} alt={r.alt} loading="lazy" decoding="async" className="h-10 w-auto object-contain" />
                <img src={r.stars} alt="" aria-hidden="true" loading="lazy" decoding="async" className="h-6 w-auto" />
                <p className="font-body text-sm text-akasha-gray-1">{r.score}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-10 items-center">
            {SECONDARY.map((r) => (
              <div key={r.alt} className="flex flex-col items-center gap-2">
                <img src={r.logo} alt={r.alt} loading="lazy" decoding="async" className="h-9 w-auto object-contain" />
                <img src={r.stars} alt="" aria-hidden="true" loading="lazy" decoding="async" className="h-5 w-auto" />
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto space-y-4 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            <p>
              Over the past decade, we empowered more than{' '}
              <B>1100 awesome Yoga Instructors</B> &ndash; who are now successfully
              teaching on all <B>6 continents</B>.
            </p>
            <p>Countless genuine reviews speak for themselves.</p>
          </div>
        </div>
      </section>
    </>
  );
}
