'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HubNav from '@/components/hub/HubNav';
import TrustStrip from '@/components/TrustStrip';
import CertifiedTeacherIntro from '@/components/CertifiedTeacherIntro';
import UserSessionCountdown from '@/components/campaign/UserSessionCountdown';
import Footer from '@/components/Footer';
import { courses } from '@/lib/courses';

// Essential and Yin (YACEP) Bonus sit inside the Summer Self-Care bundle offer,
// so they are not shown again in the recommendation list at the bottom.
const CAMPAIGN_DISCOUNT_KEEP = new Set(['200h-essential', '80h-yin']);

// Verbatim from akashayogaacademy.com/200hr-yoga-teacher-training-online
// and akashayogaacademy.com/80hr-yin-ytt-enroll-now. Bonuses list the
// same US$ values Akasha publishes on those pages.
const WHAT_YOU_GET = {
  '200hr': {
    title: '200-Hour Yoga Teacher Training',
    intro:
      'Sign-up for our Yoga Alliance certified 200-Hour Online Yoga Teacher Training today, and immediately access:',
    courseContent: [
      { section: 'PRACTICE', items: ['60 Hours of Asana', '20 Hours of Pranayama', '15 Hours of Meditation'] },
      { section: 'THEORY', items: ['40 Hours of Yoga Anatomy & Posture Study', '50 Hours of Lectures on Applied Philosophy & History', 'Teaching Techniques & Instructor Skills'] },
      { section: 'TEACHER EDUCATION', items: ['Personally Supervised Practicum Assignments', 'Guided Prep, Video Recording & One-on-One Feedback', 'Marketing, Networking & How to Get Started'] },
      { section: 'PERSONAL GUIDANCE & FUN', items: ['Daily Live Q&As', 'Community Forums, Private Facebook Group & Chats', 'Bhajan Chanting & so much more'] },
    ],
    // Bonuses list dropped per team's brief: the Essential tier does
    // not include the 8 bonus courses, only Premium does. The Yin
    // bonuses below still ship because Yin (YACEP) Bonus course
    // publishes its own bundle of extras.
  },
  '80yin': {
    title: '80-Hour Yin Yoga Teacher Training',
    intro:
      "Explore your mind and body at a depth you've only imagined with Akasha's 80-hour Yin Yoga Teacher Training. In this course you will get:",
    items: [
      'Rich and interactive curriculum that meets and exceeds official requirements',
      'Professional teachings based on decades of committed research, study & practice',
      'Immediate access once you sign up',
      'Interactive connection with a worldwide community of Yoga practitioners & teachers',
      'Lifetime access to all videos, manuals & training materials',
      'Live Bhajans with the Akasha Family',
      'Loving support and expert guidance from seasoned teachers',
    ],
    bonuses: [
      { n: '1', name: 'Yin Yang Pranayama Masterclass', value: 99, desc: 'In this Pranayama Masterclass, we explore pranayama as a doorway into the peace of meditation. This class helps you to deepen your self-practice, while exploring breath-work as a potent tool to deepen experience deep stillness within.' },
      { n: '2', name: 'Breath-Based Alignment Workshop', value: 55, desc: "This eye-opening presentation provides a provocative perspective: It doesn't really matter how our posture looks from outside. Instead of fitting our body into a standardized outer shape, we allow our breath to guide us from within." },
      { n: '3', name: 'Yin Yoga Sequences', value: 25, desc: 'This is a complete collection of ready-made Yin Yoga classes. The useful summaries will make it easy for you to teach smooth 60-minute sessions. You will receive a beautiful visual map of all poses, descriptions and benefits, empowering you to instruct skillfully.' },
      { n: '4', name: 'Yin Yoga Poster', value: 50, desc: 'An appealing poster with all the Asanas you will learn in our 80-Hour Yin Yoga Teacher Training. Due to the high-resolution image quality you can print this poster in bill-board size. This allows you to showcase the full sequence at home or in your Yoga studio.' },
      { n: '5', name: 'Yin Yoga Music', value: 35, desc: 'This is a collection of amazing heart-opening music. We exclusively produced these awesome sets with guest artists in our Baliwood Studios. The high-vibe sounds will take you & your students to deeper states within.' },
    ],
  },
};

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
// Prices per Wira's July sheet (2 Jul). Premium sits at regular
// US$1,490 (no discount), 80h modules move from US$239 to US$399
// (33% off from US$600), Kundalini from the previous Yoga Day price
// to US$1,999 (30% off from US$2,999). Feminine stays at US$229.
const RECOMMENDATION_PRICE = {
  '200h-premium': 1490,
  '300h-ytt': 1190,
  '80h-hatha-pranayama': 399,
  '80h-meditation': 399,
  'feminine-wisdom': 229,
  'kundalini-india': 1999,
};
import { startWixCheckout } from '@/lib/checkout';
import { useUtmParams, formatUtmNote } from '@/hooks/useUtmParams';
import { trackLead, trackInitiateCheckout, newEventId } from '@/lib/pixel';
import { getMetaCookies } from '@/lib/fbCookies';
import { pushBeginCheckout } from '@/lib/gtmEcommerce';
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
  const router = useRouter();
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
    // Preview override via ?phase= query. Values: phase1, phase2, backup.
    // Falls back to the calendar-active phase (Phase 1 currently).
    // Only affects this gated preview URL; the live hub still uses
    // getActiveJulyPhase() through useJulyLaunched + JulyLaunchHome.
    const overrideKey = typeof router.query.phase === 'string'
      ? router.query.phase.toLowerCase()
      : null;
    const overridePhase =
      overrideKey && JULY_PHASES[overrideKey]
        ? JULY_PHASES[overrideKey]
        : null;
    setPhase(overridePhase || getActiveJulyPhase() || JULY_PHASES.phase1);
  }, [router.query.phase]);

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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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

