const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",],
  /* theme: {
    extend: {},
  }, */
  theme: {
    /* screens: {
      'sm': {'min': '640px'}, // => @media (min-width: 640px and max-width: 767px) { ... }
      'base': {'min': '768px'}, // => @media (min-width: 768px and max-width: 1023px) { ... }
      'lg': {'min': '1024px'}, // => @media (min-width: 1024px and max-width: 1279px) { ... }
      'xl': {'min': '1280px'}, // => @media (min-width: 1280px and max-width: 1535px) { ... }
      '2xl': {'min': '1536px'}, // => @media (min-width: 1536px) { ... }
    }, */
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'a1mRed': '#600000',
      black: colors.black,
      neutral: colors.neutral,
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      '2xs': '0.6rem',
      xs: '0.8rem',
      sm: '1.2rem',
      md: '1.6rem',
      lg: '2.4rem',
      xl: '3.2rem',
      '2xl': '4.8rem',
      '3xl': '6.4rem',
      '4xl': '8.6rem',
      '5xl': '10.8rem',
      '6xl': '13rem',
    },
    container: {
      center: true,
      /* padding: "2rem", */
    },
    extend: {
      /* form: {
        input: {
          fontSize: '1.2rem',
          margin: '10px 0',
          padding: '1rem',
          borderColor: 'black',
          borderRadius: '0.5rem',
          backgroundColor: '#e8f0fe',
          color: 'black',
          '&:focus': {
            outline: 'none',
            borderColor: '#4c51bf',
            boxShadow: '0 0 0 3px rgba(76, 81, 191, 0.5)',
          },
        },
      }, */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    /* require('@tailwindcss/forms'), */
    plugin(function({ addBase }) {
     addBase({
        'html': { fontSize: '62.5%' },
      })
    }),
  ],
}

