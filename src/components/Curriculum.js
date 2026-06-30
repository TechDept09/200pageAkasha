'use client';

import { useState } from 'react';

// Curriculum text copied verbatim from
// akashayogaacademy.com/200-hour-online-curriculum so the page mirrors
// what Akasha already publishes. Item lists are the same content broken
// out per line for scannability; the desc field keeps the original
// comma-separated sentence.
const parts = [
  {
    n: '01',
    t: 'Practice & Theory',
    desc: 'Asanas & alignment training, cleansing breathwork, heart meditation, practical philosophy, art of living, chakras.',
    items: [
      'Asanas & alignment training',
      'Cleansing breathwork',
      'Heart meditation',
      'Practical philosophy',
      'Art of living',
      'Chakras',
    ],
  },
  {
    n: '02',
    t: 'Anatomy & Posture',
    desc: 'Advanced asanas & pranayama, bandha, applied Yoga anatomy, teaching skills, adjustment training & posture study.',
    items: [
      'Advanced asanas & pranayama',
      'Bandha',
      'Applied Yoga anatomy',
      'Teaching skills',
      'Adjustment training',
      'Posture study',
    ],
  },
  {
    n: '03',
    t: 'Yoga Physiology',
    desc: 'Scripture Study: Bhagavad Gita, Yoga Sutras, purification, Yogic diet, sequencing, teaching of own 60-minute Yoga class.',
    items: [
      'Scripture Study: Bhagavad Gita',
      'Scripture Study: Yoga Sutras',
      'Purification',
      'Yogic diet',
      'Sequencing',
      'Teaching of own 60-minute Yoga class',
    ],
  },
  {
    n: '04',
    t: 'Practicum & How to Get Started',
    desc: 'History of Yoga, self practice, own teaching of a 90-minute Yoga class, marketing & networking.',
    items: [
      'History of Yoga',
      'Self practice',
      'Own teaching of a 90-minute Yoga class',
      'Marketing & networking',
    ],
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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">The Curriculum</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            Deepen your Knowledge &amp; Practice
          </h2>
          <p className="font-body text-akasha-gray-1 mt-4 leading-relaxed">
            Learn the essence of breath-based Hatha Yoga in the Vinyasa
            Krama style of Krishnamacharya. Receive access to this
            authentic classical approach in our truly systematic syllabus,
            which is based on decades of committed research, study &amp;
            practice under reputable masters.
          </p>
          <span className="gold-rule" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {parts.map((p, i) => (
            <PartCard key={i} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
