const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{ts,tsx,js,mdx}','./examples/**/*.{ts,tsx,js,mdx}'],
  theme: {
    extend: {
    
    },
    colors : {
      ...colors,
      'sky': colors.red,
      'blue': colors.red,
    }
  },
  plugins: [],
}
