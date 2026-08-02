import Image from 'next/image';

// "14-Day Money-Back Guarantee" section from the live Wix 200-Hour page:
// two reassurance blocks beside the gold guarantee badge, over the faint
// lotus watermark. Copy is verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BADGE =
  'https://static.wixstatic.com/media/cd7168_a773ce8744cc4616a0f0eafa4f2e14ab~mv2.png/v1/crop/x_0,y_2,w_300,h_297/fill/w_400,h_396,al_c,q_85,enc_avif,quality_auto/Money-Back-Guarantee-Akasha-Yoga.png';

export default function MoneyBackGuarantee() {
  return (
    <section id="guarantee" className="relative overflow-hidden bg-akasha-white">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[440px] md:w-[640px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24">
        <h2
          className="text-center font-heading uppercase text-akasha-gray-1 tracking-[0.12em]"
          style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
        >
          14-Day Money-Back Guarantee
        </h2>
        <p className="text-center mt-4 font-body text-akasha-gray-1">
          Your genuine satisfaction really matters to us. That&rsquo;s why we offer:
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mt-12">
          <div className="space-y-8">
            <div>
              <h3
                className="font-heading text-akasha-gray-1"
                style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', fontWeight: 300 }}
              >
                14-Day Absolute Freedom Guarantee:
              </h3>
              <p className="mt-2 font-body text-akasha-gray-1 leading-relaxed">
                Explore our premium program for 2 weeks. If it&rsquo;s not right
                for you, get a hassle-free, full refund.
              </p>
            </div>
            <div>
              <h3
                className="font-heading text-akasha-gray-1"
                style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', fontWeight: 300 }}
              >
                Empower Your Journey:
              </h3>
              <p className="mt-2 font-body text-akasha-gray-1 leading-relaxed">
                Register now, decide later. With Akasha&rsquo;s double refund
                option, you can step forward without any risk.
              </p>
            </div>
            <p className="font-body text-sm italic text-akasha-gray-2">
              *MBG is available with Essential &amp; Premium Plans until July 31st,
              as part of the Bring Bali Home special promo.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src={BADGE}
              alt="Akasha Yoga 100% Money-Back Guarantee"
              width={400}
              height={396}
              className="w-56 md:w-72 h-auto"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/200h-essential/enroll"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
