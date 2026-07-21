import Head from 'next/head';
import JulyLaunchHome from '@/components/hub/JulyLaunchHome';

const OG_IMAGE =
  'https://static.wixstatic.com/media/c15a18_5d357dab7cec43c4879c3f12090081ce~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85,enc_avif,quality_auto/Certified-Yoga-Instructor---Bali---Akash.jpg';
const PAGE_TITLE =
  'Summer Wellness Discount, Akasha Yoga Academy';
const PAGE_DESC =
  'Begin your 200hr Yoga Teacher Training this summer. Save over 70% on the Essential path, Yoga Alliance certified, voucher auto-applied at checkout.';

export default function HubHome() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Akasha Yoga Academy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>

      <JulyLaunchHome />
    </>
  );
}
