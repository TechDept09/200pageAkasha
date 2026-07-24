// Section 9 from the live Wix 80-Hour Advanced Hatha & Pranayama page:
// "MEET YOUR TEACHERS" grid (Devdas / Kirsten / Burkhard / Marc) with
// testimonials + mint WATCH INTERVIEWS CTA.
const MINT = '#75C8AE';
const ORANGE = '#ED5829';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const INTERVIEWS_URL = 'https://www.akashayogaacademy.com/team';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const TEACHERS = [
  {
    name: 'Devdas',
    photo:
      BASE +
      'c15a18_b9ce95b3cf7a4c98bc1c56208b75c22b~mv2.jpg/v1/crop/x_65,y_29,w_336,h_332/fill/w_320,h_316,al_c,q_80,enc_avif,quality_auto/devdas.jpg',
    quote:
      'The way Devdas holds space is amazing. I feel blessed to have had the opportunity to learn from him.',
    by: 'Rebecca from the US',
  },
  {
    name: 'Kirsten',
    photo:
      BASE +
      'c15a18_c3d07047d6e04f11ab181a9a82faff92~mv2.jpg/v1/crop/x_43,y_47,w_414,h_409/fill/w_320,h_316,al_c,q_80,enc_avif,quality_auto/kirsten.jpg',
    quote:
      'Kirsten is super clear & precise. She is motherly, but not patronizing, kind & compassionate.',
    by: 'Anastasia from Germany',
  },
  {
    name: 'Burkhard',
    photo:
      BASE +
      'cd7168_241779a0b2e94455a8c7fe10e05530c7~mv2.jpg/v1/fill/w_320,h_316,al_c,q_80,enc_avif,quality_auto/burkhard.jpg',
    quote:
      'The depth of his practice is brilliant. He really holds the space well, and opens from the Heart consistently.',
    by: 'Zoran from Canada',
  },
  {
    name: 'Marc',
    photo:
      BASE +
      'cd7168_e957799cd17e479080c14867a94de1e1~mv2.jpg/v1/fill/w_320,h_316,al_c,q_80,enc_avif,quality_auto/marc.jpg',
    quote:
      "Marc's classes seamlessly blend artful body geometry with crystalline mental awareness and emotional intelligence.",
    by: null,
  },
];

export default function MeetTeachers80Hatha() {
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

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase tracking-[0.12em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300, color: '#6E6E6D' }}
        >
          Meet Your Teachers
        </h2>

        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-10 max-w-4xl mx-auto">
          {TEACHERS.map((t) => (
            <div key={t.name} className="text-center flex flex-col items-center">
              <img
                src={t.photo}
                alt={`${t.name}, Akasha Yoga Academy teacher`}
                loading="lazy"
                decoding="async"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
              />
              <span
                className="script mt-4"
                style={{ color: ORANGE, fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)' }}
              >
                {t.name}
              </span>
              <p
                className="mt-3 font-body text-sm md:text-[15px] leading-relaxed max-w-sm"
                style={{ color: TEXT, fontWeight: 300 }}
              >
                {t.by ? (
                  <>
                    &ldquo;{t.quote}&rdquo;
                    <br />
                    <em style={{ fontStyle: 'italic' }}>{t.by}</em>
                  </>
                ) : (
                  t.quote
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-14 flex justify-center">
          <a
            href={INTERVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.12em] px-8 md:px-10 py-4 font-body hover:shadow-lg transition-all text-center"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Watch Interviews
          </a>
        </div>
      </div>
    </section>
  );
}
