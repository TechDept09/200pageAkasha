'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import HubNav from '@/components/hub/HubNav';
import TrustStrip from '@/components/TrustStrip';
import Footer from '@/components/Footer';
import { courses } from '@/lib/courses';

// Essential and 80hr Yin sit inside the Summer Self-Care bundle offer,
// so they are not shown again in the recommendation list at the bottom.
const CAMPAIGN_DISCOUNT_KEEP = new Set(['200h-essential', '80h-yin']);

// All 12 'Featured in:' logos lifted verbatim from the
// akashayogaacademy.com homepage (including Music Of Wisdom and the
// YouTube channel mark). Akasha ships them all white-on-transparent
// and does not name the individual outlets, so the marks below are
// unlabelled in aria-text too. Order matches the homepage flow.
const FEATURED_LOGOS = [
  'https://static.wixstatic.com/media/cd7168_9448b8294b484bd5a83a58718a812af2~mv2.png/v1/crop/x_0,y_35,w_825,h_289/fill/w_324,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-1.png',
  'https://static.wixstatic.com/media/cd7168_258e64fb744d4f68936b4804ab32e905~mv2.png/v1/crop/x_401,y_389,w_279,h_302/fill/w_212,h_232,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-2.png',
  'https://static.wixstatic.com/media/cd7168_132cc4ccf1534e66b6e3c538e4cd3e9d~mv2.png/v1/crop/x_0,y_12,w_972,h_227/fill/w_488,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-3.png',
  'https://static.wixstatic.com/media/cd7168_55ec72a6c7004ff684a6d4531fd56639~mv2.png/v1/fill/w_336,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-4.png',
  'https://static.wixstatic.com/media/cd7168_80ec49ce8ae24442ba75c38abc2e79db~mv2.png/v1/fill/w_248,h_160,al_c,lg_1,q_85,enc_avif,quality_auto/featured-5.png',
  'https://static.wixstatic.com/media/cd7168_dd6899c84b144cd8afdc4cc99789c5a4~mv2.png/v1/crop/x_131,y_445,w_810,h_196/fill/w_612,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-6.png',
  'https://static.wixstatic.com/media/cd7168_70e29283a8894528a9856c4ee0ac71cf~mv2.png/v1/crop/x_0,y_12,w_907,h_171/fill/w_604,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-7.png',
  'https://static.wixstatic.com/media/cd7168_c889be6400e84084ba44abff25c91ea1~mv2.png/v1/crop/x_24,y_0,w_760,h_332/fill/w_306,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-8.png',
  'https://static.wixstatic.com/media/cd7168_f035bfb483374f0b9fb19f4b26753849~mv2.png/v1/crop/x_180,y_427,w_742,h_229/fill/w_550,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-9.png',
  'https://static.wixstatic.com/media/cd7168_80b69beb7bd54641b24cfc8433ef5a40~mv2.png/v1/crop/x_120,y_0,w_840,h_187/fill/w_602,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-10.png',
  'https://static.wixstatic.com/media/cd7168_2e1c48f28d4f48a59bbf67bbbf1706d7~mv2.png/v1/crop/x_0,y_17,w_1079,h_298/fill/w_688,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-11.png',
  'https://static.wixstatic.com/media/cd7168_79417c88a75f4208b408888923d4b611~mv2.png/v1/fill/w_672,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/featured-12.png',
];

// Prices shown next to each recommendation card. Mirrors what Akasha
// displays year-round on the live catalog (33% markdown baked in for
// 300H and the 80hr trio; Premium and Kundalini shown at the regular
// tag; Feminine at its regular US$229 rate).
const RECOMMENDATION_PRICE = {
  '200h-premium': 1490,
  '300h-ytt': 1190,
  '80h-hatha-pranayama': 239,
  '80h-meditation': 239,
  'feminine-wisdom': 229,
  'kundalini-india': 2999,
};
import { startWixCheckout } from '@/lib/checkout';
import { useUtmParams, formatUtmNote } from '@/hooks/useUtmParams';
import { trackLead, trackInitiateCheckout, newEventId } from '@/lib/pixel';
import { getMetaCookies } from '@/lib/fbCookies';
import {
  JULY_ACCESS_KEY,
  getActiveJulyPhase,
  JULY_PHASES,
  JULY_PRODUCTS,
  JULY_BG_VIDEO,
  JULY_INTRO_VIDEOS,
  JULY_TESTIMONIALS,
} from '@/lib/julyCampaign';

const STORAGE_KEY = 'akasha_july_2026_access';

