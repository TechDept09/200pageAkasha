'use client';

// "See What's Included in Each Option" comparison table from the live Wix
// /enroll-now page: a teal header row over dark data rows, comparing Essential
// vs Premium. Copy is verbatim from the live source.
const GREEN = '#75C8AE';
const ROW_A = '#161616';
const ROW_B = '#1f1f1f';

// value can be: true (green check), false/'-' (dash), a string, or a price obj.
const ROWS = [
  { label: 'Investment', e: { price: 299 }, p: { price: 1490 } },
  { label: '6-Month Payment Plan', e: '-', p: '-' },
  { label: 'Yoga Alliance Certification', e: true, p: true },
  { label: 'Access to Videos (Extensions Available)', e: '6 Months', p: '12 Months' },
  { label: 'Quizzes, Assignments & Alignment Training', e: true, p: true },
  { label: 'Private Facebook Group', e: true, p: true },
  { label: '14+ Amazing bonuses Included (US$1130 Value)', e: true, p: true },
  { label: 'Money Back Guarantee', e: '14-Day Guarantee (Risk-Free)', p: '14-Day Guarantee (Risk-Free)' },
  { label: 'Access to Live Zoom Classes & Q&As', e: '3 per week\n6 months', p: '10 per week\n12 months' },
  { label: '1-on-1 Mentorship, Private Chat', e: '-', p: 'Yes, 6+ months' },
  { label: 'WhatsApp Community Group', e: '-', p: true },
  { label: 'Individual Feedback, Supervision & Coaching', e: '-', p: 'Yes, 6 months (Extensions Available)' },
];

function Cell({ value }) {
  if (value === true) {
    return (
      <span className="text-xl" style={{ color: '#57c157' }} aria-label="included">
        &#10003;
      </span>
    );
  }
  if (value === false || value === '-') {
    return <span className="text-akasha-white/40">&ndash;</span>;
  }
  if (value && typeof value === 'object' && 'price' in value) {
    return (
      <span className="font-heading text-akasha-white" style={{ fontWeight: 300 }}>
        <span className="text-xs align-top text-akasha-white/70">US$</span>
        <span className="text-lg md:text-xl">{value.price}</span>
      </span>
    );
  }
  return (
    <span className="font-body text-akasha-white/80 text-xs md:text-sm whitespace-pre-line leading-snug">
      {value}
    </span>
  );
}

export default function FeatureComparison() {
  return (
    <section className="scroll-mt-24">
      <div className="section py-14 md:py-20">
        <h2
          className="text-center font-heading text-akasha-white/90 mb-10"
          style={{ fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)', fontWeight: 300 }}
        >
          See What&rsquo;s Included in Each Option
        </h2>

        <div className="max-w-4xl mx-auto rounded-sm overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1.6fr_1fr_1fr]" style={{ backgroundColor: GREEN }}>
            <div className="px-4 md:px-6 py-3.5 font-body uppercase tracking-[0.1em] text-[11px] md:text-sm" style={{ color: '#1c3d34' }}>
              Feature Comparison
            </div>
            <div className="px-3 py-3.5 text-center font-body uppercase tracking-[0.1em] text-[11px] md:text-sm" style={{ color: '#1c3d34' }}>
              Essential
            </div>
            <div className="px-3 py-3.5 text-center font-body uppercase tracking-[0.1em] text-[11px] md:text-sm" style={{ color: '#1c3d34' }}>
              Premium
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.6fr_1fr_1fr] items-center"
              style={{ backgroundColor: i % 2 === 0 ? ROW_A : ROW_B }}
            >
              <div className="px-4 md:px-6 py-4 font-body text-akasha-white/80 text-xs md:text-sm leading-snug">
                {row.label}
              </div>
              <div className="px-3 py-4 text-center">
                <Cell value={row.e} />
              </div>
              <div className="px-3 py-4 text-center">
                <Cell value={row.p} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
