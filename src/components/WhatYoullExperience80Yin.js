// Section 26 from the live Wix 80-Hour Yin page: grey "WHAT YOU'LL EXPERIENCE"
// checklist with peach checkmarks, orange lotus watermark, and mint ENROLL NOW.
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const CHECK =
  'https://static.wixstatic.com/media/cd7168_89da62ac6f254f7185941dba1c508306~mv2.png/v1/fill/w_46,h_54,al_c,q_85,enc_avif,quality_auto/CHECK-MARK234.png';

const ENROLL_URL = 'https://www.akashayogaacademy.com/80hr-yin-ytt-enroll-now';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const B = ({ children }) => (
  <strong style={{ fontWeight: 700, color: TEXT }}>{children}</strong>
);

const I = ({ children }) => <em style={{ fontStyle: 'italic' }}>{children}</em>;

const ITEMS = [
  {
    key: 'safely',
    line: (
      <>
        Know how to <B>practice &amp; teach</B> Yin Yoga <I>safely.</I>
      </>
    ),
  },
  {
    key: 'postures',
    line: <>Learn about all essential Yin Yoga postures:</>,
    sub: (
      <>
        <B>benefits</B>, target areas, modifications, contraindications &amp; energetics.
      </>
    ),
  },
  {
    key: 'anatomy',
    line: (
      <>
        Discover the uniqueness of each body through the study of <B>functional anatomy.</B>
      </>
    ),
    sub: <>Understand how to work with a variety of body types.</>,
  },
  {
    key: 'meridians',
    line: (
      <>
        Explore the 5 Elements Theory &amp; energetic <B>meridians</B> (the subtle anatomy of
        Yin Yoga).
      </>
    ),
  },
  {
    key: 'inquiry',
    line: <>Encounter Self Inquiry as a powerful tool to access your true place.</>,
    sub: (
      <>
        Deeply ground into the <B>nourishing Stillness</B> of your highest Self.
      </>
    ),
  },
  {
    key: 'integrate',
    line: <>Integrate the practice of Self Inquiry into your asana practice &amp; daily life.</>,
  },
  {
    key: 'structure',
    line: (
      <>Comprehend how to structure a Yin class. And teach confidently from your own experience.</>
    ),
  },
  {
    key: 'planes',
    line: (
      <>
        Experience how the <I>physical</I> plane weaves into the <I>energetic</I> system.
      </>
    ),
  },
  {
    key: 'myofascial',
    line: <>Understand the connections between meridians &amp; myofascial lines.</>,
  },
  {
    key: 'scriptures',
    line: <>Dive into scriptures &amp; investigate the roots of awareness.</>,
    sub: (
      <>
        Know how to stay centered in the eye of the storm. And learn how to live a peaceful
        life.
      </>
    ),
  },
];

export default function WhatYoullExperience80Yin() {
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
          {ITEMS.map((item) => (
            <li key={item.key} className="flex items-start gap-4">
              <img
                src={CHECK}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-5 h-6 md:w-6 md:h-7 shrink-0 mt-0.5"
              />
              <div
                className="font-body text-base md:text-lg leading-snug"
                style={{ color: TEXT, fontWeight: 300 }}
              >
                <p>{item.line}</p>
                {item.sub ? <p className="mt-1">{item.sub}</p> : null}
              </div>
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
