// Section 15 from the live Wix 80-Hour Yin page: "MEET YOUR TEACHERS" with
// four circular portraits, orange script names, graduate quotes, and mint
// WATCH INTERVIEWS CTA.
const MINT = '#75C8AE';
const ORANGE = '#ED5829';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const INTERVIEWS_URL =
  'https://www.akashayogaacademy.com/80-yin-ytt-meet-teachers';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const TEACHERS = [
  {
    name: 'Kirsten',
    photo:
      BASE +
      'cd7168_6802ed13df2e4ae0a40bb1908a15cc3b~mv2.png/v1/crop/x_0,y_17,w_1066,h_1053/fill/w_320,h_316,al_c,q_85,enc_avif,quality_auto/kirsten.png',
    quote:
      'Kirsten is super clear & precise. She is motherly, but not patronizing, kind & compassionate.',
    attr: 'Anastasia from Germany',
  },
  {
    name: 'Burkhard',
    photo:
      BASE +
      'cd7168_a331b6acdcca4febb6d513e7a2739b73~mv2.png/v1/fill/w_320,h_316,al_c,q_85,enc_avif,quality_auto/burkhard.png',
    quote:
      'The depth of his practice is brilliant. He really holds the space well, and opens from the Heart consistently.',
    attr: 'Zoran from Canada',
  },
  {
    name: 'Devdas',
    photo:
      BASE +
      'cd7168_043af959ee84489cb78fc4d0498ac750~mv2.png/v1/crop/x_0,y_6,w_1056,h_1044/fill/w_320,h_316,al_c,q_85,enc_avif,quality_auto/devdas.png',
    quote:
      'The way Devdas holds space is amazing. I feel blessed to have had the opportunity to learn from him.',
    attr: 'Rebecca from the US',
  },
  {
    name: 'Astrid',
    photo:
      BASE +
      'cd7168_bd8bf24868cc41ccaf122ad4f57221e3~mv2.jpg/v1/crop/x_241,y_0,w_1518,h_1500/fill/w_320,h_316,al_c,q_80,enc_avif,quality_auto/astrid.jpg',
    quote:
      'Astrid is a wonderful teacher. Her anatomy classes are a harmonious melding of her well grounded intellectual and experiential knowledge',
    attr: 'Ninuca from Germany',
  },
];

export default function MeetTeachers80Yin() {
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
          className="font-heading uppercase tracking-[0.12em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300, color: '#6E6E6D' }}
        >
          Meet Your Teachers
        </h2>

        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 max-w-6xl mx-auto">
          {TEACHERS.map((t) => (
            <div key={t.name} className="text-center flex flex-col items-center">
              <img
                src={t.photo}
                alt={`${t.name}, Akasha Yoga Academy teacher`}
                loading="lazy"
                decoding="async"
                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover"
              />
              <span
                className="script mt-4"
                style={{ color: ORANGE, fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)' }}
              >
                {t.name}
              </span>
              <p
                className="mt-3 max-w-[16rem] font-body text-sm md:text-[15px] leading-relaxed"
                style={{ color: TEXT }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <cite
                className="mt-2 not-italic font-body italic text-sm"
                style={{ color: '#6E6E6D' }}
              >
                {t.attr}
              </cite>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={INTERVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-akasha-white uppercase tracking-[0.12em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
            style={{
              backgroundColor: MINT,
              borderRadius: 20,
              fontWeight: 700,
              fontSize: '0.95rem',
              boxShadow: '2px 2px 1px rgba(86, 149, 130, 0.88)',
            }}
          >
            Watch Interviews
          </a>
        </div>
      </div>
    </section>
  );
}
