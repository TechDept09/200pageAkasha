import Image from 'next/image';

// "Enjoy a US$150 Saving on Yoga Instructor Insurance" section from the live
// Wix 200-Hour page: the BeYogi partnership offer beside the BeYogi logo, over
// the faint lotus watermark. Copy is verbatim from the live source.
const LOTUS_WATERMARK =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

const BEYOGI_LOGO =
  'https://static.wixstatic.com/media/cd7168_d57b39b11b1643fe8f9848e6999af188~mv2.png/v1/fill/w_734,h_298,al_c,q_85,enc_avif,quality_auto/Beyogi-Logo.png';

export default function BeYogiInsurance() {
  return (
    <section id="beyogi-insurance" className="relative overflow-hidden bg-akasha-white">
      <img
        src={LOTUS_WATERMARK}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none select-none absolute left-[-160px] top-1/2 -translate-y-1/2 w-[420px] md:w-[600px] opacity-[0.12]"
      />

      <div className="section relative z-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2
              className="font-heading uppercase text-akasha-gray-1 tracking-[0.08em] leading-snug"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 300 }}
            >
              Enjoy a US$150 Saving on Yoga Instructor Insurance
            </h2>
            <div className="mt-5 space-y-4 font-body text-akasha-gray-1 leading-relaxed">
              <p>
                Akasha Yoga Academy has teamed up with BeYogi to offer you
                tremendous savings on liability release insurance.
              </p>
              <p>
                As a student of Akasha&rsquo;s 200-Hour Online TTC, you pay only
                US$25 for the first year of your insurance. In subsequent years,
                you can continue to take advantage of significant savings.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={BEYOGI_LOGO}
              alt="BeYogi"
              width={734}
              height={298}
              className="w-56 md:w-72 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
