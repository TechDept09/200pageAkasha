// Section 1 after the hero on the live Wix 80-Hour Meditation page: three
// stacked script promises, centered intro copy, YACEP + RYS 300 seals, mint
// ENROLL NOW, orange lotus watermark on grey.
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';
const SCRIPT = '#ED5829';
const MINT = '#75C8AE';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const YACEP =
  'https://static.wixstatic.com/media/cd7168_bfe8b6337c45401bac9708fcaf7c99ad~mv2.png/v1/fill/w_306,h_306,al_c,q_85,enc_avif,quality_auto/YACEP-Yoga-Alliance-Continuing-Education-Provider.png';

const RYS300 =
  'https://static.wixstatic.com/media/cd7168_b0002e34d2324f19aa47e198f769d01c~mv2.png/v1/fill/w_344,h_344,al_c,q_85,enc_avif,quality_auto/RYS-300-Registered-Yoga-School-Yoga-Alli.png';

const ENROLL_HREF =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

const PROMISES = ['Find Stillness', 'Discover Your Authentic Nature', 'Open Your Heart'];

export default function Intro80Meditation() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-[8%] w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20 text-center">
        <div className="space-y-1 md:space-y-2">
          {PROMISES.map((line) => (
            <p
              key={line}
              className="script"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', color: SCRIPT }}
            >
              {line}
            </p>
          ))}
        </div>

        <div
          className="mt-10 md:mt-12 max-w-3xl mx-auto font-body space-y-5"
          style={{
            fontSize: 'clamp(0.95rem, 1.7vw, 1.25rem)',
            color: TEXT,
            fontWeight: 300,
            lineHeight: 1.65,
          }}
        >
          <p>Your Heart is calling. Glimpses of clarity arise. The veil is beginning to lift.</p>
          <p>
            You know and feel the impact of your Yoga practice. It has forever altered how you
            look at and interact with yourself and the world.
          </p>
          <p>
            What if there was more to discover? What if you could plunge into the chasmic space
            of your inner being and meet yourself even more profoundly - meet the very essence
            of being?
          </p>
          <p>
            That&rsquo;s what Spiritual Heart Meditation is all about. The Akasha Yoga Academy
            invites you to further your Yoga journey through our 80-hour Meditation Teacher
            Training course.
          </p>
          <p>
            This is a rare opportunity to dive deep into the Stillness of your being and
            experience profound presence, inner growth &amp; transformation within a loving and
            supportive environment.
          </p>
          <p>
            Akasha&rsquo;s uniquely designed course is a rare integration of practices from
            various powerful sources, including Yoga, Advaita Vedanta, Tantrism, Kashmir
            Shaivism, and Buddhism.
          </p>
        </div>

        <div className="mt-10 md:mt-12 flex items-center justify-center gap-6 md:gap-10">
          <img
            src={YACEP}
            alt="Yoga Alliance Continuing Education Provider (YACEP)"
            loading="lazy"
            decoding="async"
            className="w-[120px] md:w-[153px] h-auto"
          />
          <img
            src={RYS300}
            alt="Yoga Alliance Registered Yoga School RYS 300"
            loading="lazy"
            decoding="async"
            className="w-[136px] md:w-[172px] h-auto"
          />
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href={ENROLL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
