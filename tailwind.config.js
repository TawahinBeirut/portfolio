/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "Background" : "#F0FCEE",
        "Abd-el-Bg1" : "#1D3F27",
        "Abd-el-Bg2" : "#E2F7E6"
      },
      fontFamily:{
        'Presentation' : ['Inter', 'sans-serif'],
        'Button' : ['Bodoni Moda','serif']
      }
    },
    
  },
  
  plugins: [],
}

