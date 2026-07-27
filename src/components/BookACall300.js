'use client';

// Section 5 from the live Wix 300-Hour page: "BOOK A CALL WITH A TEACHER"
// (copy + gold-ringed teacher photo + mint CTA) flowing into the
// "Take the step that will change your life" pitch, community bullets, and
// the script trio Free your Breath / Find your Peace / Live your Purpose.
const MINT = '#7CC7B0';
const GOLD = '#C9A24B';

const CALENDLY_URL =
  'https://calendly.com/akasha-yoga-academy/300-hour-discovery-call';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/c15a18_5c73f145ca4842c9a23c2f2d8f6c2080~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/lotus.jpg';

const TEACHERS_PHOTO =
  'https://static.wixstatic.com/media/cd7168_a7573a60139a43de8c5e8ba03c884642~mv2.jpg/v1/crop/x_0,y_1054,w_4128,h_4085/fill/w_560,h_560,al_c,q_85,enc_avif,quality_auto/teachers.jpg';

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

const COMMUNITY = [
  <>engaging <B>live sessions</B> &amp; enriching <B>assignments</B></>,
  <>personalized <B>feedback</B> &amp; <B>1-on-1 guidance</B></>,
  <><B>buddy system</B> &amp; <B>accountability network</B></>,
  <>supportive global <B>community</B></>,
];

export default function BookACall300() {
  return (
    <section className="relative overflow-hidden bg-[#F5F4F1]">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-180px] top-0 w-[420px] md:w-[560px] opacity-[0.35]"
      />

      <div className="section relative z-10 py-14 md:py-20">
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Book a Call with a Teacher
        </h2>

        <div className="mt-12 md:mt-14 grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-4xl mx-auto">
          <div className="space-y-4 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            <p>
              It&rsquo;s crucial to make an <B>informed decision</B>. We encourage
              you to Book a Call to ensure all your questions are answered.
            </p>
            <p>
              This <B>1-on-1 conversation</B> is a chance for you to explore how
              our course can be tailored to your <B>personal goals &amp; schedule</B>.
            </p>
            <p>
              It&rsquo;s a chance to see how our program fits into your busy life.
              Let&rsquo;s meet &amp; explore how to <B>enrich your Yogic journey</B>.
            </p>

            <div className="pt-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
                style={{ backgroundColor: MINT, fontWeight: 600, fontSize: '0.8rem' }}
              >
                Book My Free Call
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="rounded-full p-[3px]" style={{ boxShadow: `0 0 0 2px ${GOLD}` }}>
              <div className="rounded-full overflow-hidden w-52 h-52 md:w-64 md:h-64">
                <img
                  src={TEACHERS_PHOTO}
                  alt="Akasha lead teachers"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-16 md:mt-20 text-center md:text-left">
          <div className="text-center mb-10">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-3.5 font-body hover:shadow-lg transition-all"
              style={{ backgroundColor: MINT, fontWeight: 600, fontSize: '0.8rem' }}
            >
              Book My Free Call
            </a>
          </div>

          <h3
            className="font-heading text-akasha-gray-1 text-center"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.1rem)', fontWeight: 300 }}
          >
            Take the step that will change your life.
          </h3>

          <div className="mt-8 space-y-4 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            <p>Have you been longing to deepen your Yoga practice?</p>
            <p>Are you ready to expand your teaching skills? Look no further!</p>
            <p>
              Akasha offers the best <B>Advanced Yoga &amp; Meditation Teacher Training</B>.
            </p>
            <p>
              This <B>Yoga Alliance certified</B> course will profoundly transform your
              life:
            </p>
          </div>

          <h4 className="font-body font-semibold text-akasha-black mt-8 text-base md:text-lg">
            Evolve in a Nurturing Community
          </h4>
          <p className="font-body text-akasha-gray-1 mt-3 text-base md:text-lg leading-relaxed">
            This interactive online course features a truly immersive format:
          </p>
          <ul className="mt-4 space-y-2 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            {COMMUNITY.map((item, i) => (
              <li key={i}>
                <span className="mr-2" aria-hidden="true">
                  &bull;
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-2 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            <p>
              Elevate your skills and unlock your <B>true potential</B>.
            </p>
            <p>
              Embark with us on this <B>heart-opening journey</B>.
            </p>
            <p>
              Experience <B>profound growth</B>.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 md:gap-20">
          {['Free your Breath', 'Find your Peace', 'Live your Purpose'].map((line) => (
            <span
              key={line}
              className="script text-akasha-gray-1"
              style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)' }}
            >
              {line}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