export default function JulyCampaign() {
  const [authorized, setAuthorized] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [phase, setPhase] = useState(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === 'true') {
      setAuthorized(true);
    }
    setPhase(getActiveJulyPhase() || JULY_PHASES.phase1);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setError('');
    if (code.trim().toUpperCase() === JULY_ACCESS_KEY.toUpperCase()) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setAuthorized(true);
    } else {
      setError('Invalid access code. Contact marketing for the current key.');
    }
  };

  if (!mounted) return null;

  if (!authorized) {
    return (
      <>
        <Head>
          <title>Confidential, Akasha Yoga Academy</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <HubNav />
        <main className="min-h-[80vh] flex items-center justify-center bg-akasha-white pt-28 md:pt-36 pb-16">
          <div className="section max-w-md text-center">
            <span className="eyebrow text-akasha-orange">Confidential Preview</span>
            <h1
              className="mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 300 }}
            >
              July Campaign Preview
            </h1>
            <p className="font-body text-akasha-gray-1 mb-8 leading-relaxed">
              This page is part of an upcoming marketing campaign and is not
              yet public. Enter the access code to view.
            </p>
            <form onSubmit={submit} className="space-y-4">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Access code"
                autoComplete="off"
                spellCheck="false"
                className="w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white text-center tracking-[0.18em] uppercase"
              />
              {error ? (
                <p className="text-xs text-akasha-orange-dark font-body">{error}</p>
              ) : null}
              <button type="submit" className="btn-primary w-full">
                Unlock Preview
              </button>
            </form>
            <p className="text-[10px] font-body uppercase tracking-[0.25em] text-akasha-gray-2 mt-8">
              Akasha Internal · Do Not Share
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return <CampaignContent phase={phase} />;
}

function CampaignContent({ phase }) {
  const bundle = phase.bundle;
  const standalone = phase.standalone;
  const isBackup = phase.key === 'backup';
  // Bundle drives whether the two-card layout + comparison block show.
  // Without a bundle (phase2 simplified to Essential-only, backup mode)
  // the page collapses to a single centred Standalone card.
  const hasBundle = !!bundle;
  // showWellnessNote is now legacy, kept only because BundleCard reads
  // it; with phase2 dropping the bundle, this never evaluates true.
  const showWellnessNote = phase.key === 'phase2' && hasBundle;

  return (
    <>
      <Head>
        <title>{phase.headline}, Akasha Yoga Academy</title>
        <meta name="description" content={phase.intro} />
        {/* Stays gated while it's a confidential preview. Drop the
            noindex when marketing decides to take this page public. */}
        <meta name="robots" content="noindex, nofollow" />
        {/* Course schema so AI agents and search engines can describe
            the offer with structured data even before the page is public. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Course',
              name: '200-Hour Essential Yoga Teacher Training',
              description: phase.intro,
              provider: {
                '@type': 'Organization',
                name: 'Akasha Yoga Academy',
                url: 'https://www.akashayogaacademy.com',
              },
              hasCourseInstance: {
                '@type': 'CourseInstance',
                courseMode: 'Online',
                inLanguage: 'en',
              },
              offers: {
                '@type': 'Offer',
                price: phase.standalone?.voucherPrice || phase.standalone?.essential,
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
            }),
          }}
        />
      </Head>

      <HubNav />

      {/* pb gives the sticky CTA room to sit above the footer without
          overlapping the last paragraph. */}
      <main className="bg-akasha-white pb-24 md:pb-20">
        {/* Hero with a Wix-hosted MP4 looping in the background. HTML5
            video gives us no third-party branding (vs YouTube iframe)
            and lets us truly mute + autoplay + loop with a one-liner.
            object-cover keeps it cropped to the section regardless of
            viewport ratio. pointer-events:none means taps still hit the
            CTA overlay above. */}
        <section className="relative overflow-hidden bg-akasha-black min-h-[88vh] flex items-center">
          {JULY_BG_VIDEO ? (
            <video
              src={JULY_BG_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          ) : null}

          {/* Two-layer overlay for legibility no matter what frame of
              the video is showing. First a flat darken so text always
              has a base contrast floor, then a radial vignette that
              concentrates extra darkness behind the headline. */}
          <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.2) 100%)',
            }}
          />

          <div className="relative z-10 section text-center max-w-3xl text-akasha-white py-20 md:py-28">
            <span
              className="july-hero-anim inline-block uppercase mb-5"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#F5B872',
                animationDelay: '0.15s',
                fontSize: 'clamp(0.95rem, 1.7vw, 1.2rem)',
                letterSpacing: '0.32em',
                fontWeight: 600,
              }}
            >
              {phase.dateRange}
            </span>
            <h1
              className="july-hero-anim mb-4"
              style={{
                fontSize: 'clamp(2.6rem, 6.4vw, 4.6rem)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: '#FFFFFF',
                animationDelay: '0.3s',
                textShadow: '0 2px 18px rgba(0,0,0,0.55)',
              }}
            >
              {phase.headline}
            </h1>
            {phase.scriptTagline ? (
              <p
                className="july-hero-anim script mb-6"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  color: '#F5B872',
                  animationDelay: '0.55s',
                  textShadow: '0 2px 14px rgba(0,0,0,0.5)',
                }}
              >
                {phase.scriptTagline}
              </p>
            ) : null}
            <p
              className="july-hero-anim font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8"
              style={{
                color: 'rgba(255,255,255,0.95)',
                animationDelay: '0.75s',
                textShadow: '0 1px 10px rgba(0,0,0,0.55)',
              }}
            >
              {phase.intro}
            </p>
            <a
              href="#enroll"
              className="july-hero-anim inline-flex items-center justify-center bg-akasha-orange text-akasha-white px-10 py-4 rounded-full text-[13px] font-semibold uppercase tracking-[0.2em] hover:bg-akasha-orange-dark transition-colors shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.95s' }}
            >
              {phase.bundle ? 'See Your Bundle' : phase.key === 'backup' ? 'Claim the Offer' : 'See the Offer'}
            </a>
          </div>

          <style jsx>{`
            .july-hero-anim {
              opacity: 0;
              animation: julyFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }
            @keyframes julyFadeUp {
              0% {
                opacity: 0;
                transform: translate3d(0, 28px, 0);
                filter: blur(4px);
              }
              60% {
                filter: blur(0);
              }
              100% {
                opacity: 1;
                transform: translate3d(0, 0, 0);
                filter: blur(0);
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .july-hero-anim {
                opacity: 1;
                animation: none;
                transform: none;
                filter: none;
              }
            }
          `}</style>
        </section>

        {/* Why this training: Akasha's own 'Why Choose Our Yoga Academy'
            block, verbatim from the live 200hr page. */}
        <WhyChooseAkasha />

        {/* Testimonials, social proof before the checkout. */}
        <TestimonialCarousel />

        {/* Featured in: press/media logos lifted from the Akasha
            homepage. Sits right after the testimonials so the trust
            cluster reads real graduates -> real media coverage before
            the checkout ask. */}
        <FeaturedIn />

        {/* Soft nudge so a buyer convinced by the social proof has a clear
            way down without scrolling past the trust strip first. */}
        <SoftEnrollNudge label="Their journey could be yours" />

        {/* Certified badges so the credibility signal sits next to the offer. */}
        <TrustStrip />

        {/* Checkout block: two cards normally, one centred card in backup mode */}
        <section className="py-14 md:py-20 bg-akasha-gray-4/30 scroll-mt-24" id="enroll">
          <div className="section">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow">
                {isBackup ? 'A final invitation' : 'Begin your journey'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', fontWeight: 300 }}>
                {hasBundle
                  ? 'Two ways to step in this summer'
                  : 'Step into the 200hr Essential'}
              </h2>
              <span className="gold-rule" />
              <p className="font-body text-akasha-gray-1 mt-6 text-base md:text-lg leading-relaxed">
                {isBackup
                  ? 'This is a final, quiet offer for the 200hr Essential. The voucher below brings the price to US$249 at checkout, no manual code entry required.'
                  : hasBundle
                    ? 'This summer, self-care can become your new path. Begin with the 200hr Essential, or open the journey deeper with the 80hr Yin. Choose the path that calls.'
                    : 'A focused way in. The 200hr Essential Yoga Teacher Training at our summer rate, with the voucher applied automatically at checkout.'}
              </p>
            </div>

            {hasBundle ? (
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
                <BundleCard phase={phase} showWellnessNote={showWellnessNote} />
                <StandaloneCard phase={phase} />
              </div>
            ) : (
              <div className="max-w-xl mx-auto">
                <StandaloneCard phase={phase} />
              </div>
            )}
          </div>
        </section>

        {/* Side-by-side comparison only when a bundle exists. */}
        {hasBundle ? (
        <section className="py-14 md:py-20 bg-akasha-white">
          <div className="section max-w-5xl">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="eyebrow">Look closer</span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
                When two journeys cost less than one
              </h2>
              <span className="gold-rule" />
              <p className="font-body text-akasha-gray-1 mt-5 text-base md:text-lg leading-relaxed">
                Step into the 200hr Essential and 80hr Yin together this
                summer. The numbers below show how the bundle holds both
                certifications, gently, with breathing room to spare.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-akasha-gray-4/40 border border-akasha-gray-4 rounded-sm p-6 md:p-7 flex flex-col">
                <p className="text-[11px] font-body uppercase tracking-[0.22em] text-akasha-gray-1 mb-4">
                  Buying separately
                </p>
                <ul className="space-y-2 font-body text-akasha-gray-1 text-[15px] leading-relaxed flex-1">
                  <li className="flex justify-between">
                    <span>200hr Essential</span>
                    <span className="text-akasha-black line-through">US$1,190</span>
                  </li>
                  <li className="flex justify-between">
                    <span>80hr Yin Training</span>
                    <span className="text-akasha-black line-through">US$600</span>
                  </li>
                </ul>
                <p className="mt-5 pt-4 border-t border-akasha-gray-4 font-body text-akasha-black flex justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-akasha-gray-1 self-end">
                    You would pay
                  </span>
                  <span className="font-heading text-akasha-black text-2xl" style={{ fontWeight: 400 }}>
                    US$1,790
                  </span>
                </p>
              </div>

              <div className="bg-akasha-orange/5 border-2 border-akasha-orange rounded-sm p-6 md:p-7 flex flex-col relative shadow-md">
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center bg-akasha-orange text-akasha-white px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.22em] whitespace-nowrap"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Your bundle
                </span>
                <p className="text-[11px] font-body uppercase tracking-[0.22em] text-akasha-orange mb-4 mt-1">
                  Summer Self-Care bundle
                </p>
                <ul className="space-y-2 font-body text-akasha-gray-1 text-[15px] leading-relaxed flex-1">
                  <li className="flex justify-between">
                    <span>200hr Essential</span>
                    <span className="text-akasha-black">US${bundle.essential}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>80hr Yin Training</span>
                    <span className="text-akasha-black">US${bundle.yin}</span>
                  </li>
                </ul>
                <p className="mt-5 pt-4 border-t border-akasha-orange/30 font-body flex justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-akasha-orange self-end">
                    You pay
                  </span>
                  <span className="font-heading text-akasha-orange text-3xl" style={{ fontWeight: 400 }}>
                    US${bundle.total}
                  </span>
                </p>
                {showWellnessNote ? (
                  <p className="text-[11px] font-body text-akasha-orange/90 mt-3 leading-snug">
                    Apply {phase.couponCode} at checkout and the bundle drops
                    to US${bundle.popUpTotal}.
                  </p>
                ) : null}
              </div>

              <div className="bg-akasha-black text-akasha-white rounded-sm p-6 md:p-7 flex flex-col justify-center text-center">
                <p className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gold mb-3">
                  You keep
                </p>
                <p
                  className="font-heading text-akasha-white text-4xl md:text-5xl mb-2"
                  style={{ fontWeight: 400 }}
                >
                  US${bundle.savings}
                </p>
                <p className="font-body text-akasha-gray-4 text-sm leading-relaxed">
                  {Math.round((bundle.savings / 1790) * 100)}% less than buying
                  the two trainings separately, both certifications still
                  yours.
                </p>
                <p className="text-[10px] font-body uppercase tracking-[0.25em] text-akasha-gold/80 mt-4">
                  Offer ends {phase.key === 'phase1' ? 'July 15' : 'July 31'}
                </p>
              </div>
            </div>
          </div>
        </section>
        ) : null}

        {/* Second soft nudge after the comparison so the math leads
            directly to the offer. Only shown when the comparison block
            was also rendered (bundle phases). */}
        {hasBundle ? (
          <SoftEnrollNudge label="The numbers led you here" />
        ) : null}

        {/* Meet Akasha videos sit after the math instead of between the
            hero and the ask. By this point, the on-the-fence buyer wants
            to see who they'd be learning from before scrolling further. */}
        <IntroVideos />

        {/* Sidebar-style recommendation list. Every other Akasha course
            except Essential and the Yin add-on already in the bundle,
            rendered as a quiet compact grid so it reads as 'other things
            you might like later', not a second catalog. */}
        <RecommendationList />


        {/* Tracking hook placeholder. When Wira sends the post-pay tracking
            snippet, drop it inside this div so it only ever runs on the
            campaign page, never on live course pages. */}
        <div data-akasha-tracking="post-pay-placeholder" />
      </main>

      <Footer />

      {/* Sticky urgency bar appears once the buyer scrolls past the hero,
          carries the price + live countdown, and links straight back to
          the checkout block. Dismissable so it never blocks reading. */}
      <CampaignStickyCTA phase={phase} />
    </>
  );
}

