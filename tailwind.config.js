module.exports = {
	theme: {
			fontFamily: {
          sans: ['Open Sans', 'Montserrat'],
      },
	},
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--font-sans': theme('fontFamily.sans').join(', '),
        },
      });
    },
  ],
};
