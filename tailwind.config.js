/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.{edge,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        Back: '#ffc300',
        putih: '#fffef3',
        Primer: '#ff9e01',
        Orange: '#ff7b00',
        Tan: '#150d0a'
      
      },
      fontFamily: {
        Poppins: ['Poppins'],
        PoppinsBold : ['PoppinsBold']
      }
    },
  },
  plugins: [],
}

