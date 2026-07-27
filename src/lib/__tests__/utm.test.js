import { describe, it, expect } from 'vitest';
import { attachUtmToWixRedirect } from '@/lib/utm';

const UTM = {
  utm_source: 'facebook',
  utm_medium: 'cpc',
  utm_campaign: 'july-selfcare',
};

describe('attachUtmToWixRedirect', () => {
  it('appends UTM params to the outer URL', () => {
    const out = attachUtmToWixRedirect('https://wix.com/checkout?foo=bar', UTM);
    const u = new URL(out);
    expect(u.searchParams.get('utm_source')).toBe('facebook');
    expect(u.searchParams.get('utm_medium')).toBe('cpc');
    expect(u.searchParams.get('utm_campaign')).toBe('july-selfcare');
    expect(u.searchParams.get('foo')).toBe('bar');
  });

  it('also injects UTM into the nested redirectUrl so it survives the Wix hop', () => {
    const inner = 'https://www.akashayogaacademy.com/thank-you';
    const full = `https://wix.com/_serverless/redirect?redirectUrl=${encodeURIComponent(inner)}`;
    const out = attachUtmToWixRedirect(full, UTM);

    const outer = new URL(out);
    const nested = new URL(outer.searchParams.get('redirectUrl'));
    expect(nested.searchParams.get('utm_source')).toBe('facebook');
    expect(nested.searchParams.get('utm_campaign')).toBe('july-selfcare');
    // Outer still carries them too.
    expect(outer.searchParams.get('utm_source')).toBe('facebook');
  });

  it('leaves an unparseable nested redirectUrl untouched', () => {
    const full = 'https://wix.com/redirect?redirectUrl=not-a-url';
    const out = attachUtmToWixRedirect(full, UTM);
    const outer = new URL(out);
    expect(outer.searchParams.get('redirectUrl')).toBe('not-a-url');
    expect(outer.searchParams.get('utm_source')).toBe('facebook');
  });

  it('is a no-op for UTM keys that are absent', () => {
    const out = attachUtmToWixRedirect('https://wix.com/checkout', {});
    const u = new URL(out);
    expect(u.searchParams.get('utm_source')).toBeNull();
  });
});