export function CampaignContent({ phase }) {
  const bundle = phase.bundle;
  const standalone = phase.standalone;
  const isBackup = phase.key === 'backup';
  const hasBundle = !!bundle;
  const showWellnessNote = phase.key === 'phase2' && hasBundle;

  // Which 'What will you get?' modal is open, if any. 'bundle' shows
  // both the 200hr and Yin (YACEP) Bonus content; 'standalone' shows the 200hr
  // block only. null keeps the modal closed.
  const [whatModal, setWhatModal] = useState(null);

  return (
    <>
      <Head>
        <title>{phase.headline}, Akasha Yoga Academy</title>
        <meta name="description" content={phase.intro} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          overlapping the last paragraph. overflow-x-hidden clips any child
          that accidentally pokes past the viewport (rotated hero
          animations, absolutely positioned badges, etc.) so mobile can
          never side-scroll no matter what a child does. */}
      <main className="bg-akasha-white pb-24 md:pb-20 overflow-x-hidden">
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
            {/* Per-user 24h urgency countdown, backup phase only.
                Phase 1 and Phase 2 use a calendar deadline (Jul 17
                / Aug 2), so a per-user 24h clock would misrepresent
                the offer. Backup is the last-chance drop where the
                24h narrative fits. */}
            {isBackup ? (
              <div
                className="july-hero-anim"
                style={{ animationDelay: '0.85s' }}
              >
                <UserSessionCountdown label="Only for the next 24 hours" />
              </div>
            ) : null}
            <a
              href="#enroll"
              className="july-hero-anim july-hero-cta inline-flex items-center justify-center gap-3 bg-akasha-orange text-akasha-white px-12 md:px-16 py-5 md:py-6 rounded-full text-[14px] md:text-[16px] font-semibold uppercase tracking-[0.22em] hover:bg-akasha-orange-dark transition-all duration-300 shadow-2xl"
              style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.95s' }}
            >
              Step into the offer
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
            /* Attention pulse on the hero CTA once the entry
               animation settles. Skipped when the user prefers
               reduced motion. */
            .july-hero-cta {
              animation: julyFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards, julyHeroCtaPulse 2.6s ease-in-out 1.6s infinite;
            }
            @keyframes julyHeroCtaPulse {
              0%, 100% {
                transform: translateY(0);
                box-shadow: 0 12px 40px rgba(237, 88, 41, 0.35);
              }
              50% {
                transform: translateY(-3px);
                box-shadow: 0 20px 60px rgba(237, 88, 41, 0.55);
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .july-hero-anim,
              .july-hero-cta {
                opacity: 1;
                animation: none;
                transform: none;
                filter: none;
              }
            }
          `}</style>
        </section>

        {/* 'Become a Certified Yoga Teacher Online' block, verbatim
            copy + RYS-200 + RYS-300 badges from akashayogaacademy.com. */}
        <CertifiedTeacherIntro headingId="july-certified-heading" />

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
                  : 'Step into the 200-Hour Essential'}
              </h2>
              <span className="gold-rule" />
              <p className="font-body text-akasha-gray-1 mt-6 text-base md:text-lg leading-relaxed">
                {isBackup
                  ? 'This is a final, quiet offer for the 200-Hour Essential. The voucher below brings the price to US$249 at checkout, no manual code entry required.'
                  : hasBundle
                    ? 'This summer, self-care can become your new path. Begin with the 200-Hour Essential, or open the journey deeper with the Yin (YACEP) Bonus. Choose the path that calls.'
                    : 'A focused way in. The 200-Hour Yoga Teacher Training (Essential Path) at our summer rate, with the voucher applied automatically at checkout.'}
              </p>
            </div>

            {hasBundle ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
                <BundleCard
                  phase={phase}
                  showWellnessNote={showWellnessNote}
                  onWhatYouGet={() => setWhatModal('bundle')}
                />
                <StandaloneCard
                  phase={phase}
                  onWhatYouGet={() => setWhatModal('standalone')}
                />
              </div>
            ) : (
              <div className="max-w-xl mx-auto">
                <StandaloneCard
                  phase={phase}
                  onWhatYouGet={() => setWhatModal('standalone')}
                />
              </div>
            )}

            {/* Reassurance links: for the buyer who's still hesitating,
                a soft prompt to read the full Akasha detail page in a
                new tab. Bundle phases show both trainings; single-card
                phases show 200hr only. */}
            <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
              <p className="text-[11px] md:text-[12px] font-body uppercase tracking-[0.28em] text-akasha-gray-1 mb-4">
                Still on the fence?
              </p>
              <p className="font-body text-akasha-gray-1 mb-6 text-sm md:text-base leading-relaxed">
                Read the full details of each training on Akasha's site.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <a
                  href="https://www.akashayogaacademy.com/200hr-yoga-teacher-training-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  More on 200-Hour Essential
                </a>
                {hasBundle ? (
                  <a
                    href="https://www.akashayogaacademy.com/80-hr-online-yin-yoga-teacher-training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    More on Yin (YACEP) Bonus
                  </a>
                ) : null}
              </div>
            </div>
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
                Step into the 200-Hour Essential and Yin (YACEP) Bonus together this
                summer. The numbers below show how the bundle holds both
                certifications, gently, with breathing room to spare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-akasha-gray-4/40 border border-akasha-gray-4 rounded-sm p-6 md:p-7 flex flex-col">
                <p className="text-[11px] font-body uppercase tracking-[0.22em] text-akasha-gray-1 mb-4">
                  Buying separately
                </p>
                <ul className="space-y-2 font-body text-akasha-gray-1 text-[15px] leading-relaxed flex-1">
                  <li className="flex justify-between">
                    <span>200-Hour Essential</span>
                    <span className="text-akasha-black line-through">US$1,190</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Yin Yoga (YACEP) Bonus course</span>
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
                    <span>200-Hour Essential</span>
                    <span className="text-akasha-black">US${bundle.essential}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Yin Yoga (YACEP) Bonus course</span>
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

      {whatModal ? (
        <WhatYouGetModal
          variant={whatModal}
          onClose={() => setWhatModal(null)}
        />
      ) : null}
    </>
  );
}

function BundleCard({ phase, showWellnessNote, onWhatYouGet }) {
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

      // GA4 / GTM begin_checkout push; thank-you page reads the
      // stashed order once Wix returns with orderId in the URL.
      pushBeginCheckout({
        course_name: courseLabel,
        value: bundle.total,
        currency: 'USD',
      });

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
        200-Hour Essential + Yin (YACEP) Bonus
      </h3>
      <p className="font-body text-akasha-gray-1 text-sm leading-relaxed mb-5">
        Begin your 200-Hour certification and deepen your practice with the
        Yin Yoga (YACEP) Bonus course. Stack both for the full Summer
        Self-Care path.
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
          <span>200-Hour Yoga Teacher Training (Essential Path)</span>
          <span className="text-akasha-black">US${bundle.essential}</span>
        </li>
        <li className="flex justify-between">
          <span>Yin Yoga (YACEP) Bonus course</span>
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
          {onWhatYouGet ? (
            <button
              type="button"
              onClick={onWhatYouGet}
              className="mt-3 w-full text-center text-[11px] font-body uppercase tracking-[0.25em] text-akasha-orange hover:text-akasha-orange-dark transition-colors inline-flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
              aria-haspopup="dialog"
            >
              What will you get?
            </button>
          ) : null}
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
    <div className="text-center py-10 md:py-14 bg-akasha-white">
      <p className="text-[11px] font-body uppercase tracking-[0.28em] text-akasha-gray-1 mb-5">
        {label}
      </p>
      <a
        href="#enroll"
        className="inline-flex items-center justify-center gap-2 bg-akasha-orange text-akasha-white px-8 md:px-10 py-3.5 md:py-4 rounded-full text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] hover:bg-akasha-orange-dark transition-colors shadow-md hover:shadow-lg"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Step into the offer
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

function WhatYouGetSection({ data, showCourseContent }) {
  return (
    <div className="mb-8 last:mb-0">
      <h4
        className="font-heading text-akasha-black text-lg md:text-xl mb-3 leading-snug"
        style={{ fontWeight: 400 }}
      >
        {data.title}
      </h4>
      <p className="font-body text-akasha-gray-1 text-[13px] md:text-sm leading-relaxed mb-5">
        {data.intro}
      </p>

      {showCourseContent && data.courseContent ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {data.courseContent.map((block) => (
            <div
              key={block.section}
              className="bg-akasha-gray-4/40 border border-akasha-gray-4 rounded-sm p-4"
            >
              <p
                className="text-[10px] font-body uppercase tracking-[0.22em] text-akasha-orange mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {block.section}
              </p>
              <ul className="space-y-1.5 font-body text-akasha-gray-1 text-[13px] leading-relaxed">
                {block.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="text-akasha-green mt-0.5 flex-none">✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {data.items ? (
        <ul className="space-y-2 font-body text-akasha-gray-1 text-[13px] md:text-sm leading-relaxed mb-6">
          {data.items.map((it) => (
            <li key={it} className="flex items-start gap-3">
              <span className="text-akasha-green mt-0.5 flex-none">✓</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {data.bonuses?.length ? (
        <>
          <p
            className="text-[11px] font-body uppercase tracking-[0.25em] text-akasha-orange mb-3"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Bonuses Included
          </p>
          <div className="space-y-3">
            {data.bonuses.map((b) => (
              <div
                key={b.n}
                className="border border-akasha-gray-4 rounded-sm p-4 bg-akasha-white"
              >
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <p
                    className="font-heading text-akasha-black text-[15px] leading-snug"
                    style={{ fontWeight: 400 }}
                  >
                    Bonus #{b.n}: {b.name}
                  </p>
                  <span
                    className="text-[11px] font-body text-akasha-orange whitespace-nowrap"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    US${b.value} value
                  </span>
                </div>
                <p className="font-body text-akasha-gray-1 text-[12.5px] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function WhatYouGetModal({ variant, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const heading =
    variant === 'bundle'
      ? 'Everything included in the bundle'
      : 'Everything included in the 200-Hour Essential';

  return (
    <div
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center px-4 py-10 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease] overflow-x-hidden overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="what-you-get-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-akasha-white rounded-sm shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-7 md:p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-akasha-gray-2 hover:text-akasha-black hover:bg-akasha-gray-4 transition-colors text-2xl leading-none z-10 bg-akasha-white/90 backdrop-blur-sm"
        >
          <span aria-hidden="true">×</span>
        </button>
        <span
          className="block text-[11px] font-body uppercase tracking-[0.3em] text-akasha-orange mb-3"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          What will you get
        </span>
        <h3
          id="what-you-get-modal-title"
          className="font-heading text-akasha-black text-2xl md:text-3xl mb-4 leading-snug pr-8"
          style={{ fontWeight: 400 }}
        >
          {heading}
        </h3>
        <span className="gold-rule mb-6" />

        <WhatYouGetSection data={WHAT_YOU_GET['200hr']} showCourseContent />

        {variant === 'bundle' ? (
          <>
            <div className="my-8 border-t border-akasha-gray-4" />
            <WhatYouGetSection data={WHAT_YOU_GET['80yin']} />
          </>
        ) : null}
      </div>
    </div>
  );
}

function FeaturedIn() {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="july-featured-in-heading"
      style={{
        // akasha-gray-1 (#6E6E6D) mid-tone, dark enough for the
        // white-on-transparent Akasha logos to read clearly without
        // the harsh contrast of pure black.
        background:
          'linear-gradient(180deg, #6E6E6D 0%, #5A5A59 50%, #6E6E6D 100%)',
      }}
    >
      {/* Warm accent wash so the middle of the strip feels touched by
          Akasha's palette instead of reading as neutral corporate grey. */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(231,188,93,0.10) 0%, rgba(237,88,41,0.05) 40%, transparent 75%)',
        }}
      />

      <div className="relative section max-w-5xl">
        <div className="text-center mb-10 md:mb-14">
          <span
            id="july-featured-in-heading"
            className="inline-block text-[12px] md:text-[13px] font-body uppercase tracking-[0.32em] text-akasha-gold"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            As Featured In
          </span>
          <span
            className="block mx-auto mt-4 h-px w-14"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(231,188,93,0.75) 50%, transparent 100%)',
            }}
          />
        </div>

        {/* Strict height rule: every logo renders at exactly the same
            pixel height (32px mobile, 44px desktop) and its width flows
            from that. A max-width guardrail keeps the very wide marks
            from dominating a row. Flex-wrap centres the whole cluster
            so short rows still look balanced. */}
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8">
          {FEATURED_LOGOS.map((src) => (
            <li key={src} className="flex items-center justify-center">
              <img
                src={src}
                alt="Media outlet Akasha Yoga Academy has been featured in"
                loading="lazy"
                decoding="async"
                className="h-8 md:h-11 w-auto opacity-95 hover:opacity-100 transition-opacity duration-300"
                style={{ maxWidth: 'clamp(120px, 22vw, 180px)' }}
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
  // and Yin (YACEP) Bonus, both live in the bundle offer above). No promo badges,
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

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {openCard ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease] overflow-x-hidden overflow-y-auto"
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
                <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-8 md:gap-12 items-center">
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

function StandaloneCard({ phase, onWhatYouGet }) {
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
  // Strikethrough anchor: prefer regularPrice (US$1,190) so the row
  // reads as a clean 75% off, then fall back to the older Phase 1
  // originalPrice (US$320), then Phase 2 voucher framing (US$290 to
  // US$249), then the legacy Yoga Day US$1,190 anchor for backup.
  const strikethroughPrice = phase.standalone.regularPrice
    ? phase.standalone.regularPrice.toLocaleString('en-US')
    : phase.standalone.originalPrice
      ? phase.standalone.originalPrice.toLocaleString('en-US')
      : voucherPrice
        ? phase.standalone.essential
        : '1,190';
  const discountPercent = phase.standalone.discountPercent;

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

      // GA4 / GTM begin_checkout push; thank-you page reads the
      // stashed order once Wix returns with orderId in the URL.
      pushBeginCheckout({
        course_name: courseLabel,
        value: displayPrice,
        currency: 'USD',
      });

      const url = await startWixCheckout({
        utm,
        utmNote: formatUtmNote(utm),
        productId: JULY_PRODUCTS.essential,
        couponCode: phase.standalone.couponCode || (voucherPrice ? phase.couponCode : undefined),
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
        {isBackup ? 'Final Offer' : '200-Hour Only'}
      </p>
      <h3
        className="font-heading text-akasha-black text-xl md:text-2xl mb-3"
        style={{ fontWeight: 400 }}
      >
        200-Hour Yoga Teacher Training (Essential Path)
      </h3>
      <p className="font-body text-akasha-gray-1 text-sm leading-relaxed mb-5">
        {isBackup
          ? 'The 200-Hour Essential at its closing summer price, voucher applied automatically at checkout.'
          : 'Prefer to begin with the 200-Hour Essential alone? Same training, same promotional rate, no coupon required.'}
      </p>

      <div className="flex items-baseline flex-wrap gap-3 mb-2">
        <span className="text-akasha-gray-2 line-through font-body text-base">
          US${strikethroughPrice}
        </span>
        <span
          className="font-heading text-akasha-black text-3xl md:text-4xl"
          style={{ fontWeight: 400 }}
        >
          US${displayPrice}
        </span>
        {discountPercent ? (
          <span
            className="inline-block text-[10px] font-body font-semibold uppercase tracking-[0.18em] text-akasha-orange bg-akasha-orange/10 rounded-full px-2.5 py-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {discountPercent}% off
          </span>
        ) : null}
      </div>
      {phase.standalone.regularPrice ? (
        <p className="text-[11px] font-body uppercase tracking-[0.22em] text-akasha-orange mb-2">
          Save US${(phase.standalone.regularPrice - displayPrice).toLocaleString('en-US')}
        </p>
      ) : null}
      <p className="text-[11px] font-body uppercase tracking-[0.2em] text-akasha-gray-1 mb-6">
        {voucherPrice || phase.standalone.couponCode || phase.standalone.originalPrice
          ? 'Voucher applied at checkout'
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
          {loading ? 'Preparing your checkout…' : `Enroll in 200-Hour Only, US$${displayPrice}`}
        </button>
        {onWhatYouGet ? (
          <button
            type="button"
            onClick={onWhatYouGet}
            className="mt-3 w-full text-center text-[11px] font-body uppercase tracking-[0.25em] text-akasha-black/70 hover:text-akasha-black transition-colors inline-flex items-center justify-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
            aria-haspopup="dialog"
          >
            What will you get?
          </button>
        ) : null}
        {error && (
          <p className="text-xs text-akasha-orange-dark mt-3 font-body text-center">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
