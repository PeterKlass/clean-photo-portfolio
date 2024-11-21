module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: ['Playfair Display', 'serif'], // Für Fließtext
      secondary: ['Mulish', 'sans-serif'],   // Für den Claim
      // Optional: Du kannst 'Sen' hier hinzufügen, wenn du möchtest
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',
        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
};
