'use client';

// FAQ block for the campaign flow. Questions and answers are pulled
// verbatim from src/components/FAQ.js on the course-pages branch,
// which the marketing team imported directly from the live
// akashayogaacademy.com site. No paraphrasing, no additions from
// the blueprint draft that could not be verified against live copy.
// If marketing wants to add the blueprint's extra questions
// (Essential vs Premium, payment plan, weekly time commitment,
// post-grad support, etc.), we need their verified live-site answers
// before wiring them in here.

import { useState } from 'react';

const FAQS = [
  {
    q: 'Do I need prior yoga experience?',
    a: 'No formal experience is required, but a regular personal practice will help you absorb the material more deeply. We welcome students from absolute beginners to seasoned practitioners.',
  },
  {
    q: 'Is the 200-hour certification internationally recognized?',
    a: 'Yes. Upon completion you are eligible to register as an RYT-200 with Yoga Alliance. Akasha is a Registered Yoga School (Registry ID 87485) since 2012, recognized worldwide.',
  },
  {
    q: 'How long do I have access to the materials?',
    a: 'As soon as you enroll, you get immediate access to our entire online platform for 6 months. This access window is set by Akasha, not by Yoga Alliance.',
  },
  {
    q: 'What if I can’t finish in a few months?',
    a: 'You have 6 months of access to the course, so you can move at your own pace, pause when life gets full, and come back when you’re ready.\n\nNo pressure. No race. Your path can breathe.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes, a 14-Day Money-Back Guarantee. If the program doesn’t meet your expectations, you’re entitled to an immediate, full refund within the first 14 days.',
  },
  {
    q: 'Can I do this on my phone or tablet?',
    a: 'Yes. The entire platform (video lessons, training materials, and Live Zoom Classes) works on phone, tablet, laptop, or desktop. All you need is a stable internet connection.',
  },
  {
    q: 'What technical setup do I need?',
    a: 'A modern web browser and a reliable internet connection. For Live Zoom Classes, a working camera and microphone are recommended so you can participate fully. No special equipment is required for the practice itself.',
  },
  {
    q: 'Do I keep access to the videos after I finish?',
    a: 'You get immediate access to the online platform as soon as you enroll. For details about platform access after your 6-month access window, please contact our team before enrolling.',
  },
];

export { FAQS };

export default function CampaignFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section
      className="py-14 md:py-20 bg-akasha-white"
      aria-labelledby="campaign-faq-heading"
      id="faq"
    >
      <div className="section max-w-3xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">FAQ</span>
          <h2
            id="campaign-faq-heading"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
          >
            Common Questions
          </h2>
          <span className="gold-rule" />
        </div>
        <ul className="divide-y divide-akasha-gray-4 border-y border-akasha-gray-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between text-left gap-4 py-5 md:py-6"
                >
                  <span
                    className="flex-1 font-heading text-akasha-black text-base md:text-lg leading-snug"
                    style={{ fontWeight: 400 }}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`mt-1 text-akasha-orange flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M9 3V15M3 9H15"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                    isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed pr-8 whitespace-pre-line">
                    {item.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
