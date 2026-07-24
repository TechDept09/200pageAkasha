// Section 20 from the live Wix 80-Hour Meditation page: grey "WHAT YOU'LL
// EXPERIENCE" checklist with peach checkmarks, orange lotus, mint ENROLL NOW.
// Keep Wix typos ("Mediation", "Kashmiri Shivaism").
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const CHECK =
  'https://static.wixstatic.com/media/cd7168_89da62ac6f254f7185941dba1c508306~mv2.png/v1/fill/w_46,h_54,al_c,q_85,enc_avif,quality_auto/CHECK-MARK234.png';

const ENROLL_URL =
  'https://www.akashayogaacademy.com/enroll-now-80-hr-online-meditation-teacher-training';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const ITEMS = [
  'Explore Spiritual Heart Meditation with Burkhard & Kirsten.',
  'Study Mantra Mediation with Devdas',
  'Deepen your understanding of Self-Inquiry',
  'Learn how to deal with the mind in mediation',
  'Become intimate with your Breath and Heart',
  'Study Kashmiri Shivaism with Guest Teacher Hareesh Christopher Wallis',
  'Inspire your meditation practice with Pranayama, Yin Yoga & Hatha Flow',
  'Get to know major meditation approaches from around the globe',
  'Learn about Visualisation and Yantras',
  'Experience how modern science helps understand consciousness',
  'Learn about brainwaves, states of consciousness, and awakening',
  'Learn about relaxation, stress response, and brain tonification',
  'Participate in one full day of silent meditation retreat',
  'Develop your meditation self-practice & learn how to teach meditation',
  'Get a sample introduction mediation workshop to kick off your teaching',
  'Explore our complimentary comprehensive course manual',
  'Integrate meditation into daily life',
];

export default function WhatYoullExperience80Meditation() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[420px] md:w-[560px] opacity-[0.10]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          What You&rsquo;ll Experience
        </h2>

        <ul className="mt-10 md:mt-12 max-w-2xl mx-auto space-y-4 md:space-y-5">
          {ITEMS.map((line) => (
            <li key={line} className="flex items-start gap-4">
              <img
                src={CHECK}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-5 h-6 md:w-6 md:h-7 shrink-0 mt-0.5"
              />
              <p
                className="font-body text-base md:text-lg leading-snug"
                style={{ color: TEXT, fontWeight: 300 }}
              >
                {line}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href={ENROLL_URL}
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
