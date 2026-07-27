import Head from 'next/head';
import SiteNav from '@/components/SiteNav';
import Hero80Yin from '@/components/Hero80Yin';
import AreYouReady80Yin from '@/components/AreYouReady80Yin';
import QuoteBreak from '@/components/QuoteBreak';
import EssenceProgram80Yin from '@/components/EssenceProgram80Yin';
import WhatsMostImportant80Yin from '@/components/WhatsMostImportant80Yin';
import SecretDoor80Yin from '@/components/SecretDoor80Yin';
import DiveDeep80Yin from '@/components/DiveDeep80Yin';
import WholeHearted80Yin from '@/components/WholeHearted80Yin';
import StudyBest80Yin from '@/components/StudyBest80Yin';
import MeetTeachers80Yin from '@/components/MeetTeachers80Yin';
import Steps80Yin from '@/components/Steps80Yin';
import JourneyNow80Yin from '@/components/JourneyNow80Yin';
import Bonuses80Yin from '@/components/Bonuses80Yin';
import Testimonials80Yin from '@/components/Testimonials80Yin';
import SelfAwarePractice80Yin from '@/components/SelfAwarePractice80Yin';
import WhatYoullExperience80Yin from '@/components/WhatYoullExperience80Yin';
import AkashaAdvantage80Yin from '@/components/AkashaAdvantage80Yin';
import TheContent80Yin from '@/components/TheContent80Yin';
import FaqJourney80Yin from '@/components/FaqJourney80Yin';
import { TierProvider } from '@/lib/TierContext';
import { TIERS } from '@/lib/tiers';

// Pixel-perfect rebuild of the live Wix 80-Hour Yin Yoga TTC page, same
// approach as /300h-ytt: SiteNav + hero first, then section-by-section from
// screenshots. Generic CourseLanding chrome is stripped until each Wix
// section is replicated.
const tier = TIERS['80h-yin'];

const OG_IMAGE =
  'https://static.wixstatic.com/media/cd7168_ac443cf0083b47ce9eed5df7eb1d58ebf000.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/80h-yin-og.jpg';

export default function Page() {
  return (
    <TierProvider tier="80h-yin">
      <Head>
        <title>{tier.metaTitle}</title>
        <meta name="description" content={tier.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={tier.metaTitle} />
        <meta property="og:description" content={tier.metaDescription} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Akasha Yoga Academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tier.metaTitle} />
        <meta name="twitter:description" content={tier.metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>

      <SiteNav />

      <main className="pt-28 md:pt-32">
        <Hero80Yin />
        <AreYouReady80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_5356899bd52b4ccd9bf2603949fac275~mv2.jpg/v1/fill/w_1920,h_1080,al_t,q_85,enc_avif,quality_auto/nici-kellerman.jpg"
          text="They have taught me how to step into my own authority, how to teach what I love, and how to keep growing."
          author="Nici Kellerman"
          country="yogawithnici.com"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <EssenceProgram80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_51660736472d4c7fb23211b0196e64ff~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/yin-shala.jpg"
          text="They show you how to slow down, how to open up, and how to love yourself."
          author="Anna Kotaba"
          country="Poland"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <WhatsMostImportant80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_292a4b76d8274db68a31d7ad3271f7fc~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/luis-deck.jpg"
          text="The lessons were very genuine they came from a real heartfelt place. I was absolutely delighted to meet all the teachers during the classes, if we had any questions the support was amazing."
          author="Luis"
          country="New Zealand"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <SecretDoor80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_dd087d310c5f4b8f8c5e4fcdc09bbe77~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/anu-anj-shala.jpg"
          text="I love Akasha Yoga Academy. Their programs are extremely comprehensive & truly get to the essence of Yoga."
          author="Anu Anj"
          country="United Kingdom"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <DiveDeep80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_70ce790861b4454dbaf1b1e0165544be~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/sharon-australia.jpg"
          text="The Akasha family is so welcoming & supportive. They create such a save space and they enable me to slowly go beyond my self-limiting belief."
          author="Sharon"
          country="Australia"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <WholeHearted80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_122c4af0ec6c46b9a7c1e70bbea1ac66~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/valerie-curacao.jpg"
          text="To find teachers with so much depth, passion & dedication is quite unique."
          author="Valerie, Curaçao"
          country="Online Graduate 2020"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <StudyBest80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_9919c2c185274916837e14bc5bd02ac3~mv2.jpeg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/sayla-uk.jpg"
          text="A fantastic experience. Connecting on a daily basis with instructors & participants from around the world was amazing."
          author="Sayla, UK"
          country="Online Graduate 2020"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <MeetTeachers80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_b270aced96b4485fa9bf725604d39304~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/chandise-anatomy-bts.jpg"
          text="You will learn so much more than just Yoga. I truly wish that EVERY person could experience this deep dive of self-discovery."
          author="Chandise Dasher"
          country="United States"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <Steps80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_51660736472d4c7fb23211b0196e64ff~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/carmen-reiss.jpg"
          text="The guidance the teachers give at Akasha is out of this world, and I always felt fully supported."
          author="Carmen Reiss"
          country="Germany"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <JourneyNow80Yin />
        <Bonuses80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_55c4981413e342958a3035ef3e1b3552~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/seyla-australia.jpg"
          text="The course content is incredible! Easy to digest. It's been a fantastic experience that I will encourage anyone to sign up for"
          author="Seyla"
          country="Australia"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <Testimonials80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_31d48015a7b948b2ae07b77dc52084b8~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/sharon-deck.jpg"
          text="The Akasha family is so welcoming & supportive. They create such a save space and they enable me to slowly go beyond my self-limiting belief."
          author="Sharon"
          country="Australia"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <SelfAwarePractice80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_6e281e03fb4e47d98065a824f79802c4~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/pierre-mayer.jpg"
          text="It's amazing with how much love & authenticity you get prepared to be a Yoga Teacher, just AWESOME and not describable in words."
          author="Pierre Mayer"
          country="lustaufgesund.com"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <WhatYoullExperience80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_fca73a6208a14626ad04d55ceb4157cb~mv2.jpg/v1/fill/w_1920,h_1080,al_b,q_85,enc_avif,quality_auto/mohit-jain.jpg"
          text="It's amazing how they share their resources & knowledge with you to find your own calling. This itself is proof they are providing all this from their hearts."
          author="Mohit Jain"
          country="India / Dubai"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <AkashaAdvantage80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_962407fcf68843d2a8cdd6941771a31d~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/becky-beach.jpg"
          text="Learning from a variety of experts who are truly passionate about sharing the benefits of Yin Yoga is a big part of what makes this course so engaging."
          author="Becky Beach"
          country="Canada"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <TheContent80Yin />
        <QuoteBreak
          image="https://static.wixstatic.com/media/cd7168_70dbc1ed353f44aa8263cd0a1a87f747~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/nici-kellerman-lunge.jpg"
          text="They have taught me how to step into my own authority, how to teach what I love, and how to keep growing."
          author="Nici Kellerman"
          country="yogawithnici.com"
          className="!min-h-[360px] md:!min-h-[520px]"
        />
        <FaqJourney80Yin />
      </main>
    </TierProvider>
  );
}
