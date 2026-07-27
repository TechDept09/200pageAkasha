import Head from 'next/head';
import { useState } from 'react';
import SiteNav from '@/components/SiteNav';
import EnrollHero from '@/components/EnrollHero';
import PlanSelector from '@/components/PlanSelector';
import FeatureComparison from '@/components/FeatureComparison';
import Bonuses from '@/components/Bonuses';
import EnrollSummerBand from '@/components/EnrollSummerBand';
import ShineTerms from '@/components/ShineTerms';
import EnrollVideo from '@/components/EnrollVideo';
import Pillars from '@/components/Pillars';
import OfficiallyCertified from '@/components/OfficiallyCertified';
import RiskFreeGuarantee from '@/components/RiskFreeGuarantee';
import Graduates from '@/components/Graduates';
import EnrollFinalShine from '@/components/EnrollFinalShine';
import EnrollModal from '@/components/EnrollModal';
import { TierProvider } from '@/lib/TierContext';
import { getTier } from '@/lib/tiers';

// Warm-gray canvas + faint recurring lotus watermark down the left edge, the
// backdrop the whole /enroll-now body sits on (below the photo hero).
const CANVAS = '#8b8a86';
const LOTUS =
  'https://static.wixstatic.com/media/cd7168_4415a77d6ae941eaa45a7317dc90ee65~mv2.png/v1/fill/w_858,h_870,al_c,q_90,enc_avif,quality_auto/flower-only-Light-Dark-orange_edited.png';

// Intro video placeholders: the real "Intro To 200-Hour Online Yoga TTC" and
// "Curriculum / Virtual Tour" clips are loaded client-side on Wix, so their
// YouTube IDs aren't in the static HTML. Swap when the real IDs are known.
const VIDEO_INTRO = 'RkAZ2x5kWP8';
const VIDEO_TOUR = 'RkAZ2x5kWP8';

const VIDEO_FOOTER = [
  'Experience the breath-taking quality & benefits of our premium 200-Hour Online Yoga Teacher Training',
  'Start your journey into the Heart of Yoga!',
];

// Dedicated enrollment page mirroring the live Wix `/enroll-now` page. One page
// hosts both tiers via local `selectedTier` state, so switching plans never
// navigates away or re-mounts the form's TierContext.
export default function EnrollPage() {
  const [selectedTier, setSelectedTier] = useState('essential');
  const [modalOpen, setModalOpen] = useState(false);
  const tier = getTier(selectedTier);

  // Every "Enroll Now" CTA opens the modal in place (optionally switching tier)
  // rather than scrolling the page.
  const openEnroll = (slug) => {
    if (slug) setSelectedTier(slug);
    setModalOpen(true);
  };

  return (
    <TierProvider tier={selectedTier}>
      <Head>
        <title>Enroll, 200-Hour Online Yoga Teacher Training | Akasha Yoga Academy</title>
        <meta name="description" content={tier.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <SiteNav anchorBase="/200h-essential" />

      <main className="pt-28 md:pt-32">
        <EnrollHero onEnroll={() => openEnroll()} />

        {/* Warm-gray canvas for the whole enroll body */}
        <div className="relative overflow-hidden" style={{ backgroundColor: CANVAS }}>
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-[-120px] top-0 bottom-0 w-[520px] opacity-[0.13]"
            style={{
              backgroundImage: `url(${LOTUS})`,
              backgroundRepeat: 'repeat-y',
              backgroundSize: '520px auto',
              backgroundPosition: 'left top',
            }}
          />

          <div className="relative z-10">
            <PlanSelector
              selectedTier={selectedTier}
              onSelectTier={setSelectedTier}
              onEnroll={openEnroll}
            />

            <FeatureComparison />

            <Bonuses theme="enroll" />

            <EnrollSummerBand buttonColor="green" showBonusLine onEnroll={() => openEnroll()} />

            <ShineTerms />

            <EnrollVideo
              heading="Watch This Video To Learn More About Us"
              videoId={VIDEO_INTRO}
              footerLines={VIDEO_FOOTER}
            />

            <EnrollSummerBand buttonColor="orange" onEnroll={() => openEnroll()} />

            <Pillars />

            <OfficiallyCertified />

            <RiskFreeGuarantee theme="enroll" onEnroll={() => openEnroll()} />

            <EnrollVideo
              heading="Watch This Virtual Tour"
              description="Most of your questions are answered in our in-depth introduction video. Discover our clearly structured curriculum and get inspired by the breath-taking quality of our life-changing course by watching this clip."
              videoId={VIDEO_TOUR}
              footerLines={[VIDEO_FOOTER[0]]}
              showEnroll
              onEnroll={() => openEnroll()}
            />

            <Graduates theme="enroll" />

            <EnrollFinalShine />

            <EnrollSummerBand buttonColor="orange" onEnroll={() => openEnroll()} />
          </div>
        </div>
      </main>

      <EnrollModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedTier={selectedTier}
        onSelectTier={setSelectedTier}
      />
    </TierProvider>
  );
}
