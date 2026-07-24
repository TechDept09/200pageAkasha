// "Frequently Asked Question" + "We Want to See You Shine" teaser from the
// live Wix 200-Hour page: two centered call-outs (jump to the FAQ, and book a
// premium discovery call), over the faint lotus watermark. Copy is verbatim
// from the live source.
const GREEN = '#5FBFA6';
const CALENDLY_URL =
  'https://calendly.com/akasha-yoga-academy/discovery-call-lead-teacher';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const btn =
  'inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all';

export default function FaqShineTeaser() {
  return (
    <section id="faq-teaser" className="relative overflow-hidden bg-akasha-white">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[440px] md:w-[640px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-24 text-center">
        {/* Frequently Asked Question */}
        <h2
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.12em]"
          style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)', fontWeight: 300 }}
        >
          Frequently Asked Question
        </h2>
        <div className="max-w-2xl mx-auto mt-6 space-y-3 font-body text-akasha-gray-1 leading-relaxed">
          <p>
            We want to make sure this is the best investment of your life.
            That&rsquo;s why we&rsquo;ve answered all Frequently Asked Questions
            very thoroughly.
          </p>
          <p>Please click below to receive detailed answers to all your questions.</p>
        </div>
        <div className="mt-8">
          <a href="#faq" className={btn} style={{ backgroundColor: GREEN, fontWeight: 600 }}>
            Go to FAQ
          </a>
        </div>

        {/* We Want to See You Shine */}
        <h2
          className="font-script text-akasha-orange mt-16 md:mt-20"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        >
          We Want to See You Shine
        </h2>
        <div className="max-w-2xl mx-auto mt-6 space-y-3 font-body text-akasha-gray-1 leading-relaxed">
          <p>
            Hop on a call with one of our team members to learn more about our
            premium program.
          </p>
          <p>We are here to answer any questions you might have.</p>
          <p className="text-sm italic text-akasha-gray-2">
            Please note, this call is exclusively available for those interested in
            enrolling in the Premium Package and is not offered for the Essential
            Path.
          </p>
        </div>
        <div className="mt-8">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={btn}
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
