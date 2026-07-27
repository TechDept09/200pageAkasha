// Section 22 from the live Wix 300-Hour page: grey "MEET YOUR LEAD TEACHERS"
// with three circular portraits, script names, graduate quotes, and
// mint WATCH INTERVIEWS CTA.
const MINT = '#7CC7B0';
const ORANGE = '#D07A3A';
const GREY_BG = '#FFFFFF';

const INTERVIEWS_URL =
  'https://www.akashayogaacademy.com/300-hour-online-meet-the-teachers';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const TEACHERS = [
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
    name: 'Kirsten',
    photo:
      BASE +
      'cd7168_6802ed13df2e4ae0a40bb1908a15cc3b~mv2.png/v1/crop/x_0,y_17,w_1066,h_1053/fill/w_320,h_316,al_c,q_85,enc_avif,quality_auto/kirsten.png',
    quote:
      'Kirsten is super clear & precise. She is motherly, but not patronizing, kind & compassionate.',
    attr: 'Anastasia from Germany',
  },
  {
    name: 'Devdas',
    photo:
      BASE +
      'cd7168_043af959ee84489cb78fc4d0498ac750~mv2.png/v1/fill/w_320,h_316,al_c,q_85,enc_avif,quality_auto/devdas.png',
    quote:
      'The way Devdas holds space is amazing. I feel blessed to have had the opportunity to learn from him.',
    attr: 'Rebecca from the US',
  },
];

export default function LeadTeachers300() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: GREY_BG }}>
      <img
        src={LOTUS}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[420px] md:w-[560px] opacity-10"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Meet Your Lead
          <br />
          Teachers
        </h2>

        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto">
          {TEACHERS.map((t) => (
            <div key={t.name} className="text-center flex flex-col items-center">
              <img
                src={t.photo}
                alt={`${t.name}, Akasha Yoga Academy lead teacher`}
                loading="lazy"
                decoding="async"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
              />
              <span
                className="script mt-4"
                style={{ color: ORANGE, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
              >
                {t.name}
              </span>
              <p className="mt-3 max-w-[16rem] font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <cite className="mt-2 not-italic font-body italic text-akasha-gray-1 text-sm">
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
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Watch Interviews
          </a>
        </div>
      </div>
    </section>
  );
}
