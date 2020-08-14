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
          50: '#ffdcc6',
          100: '#ffb8a9',
          200: '#de9386',
          300: '#bc6e5f',
          400: '#a35144',
          500: '#8a352a',
          600: '#7e2c25',
          700: '#6e201c',
          800: '#5e1117',
          900: '#4d000d',
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
