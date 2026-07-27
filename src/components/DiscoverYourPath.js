import Image from 'next/image';

// "Discover Your Unique Path" section, matching the live Wix 200-Hour page:
// four alternating rows pairing a gold-ringed circular photo with a titled
// copy block, over the faint lotus watermark, closing with the green CTA.
// Copy is verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const IMG = (id, slug) =>
  `https://static.wixstatic.com/media/cd7168_${id}~mv2.webp/v1/fill/w_560,h_560,al_c,q_85,enc_avif,quality_auto/${slug}.webp`;

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

const rows = [
  {
    title: 'Train with Masters',
    photo: IMG('7a9df32fd19e442e930ed19da234d947', 'train-with-masters'),
    alt: 'Akasha teachers guiding a student',
    body: (
      <>
        <p>
          Akasha Yoga is <B>the real deal</B>: Devoted masters with decades of
          experience guide you every step of the way. Dive deep into{' '}
          <B>eye-opening Yogic wisdom</B>.
        </p>
        <p>
          Learn breath-based asana, pranayama, meditation &amp; anatomy. Grow a
          spiritual <B>foundation for authentic practice</B>. Develop &amp;
          practice key teaching techniques for safe alignment.
        </p>
      </>
    ),
  },
  {
    title: 'Learn at Your Own Pace',
    photo: IMG('8b2abe3d5caf4c78aad2cd1b0842289b', 'learn-at-your-own-pace'),
    alt: 'Student learning online at her own pace',
    body: (
      <>
        <p>
          Study at a rhythm that&rsquo;s right for YOU. Unlike other Yoga
          schools, our certified 200-Hour TTC is designed to give you{' '}
          <B>total freedom</B> to study &amp; practice at a pace that suits your
          life.
        </p>
        <p>
          You can either immerse yourself in a short intensive training. Or you
          can spread out the journey over a longer period for deeper
          integration.
        </p>
      </>
    ),
  },
  {
    title: 'Join Our Community',
    photo: IMG('2c9b38b4b444418c89f4f8e7a0f9d3a5', 'join-our-community'),
    alt: 'Akasha Yoga Academy community celebrating together',
    body: (
      <>
        <p>
          Learning doesn&rsquo;t happen in isolation. When we connect with
          like-minded people, we naturally{' '}
          <B>grow our understanding &amp; deepen our compassion</B>.
        </p>
        <p>
          Daily Zoom calls allow you to practice in a{' '}
          <B>fun &amp; interactive</B> group setting, ask questions, listen to
          others&rsquo; insights &amp; foster life-long connections. You&rsquo;ll
          have <B>lifetime access</B> to an ever-evolving community of Yoga
          practitioners.
        </p>
      </>
    ),
  },
  {
    title: 'Transform Your Life',
    photo: IMG('683e0b19be4044e8be57fd1924ce7684', 'transform-your-life'),
    alt: 'Graduate meditating in a peaceful space',
    body: (
      <>
        <p>
          This immersive course teaches you how to surrender to the moment and{' '}
          <B>live with greater awareness &amp; intention</B>.
        </p>
        <p>
          Heart-opening practices, meditation &amp; breath-based asana guide you
          through a deep &amp; transformative inner journey that will{' '}
          <B>enhance relationships</B> and change your view of the world.
        </p>
      </>
    ),
  },
];

function GoldCircle({ photo, alt }) {
  return (
    <div
      className="rounded-full p-[3px]"
      style={{ background: 'linear-gradient(135deg, #E7BC5D 0%, #b8892f 55%, #E7BC5D 100%)' }}
    >
      <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden bg-akasha-gray-4">
        <Image src={photo} alt={alt} fill sizes="256px" className="object-cover" />
      </div>
    </div>
  );
}

export default function DiscoverYourPath() {
  return (
    <section className="relative overflow-hidden bg-akasha-white">
      {/* Faint lotus watermark, bleeding off the left edge */}
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-140px] top-1/2 -translate-y-1/2 w-[420px] md:w-[620px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24">
        <h2
          className="font-heading text-akasha-gray-1 text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)', fontWeight: 300, lineHeight: 1.25 }}
        >
          Discover Your Unique Path:
          <br />
          Masterful Teaching, Personalized Growth
        </h2>

        <div className="mt-14 md:mt-20 space-y-14 md:space-y-20 max-w-4xl mx-auto">
          {rows.map((r, i) => {
            const photoRight = i % 2 === 0;
            return (
              <div key={r.title} className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
                <div className={`flex justify-center ${photoRight ? 'md:order-2' : 'md:order-1'}`}>
                  <GoldCircle photo={r.photo} alt={r.alt} />
                </div>
                <div className={photoRight ? 'md:order-1' : 'md:order-2'}>
                  <h3
                    className="font-heading text-akasha-black mb-4"
                    style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)', fontWeight: 400 }}
                  >
                    {r.title}
                  </h3>
                  <div className="space-y-4 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
                    {r.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Green CTA */}
        <div className="mt-14 md:mt-16 text-center">
          <a
            href="/200h-essential/enroll"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Join Our Family
          </a>
        </div>
      </div>
    </section>
  );
}
