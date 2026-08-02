// POST /api/brochure-request
//
// Captures a brochure download lead (name + email), fans it out to
// Discord + Streak, and returns the direct download URL so the client
// can trigger the download immediately.
//
// Design goals:
// - Discord + Streak fire independently; if one fails the other still
//   goes through, and the user always gets their download URL back
//   (leads matter more than any single sink not being available).
// - Streak is env-gated. If STREAK_API_KEY / STREAK_PIPELINE_KEY are
//   not set, that call is skipped silently. Ship Discord day-one,
//   attach Streak later without a code change.
// - Server-side only. Streak API key never touches the browser.

const BROCHURE_URL = '/brochure-200hr-ttc.pdf';
const BROCHURE_LABEL = '200-Hour TTC Brochure';

const DISCORD_WEBHOOK = process.env.DISCORD_BROCHURE_WEBHOOK_URL;
const STREAK_API_KEY = process.env.STREAK_API_KEY;
const STREAK_PIPELINE_KEY = process.env.STREAK_PIPELINE_KEY;

// Same regex the client uses. Rejects obvious junk (`a@b`, `x@y.z`,
// trailing spaces, unicode oddities) before any downstream fanout.
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

function isValidEmail(v) {
  return typeof v === 'string' && EMAIL_REGEX.test(v.trim());
}

// Build a mailto link pre-filled with a friendly Akasha reply so
// the team can tap "Reply" in Discord and land straight in their
// mail client with the subject + opener already typed.
function buildReplyMailto({ email, name }) {
  const displayName = name && name.trim() ? name.trim() : 'there';
  const subject = 'Your 200-Hour Yoga Teacher Training Brochure';
  const body = [
    `Hi ${displayName},`,
    '',
    'Thank you for downloading the 200-Hour Yoga Teacher Training brochure!',
    '',
    'I wanted to reach out personally in case you have any questions. Whether it is about the curriculum, the schedule, or how the online training works, I am here to help.',
    '',
    'What made you interested in yoga teacher training?',
    '',
    'Warmly,',
    'Akasha Yoga Academy',
  ].join('\n');
  return `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function sendToDiscord({ name, email, source, utm }) {
  if (!DISCORD_WEBHOOK) return { skipped: true };

  const displayName = name && name.trim() ? name.trim() : '(not provided)';
  const replyMailto = buildReplyMailto({ email, name });

  const fields = [
    { name: 'Name', value: displayName, inline: true },
    { name: 'Email', value: email, inline: true },
    { name: 'Source', value: source || '(unknown)', inline: false },
  ];

  const utmSummary = utm
    ? Object.entries(utm)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join(' · ')
    : '';
  if (utmSummary) fields.push({ name: 'Attribution', value: utmSummary, inline: false });

  fields.push({
    name: 'Quick actions',
    value: `[✉️ Reply by email](${replyMailto})`,
    inline: false,
  });

  const body = {
    username: 'Akasha Lead Bot',
    embeds: [
      {
        author: { name: `New lead, ${BROCHURE_LABEL}` },
        title: displayName === '(not provided)' ? email : `${displayName} · ${email}`,
        description: `A new visitor just downloaded the brochure. Tap **Reply by email** below to open your mail client with a pre-written opener.`,
        color: 0xE7BC5D,
        fields,
        footer: { text: 'akashayogaacademy.com' },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  const res = await fetch(DISCORD_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Discord webhook ${res.status}: ${text}`);
  }
  return { ok: true };
}

async function sendToStreak({ name, email, source, utm }) {
  if (!STREAK_API_KEY || !STREAK_PIPELINE_KEY) return { skipped: true };

  const auth = Buffer.from(`${STREAK_API_KEY}:`).toString('base64');
  const notesLines = [
    `Source: ${source || '(unknown)'}`,
    utm && Object.values(utm).some(Boolean)
      ? `UTM: ${Object.entries(utm)
          .filter(([, v]) => v)
          .map(([k, v]) => `${k}=${v}`)
          .join(' ')}`
      : null,
  ].filter(Boolean);

  const body = {
    name: name || email,
    notes: notesLines.join('\n'),
    linkedEmailAddresses: [email],
  };

  const res = await fetch(
    `https://api.streak.com/api/v1/pipelines/${encodeURIComponent(STREAK_PIPELINE_KEY)}/boxes`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Streak API ${res.status}: ${text}`);
  }
  const data = await res.json().catch(() => ({}));
  return { ok: true, boxKey: data.boxKey || data.key };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, source, utm } = req.body || {};

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  // Fire both sinks in parallel. Failures are logged but do not
  // block the response, so the user always gets their brochure.
  const [discordResult, streakResult] = await Promise.allSettled([
    sendToDiscord({ name, email, source, utm }),
    sendToStreak({ name, email, source, utm }),
  ]);

  if (discordResult.status === 'rejected') {
    console.error('[brochure-request] Discord failed:', discordResult.reason);
  }
  if (streakResult.status === 'rejected') {
    console.error('[brochure-request] Streak failed:', streakResult.reason);
  }

  return res.status(200).json({
    downloadUrl: BROCHURE_URL,
    sinks: {
      discord:
        discordResult.status === 'fulfilled'
          ? discordResult.value
          : { ok: false, error: String(discordResult.reason) },
      streak:
        streakResult.status === 'fulfilled'
          ? streakResult.value
          : { ok: false, error: String(streakResult.reason) },
    },
  });
}
