module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFD6E8',
          lavender: '#E6D6FF',
          mint: '#D6FFE6',
          peach: '#FFE6D6',
          sky: '#D6F0FF',
          yellow: '#FFF9D6',
          coral: '#FFE0D6',
          sage: '#E0F2E7',
          cream: '#FFF8F0',
          periwinkle: '#E0E6FF',
        },
        soft: {
          pink: '#F8BBD9',
          purple: '#C8A8E9',
          blue: '#A8C8F0',
          green: '#A8E6A3',
          yellow: '#F5E6A3',
          orange: '#F5C99B',
          teal: '#A3E0E6',
          indigo: '#B8A8F0',
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'pastel': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'pastel-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.1)',
      }
    }
  },
  plugins: [],
}
