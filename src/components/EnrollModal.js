'use client';

import { useEffect } from 'react';
import EnrollForm from '@/components/EnrollForm';
import { TIERS } from '@/lib/tiers';

// Enrollment modal: hosts the shared checkout form so any "Enroll Now" button
// opens it in place instead of scrolling the page. Must be rendered inside the
// page's <TierProvider tier={selectedTier}> so <EnrollForm> reads the currently
// selected tier; the in-modal toggle lets the buyer switch plans right here.
const ORANGE = '#E5771E';

function TierToggle({ selectedTier, onSelectTier }) {
  const Btn = ({ slug, label }) => {
    const active = selectedTier === slug;
    return (
      <button
        type="button"
        onClick={() => onSelectTier?.(slug)}
        className="flex-1 rounded-full px-5 py-2 font-body text-xs uppercase tracking-[0.15em] transition-colors"
        style={
          active
            ? { backgroundColor: ORANGE, color: '#fff', fontWeight: 600 }
            : { color: '#6b6b6b', fontWeight: 500 }
        }
        aria-pressed={active}
      >
        {label}
      </button>
    );
  };
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-akasha-gray-4 p-1 bg-akasha-white">
      <Btn slug="essential" label="Essential" />
      <Btn slug="premium" label="Premium" />
    </div>
  );
}

export default function EnrollModal({ open, onClose, selectedTier, onSelectTier }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;
  const tier = TIERS[selectedTier] || TIERS.essential;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Enroll now"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl my-6 bg-akasha-white rounded-sm overflow-hidden shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 w-9 h-9 flex items-center justify-center rounded-full text-akasha-gray-1 hover:bg-akasha-gray-4/60 transition-colors text-2xl leading-none"
        >
          &times;
        </button>

        <div className="text-center pt-10 pb-6 px-8 border-b border-akasha-gray-4">
          <span className="script block mb-4" style={{ fontSize: '2rem' }}>
            {tier.pricingTagline}
          </span>
          <TierToggle selectedTier={selectedTier} onSelectTier={onSelectTier} />
        </div>

        <div className="px-6 md:px-12 py-8">
          <EnrollForm />
        </div>
      </div>
    </div>
  );
}
