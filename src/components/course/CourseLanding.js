import Head from 'next/head';
import CourseNav from './CourseNav';
import CourseCurriculum from './CourseCurriculum';
import CourseTeachers from './CourseTeachers';
import CourseCTA from './CourseCTA';
import CourseStickyCTA from './CourseStickyCTA';
import QuoteBreak from '../QuoteBreak';
import WhyAkasha from '../WhyAkasha';
import TrustStrip from '../TrustStrip';
import Footer from '../Footer';

function price(n, currency) {
  if (!n) return null;
  return currency === 'USD' ? `US$${n}` : `${currency}${n}`;
}

export default function CourseLanding({ course }) {
  const {
    title,
    tagline,
    discountPercent,
    regularPrice,
    promoPrice,
    currency,
    longDescription = [],
    learningOutcomes = [],
    inclusions = [],
    notIncluded = [],
    instructors = [],
    duration,
    location,
    dates,
    image,
    wixEnrollUrl,
    prereq,
    openToAll,
    shortDescription,
  } = course;

  const hasDiscount = regularPrice && promoPrice;
  const ctaShort = promoPrice ? `Enroll ${price(promoPrice, currency)}` : 'Enroll';
  const metaTitle = `${title} | Akasha Yoga Academy`;
  const metaDescription = shortDescription;
  const savings = hasDiscount ? regularPrice - promoPrice : 0;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        {image ? <meta property="og:image" content={image} /> : null}
        <meta property="og:site_name" content="Akasha Yoga Academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        {image ? <meta name="twitter:image" content={image} /> : null}
      </Head>

      <CourseNav ctaLabel={ctaShort} />

      <main>
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-14 md:pb-20 bg-akasha-white">
          <div className="section">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <a
                  href="/"
                  className="inline-block eyebrow text-akasha-gray-1 hover:text-akasha-orange transition-colors mb-3"
                >
                  ← All Courses
                </a>

                <h1
                  className="mb-4"
                  style={{ fontSize: 'clamp(2.1rem, 4.6vw, 3.4rem)', fontWeight: 300 }}
                >
                  {title}
                </h1>

                {tagline ? (
                  <p
                    className="script mb-6"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
                  >
                    {tagline}
                  </p>
                ) : null}

                <p className="font-body text-akasha-gray-1 max-w-md mx-auto lg:mx-0 mb-7 leading-relaxed">
                  {shortDescription}
                </p>

                <ul className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mb-8 text-[12px] font-body text-akasha-gray-1">
                  {duration ? (
                    <li className="flex items-center gap-1.5">
                      <span className="text-akasha-green">✓</span> {duration}
                    </li>
                  ) : null}
                  {location ? (
                    <li className="flex items-center gap-1.5">
                      <span className="text-akasha-green">✓</span> {location}
                    </li>
                  ) : null}
                  {prereq ? (
                    <li className="flex items-center gap-1.5">
                      <span className="text-akasha-green">✓</span> Prereq: {prereq}
                    </li>
                  ) : openToAll ? (
                    <li className="flex items-center gap-1.5">
                      <span className="text-akasha-green">✓</span> Open to all
                    </li>
                  ) : null}
                </ul>

                <a href="#pricing" className="btn-primary">
                  See Pricing
                </a>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-akasha-gray-4">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-akasha-gray-2 font-body text-sm">
                      Image coming soon
                    </div>
                  )}
                </div>

                {hasDiscount ? (
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0 bg-akasha-white shadow-lg rounded-sm px-6 py-4 text-center border border-akasha-gray-4">
                    <p className="text-[10px] font-body uppercase tracking-[0.25em] text-akasha-gray-1 mb-1">
                      {discountPercent}% Off
                    </p>
                    <div className="flex items-baseline justify-center gap-3">
                      <span className="text-akasha-gray-2 line-through font-body text-sm">
                        {price(regularPrice, currency)}
                      </span>
                      <span
                        className="font-heading text-akasha-orange text-3xl"
                        style={{ fontWeight: 400 }}
                      >
                        {price(promoPrice, currency)}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <QuoteBreak
          text="Their love & passion for a Yogic Life was out of this world. I swear my blueprint is changed because of it!"
          author="Suzi Bloor"
          country="Denmark"
        />

        <WhyAkasha />

        {/* About */}
        {longDescription.length ? (
          <section className="py-16 md:py-20 bg-akasha-white">
            <div className="section max-w-3xl">
              <div className="text-center mb-10">
                <span className="eyebrow">About this Training</span>
                <span className="gold-rule" />
              </div>
              <div className="space-y-5 font-body text-akasha-gray-1 leading-relaxed">
                {longDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {dates ? (
                <p className="text-center mt-8 text-[12px] font-body uppercase tracking-[0.2em] text-akasha-orange">
                  {dates}
                </p>
              ) : null}
            </div>
          </section>
        ) : null}

        <CourseCurriculum items={learningOutcomes} />

        <QuoteBreak
          text="You will learn so much more than just Yoga. I truly wish that EVERY person could experience this deep dive of self-discovery."
          author="Chandise Dasher"
          country="United States"
        />

        <CourseTeachers instructors={instructors} />

        <TrustStrip />

        {/* What's Included */}
        {inclusions.length ? (
          <section className="py-20 md:py-28 bg-akasha-gray-4/30">
            <div className="section">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="eyebrow">Inclusions</span>
                <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
                  What&rsquo;s Included
                </h2>
                <span className="gold-rule" />
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl mx-auto">
                {inclusions.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-body text-akasha-gray-1 leading-relaxed"
                  >
                    <span className="text-akasha-green mt-0.5 flex-none">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {notIncluded.length ? (
                <div className="max-w-4xl mx-auto mt-10 pt-8 border-t border-akasha-gray-4">
                  <p className="text-center text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-2 mb-5">
                    Not Included
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {notIncluded.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-body text-akasha-gray-2 leading-relaxed"
                      >
                        <span className="text-akasha-gray-2 mt-0.5 flex-none">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-28 bg-akasha-white scroll-mt-20">
          <div className="section">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow text-akasha-orange">
                {discountPercent ? `${discountPercent}% Discount` : 'Investment'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
                Your Investment
              </h2>
              <span className="gold-rule" />
            </div>

            <div className="max-w-xl mx-auto bg-akasha-white border border-akasha-gray-4 rounded-sm overflow-hidden">
              <div className="text-center pt-10 pb-8 px-8 border-b border-akasha-gray-4">
                {tagline ? (
                  <span className="script block mb-3" style={{ fontSize: '2rem' }}>
                    {tagline}
                  </span>
                ) : null}
                <div className="flex items-baseline justify-center gap-4 mb-2">
                  {hasDiscount ? (
                    <span className="text-akasha-gray-2 text-xl line-through font-body">
                      {price(regularPrice, currency)}
                    </span>
                  ) : null}
                  <span
                    className="font-heading text-akasha-black text-6xl"
                    style={{ fontWeight: 300 }}
                  >
                    {price(promoPrice || regularPrice, currency)}
                  </span>
                </div>
                {hasDiscount ? (
                  <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-orange">
                    Save {price(savings, currency)}
                  </p>
                ) : null}
              </div>

              <div className="px-8 md:px-12 py-8 text-center">
                <a
                  href={wixEnrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full block"
                >
                  {ctaShort}
                </a>
                <p className="text-[10px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mt-4">
                  Secure checkout via Wix
                </p>
              </div>
            </div>
          </div>
        </section>

        <CourseCTA course={course} />

        <Footer />
      </main>

      <CourseStickyCTA course={course} />
    </>
  );
}
