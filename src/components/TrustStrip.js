import FadeIn from './FadeIn';

const items = [
  { v: 'Yoga Alliance', l: 'Registered School · ID 87485' },
  { v: 'Since 2012', l: 'Bali-based Academy' },
  { v: 'RYT-200', l: 'Internationally Recognized' },
  { v: '1,100+', l: 'Graduates on 6 Continents' },
];

export default function TrustStrip() {
  return (
    <section className="bg-akasha-white border-y border-akasha-gray-4">
      <div className="section py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-center max-w-5xl mx-auto">
          {items.map((it, i) => (
            <FadeIn key={i} delay={i * 90} className="px-2">
              <div
                className="font-heading text-akasha-black text-lg md:text-xl leading-tight"
                style={{ fontWeight: 400 }}
              >
                {it.v}
              </div>
              <p className="text-[10px] md:text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mt-1.5">
                {it.l}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
