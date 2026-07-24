import Image from 'next/image';

// Detailed "14-Day Money-Back Guarantee" section from the live Wix 200-Hour
// page: the Risk-Free Booking block beside the gold badge, then the Absolute
// Freedom Guarantee closing with the green "Register Now – Decide Later" CTA,
// over the faint lotus watermark. Copy is verbatim from the live source.
const GREEN = '#5FBFA6';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BADGE =
  'https://static.wixstatic.com/media/cd7168_a773ce8744cc4616a0f0eafa4f2e14ab~mv2.png/v1/crop/x_0,y_2,w_300,h_297/fill/w_400,h_396,al_c,q_85,enc_avif,quality_auto/Money-Back-Guarantee-Akasha-Yoga.png';

// theme 'light' (default): white section + faint lotus, dark text — main page.
// theme 'enroll': transparent over the enroll page's warm-gray canvas, light text.
export default function RiskFreeGuarantee({ theme = 'light', onEnroll }) {
  const enroll = theme === 'enroll';
  const B = ({ children }) => (
    <strong className={`font-semibold ${enroll ? 'text-akasha-white' : 'text-akasha-black'}`}>{children}</strong>
  );
  const headCls = enroll ? 'text-akasha-white/90' : 'text-akasha-gray-1';
  const bodyCls = enroll ? 'text-akasha-white/80' : 'text-akasha-gray-1';
  const subCls = enroll ? 'text-akasha-white/60' : 'text-akasha-gray-2';
  return (
    <section id="risk-free" className={`relative overflow-hidden ${enroll ? '' : 'bg-akasha-white'}`}>
      {!enroll && (
        <img
          src={LOTUS_WATERMARK}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none select-none absolute left-[-160px] top-0 w-[440px] md:w-[680px] opacity-[0.12]"
        />
      )}

      <div className="section relative z-10 py-16 md:py-24">
        <h2
          className={`text-center font-heading uppercase tracking-[0.12em] ${headCls}`}
          style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
        >
          14-Day Money-Back Guarantee
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mt-12">
          <div>
            <h3
              className={`font-heading ${headCls}`}
              style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 300 }}
            >
              Risk-Free Booking
            </h3>
            <div className={`mt-4 space-y-4 font-body leading-relaxed ${bodyCls}`}>
              <p>
                Your genuine satisfaction really matters to us. That&rsquo;s why we
                offer an <B>unconditional Money-Back Guarantee</B>.
              </p>
              <p>
                If our premium program doesn&rsquo;t meet your expectations,
                you&rsquo;re entitled to get an <B>immediate, full refund</B>.
              </p>
              <p>
                Start your journey with <B>complete peace of mind</B>. Enjoy the
                flexibility to explore freely for 2 weeks.
              </p>
              <p className={`text-sm italic ${subCls}`}>
                *MBG is available with Essential &amp; Premium Plans until July
                31st, as part of the Bring Bali Home special promo.
              </p>
            </div>
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

        <div className="max-w-3xl mx-auto mt-14 md:mt-16 text-center">
          <h3
            className={`font-heading uppercase tracking-[0.1em] ${headCls}`}
            style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.6rem)', fontWeight: 300 }}
          >
            14-Day Absolute Freedom Guarantee
          </h3>
          <div className={`mt-5 space-y-4 font-body leading-relaxed ${bodyCls}`}>
            <p>
              This premium program is designed to exceed expectations. We&rsquo;re
              fully dedicated to supporting you on every step of this life-changing
              journey.
            </p>
            <p>
              Based on our <B>superb quality &amp; decades of experience</B>,
              we&rsquo;re confident to offer you this generous{' '}
              <B>14-Day Money-Back Guarantee!</B>
            </p>
          </div>

          <div className="mt-10">
            {onEnroll ? (
              <button
                type="button"
                onClick={onEnroll}
                className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
                style={{ backgroundColor: GREEN, fontWeight: 600 }}
              >
                Register Now &ndash; Decide Later
              </button>
            ) : (
              <a
                href="/200h-essential/enroll"
                className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
                style={{ backgroundColor: GREEN, fontWeight: 600 }}
              >
                Register Now &ndash; Decide Later
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
