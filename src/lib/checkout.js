import { wixClient, WIX_STORES_APP_ID } from '@/lib/wixClient';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];

// Wix createRedirectSession returns a session-cookie wrapper URL whose query
// params are dropped on the hop through; UTM must also be injected into the
// inner `redirectUrl` so attribution survives.
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

export function getProductIdForTier(tierSlug) {
  if (tierSlug === 'premium') {
    return process.env.NEXT_PUBLIC_WIX_PRODUCT_ID_PREMIUM;
  }
  return process.env.NEXT_PUBLIC_WIX_PRODUCT_ID;
}

export async function startWixCheckout({ utm, utmNote, buyer, productId }) {
  if (!productId) {
    throw new Error('Missing Wix product ID for this tier, set the matching NEXT_PUBLIC_WIX_PRODUCT_ID_* in .env.local');
  }

  const checkoutInfo = {
    customFields: [{ title: 'UTM Tracking', value: utmNote }],
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
