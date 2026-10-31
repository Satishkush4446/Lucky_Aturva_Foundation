/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#174B3B',
            50: '#F2F8F5',
            100: '#E0EFE8',
            200: '#C2E0D2',
            300: '#8FBFA9',
            400: '#4D947B',
            500: '#174B3B',
            600: '#133E31',
            700: '#0E2F25',
            800: '#0A211A',
            900: '#061410',
            950: '#040d0a',
          },
          gold: {
            DEFAULT: '#D89A35',
            50: '#FCF9F2',
            100: '#F8F1E1',
            200: '#F0DEC0',
            300: '#E6C697',
            400: '#DCA95C',
            500: '#D89A35',
            600: '#BC7D22',
            700: '#965E16',
            800: '#734612',
          },
          bg: '#F7F5EF',
          surface: '#FFFFFF',
          dark: '#202A25',
          muted: '#526058',
        }
      },
      fontFamily: {
        serif: ['"Noto Sans Devanagari"', '"Rozha One"', 'Georgia', 'serif'],
        sans: ['"Noto Sans Devanagari"', '"Outfit"', 'system-ui', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.125rem, 4.5vw, 3.25rem)', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'section-heading': ['clamp(1.75rem, 3vw, 2.375rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'card-title': ['clamp(1.3125rem, 1.5vw, 1.4375rem)', { lineHeight: '1.35' }],
        'body-base': ['clamp(1rem, 1.1vw, 1.125rem)', { lineHeight: '1.75' }],
        'body-lg': ['clamp(1.125rem, 1.25vw, 1.25rem)', { lineHeight: '1.8' }],
        'nav-link': ['clamp(1rem, 1.05vw, 1.0625rem)', { lineHeight: '1.5' }],
        'btn-text': ['clamp(1rem, 1.1vw, 1.125rem)', { lineHeight: '1.5' }],
      },
      lineHeight: {
        'hindi-normal': '1.7',
        'hindi-relaxed': '1.8',
        'hindi-loose': '1.9',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(23, 75, 59, 0.08), 0 2px 6px -1px rgba(23, 75, 59, 0.04)',
        'premium': '0 12px 35px -4px rgba(23, 75, 59, 0.12), 0 4px 10px -2px rgba(23, 75, 59, 0.06)',
      }
    },
  },
  plugins: [],
}

