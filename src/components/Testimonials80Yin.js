// Section 22 from the live Wix 80-Hour Yin page: grey TESTIMONIALS with two
// circular graduate portraits (Becky, Carmen), bold/italic emphasis, and
// mint MORE TESTIMONIALS CTA.
const MINT = '#75C8AE';
const GREY_BG = '#FFFFFF';
const TEXT = '#6E6E6D';

const MORE_URL = 'https://www.akashayogaacademy.com/testimonials';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BASE = 'https://static.wixstatic.com/media/';

const B = ({ children }) => (
  <strong style={{ fontWeight: 700, color: TEXT }}>{children}</strong>
);

const ITEMS = [
  {
    name: 'Becky Beach from Canada',
    photo:
      BASE +
      'cd7168_6b1fe788ee354840a97d75571ceb7436~mv2.jpeg/v1/crop/x_0,y_323,w_1716,h_1725/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/becky.jpg',
    body: (
      <>
        <p>
          Akasha&rsquo;s 80-Hour Yin Yoga Teacher Training is designed to give
          experiential knowledge of all relevant principles &amp; practices. It
          creates a greater sense of <B>balance &amp; harmony</B> within your own
          self-practice, and the practice you offer to your students.
        </p>
        <p>
          The instructors at Akasha have an incredible amount of{' '}
          <B>knowledge, experience &amp; wisdom</B> that shine through every lesson.
          You can tell they love Yin Yoga and love sharing it with others!
        </p>
        <p>
          Learning from a variety of experts who are truly passionate about sharing
          the benefits of Yin Yoga is a big part of what makes this course so
          engaging.
        </p>
        <p>
          After taking this course it is my belief that{' '}
          <B>every Yoga Teacher could profoundly benefit</B> from diving more deeply
          into Yin. And I can think of no better way to do that than through this
          course.
        </p>
      </>
    ),
  },
  {
    name: 'Carmen Reiss from Germany',
    photo:
      BASE +
      'cd7168_0e0f79a76e4b4a76bb286313615292ef~mv2.jpg/v1/crop/x_0,y_114,w_1500,h_1508/fill/w_320,h_320,al_c,q_80,enc_avif,quality_auto/carmen.jpg',
    body: (
      <>
        <p>
          The Yin Yoga TTC at Akasha is excellent. It&rsquo;s both{' '}
          <B>calming &amp; incredibly heartfelt.</B> It&rsquo;s a fantastic way to
          immerse oneself into a profound <em className="italic">inner world.</em>
        </p>
        <p>
          Each day of the course felt like a revelation about the capabilities &amp;
          limits of my body. Although I completed the training online, I still felt
          like I had a <B>truly magical</B> experience. The team at Akasha ensured
          that all training videos were of the highest possible quality.
        </p>
        <p>
          The guidance the teachers give at Akasha is out of this world, and I always{' '}
          <B>felt fully supported.</B> I could incorporate everything I learned into
          my teaching &amp; daily life. I&rsquo;m so happy that this allowed me to{' '}
          <B>make immediate &amp; profound changes in my life.</B>
        </p>
      </>
    ),
  },
];

export default function Testimonials80Yin() {
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
          Testimonials
        </h2>

        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 max-w-5xl mx-auto">
          {ITEMS.map((t) => (
            <div key={t.name} className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src={t.photo}
                alt={t.name}
                loading="lazy"
                decoding="async"
                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover mx-auto md:mx-0"
              />
              <div
                className="mt-6 space-y-4 font-body"
                style={{
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                  color: TEXT,
                  fontWeight: 300,
                  lineHeight: 1.65,
                }}
              >
                {t.body}
              </div>
              <cite
                className="mt-5 not-italic font-body text-sm md:text-base"
                style={{ color: '#6E6E6D' }}
              >
                {t.name}
              </cite>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={MORE_URL}
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
            More Testimonials
          </a>
        </div>
      </div>
    </section>
  );
}
