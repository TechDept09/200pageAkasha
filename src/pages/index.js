import Head from 'next/head';
import PromoLanding from '@/components/promo/PromoLanding';
import { JULY_PHASES } from '@/lib/julyCampaign';
import { CanonicalLink, buildBreadcrumbSchema, buildFAQSchema, jsonLd } from '@/lib/seo';
import { FAQS } from '@/components/promo/CampaignFAQ';

// Homepage renders the currently active promo directly. Preview
// happens on localhost + cloudflared tunnel, not through a gated
// /campaign/* route. To rotate promos, swap the phase pulled here
// (or, once lib/promo.js lands, flip the ACTIVE_PROMO constant).
const activePhase = JULY_PHASES.augphase1;

const OG_IMAGE =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg';

export default function HubHome() {
  const title = `${activePhase.headline}, Akasha Yoga Academy`;
  const description = activePhase.intro;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Akasha Yoga Academy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={OG_IMAGE} />
        {CanonicalLink('/')}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(buildBreadcrumbSchema([
            { name: 'Home', url: '/' },
          ]))}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(buildFAQSchema(FAQS))}
        />
      </Head>

      <PromoLanding phase={activePhase} />
    </>
  );
}
