'use client';

// Blueprint Brief 08, "Lead Capture Section". Catches the 95% of
// visitors who do not convert on first visit. Wired to
// /api/brochure-request which fans out to Discord + Streak
// server-side, then returns the download URL so the client can
// trigger the file download immediately. Same PDF as the product-
// page BrochureDownload for now; swap the file if a dedicated
// "Yoga Career Guide" PDF ships later.

import { useState } from 'react';

const GUIDE_FILENAME = 'Akasha-Yoga-Career-Guide.pdf';

// Stricter than the usual "anything@anything" catch-all. Requires a
// realistic local part, a domain with at least one dot, and a 2+ char
// TLD, so things like `a@b`, `x@y.z`, or trailing spaces get rejected
// before we bother the server. Server-side /api/brochure-request runs
// the same shape as a defense-in-depth check.
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

function readUtm() {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const utm = {};
  for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const v = params.get(k);
    if (v) utm[k] = v;
  }
  return Object.keys(utm).length ? utm : null;
}

function triggerDownload(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function LeadCapture() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | submitting | done | error
  const [error, setError] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!firstName.trim()) {
      setError('Please enter your first name.');
      return;
    }
    if (!lastName.trim()) {
      setError('Please enter your last name.');
      return;
    }
    if (!email.trim() || !EMAIL_REGEX.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setState('submitting');
    try {
      const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
      const res = await fetch('/api/brochure-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: email.trim(),
          source: 'lead-magnet-yoga-career-guide',
          utm: readUtm(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.downloadUrl) {
        throw new Error(data.error || 'Something went wrong');
      }
      triggerDownload(data.downloadUrl, GUIDE_FILENAME);
      setDownloadUrl(data.downloadUrl);
      setState('done');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setState('idle');
    }
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
                Your download has started
              </p>
              <p className="font-body text-emerald-700 text-sm leading-relaxed">
                Thank you{firstName ? `, ${firstName}` : ''}! Didn&rsquo;t
                get it?{' '}
                <a
                  href={downloadUrl}
                  download={GUIDE_FILENAME}
                  className="underline text-emerald-900 font-medium"
                >
                  Click here to download again
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3" noValidate>
              <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mb-2">
                Enter your name and email to download instantly
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name *"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={state === 'submitting'}
                  className="w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white"
                />
                <input
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last name *"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={state === 'submitting'}
                  className="w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white"
                />
              </div>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Email address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={state === 'submitting'}
                className="w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white"
              />
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
