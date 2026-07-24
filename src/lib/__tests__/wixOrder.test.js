import { describe, it, expect } from 'vitest';
import crypto from 'crypto';
import {
  extractOrder,
  readCustomField,
  firstLineItem,
  pickProductName,
  pickTotal,
  pickEmail,
  pickPhone,
  hash,
  redactPII,
} from '@/lib/wixOrder';

describe('extractOrder', () => {
  it('unwraps the common Wix payload shapes', () => {
    expect(extractOrder({ data: { order: { _id: 'a' } } })).toEqual({ _id: 'a' });
    expect(extractOrder({ data: { invoice: { _id: 'b' } } })).toEqual({ _id: 'b' });
    expect(extractOrder({ order: { _id: 'c' } })).toEqual({ _id: 'c' });
    expect(extractOrder({ entity: { _id: 'd' } })).toEqual({ _id: 'd' });
  });
  it('unwraps the Automations actionEvent shape', () => {
    const body = { entityFqdn: 'wix.ecom.order', actionEvent: { body: { entity: { _id: 'e' } } } };
    expect(extractOrder(body)).toEqual({ _id: 'e' });
  });
  it('falls back to the raw body when nothing matches', () => {
    const raw = { foo: 'bar' };
    expect(extractOrder(raw)).toBe(raw);
  });
});

describe('readCustomField', () => {
  const order = {
    customFields: [
      { title: 'metaEventId', value: 'evt-123' },
      { name: 'fbc', value: 'fb.1.abc' },
      { fieldName: 'courseSlug', translatedValue: 'essential' },
    ],
  };
  it('matches case-insensitively across title/name/fieldName', () => {
    expect(readCustomField(order, 'metaeventid')).toBe('evt-123');
    expect(readCustomField(order, 'fbc')).toBe('fb.1.abc');
    expect(readCustomField(order, 'courseSlug')).toBe('essential');
  });
  it('returns empty string when not found or order missing', () => {
    expect(readCustomField(order, 'nope')).toBe('');
    expect(readCustomField(null, 'fbc')).toBe('');
  });
});

describe('firstLineItem / pickProductName', () => {
  it('reads the first line item from either lineItems or items', () => {
    expect(firstLineItem({ lineItems: [{ id: 1 }] })).toEqual({ id: 1 });
    expect(firstLineItem({ items: [{ id: 2 }] })).toEqual({ id: 2 });
    expect(firstLineItem({})).toEqual({});
  });
  it('resolves the many productName shapes', () => {
    expect(pickProductName({ productName: 'Plain' })).toBe('Plain');
    expect(pickProductName({ productName: { original: 'Orig' } })).toBe('Orig');
    expect(pickProductName({ name: { translated: 'T' } })).toBe('T');
    expect(pickProductName({ description: 'Desc' })).toBe('Desc');
    expect(pickProductName({})).toBe('');
  });
});

describe('pickTotal', () => {
  it('prefers the Stores priceSummary total', () => {
    expect(pickTotal({ priceSummary: { total: { amount: '290' } } })).toBe('290');
  });
  it('falls back through the alternate stores/invoice paths', () => {
    expect(pickTotal({ totals: { total: 100 } })).toBe(100);
    expect(pickTotal({ totalPrice: 50 })).toBe(50);
    expect(pickTotal({ balanceSummary: { balance: { amount: '75' } } })).toBe('75');
    expect(pickTotal({ payments: [{ amount: { amount: '199' } }] })).toBe('199');
    expect(pickTotal({ grandTotal: 12 })).toBe(12);
  });
  it('treats an explicit zero total as a valid value, not a miss', () => {
    expect(pickTotal({ priceSummary: { total: { amount: 0 } } })).toBe(0);
  });
  it('defaults to 0 when no total is present', () => {
    expect(pickTotal({})).toBe(0);
  });
});

describe('pickEmail / pickPhone', () => {
  it('reads buyer contact from the primary and fallback paths', () => {
    expect(pickEmail({ buyerInfo: { email: 'a@b.com' } })).toBe('a@b.com');
    expect(pickEmail({ billingInfo: { contactDetails: { email: 'c@d.com' } } })).toBe('c@d.com');
    expect(pickEmail({})).toBe('');
    expect(pickPhone({ recipient: { phone: '123' } })).toBe('123');
    expect(pickPhone({})).toBe('');
  });
});

describe('hash', () => {
  it('SHA-256 hashes normalized (lowercased, trimmed) input', () => {
    const expected = crypto.createHash('sha256').update('user@example.com').digest('hex');
    expect(hash('  User@Example.com  ')).toBe(expected);
  });
  it('returns undefined for empty input', () => {
    expect(hash('')).toBeUndefined();
    expect(hash(undefined)).toBeUndefined();
  });
});

describe('redactPII', () => {
  it('redacts sensitive keys but keeps the rest of the structure', () => {
    const out = redactPII({
      email: 'a@b.com',
      firstName: 'Jane',
      orderId: 'x1',
      nested: { phone: '555', currency: 'USD' },
    });
    expect(out.email).toBe('[redacted]');
    expect(out.firstName).toBe('[redacted]');
    expect(out.orderId).toBe('x1');
    expect(out.nested.phone).toBe('[redacted]');
    expect(out.nested.currency).toBe('USD');
  });
  it('handles circular references without throwing', () => {
    const obj = { a: 1 };
    obj.self = obj;
    expect(() => redactPII(obj)).not.toThrow();
  });
});
