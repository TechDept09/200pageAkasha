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

          // Success / nature
          green:         '#407C51',  // color_33
          'green-soft':  '#7FA88B',  // color_32

          // Rare accent
          purple:        '#8015E8',  // color_28

          // Neutral scale — straight from Akasha
          'gray-1':      '#6E6E6D',  // text muted
          'gray-2':      '#999997',  // labels
          'gray-3':      '#C7C7C7',  // borders
          'gray-4':      '#E8E6E6',  // dividers / subtle bg
        },
      },
      fontFamily: {
        // Fonts are now self-hosted via next/font (see src/pages/_app.js).
        // The CSS variables below resolve to the locally-served font with
        // a system fallback if it hasn't downloaded yet.
        heading: ['var(--font-jost)', '"Futura LT W01 Light"', 'Futura', 'sans-serif'],
        body:    ['var(--font-inter)', '"Proxima Nova"', 'Helvetica Neue', 'sans-serif'],
        script:  ['var(--font-allura)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.12em',
        widest: '0.22em',
      },
    },
  },
  plugins: [],
};