function BundleCard({ phase, showWellnessNote }) {
  const bundle = phase.bundle;
  const utm = useUtmParams();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const bundleReady = Boolean(JULY_PRODUCTS.essential && JULY_PRODUCTS.yinAddOn);

  useEffect(() => {
    const onShow = (e) => {
      if (e.persisted) {
        setLoading(false);
        setError(null);
      }
    };
    window.addEventListener('pageshow', onShow);
    return () => window.removeEventListener('pageshow', onShow);
  }, []);

  async function handleBuy(e) {
    e.preventDefault();
    setError(null);
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!form.firstName.trim()) {
      setError('Please enter your first name.');
      return;
    }

    setLoading(true);
    const courseLabel = `July ${phase.label} Bundle`;
    const contentId = `july-${phase.key}|bundle`;
    trackLead(courseLabel, bundle.total);
    try {
      trackInitiateCheckout(courseLabel, bundle.total, contentId);
      const { fbc, fbp } = getMetaCookies();
      const eventId = newEventId();
      try {
        localStorage.setItem('pendingPurchase_courseName', courseLabel);
        localStorage.setItem('pendingPurchase_courseId', contentId);
        localStorage.setItem('pendingPurchase_price', String(bundle.total));
        localStorage.setItem('pendingPurchase_eventId', eventId);
        localStorage.setItem('pendingPurchase_timestamp', Date.now().toString());
      } catch (_) {}

      const url = await startWixCheckout({
        utm,
        utmNote: formatUtmNote(utm),
        productId: JULY_PRODUCTS.essential,
        extraLineItems: [{ productId: JULY_PRODUCTS.yinAddOn, quantity: 1 }],
        couponCode: phase.couponCode,
        meta: { fbc, fbp, courseSlug: 'july-bundle', planSlug: phase.key, eventId },
        buyer: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
        },
      });

      const finalUrl = new URL(url);
      if (fbc) finalUrl.searchParams.set('fbc', fbc);
      if (fbp) finalUrl.searchParams.set('fbp', fbp);
      window.location.href = finalUrl.toString();
    } catch (err) {
      console.error('[JulyBundle] checkout failed:', err);
      setError(err?.message || 'Could not start checkout. Please try again.');
      setLoading(false);
    }
  }

  const inputCls =
    'w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white';

  return (
    <div className="bg-akasha-white border-2 border-akasha-orange rounded-sm p-7 md:p-8 flex flex-col">
      <p
        className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-orange mb-2"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Recommended Bundle
      </p>
      <h3
        className="font-heading text-akasha-black text-xl md:text-2xl mb-3"
        style={{ fontWeight: 400 }}
      >
        200hr Essential + 80hr Yin
      </h3>
      <p className="font-body text-akasha-gray-1 text-sm leading-relaxed mb-5">
        Begin your certification and deepen your practice with the Yin Yoga
        add-on. Stack both for the full Summer Self-Care path.
      </p>

      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-akasha-gray-2 line-through font-body text-base">
          US$1,790
        </span>
        <span
          className="font-heading text-akasha-orange text-3xl md:text-4xl"
          style={{ fontWeight: 400 }}
        >
          US${bundle.total}
        </span>
      </div>
      <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-orange mb-5">
        Save US${bundle.savings}
      </p>

      <ul className="space-y-2 text-sm font-body text-akasha-gray-1 mb-6">
        <li className="flex justify-between">
          <span>200hr Essential Training</span>
          <span className="text-akasha-black">US${bundle.essential}</span>
        </li>
        <li className="flex justify-between">
          <span>80hr Yin Yoga Add-On</span>
          <span className="text-akasha-black">US${bundle.yin}</span>
        </li>
      </ul>

      <div className="border border-akasha-orange/30 bg-akasha-orange/5 rounded-sm p-3 mb-5">
        <p
          className="text-[10px] font-body uppercase tracking-[0.2em] text-akasha-orange mb-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Auto-applied at checkout
        </p>
        <p className="font-heading text-akasha-black text-lg mb-1" style={{ fontWeight: 400 }}>
          {phase.couponCode}
        </p>
        <p className="text-[11px] font-body text-akasha-gray-1 leading-snug">
          {showWellnessNote
            ? `Brings the Essential portion down to US$249 at checkout, bundle total US$${bundle.popUpTotal}.`
            : 'Pre-applied automatically, no manual code entry required.'}
        </p>
      </div>

      {bundleReady ? (
        <form onSubmit={handleBuy} className="mt-auto" noValidate>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              autoComplete="given-name"
              placeholder="First name *"
              value={form.firstName}
              onChange={set('firstName')}
              className={inputCls}
            />
            <input
              type="text"
              autoComplete="family-name"
              placeholder="Last name"
              value={form.lastName}
              onChange={set('lastName')}
              className={inputCls}
            />
          </div>
          <input
            type="email"
            autoComplete="email"
            placeholder="Email address *"
            value={form.email}
            onChange={set('email')}
            className={`${inputCls} mb-4`}
          />
          <button
            type="submit"
            disabled={loading}
            className={`btn-action w-full ${loading ? 'opacity-70 cursor-wait' : ''}`}
          >
            {loading ? 'Preparing your checkout…' : `Enroll in Bundle, US$${bundle.total}`}
          </button>
          {error && (
            <p className="text-xs text-akasha-orange-dark mt-3 font-body text-center">
              {error}
            </p>
          )}
        </form>
      ) : (
        <div className="mt-auto bg-akasha-gray-4/40 border border-dashed border-akasha-gray-3 rounded-sm p-4">
          <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mb-1">
            Bundle checkout pending
          </p>
          <p className="text-xs font-body text-akasha-gray-1 leading-relaxed">
            Waiting on the US$199 Yin Add-on product ID from Wix. Set
            NEXT_PUBLIC_WIX_PRODUCT_ID_YIN_ADDON in Vercel to unlock.
          </p>
        </div>
      )}
    </div>
  );
}

