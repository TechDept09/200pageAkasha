'use client';

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    { q: 'Do I need prior yoga experience?', a: 'No formal experience is required, but a regular personal practice will help you absorb the material more deeply. We welcome students from absolute beginners to seasoned practitioners.' },
    { q: 'Is the 200-hour certification internationally recognized?', a: 'Yes. Upon completion you are eligible to register as an RYT-200 with Yoga Alliance. Akasha is a Registered Yoga School (Registry ID 87485) since 2012, recognized worldwide.' },
    { q: 'How long do I have access to the materials?', a: 'As soon as you enroll, you get immediate access to our entire online platform. To complete the Yoga Alliance certification, training must be finished within 6 months of purchase.' },
    { q: 'What if I can’t finish in a few months?', a: 'Yoga Alliance certification requires you to complete the training within 6 months of purchase. The path is self-paced inside that window — the community will help you stay on track and finish on time.' },
    { q: 'Is there a money-back guarantee?', a: 'Yes — a 14-Day Money-Back Guarantee. If the program doesn’t meet your expectations, you’re entitled to an immediate, full refund within the first 14 days.' },
    { q: 'Can I do this on my phone or tablet?', a: 'Yes. The entire platform — video lessons, training materials, and Live Zoom Classes — works on phone, tablet, laptop, or desktop. All you need is a stable internet connection.' },
    { q: 'What technical setup do I need?', a: 'A modern web browser and a reliable internet connection. For Live Zoom Classes, a working camera and microphone are recommended so you can participate fully. No special equipment is required for the practice itself.' },
    { q: 'Do I keep access to the videos after I finish?', a: 'You have full access to the online platform throughout your training and the 6-month Yoga Alliance certification window. We recommend downloading study materials as you go so you can keep them for your personal reference.' },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-akasha-white">
      <div className="section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">FAQ</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            Common Questions
          </h2>
          <span className="gold-rule" />
        </div>

        <div className="max-w-3xl mx-auto border border-akasha-gray-4 rounded-sm divide-y divide-akasha-gray-4 bg-akasha-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 md:px-8 py-5 hover:bg-akasha-gray-4/20 transition-colors"
                >
                  <span
                    className="font-heading text-akasha-black text-[15px] md:text-base leading-snug"
                    style={{ fontWeight: 400 }}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`text-akasha-orange text-xl flex-none transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-8 pb-6 text-sm font-body text-akasha-gray-1 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
