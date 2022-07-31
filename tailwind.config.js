module.exports = {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        base: '#F1F1F1',
        link: '#4B72E0',
        primary: '#00C800',
        secondary: '#9A9B9C',
      },
      spacing: {
        '70%': '70vh',
        '75%': '75vh',
        '95%': '95vh',
        lvh: '100lvh',
        dvh: '100dvh',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
