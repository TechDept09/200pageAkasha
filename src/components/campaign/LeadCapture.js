'use client';

// Blueprint Brief 08, "Lead Capture Section". Catches the 95% of
// visitors who do not convert on first visit. Form is a client-side
// stub; wire to Mailchimp (embedded form or n8n webhook) once
// marketing publishes the endpoint. Tag captured leads with
// "lead-magnet-yoga-career-guide" per the blueprint. Copy verbatim
// from Wirahadi's Complete Blueprint.

import { useState } from 'react';

export default function LeadCapture() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | submitting | done | error
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setError('');
    if (!firstName.trim()) {
      setError('Please enter your first name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setState('submitting');
    // Placeholder: real integration hits Mailchimp / n8n. For now the
    // form just resolves after a beat so the UX can be reviewed end
    // to end without the backend wired.
    setTimeout(() => setState('done'), 800);
  };

  return (
    <section
      className="py-14 md:py-20 bg-akasha-gray-4/30"
      aria-labelledby="yoga-career-guide-heading"
      id="yoga-career-guide"
    >
      <div className="section max-w-3xl">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2
            id="yoga-career-guide-heading"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 300 }}
          >
            Not Ready Yet? That&rsquo;s Perfectly Okay.
          </h2>
          <span className="gold-rule" />
        </div>
        <div className="max-w-2xl mx-auto space-y-4 mb-8 font-body text-akasha-gray-1 text-base md:text-[17px] leading-relaxed text-center">
          <p>
            Choosing a yoga teacher training is a big decision, and we
            want you to feel completely confident when you make it.
            Take your time.
          </p>
          <p>
            In the meantime, we have put together a free guide to help
            you explore what a career in yoga could look like:
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-akasha-white border-2 border-akasha-orange/30 rounded-sm p-6 md:p-8">
          <p
            className="text-[10px] font-body uppercase tracking-[0.24em] text-akasha-orange mb-3"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Free Download
          </p>
          <h3
            className="font-heading text-akasha-black text-xl md:text-2xl mb-2"
            style={{ fontWeight: 400 }}
          >
            The Yoga Career Guide
          </h3>
          <p className="font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed mb-6">
            Everything you need to know about becoming a certified yoga
            teacher: career paths, earning potential, what to look for
            in a training program, and how to take the first step.
          </p>
          {state === 'done' ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-5 text-center">
              <p
                className="font-heading text-emerald-800 text-lg mb-1"
                style={{ fontWeight: 400 }}
              >
                Check your inbox
              </p>
              <p className="font-body text-emerald-700 text-sm leading-relaxed">
                We just sent The Yoga Career Guide to {email}. It should
                land in a minute or two, look for the subject line
                &ldquo;Your Yoga Career Guide is here&rdquo;.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mb-2">
                Enter your name and email to download instantly
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white"
                />
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white"
                />
              </div>
              {error ? (
                <p className="text-xs text-akasha-orange-dark font-body">{error}</p>
              ) : null}
              <button
                type="submit"
                disabled={state === 'submitting'}
                className="w-full inline-flex items-center justify-center bg-akasha-orange text-akasha-white px-6 py-3.5 rounded-full text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-akasha-orange-dark transition-colors disabled:opacity-60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {state === 'submitting' ? 'Sending…' : 'Download Free Guide'}
              </button>
              <p className="text-[11px] font-body text-akasha-gray-1 text-center leading-relaxed mt-3">
                No spam, ever. Unsubscribe anytime. We will send you the
                guide plus a few helpful emails about yoga teacher
                training.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
