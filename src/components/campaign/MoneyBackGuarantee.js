// 14-Day Money-Back Guarantee section, risk-reversal copy verbatim
// from Akasha's premium plan page. Uses a stylised orange seal on
// the left and the guarantee copy on the right.

export default function MoneyBackGuarantee() {
  return (
    <section
      className="py-16 md:py-24 bg-akasha-white"
      aria-labelledby="campaign-mbg-heading"
    >
      <div className="section max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 md:gap-16 items-center">
          {/* Seal badge, orange filled circle stacking the guarantee
              wording. Renders as the visual anchor of the section. */}
          <div className="flex justify-center md:justify-start">
            <div
              className="relative flex flex-col items-center justify-center text-center bg-akasha-orange text-akasha-white rounded-full shadow-xl"
              style={{
                width: 'clamp(220px, 28vw, 280px)',
                height: 'clamp(220px, 28vw, 280px)',
              }}
              aria-hidden="true"
            >
              <span
                className="absolute inset-2 rounded-full border border-akasha-white/40"
                aria-hidden="true"
              />
              <span
                className="uppercase"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.7rem, 1vw, 0.8rem)',
                  letterSpacing: '0.32em',
                  fontWeight: 600,
                }}
              >
                14-Day
              </span>
              <span
                className="script text-akasha-white mt-1"
                style={{
                  fontSize: 'clamp(2.4rem, 4.4vw, 3rem)',
                  lineHeight: 1,
                  color: '#FFFFFF',
                }}
              >
                Money-Back
              </span>
              <span
                className="uppercase mt-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
                  letterSpacing: '0.28em',
                  fontWeight: 500,
                }}
              >
                Guarantee
              </span>
            </div>
          </div>

          {/* Copy column, verbatim */}
          <div className="text-center md:text-left">
            <span className="eyebrow text-akasha-orange">Risk-Free Booking</span>
            <h2
              id="campaign-mbg-heading"
              className="mb-4"
              style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
            >
              14-Day Absolute Freedom Guarantee
            </h2>
            <span className="gold-rule mx-auto md:mx-0" />

            <div className="mt-6 space-y-4 font-body text-akasha-gray-1 text-base md:text-lg leading-relaxed">
              <p>Your genuine satisfaction really matters to us.</p>
              <p>
                That's why we offer an unconditional Money-Back Guarantee.
                If our Essential program doesn't meet your expectations,
                you're entitled to get an immediate, full refund.
              </p>
              <p>
                Start your journey with complete peace of mind. Enjoy the
                flexibility to explore freely for 2 weeks.
              </p>
              <p>
                This Essential program is designed to exceed expectations.
                We're fully dedicated to supporting you on every step of
                this life-changing journey.
              </p>
              <p>
                Based on our superb quality & decades of experience,
                we're confident to offer you this generous 14-Day
                Money-Back Guarantee.
              </p>
            </div>

            <p className="mt-6 text-[11px] md:text-xs font-body text-akasha-gray-2 italic leading-relaxed">
              *MBG is available with the Essential program until July
              15th, as part of the Bring Bali Home special promo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
