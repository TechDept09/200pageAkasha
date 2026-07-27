// Section 7 from the live Wix 300-Hour page: "From Asana Instructor to
// Master Teacher" pitch + bullets + mint ENROLL NOW CTA, on the cream canvas
// with the left lotus watermark.
const MINT = '#7CC7B0';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/c15a18_5c73f145ca4842c9a23c2f2d8f6c2080~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/lotus.jpg';

const ENROLL_HREF = 'https://www.akashayogaacademy.com/300-hr-online-enroll-now';

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

const BULLETS = [
  <><B>Discover</B> the essence of authentic Yoga</>,
  <><B>Experience</B> altered states in genuine Meditation</>,
  <><B>Develop</B> your personal style of practicing &amp; teaching</>,
  <><B>Become</B> a pillar of strength &amp; creativity in your community</>,
];

export default function MasterTeacher300() {
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

      <div className="section relative z-10 py-14 md:py-20 max-w-3xl mx-auto">
        <h2
          className="font-heading text-akasha-gray-1 text-center"
          style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)', fontWeight: 300 }}
        >
          From Asana Instructor to Master Teacher
        </h2>

        <div className="mt-8 space-y-4 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          <p>Over the past decades, we&rsquo;ve guided more than 3000 Yoga Teachers.</p>
          <p>
            We deeply understand where you&rsquo;re at. We&rsquo;ve been there ourselves.
            And we know exactly how to <B>empower you</B>.
          </p>
          <p>
            Your time has come to take <B>your Yogic journey</B> to the next level:
          </p>
        </div>

        <ul className="mt-6 space-y-2 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          {BULLETS.map((item, i) => (
            <li key={i}>
              <span className="mr-2" aria-hidden="true">
                &bull;
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-1 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          <p>Step forward today.</p>
          <p>Join this 300-Hour Advanced Yoga &amp; Meditation Teacher Training.</p>
        </div>

        <div className="mt-10 text-center">
          <a
            href={ENROLL_HREF}
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: MINT, fontWeight: 600, fontSize: '0.85rem' }}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