function useCountdownTo(endIso) {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (!endIso || now === null) return null;
  const end = new Date(endIso).getTime();
  const diff = Math.max(0, end - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  return { days, hours, minutes, expired: diff === 0 };
}

function CampaignStickyCTA({ phase }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const isBackup = phase.key === 'backup';
  const countdown = useCountdownTo(isBackup ? null : phase.end);

  useEffect(() => {
    const onScroll = () => {
      // Reveal once the buyer has scrolled past roughly the hero height.
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (dismissed) return null;

  const price = isBackup
    ? `US$${phase.standalone.voucherPrice || phase.standalone.essential}`
    : phase.bundle
      ? `Bundle US$${phase.bundle.total}`
      : `US$${phase.standalone.essential}`;

  const ctaLabel = isBackup ? 'Claim Voucher' : phase.bundle ? 'Enroll in Bundle' : 'Enroll Now';

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-500 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-akasha-black text-akasha-white border-t border-akasha-gold/30 shadow-2xl">
        <div className="section max-w-6xl flex items-center gap-3 md:gap-5 py-3 md:py-4">
          <div className="flex-1 min-w-0">
            <p
              className="text-[10px] md:text-[11px] font-body uppercase tracking-[0.22em] text-akasha-gold leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {price}
              {countdown && !countdown.expired ? (
                <span className="hidden sm:inline text-akasha-white/70 normal-case tracking-normal ml-2">
                  · ends in {countdown.days}d {countdown.hours}h {countdown.minutes}m
                </span>
              ) : null}
            </p>
            <p
              className="hidden sm:block text-xs md:text-sm font-heading text-akasha-white leading-snug truncate"
              style={{ fontWeight: 300 }}
            >
              {phase.headline}
            </p>
            {countdown && !countdown.expired ? (
              <p className="sm:hidden text-[10px] font-body text-akasha-white/70 leading-tight mt-0.5">
                ends in {countdown.days}d {countdown.hours}h
              </p>
            ) : null}
          </div>
          <a
            href="#enroll"
            className="inline-flex items-center bg-akasha-orange text-akasha-white px-5 md:px-7 py-2.5 md:py-3 rounded-full text-[10.5px] md:text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-akasha-orange-dark transition-colors whitespace-nowrap"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {ctaLabel}
          </a>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="text-akasha-white/60 hover:text-akasha-white transition-colors w-7 h-7 flex items-center justify-center rounded-full hover:bg-akasha-white/10"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function SoftEnrollNudge({ label = 'Ready when you are' }) {
  return (
    <div className="text-center py-10 md:py-12 bg-akasha-white">
      <p className="text-[11px] font-body uppercase tracking-[0.28em] text-akasha-gray-1 mb-3">
        {label}
      </p>
      <a
        href="#enroll"
        className="inline-flex items-center text-akasha-orange hover:text-akasha-orange-dark transition-colors font-heading text-lg md:text-xl gap-2"
        style={{ fontWeight: 400 }}
      >
        Step into the offer
        <span aria-hidden="true" className="text-base">↓</span>
      </a>
    </div>
  );
}

// Verbatim from akashayogaacademy.com/200hr-yoga-teacher-training-online
// "WHY CHOOSE OUR YOGA ACADEMY" block, minus the Personalized Guidance
// card because that benefit is Premium-only and this campaign sells
// Essential. Titles and body paragraphs are not reworded.
const WHY_CHOOSE = [
  {
    title: 'Ready to Teach Yoga',
    body:
      "Our training program is not only about learning yoga; it's also about preparing you for a successful teaching career. We cover every aspect of yoga, from basic to advanced techniques, to give you a deep understanding and strong practical skills. Many of our students have gone on to build successful businesses after graduation. When you complete our course, you'll have the knowledge, confidence, and foundation to start teaching yoga professionally and even establish your own yoga business.",
  },
  {
    title: 'Highly Rated and Experienced Experts',
    body:
      'With a 4.93-star rating and over 200 reviews, Akasha Yoga Academy stands out as a top-tier yoga school. Our program, established in 2011, is backed by 12 years of educational excellence. We bring a deep-rooted history and expertise in yoga education, offering a curriculum that is both comprehensive and deeply transformative. This high ranking is a testament to our commitment to providing exceptional yoga training.',
  },
  {
    title: 'Join a Supportive Global Yoga Community',
    body:
      "At Akasha Yoga Academy, you'll be part of a worldwide family of yoga practitioners, learning from diverse experiences and cultures. Our program includes interactive online training with direct communication with teachers and peers. You'll get real-time guidance and participate in daily live sessions, addressing all your questions. This supportive environment not only helps you learn yoga but also connects you with friends globally. It prepares you with the skills and confidence to teach yoga anywhere in the world.",
  },
];

function FeaturedIn() {
  return (
    <section
      className="py-12 md:py-16 bg-akasha-black"
      aria-labelledby="july-featured-in-heading"
    >
      <div className="section max-w-5xl">
        <p
          id="july-featured-in-heading"
          className="text-center text-[12px] md:text-[13px] font-body uppercase tracking-[0.32em] text-akasha-gold mb-8 md:mb-10"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
        >
          As Featured In
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 md:gap-y-8">
          {FEATURED_LOGOS.map((src) => (
            <li key={src} className="flex items-center">
              <img
                src={src}
                alt="Media outlet Akasha Yoga Academy has been featured in"
                loading="lazy"
                decoding="async"
                className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                style={{ maxHeight: '56px' }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RecommendationList() {
  // Every course except the two the campaign already sells (Essential
  // and 80hr Yin, both live in the bundle offer above). No promo badges,
  // no big product cards, just a quiet inline list so the campaign
  // stays the star of the page.
  const items = courses
    .filter((c) => !CAMPAIGN_DISCOUNT_KEEP.has(c.slug))
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      price: RECOMMENDATION_PRICE[c.slug] ?? c.regularPrice,
      currency: c.currency || 'USD',
      href: c.href,
      isInternal: c.isInternal,
      image: c.image,
    }));

  if (!items.length) return null;

  return (
    <section
      className="py-14 md:py-16 bg-akasha-gray-4/30"
      aria-labelledby="july-recommendation-heading"
    >
      <div className="section max-w-5xl">
        <header className="text-center max-w-xl mx-auto mb-8 md:mb-10">
          <span className="eyebrow">Also from Akasha</span>
          <h2
            id="july-recommendation-heading"
            className="font-heading text-akasha-black"
            style={{
              fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)',
              fontWeight: 400,
            }}
          >
            Other paths, whenever you are ready
          </h2>
        </header>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {items.map((it) => {
            const external = !it.isInternal;
            return (
              <li key={it.slug}>
                <a
                  href={it.href}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex items-center gap-3 md:gap-4 bg-akasha-white border border-akasha-gray-4 rounded-sm px-4 py-3 md:px-5 md:py-4 hover:border-akasha-gold hover:shadow-sm transition-all"
                >
                  <span className="flex-none w-14 h-14 md:w-16 md:h-16 overflow-hidden rounded-sm bg-akasha-gray-4">
                    {it.image ? (
                      <img
                        src={it.image}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : null}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span
                      className="block font-heading text-akasha-black text-[13px] md:text-[14px] leading-snug truncate"
                      style={{ fontWeight: 400 }}
                    >
                      {it.title}
                    </span>
                    {it.price ? (
                      <span
                        className="block font-body text-akasha-orange text-[12px] md:text-[13px] mt-0.5"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        {it.currency === 'USD' ? 'US$' : it.currency}
                        {it.price.toLocaleString('en-US')}
                      </span>
                    ) : null}
                  </span>
                  <span
                    className="flex-none text-akasha-gray-2 group-hover:text-akasha-orange transition-colors text-sm"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function WhyChooseAkasha() {
  const [openCard, setOpenCard] = useState(null);

  // Lock body scroll while the modal is open + close on ESC.
  useEffect(() => {
    if (!openCard) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenCard(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [openCard]);

  return (
    <>
      <section
        className="py-16 md:py-24 bg-akasha-white"
        aria-labelledby="july-why-choose-heading"
      >
        <div className="section max-w-5xl">
          <header className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <span className="eyebrow">Why this training</span>
            <h2
              id="july-why-choose-heading"
              style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}
            >
              Why Choose Our Yoga Academy
            </h2>
            <span className="gold-rule" />
          </header>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {WHY_CHOOSE.map((c) => (
              <article
                key={c.title}
                className="bg-akasha-gray-4/30 border border-akasha-gray-4 rounded-sm p-7 md:p-8 flex flex-col"
              >
                <h3
                  className="font-heading text-akasha-black text-lg md:text-xl mb-3 leading-snug"
                  style={{ fontWeight: 400 }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-body text-akasha-gray-1 text-sm md:text-[15px] leading-relaxed mb-4 flex-1"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {c.body}
                </p>
                <button
                  type="button"
                  onClick={() => setOpenCard(c)}
                  className="self-start mt-auto text-[11px] font-body uppercase tracking-[0.25em] text-akasha-orange hover:text-akasha-orange-dark transition-colors inline-flex items-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  aria-haspopup="dialog"
                  aria-label={`Read more about ${c.title}`}
                >
                  Read more
                  <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {openCard ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="why-choose-modal-title"
          onClick={() => setOpenCard(null)}
        >
          <div
            className="bg-akasha-white rounded-sm shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7 md:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenCard(null)}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-akasha-gray-2 hover:text-akasha-black hover:bg-akasha-gray-4 transition-colors text-2xl leading-none"
            >
              <span aria-hidden="true">×</span>
            </button>
            <span
              className="block text-[11px] font-body uppercase tracking-[0.3em] text-akasha-orange mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Why this training
            </span>
            <h3
              id="why-choose-modal-title"
              className="font-heading text-akasha-black text-2xl md:text-3xl mb-5 leading-snug pr-8"
              style={{ fontWeight: 400 }}
            >
              {openCard.title}
            </h3>
            <span className="gold-rule mb-5" />
            <p className="font-body text-akasha-gray-1 text-base leading-relaxed whitespace-pre-line">
              {openCard.body}
            </p>
          </div>
        </div>
      ) : null}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}


function IntroVideos() {
  if (!JULY_INTRO_VIDEOS?.length) return null;
  return (
    <section
      className="py-16 md:py-24 bg-akasha-white"
      aria-labelledby="july-intro-videos-heading"
    >
      <div className="section max-w-5xl">
        <header className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="eyebrow">Meet Akasha</span>
          <h2
            id="july-intro-videos-heading"
            style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}
          >
            A quiet look inside
          </h2>
          <span className="gold-rule" />
          <p className="font-body text-akasha-gray-1 mt-5 text-base md:text-lg leading-relaxed">
            Hear from the founders and step into the space where this
            training lives before deciding anything.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {JULY_INTRO_VIDEOS.map((v) => (
            <figure key={v.id} className="flex flex-col">
              <div className="aspect-video bg-akasha-gray-4 rounded-sm overflow-hidden shadow-sm">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
                  title={v.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                  style={{ border: 0 }}
                />
              </div>
              <figcaption className="mt-4 text-center">
                <p
                  className="font-heading text-akasha-black text-base md:text-lg"
                  style={{ fontWeight: 400 }}
                >
                  {v.title}
                </p>
                {v.caption ? (
                  <p className="font-body text-akasha-gray-1 text-sm mt-1 leading-relaxed">
                    {v.caption}
                  </p>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const interval = setInterval(() => {
      setCurrentIdx((i) => (i + 1) % JULY_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIdx, paused]);

  return (
    <section
      className="py-16 md:py-24 bg-akasha-gray-4/30"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="section">
        <header className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="eyebrow">From the Akasha Family</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', fontWeight: 300 }}>
            Real stories from real graduates
          </h2>
          <span className="gold-rule" />
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="grid">
            {JULY_TESTIMONIALS.map((t, i) => (
              <article
                key={t.name}
                aria-hidden={i !== currentIdx}
                style={{
                  gridArea: '1 / 1',
                  opacity: i === currentIdx ? 1 : 0,
                  transition: 'opacity 1s ease',
                  pointerEvents: i === currentIdx ? 'auto' : 'none',
                }}
                className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-8 md:p-12 shadow-sm"
              >
                <div className="grid md:grid-cols-[260px,1fr] gap-8 md:gap-12 items-center">
                  <div className="aspect-square overflow-hidden rounded-sm bg-akasha-gray-4 mx-auto md:mx-0 max-w-[260px] w-full shadow-sm">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <span className="text-akasha-gold text-sm tracking-[0.25em] block mb-4">
                      ★★★★★
                    </span>
                    <blockquote
                      className="font-heading text-akasha-black text-lg md:text-xl leading-relaxed italic mb-6"
                      style={{ fontWeight: 300 }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="text-[12px] font-body text-akasha-gray-1 uppercase tracking-[0.28em]">
                      {t.name}{t.country ? ` · ${t.country}` : ''}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8 md:mt-10" role="tablist" aria-label="Testimonial selector">
            {JULY_TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === currentIdx}
                aria-label={`Show testimonial ${i + 1} of ${JULY_TESTIMONIALS.length}`}
                onClick={() => setCurrentIdx(i)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  i === currentIdx
                    ? 'w-10 bg-akasha-orange'
                    : 'w-2 bg-akasha-gray-3 hover:bg-akasha-gray-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StandaloneCard({ phase }) {
  const utm = useUtmParams();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const isBackup = phase.key === 'backup';
  const voucherPrice = phase.standalone.voucherPrice;
  // Displayed price = the voucher price when a voucher is configured,
  // otherwise the base Essential price. Tracking + Wix line item still
  // reference the base price so the cart matches the live product.
  const displayPrice = voucherPrice || phase.standalone.essential;

  useEffect(() => {
    const onShow = (e) => {
      if (e.persisted) {
        setLoading(false);
        setError(null);
      }
    };
    window.addEventListener('pageshow', onShow);
    return () => window.removeEventListener('pageshow', onShow);
  }, []);

  async function handleBuy(e) {
    e.preventDefault();
    setError(null);
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!form.firstName.trim()) {
      setError('Please enter your first name.');
      return;
    }

    setLoading(true);
    const courseLabel = `July ${phase.label} Essential Only`;
    const contentId = `july-${phase.key}|essential-only`;
    trackLead(courseLabel, displayPrice);
    try {
      trackInitiateCheckout(courseLabel, displayPrice, contentId);
      const { fbc, fbp } = getMetaCookies();
      const eventId = newEventId();
      try {
        localStorage.setItem('pendingPurchase_courseName', courseLabel);
        localStorage.setItem('pendingPurchase_courseId', contentId);
        localStorage.setItem('pendingPurchase_price', String(displayPrice));
        localStorage.setItem('pendingPurchase_eventId', eventId);
        localStorage.setItem('pendingPurchase_timestamp', Date.now().toString());
      } catch (_) {}

      const url = await startWixCheckout({
        utm,
        utmNote: formatUtmNote(utm),
        productId: JULY_PRODUCTS.essential,
        couponCode: voucherPrice ? phase.couponCode : undefined,
        meta: { fbc, fbp, courseSlug: 'july-essential-only', planSlug: phase.key, eventId },
        buyer: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
        },
      });

      const finalUrl = new URL(url);
      if (fbc) finalUrl.searchParams.set('fbc', fbc);
      if (fbp) finalUrl.searchParams.set('fbp', fbp);
      window.location.href = finalUrl.toString();
    } catch (err) {
      console.error('[JulyStandalone] checkout failed:', err);
      setError(err?.message || 'Could not start checkout. Please try again.');
      setLoading(false);
    }
  }

  const inputCls =
    'w-full border border-akasha-gray-3 rounded-full px-5 py-3 text-sm font-body text-akasha-black placeholder:text-akasha-gray-2 focus:outline-none focus:border-akasha-orange transition-colors bg-akasha-white';

  return (
    <div className="bg-akasha-white border border-akasha-gray-4 rounded-sm p-7 md:p-8 flex flex-col">
      <p
        className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-gold mb-2"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {isBackup ? 'Final Offer' : '200hr Only'}
      </p>
      <h3
        className="font-heading text-akasha-black text-xl md:text-2xl mb-3"
        style={{ fontWeight: 400 }}
      >
        200hr Essential Training
      </h3>
      <p className="font-body text-akasha-gray-1 text-sm leading-relaxed mb-5">
        {isBackup
          ? 'The 200hr Essential at its closing summer price, voucher applied automatically at checkout.'
          : 'Prefer to begin with the 200hr Essential alone? Same training, same promotional rate, no coupon required.'}
      </p>

      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-akasha-gray-2 line-through font-body text-base">
          US${voucherPrice ? phase.standalone.essential : '1,190'}
        </span>
        <span
          className="font-heading text-akasha-black text-3xl md:text-4xl"
          style={{ fontWeight: 400 }}
        >
          US${displayPrice}
        </span>
      </div>
      <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mb-6">
        {voucherPrice
          ? `Voucher ${phase.couponCode} auto-applied`
          : 'Summer Self-Care price'}
      </p>

      <form onSubmit={handleBuy} className="mt-auto" noValidate>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <input
            type="text"
            autoComplete="given-name"
            placeholder="First name *"
            value={form.firstName}
            onChange={set('firstName')}
            className={inputCls}
          />
          <input
            type="text"
            autoComplete="family-name"
            placeholder="Last name"
            value={form.lastName}
            onChange={set('lastName')}
            className={inputCls}
          />
        </div>
        <input
          type="email"
          autoComplete="email"
          placeholder="Email address *"
          value={form.email}
          onChange={set('email')}
          className={`${inputCls} mb-4`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center justify-center w-full bg-akasha-black text-akasha-white px-8 py-3.5 rounded-full text-[12px] font-medium uppercase tracking-[0.2em] hover:bg-akasha-gray-1 transition-colors ${
            loading ? 'opacity-70 cursor-wait' : ''
          }`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {loading ? 'Preparing your checkout…' : `Enroll in 200hr Only, US$${displayPrice}`}
        </button>
        {error && (
          <p className="text-xs text-akasha-orange-dark mt-3 font-body text-center">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
