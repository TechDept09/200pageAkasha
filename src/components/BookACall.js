import Image from 'next/image';

// "Book a Call with a Teacher" section, matching the live Wix 200-Hour page:
// a titled copy block beside a gold-ringed photo, with a green CTA linking to
// the Calendly discovery call. Copy is verbatim from the live source.
const GREEN = '#5FBFA6';
const CALENDLY_URL =
  'https://calendly.com/akasha-yoga-academy/discovery-call-lead-teacher';

const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const PHOTO =
  'https://static.wixstatic.com/media/cd7168_646f9e73fb704d06af6b518f76e06ae6~mv2.jpeg/v1/fill/w_560,h_560,al_c,q_85,enc_avif,quality_auto/book-a-call.jpeg';

const B = ({ children }) => (
  <strong className="font-semibold text-akasha-black">{children}</strong>
);

export default function BookACall() {
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
          className="font-heading uppercase text-akasha-gray-1 tracking-[0.14em] text-center"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 300 }}
        >
          Book a Call with a Teacher
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center max-w-4xl mx-auto">
          <div className="space-y-4 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
            <p>
              It&rsquo;s crucial to make an <B>informed decision</B>. We encourage
              you to Book a Call to ensure all your questions are answered.
            </p>
            <p>
              This <B>1-on-1 conversation</B> is a chance for you to explore how
              our course can be tailored to your <B>personal goals &amp; schedule</B>.
            </p>
            <p>It&rsquo;s a chance to see how our program fits into your busy life.</p>
            <p>
              Kindly note, this call is exclusively available for those interested
              in enrolling in the Premium Package and is not offered for the
              Essential Path.
            </p>
            <p>Let&rsquo;s meet and explore how to enrich your yogic journey.</p>
          </div>

          <div className="flex justify-center">
            <div
              className="rounded-full p-[3px]"
              style={{ background: 'linear-gradient(135deg, #E7BC5D 0%, #b8892f 55%, #E7BC5D 100%)' }}
            >
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden bg-akasha-gray-4">
                <Image
                  src={PHOTO}
                  alt="Book a 1-on-1 call with an Akasha lead teacher"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Green CTA */}
        <div className="mt-12 md:mt-14 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full text-akasha-white uppercase tracking-[0.15em] px-10 py-4 font-body hover:shadow-lg transition-all"
            style={{ backgroundColor: GREEN, fontWeight: 600 }}
          >
            Book My Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
