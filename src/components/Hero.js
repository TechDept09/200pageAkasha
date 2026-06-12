import CheckoutButton from './CheckoutButton';

const HERO_IMG =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/crop/x_328,y_0,w_1345,h_1334/fill/w_838,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg';

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-akasha-white">
      <div className="section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* TEXT */}
          <div className="text-center lg:text-left">
            <span className="eyebrow">Yoga Teacher Training Online</span>

            <h1
              className="mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)', fontWeight: 300 }}
            >
              200-Hour Online
              <br />
              Yoga Teacher Training
            </h1>

            <p
              className="script mb-7"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Your Path to Purpose &amp; Joy
            </p>

            <p className="font-body text-akasha-gray-1 max-w-md mx-auto lg:mx-0 mb-9 leading-relaxed">
              Journey with us into the depths of authentic Yoga. Become Yoga
              Alliance certified from anywhere in the world, guided by three
              lead teachers with 65 years of combined experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <CheckoutButton className="btn-primary">
                Enroll Now
              </CheckoutButton>
              <a href="#curriculum" className="btn-ghost">
                Explore Program
              </a>
            </div>

            {/* Benefit microcopy */}
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mb-7 text-[12px] font-body text-akasha-gray-1">
              <li className="flex items-center gap-1.5">
                <span className="text-akasha-green">✓</span> Yoga Alliance certified
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-akasha-green">✓</span> 6-month self-paced
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-akasha-green">✓</span> Learn from anywhere
              </li>
            </ul>

            {/* Social proof line */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-akasha-gold tracking-[0.2em]">★★★★★</span>
              <p className="text-xs font-body text-akasha-gray-1">
                4.93/5.0 · 359 reviews · 1,100+ graduates on 6 continents
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={HERO_IMG}
                alt="Akasha Yoga Academy, certified yoga instructor in Bali"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Promo badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0 bg-akasha-white shadow-lg rounded-sm px-6 py-4 text-center border border-akasha-gray-4">
              <p className="text-[10px] font-body uppercase tracking-[0.25em] text-akasha-gray-1 mb-1">
                75% Summer Discount
              </p>
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-akasha-gray-2 line-through font-body text-sm">
                  US$1190
                </span>
                <span
                  className="font-heading text-akasha-orange text-3xl"
                  style={{ fontWeight: 400 }}
                >
                  US$290
                </span>
              </div>
              <p className="text-[10px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mt-1">
                Ends June 15
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
