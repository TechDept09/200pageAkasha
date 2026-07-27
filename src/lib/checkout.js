import { wixClient, WIX_STORES_APP_ID } from '@/lib/wixClient';

// The implementation now lives in the SDK-free '@/lib/utm' module; re-export it
// here so existing importers of attachUtmToWixRedirect from '@/lib/checkout' keep working.
import { attachUtmToWixRedirect } from '@/lib/utm';
export { attachUtmToWixRedirect };

// Static registry, Next.js needs literal process.env.NAME references at
// build time. Add a new entry when a course gets its Wix Product ID.
// Key format: `${courseSlug}|${planSlug}`.
const PRODUCT_REGISTRY = {
  'essential|full': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID,
  // Essential has no payment plan, only a single Pay in Full product.
  'premium|full': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_PREMIUM,
  'premium|installment': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_PREMIUM_INSTALLMENT,
  '300h-ytt|full': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_300H_FULL,
  '300h-ytt|installment': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_300H_INSTALLMENT,
  '80h-yin|full': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_80H_YIN_FULL,
  '80h-yin|installment': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_80H_YIN_INSTALLMENT,
  '80h-hatha-pranayama|full': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_80H_HATHA_FULL,
  '80h-hatha-pranayama|installment': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_80H_HATHA_INSTALLMENT,
  '80h-meditation|full': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_80H_MEDITATION_FULL,
  '80h-meditation|installment': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_80H_MEDITATION_INSTALLMENT,
  'feminine-wisdom|full': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_FEMININE,
  'kundalini-india|full': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_KUNDALINI_FULL,
  'kundalini-india|installment': process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_KUNDALINI_INSTALLMENT,
};

export function getProductIdForTier(tierSlug) {
  return PRODUCT_REGISTRY[`${tierSlug}|full`] || process.env.NEXT_PUBLIC_WIX_PRODUCT_ID;
}

export function getProductId(courseSlug, planSlug = 'full') {
  return PRODUCT_REGISTRY[`${courseSlug}|${planSlug}`];
}

export async function startWixCheckout({ utm, utmNote, buyer, productId, meta, couponCode, extraLineItems }) {
  if (!productId) {
    throw new Error('Missing Wix product ID for this tier, set the matching NEXT_PUBLIC_WIX_PRODUCT_ID_* in .env.local');
  }

  // Custom fields persist into the Wix Order object, so the order-paid
  // webhook can read fbc/fbp + UTM back when relaying Purchase to Meta CAPI.
  const customFields = [{ title: 'UTM Tracking', value: utmNote }];
  if (meta?.fbc) customFields.push({ title: 'fbc', value: meta.fbc });
  if (meta?.fbp) customFields.push({ title: 'fbp', value: meta.fbp });
  if (meta?.courseSlug) customFields.push({ title: 'courseSlug', value: meta.courseSlug });
  if (meta?.planSlug) customFields.push({ title: 'planSlug', value: meta.planSlug });
  // Shared Meta event_id for dedupe between the browser Purchase event
  // (fired on /?status=thank-you) and the CAPI Purchase event (fired by
  // /api/meta-purchase from the Wix Order Paid webhook). Same ID on both
  // sources means Meta counts the conversion once.
  if (meta?.eventId) customFields.push({ title: 'metaEventId', value: meta.eventId });

  const checkoutInfo = {
    customFields,
    buyerNote: utmNote,
  };

  // Wix reads buyerInfo for email and billingInfo.contactDetails for the
  // name when pre-populating the checkout form; both must be set.
  if (buyer?.email) {
    checkoutInfo.buyerInfo = { email: buyer.email };
  }
  if (buyer?.firstName || buyer?.lastName) {
    checkoutInfo.billingInfo = {
      contactDetails: {
        firstName: buyer.firstName || undefined,
        lastName: buyer.lastName || undefined,
      },
    };
  }

  // Some Wix products are flagged as "physical" even when content is online
  // (e.g. payment-plan variants). Without a shipping destination the hosted
  // checkout page blocks the buyer with "You cannot place this order just yet."
  // Pre-fill a placeholder shippingInfo using the buyer's name. Wix accepts
  // it for digital products too, so it's safe to send unconditionally.
  checkoutInfo.shippingInfo = {
    shippingDestination: {
      contactDetails: {
        firstName: buyer?.firstName || 'Online',
        lastName: buyer?.lastName || 'Delivery',
      },
      address: {
        country: 'US',
        city: 'Online',
        postalCode: '0',
        addressLine: 'Digital delivery, no shipping required',
      },
    },
  };

  // Compose lineItems: the primary product plus any extras the caller
  // wants (e.g. campaign bundle pairing a course with the Yin add-on).
  // Extras are filtered for valid IDs so a partially-configured campaign
  // doesn't crash legitimate single-item checkouts.
  const lineItems = [
    {
      quantity: 1,
      catalogReference: {
        catalogItemId: productId,
        appId: WIX_STORES_APP_ID,
      },
    },
    ...(Array.isArray(extraLineItems)
      ? extraLineItems
          .filter((i) => i && i.productId)
          .map((i) => ({
            quantity: i.quantity || 1,
            catalogReference: {
              catalogItemId: i.productId,
              appId: WIX_STORES_APP_ID,
            },
          }))
      : []),
  ];

  const createPayload = {
    channelType: 'WEB',
    lineItems,
    checkoutInfo,
  };

  // Pre-apply campaign coupon so 40+ buyers don't have to type it at the
  // Wix cart step. Only set when the caller passes a code (existing
  // callers omit it, so behaviour is unchanged for them).
  if (couponCode && typeof couponCode === 'string' && couponCode.trim()) {
    createPayload.couponCode = couponCode.trim();
  }

  const newCheckout = await wixClient.checkout.createCheckout(createPayload);

  if (!newCheckout?._id) {
    throw new Error(
      'Wix did not return a checkout ID. Verify NEXT_PUBLIC_WIX_PRODUCT_ID is correct and the product is published.'
    );
  }

  const { redirectSession } = await wixClient.redirects.createRedirectSession({
    ecomCheckout: { checkoutId: newCheckout._id },
    callbacks: {
      postFlowUrl: window.location.origin,
      // Dedicated /thank-you route loads a thin page so the Pixel script
      // is ready before our Purchase fire logic kicks in. Wira's marketing
      // test on /?status=thank-you saw the event dropped (likely race
      // with the heavier hub home page), this fixes it.
      thankYouPageUrl: `${window.location.origin}/thank-you`,
    },
  });

  if (!redirectSession?.fullUrl) {
    throw new Error('Wix did not return a redirect URL.');
  }

  return attachUtmToWixRedirect(redirectSession.fullUrl, utm);
}
