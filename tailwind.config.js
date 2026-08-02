/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict Akasha brand palette — extracted from
        // akashayogaacademy.com CSS variables. No invented colors.
        akasha: {
          white:   '#FFFFFF',
          black:   '#000000',

          // Brand warm — the visible Akasha palette (no blue on the live site)
          orange:        '#ED5829',  // color_23
          'orange-dark': '#9E3B1B',  // color_24
          'orange-deep': '#4F1D0E',  // color_25
          'orange-soft': '#F3A78F',  // color_22

          // Highlight
          gold:          '#E7BC5D',  // color_44
          'gold-soft':   '#F5E3B3',  // lighter gold for subtle accents

          // Success / nature
          green:         '#407C51',  // color_33
          'green-soft':  '#7FA88B',  // color_32

          // Rare accent
          purple:        '#8015E8',  // color_28

          // Neutral scale — straight from Akasha
          'gray-1':      '#595958',  // text muted (WCAG AA 4.5:1 on white)
          'gray-2':      '#999997',  // labels
          'gray-3':      '#C7C7C7',  // borders
          'gray-4':      '#E8E6E6',  // dividers / subtle bg
        },
      },
      fontFamily: {
        // Fonts are now self-hosted via next/font (see src/pages/_app.js).
        heading: ['var(--font-jost)', '"Futura LT W01 Light"', 'Futura', 'sans-serif'],
        body:    ['var(--font-montserrat)', '"Proxima Nova"', 'Helvetica Neue', 'sans-serif'],
        script:  ['var(--font-allura)', 'Georgia', 'serif'],
        // Small UI labels / eyebrows — substitute for the site's DIN Next.
        label:   ['var(--font-inter)', '"DIN Next"', 'Helvetica Neue', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.12em',
        widest: '0.22em',
      },

      // ── Shadow System (bottom-up elevation) ──────────────────────
      boxShadow: {
        'xs':    '0 1px 2px rgba(0,0,0,0.04)',
        'sm':    '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'md':    '0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04)',
        'lg':    '0 10px 15px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.04)',
        'xl':    '0 20px 25px rgba(0,0,0,0.07), 0 8px 10px rgba(0,0,0,0.04)',
        '2xl':   '0 25px 50px rgba(0,0,0,0.10)',
        'glow':  '0 0 20px rgba(237,88,41,0.15), 0 4px 12px rgba(237,88,41,0.08)',
        'glow-lg': '0 0 40px rgba(237,88,41,0.2), 0 8px 24px rgba(237,88,41,0.1)',
        'card':  '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.06)',
        'nav':   '0 1px 3px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.03)',
        'inner': 'inset 0 2px 4px rgba(0,0,0,0.04)',
        'none':  '0 0 0 0 transparent',
      },

      // ── Animation Keyframes ──────────────────────────────────────
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-scale': {
          '0%':   { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-in':        'fade-in 0.5s ease-out both',
        'fade-up':        'fade-up 0.6s ease-out both',
        'fade-in-scale':  'fade-in-scale 0.4s ease-out both',
        'slide-in-right': 'slide-in-right 0.3s ease-out both',
        'shimmer':        'shimmer 2s linear infinite',
        'pulse-soft':     'pulse-soft 2s ease-in-out infinite',
        'float':          'float 3s ease-in-out infinite',
      },

      // ── Border Radius System ─────────────────────────────────────
      borderRadius: {
        'none':   '0',
        'xs':     '2px',
        'sm':     '4px',
        'md':     '8px',
        'lg':     '12px',
        'xl':     '16px',
        '2xl':    '24px',
        'full':   '9999px',
      },

      // ── Backdrop Blur ────────────────────────────────────────────
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
