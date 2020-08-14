module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f2f1',
          100: '#b2dfdb',
          200: '#80cbc4',
          300: '#4db6ac',
          400: '#26a69a',
          500: '#009688',
          600: '#00897b',
          700: '#00796b',
          800: '#00695c',
          900: '#004d40',
        },
        complementary: {
          50: '#fce5ea',
          100: '#f9bdcb',
          200: '#f592a9',
          300: '#f06988',
          400: '#ea4c6f',
          500: '#e63658',
          600: '#d53156',
          700: '#c02c52',
          800: '#ab274f',
          900: '#861f48',
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
    },
    variants: {},
    plugins: [],
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
      ],
    },
  },
}
