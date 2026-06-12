import { wixClient, WIX_STORES_APP_ID } from '@/lib/wixClient';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];

/**
 * Attach UTM params to a Wix redirect URL.
 * Wix's createRedirectSession returns a session-cookie wrapper URL:
 *   /_api/iam/.../createSessionCookie?sessionToken=…&redirectUrl=<encoded checkout URL>
 * Params on the OUTER URL are dropped after the browser hops through it,
 * so UTM must be injected into the inner `redirectUrl` too.
 */
export function attachUtmToWixRedirect(fullUrl, utm) {
  const outer = new URL(fullUrl);

  const innerStr = outer.searchParams.get('redirectUrl');
  if (innerStr) {
    try {
      const inner = new URL(innerStr);
      UTM_KEYS.forEach((k) => {
        if (utm[k]) inner.searchParams.set(k, utm[k]);
      });
      outer.searchParams.set('redirectUrl', inner.toString());
    } catch {
      // inner is not a parseable URL, leave it alone
    }
  }

  UTM_KEYS.forEach((k) => {
    if (utm[k]) outer.searchParams.set(k, utm[k]);
  });

  return outer.toString();
}

/**
 * Create a Wix checkout for the course product and return the redirect URL.
 *
 * @param {object} opts
 * @param {object} opts.utm   , { utm_source, utm_medium, utm_campaign }
 * @param {string} opts.utmNote, human-readable UTM summary for sales
 * @param {object} [opts.buyer], { firstName, lastName, email } to prefill
 *                                the Wix checkout form
 * @returns {string} final checkout URL (with UTM attached) to navigate to
 */
export async function startWixCheckout({ utm, utmNote, buyer }) {
  const productId = process.env.NEXT_PUBLIC_WIX_PRODUCT_ID;
  if (!productId) {
    throw new Error('Missing NEXT_PUBLIC_WIX_PRODUCT_ID, set it in .env.local');
  }

  const checkoutInfo = {
    customFields: [{ title: 'UTM Tracking', value: utmNote }],
    buyerNote: utmNote,
  };

  // Prefill: email lands in buyerInfo, name lands in billing contact;
  // the Wix checkout page reads both to pre-populate its form.
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

  const newCheckout = await wixClient.checkout.createCheckout({
    channelType: 'WEB',
    lineItems: [
      {
        quantity: 1,
        catalogReference: {
          catalogItemId: productId,
          appId: WIX_STORES_APP_ID,
        },
      },
    ],
    checkoutInfo,
  });

  if (!newCheckout?._id) {
    throw new Error(
      'Wix did not return a checkout ID. Verify NEXT_PUBLIC_WIX_PRODUCT_ID is correct and the product is published.'
    );
  }

  const { redirectSession } = await wixClient.redirects.createRedirectSession({
    ecomCheckout: { checkoutId: newCheckout._id },
    callbacks: {
      postFlowUrl: window.location.origin,
      thankYouPageUrl: `${window.location.origin}/?status=thank-you`,
    },
  });

  if (!redirectSession?.fullUrl) {
    throw new Error('Wix did not return a redirect URL.');
  }

  return attachUtmToWixRedirect(redirectSession.fullUrl, utm);
}
