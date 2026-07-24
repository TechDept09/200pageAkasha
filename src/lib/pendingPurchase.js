// Single source of truth for the "pending purchase" handoff between the
// enroll click and the /thank-you page. The enroll forms write these values
// to localStorage right before redirecting to the Wix hosted checkout; when
// Wix sends the buyer back to /thank-you (with no query context), the page
// reads them back to fire the browser-side Meta Purchase event.
//
// Centralising the key names here removes the typo risk of repeating five
// string literals in every form (EnrollForm, CourseEnrollForm, campaign/july).

export const PENDING_PURCHASE_KEYS = {
  courseName: 'pendingPurchase_courseName',
  courseId: 'pendingPurchase_courseId',
  price: 'pendingPurchase_price',
  eventId: 'pendingPurchase_eventId',
  timestamp: 'pendingPurchase_timestamp',
};

const K = PENDING_PURCHASE_KEYS;

// Two hour ceiling on stale Purchase data, in case the buyer abandoned
// mid-checkout and only revisited the thank-you URL much later.
export const PENDING_PURCHASE_TTL_MS = 2 * 60 * 60 * 1000;

// Persist the pending purchase. Swallows storage errors (private mode /
// quota): CAPI still tracks the order via the Wix Order Paid webhook.
export function savePendingPurchase({ courseName, courseId, price, eventId }) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(K.courseName, courseName ?? '');
    localStorage.setItem(K.courseId, courseId ?? '');
    localStorage.setItem(K.price, String(price ?? 0));
    localStorage.setItem(K.eventId, eventId ?? '');
    localStorage.setItem(K.timestamp, Date.now().toString());
  } catch (_) {
    // ignore, see note above
  }
}

// Read the pending purchase back. Returns null if storage is unavailable.
export function readPendingPurchase() {
  if (typeof window === 'undefined') return null;
  try {
    return {
      courseName: localStorage.getItem(K.courseName),
      courseId: localStorage.getItem(K.courseId),
      price: localStorage.getItem(K.price),
      eventId: localStorage.getItem(K.eventId),
      timestamp: localStorage.getItem(K.timestamp),
    };
  } catch (_) {
    return null;
  }
}

export function clearPendingPurchase() {
  if (typeof window === 'undefined') return;
  try {
    Object.values(K).forEach((key) => localStorage.removeItem(key));
  } catch (_) {
    // ignore
  }
}
