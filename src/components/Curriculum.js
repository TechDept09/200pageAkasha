'use client';

import { useState } from 'react';

const parts = [
  {
    n: '01',
    t: 'Practice & Theory',
    desc: 'Build your foundation through grounded asana, breath, and presence. Learn pranayama, heart-centered meditation, the chakras, and the philosophical roots that make Yoga more than physical exercise, so you grow into a confident self-practitioner.',
    items: ['Asanas & alignment', 'Breathwork (Pranayama)', 'Heart meditation', 'Yoga philosophy', 'The art of living', 'The chakras'],
  },
  {
    n: '02',
    t: 'Anatomy & Posture',
    desc: 'Go deeper into advanced asanas, pranayama, and the energetic bandhas. Study applied yoga anatomy and posture refinement so you can teach safely, observe with precision, and offer hands-on adjustments with care.',
    items: ['Advanced asanas & pranayama', 'Bandha', 'Yoga anatomy', 'Teaching skills', 'Adjustment training'],
  },
  {
    n: '03',
    t: 'Yoga Physiology',
    desc: 'Step into the scriptures, the Bhagavad Gita and the Yoga Sutras, and the inner physiology of Yoga. Learn purification practices, yogic diet, and how to sequence a class with intention. You’ll teach your own 60-minute class to put theory into practice.',
    items: ['Scripture: Bhagavad Gita', 'Scripture: Yoga Sutras', 'Purification practices', 'Yogic diet', 'Sequencing', 'Teaching a 60-minute class'],
  },
  {
    n: '04',
    t: 'Practicum & Getting Started',
    desc: 'Trace Yoga’s lineage from its roots to your own teaching voice. Build a personal practice that sustains you, teach a full 90-minute class, and finish with the marketing and networking know-how to share Yoga with the world.',
    items: ['Yoga history', 'Self-practice', 'Teaching a 90-minute class', 'Marketing & networking'],
  },
];

function PartCard({ p, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-8 md:p-10 hover:border-akasha-gold transition-colors duration-300 flex flex-col">
      <div className="text-center mb-5">
        <span className="script block mb-1" style={{ fontSize: '1.9rem' }}>
          Part {i + 1}
        </span>
        <h3 className="font-heading text-akasha-black" style={{ fontSize: '1.4rem', fontWeight: 400 }}>
          {p.t}
        </h3>
      </div>

      <ul className="space-y-2.5 max-w-xs mx-auto mb-5">
        {p.items.map((item, j) => (
          <li
            key={j}
            className="flex items-start gap-3 text-sm font-body text-akasha-gray-1 leading-relaxed"
          >
            <span className="text-akasha-green mt-0.5 flex-none">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm font-body text-akasha-gray-1 leading-relaxed pt-3 border-t border-akasha-gray-4 mt-1">
            {p.desc}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-auto pt-4 text-[11px] font-body uppercase tracking-[0.25em] text-akasha-orange hover:text-akasha-orange-dark transition-colors self-center"
      >
        {open ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
}

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 md:py-28 bg-akasha-white">
      <div className="section">
        {/* Centered header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Program Overview</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            Deepen your Knowledge &amp; Practice
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            Learn &amp; experience a deeper level of Yoga in both philosophy
            &amp; practice. A complete 200-hour curriculum in four integrated
            parts.
          </p>
          <span className="gold-rule" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {parts.map((p, i) => (
            <PartCard key={i} p={p} i={i} />
          ))}
        </div>

        {/* Accreditation line */}
        <div className="text-center mt-14">
          <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gray-1">
            Yoga Alliance Registered School · ID 87485 · Since 2012 · RYT-200 Eligible
          </p>
        </div>
      </div>
    </section>
  );
}
