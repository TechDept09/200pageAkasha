// Section 30 from the live Wix 300-Hour page: grey FAQ teaser with
// "GO TO FAQ" linking to the 300-hour FAQ page.
const MINT = '#7CC7B0';
const GREY_BG = '#FFFFFF';

const FAQ_URL = 'https://www.akashayogaacademy.com/300-hour-online-faq';

const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_500,h_507,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

export default function FaqTeaser300() {
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

      <div className="section relative z-10 py-14 md:py-20 text-center">
        <h2
          className="font-heading text-akasha-gray-1 tracking-wide"
          style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
        >
          Frequently Asked Questions
        </h2>

        <div className="max-w-2xl mx-auto mt-6 space-y-3 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
          <p>
            We want to make sure this is the best investment of your life.
            That&rsquo;s why we&rsquo;ve answered all Frequently Asked Questions
            very thoroughly.
          </p>
          <p>Please click below to receive detailed answers to all your questions.</p>
        </div>

        <div className="mt-10">
          <a
            href={FAQ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: MINT, fontWeight: 600 }}
          >
            Go to FAQ
          </a>
        </div>
      </div>
    </section>
  );
}
