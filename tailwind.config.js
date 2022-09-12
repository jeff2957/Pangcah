module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '6rem',
      '8xl': '8rem',
      '9xl': '10rem',
      '10xl': '14rem'
    },
    fontFamily: {
      KozBold: ["KozMinPro-Bold", "sans-serif"],
      KozHeavy: ["KozMinPro-Heavy", "sans-serif"],
      TaipeiBold: ["TaipeiSansTCBeta-Bold", "sans-serif"],
      TaipeiLight: ["TaipeiSansTCBeta-Light", "sans-serif"],
      TaipeiRegular: ["TaipeiSansTCBeta-Regular", "sans-serif"]
    },
    extend: {
      colors: {
        // primary: '#799A7D',
        primary: '#e0e0e0',
        secondary: '#C2E1C5',
        tertiary: '#DDF79D',
        text: '#C2E1C5',
        hover: '#E2A155',
        border: '#1a2e35',
        primaryLight: '#8aba90',
        background: '#ffffff',
      },
      boxShadow: {
        artistBg: '-5px 3px 0 0 rgba(149, 150, 150, 1)'
      },
      // backgroundImage: {
      //   "backgroundImg": "url('./assets/images/PangcahBackground.svg')"
      // },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
      backdropFilters: {
        'none': 'none',
        'blur': 'blur(20px)'
      },
    },
  },
  variants: {},
  plugins: [
    // require('tailwindcss-filters'),
    require('tailwindcss-box-shadow')
  ],
};
