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
      'md': {'min': '768px'}, // => @media (min-width: 768px and max-width: 1023px) { ... }
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
      stone: colors.stone,
      zinc: colors.zinc,
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
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
      backgroundImage: {
        'bgRadialGradientUp': "var(--bgRadialGradientUp)",
        'bgRadialGradientDown': "var(--bgRadialGradientDown)",
        'bgRadialGradientRight': "var(--bgRadialGradientRight)",
        'bgRadialGradientLeft': "var(--bgRadialGradientLeft)",
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
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
    require("tailwindcss-radix")(),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        'bg-radient': value => ({
          'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme('radialGradients') }
    )
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  }
)

/**
 * utility class presets
 */
function _presets() {
  const shapes = ['circle', 'ellipse'];
  const pos = {
    c: 'center',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right',
  };
  let result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [radialGradientPlugin],
}