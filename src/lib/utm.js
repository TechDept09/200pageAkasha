// Pure UTM helpers, kept free of the Wix SDK so they stay easy to unit test
// and import from anywhere (checkout, forms, tests) without side effects.

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];

// Wix createRedirectSession returns a session-cookie wrapper URL whose query
// params are dropped on the hop through; UTM must also be injected into the
// inner `redirectUrl` so attribution survives.
export function attachUtmToWixRedirect(fullUrl, utm = {}) {
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
