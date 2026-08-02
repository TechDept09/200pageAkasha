// SEO helpers — canonical URLs, structured data schemas, and meta utilities.
// Used across all pages for consistent SEO markup.

import React from 'react';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.akashayogaacademy.com';

/**
 * Returns a canonical <link> React element for a given path.
 */
export function CanonicalLink(path = '/') {
  return React.createElement('link', {
    rel: 'canonical',
    href: `${SITE_URL}${path}`,
    key: 'canonical',
  });
}

// ── Structured Data Schemas ──────────────────────────────────────────

/**
 * Organization schema — place once site-wide (e.g. in _app.js or homepage).
 */
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Akasha Yoga Academy',
  url: SITE_URL,
  description:
    'Internationally accredited online yoga teacher training rooted in classical Hatha Yoga, Pranayama, Meditation, and Yin Yoga. Yoga Alliance certified since 2015.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.93',
    reviewCount: '359',
    bestRating: '5',
  },
  sameAs: [
    'https://www.facebook.com/akashayogaacademy',
    'https://www.instagram.com/akasha_yoga_academy',
  ],
  knowsAbout: [
    'Yoga Teacher Training',
    'Hatha Yoga',
    'Pranayama',
    'Yin Yoga',
    'Meditation',
    'Kundalini',
  ],
};

/**
 * Build a Course schema object for any course page.
 *
 * @param {object} opts
 * @param {string} opts.name          — e.g. "300-Hour Advanced Yoga Teacher Training"
 * @param {string} opts.description   — meta description
 * @param {number} opts.price         — current promo price
 * @param {string} opts.category      — e.g. "Advanced", "Yin", "Meditation"
 * @param {string} [opts.prereq]      — e.g. "200-Hour Certification"
 */
export function buildCourseSchema({ name, description, price, category, prereq }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Akasha Yoga Academy',
      sameAs: SITE_URL,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.93',
      reviewCount: '359',
      bestRating: '5',
    },
    offers: {
      '@type': 'Offer',
      price: String(price),
      priceCurrency: 'USD',
      category,
      availability: 'https://schema.org/InStock',
    },
  };

  if (prereq) {
    schema.prerequisites = prereq;
  }

  return schema;
}

/**
 * Build a FAQPage schema from an array of Q&A pairs.
 *
 * @param {Array<{question: string, answer: string}>} faqs
 */
export function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

/**
 * Build a BreadcrumbList schema for a page.
 *
 * @param {Array<{name: string, url: string}>} items — ordered from root to current
 */
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, url }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${SITE_URL}${url}`,
    })),
  };
}

/**
 * Render a JSON-LD script tag for a schema object (pass to dangerouslySetInnerHTML).
 */
export function jsonLd(schema) {
  return { __html: JSON.stringify(schema) };
}
