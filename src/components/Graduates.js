import Image from 'next/image';

// "Hear From 1100+ Graduates" section from the live Wix 200-Hour page: three
// graduate testimonials with gold-ringed circular photos over the faint lotus
// watermark, closing with the green "I Want To Be Part Of This" CTA. Copy is
// verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

// Bold inherits the surrounding text colour so it reads correctly on both the
// light (main page) and enroll (warm-gray) themes.
const B = ({ children }) => <strong className="font-semibold">{children}</strong>;

const CARDS = [
  {
    name: 'Arianne from Canada',
    photo:
      'https://static.wixstatic.com/media/cd7168_9606fee6b4944df0bd317d69bda02b36~mv2.jpeg/v1/crop/x_150,y_577,w_932,h_936/fill/w_320,h_320,al_c,q_85,enc_avif,quality_auto/arianne.jpeg',
    quote: (
      <>
        &ldquo;For me the course was not only inspiring, but{' '}
        <B>transformative!</B> I first got into yoga for the asana practice, but I
        soon realized that there was more to it. I have found{' '}
        <B>so much meaning</B> in the teachings of yoga and I am ready to apply
        them to my life. Moving forward, I know that I can{' '}
        <B>trust in myself and in the universe.</B>{' '}
        <B>For the first time in my life, I feel connected.</B>&rdquo;
      </>
    ),
  },
  {
    name: 'Clarissa from the US',
    photo:
      'https://static.wixstatic.com/media/cd7168_58484436d3c24b8eb5b143ac0ff2f8ce~mv2.jpg/v1/fill/w_320,h_320,al_c,q_85,enc_avif,quality_auto/clarissa.jpg',
    quote: (
      <>
        &ldquo;This course has <B>inspired me more</B> than I could have ever
        imagined! The training has not only given me the tools to make the
        transformation from yoga student to yoga teacher, but also the tools to{' '}
        <B>connect with my heart</B>, relax and be present, and it has shown me
        the <B>joy &amp; passion</B> I have for teaching.&rdquo;
      </>
    ),
  },
  {
    name: 'Coral from the US',
    photo:
      'https://static.wixstatic.com/media/cd7168_26c02626fba14355aab1913375832c55~mv2.jpeg/v1/crop/x_341,y_12,w_486,h_488/fill/w_320,h_320,al_c,q_85,enc_avif,quality_auto/coral.jpeg',
    quote: (
      <>
        &ldquo;I came to deepen my own practice, with no intention to teach, but I
        am leaving with <B>a passion to share this energy</B> and the lessons I
        have learned here. The support from the teachers and students made me
        abandon my fears that I held on to and gain the{' '}
        <B>confidence in all areas of my life</B> that I was lacking. I really
        feel like a new person{' '}
        <B>ready to shine and to share what I have learned!</B>&rdquo;
      </>
    ),
  },
];

// theme 'light' (default): white section + lotus, dark text, closing CTA —
// main course page. theme 'enroll': transparent over the warm-gray canvas,
// light text, "Testimonials" heading, no closing CTA (the enroll page has its
// own CTAs around it).
export default function Graduates({ theme = 'light' }) {
  const enroll = theme === 'enroll';
  const headCls = enroll ? 'text-akasha-white/90' : 'text-akasha-gray-1';
  const bodyCls = enroll ? 'text-akasha-white/80' : 'text-akasha-gray-1';
  const nameCls = enroll ? 'text-akasha-white/60' : 'text-akasha-gray-2';
  return (
    <section id="graduates" className={`relative overflow-hidden ${enroll ? '' : 'bg-akasha-white'}`}>
      {!enroll && (
        <img
          src={LOTUS_WATERMARK}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[440px] md:w-[640px] opacity-[0.12]"
        />
      )}

      <div className="section relative z-10 py-16 md:py-24 text-center">
        <h2
          className={`font-heading uppercase tracking-[0.12em] ${headCls}`}
          style={{ fontSize: 'clamp(1.7rem, 3.6vw, 2.6rem)', fontWeight: 300 }}
        >
          {enroll ? 'Testimonials' : 'Hear From 1100+ Graduates'}
        </h2>
        <p className={`mt-4 font-body ${bodyCls}`}>
          {enroll ? 'Hear from our 1100+ graduates' : 'Heart-Opening Testimonials from Genuine Students'}
        </p>

        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto mt-14">
          {CARDS.map((card) => (
            <div key={card.name} className="flex flex-col items-center">
              <div className="rounded-full p-[3px]" style={{ boxShadow: '0 0 0 2px #C9A24B' }}>
                <div className="rounded-full overflow-hidden w-40 h-40">
                  <Image
                    src={card.photo}
                    alt={card.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className={`mt-8 font-body text-sm md:text-[15px] leading-relaxed max-w-xs ${bodyCls}`}>
                {card.quote}
              </p>
              <p className={`mt-6 font-heading italic ${nameCls}`}>{card.name}</p>
            </div>
          ))}
        </div>

        {!enroll && (
          <div className="mt-16 md:mt-20">
            <p
              className="font-heading text-akasha-gray-1"
              style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 300 }}
            >
              You could be the next one making history in yoga!
            </p>
            <a
              href="/200h-essential/enroll"
              className="inline-block mt-2 font-body text-sm underline text-akasha-gray-2 hover:text-akasha-orange transition-colors"
            >
              More Testimonials
            </a>
            <div className="mt-8">
              <a
                href="/200h-essential/enroll"
                className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
                style={{ backgroundColor: GREEN, fontWeight: 600 }}
              >
                I Want To Be Part Of This
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
