// 2026-06-15 23:59:59 WIB. The single source of truth for the 75% summer sale
// deadline. Update here and every countdown on the page reflects it. After
// this moment, urgency UI hides automatically; the visible price stays
// US$290 until manually rolled back.
export const SALE_END = '2026-06-15T23:59:59+07:00';

export const SALE_REGULAR_PRICE = 1190;
export const SALE_PROMO_PRICE = 290;
export const SALE_SAVINGS = SALE_REGULAR_PRICE - SALE_PROMO_PRICE;
