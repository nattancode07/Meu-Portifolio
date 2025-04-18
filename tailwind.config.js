/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#F2F0F4',
        darkHover: '#2A272C',
        darkTheme: '#0A090C'
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        'black' : '4px 4px 0px #000',
        'white' : '4px 4px 0px #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      theme: {
        extend: {
          backgroundImage: {
            'footer-bg': "url('/footer-bg-color.png')",
          }
        }
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

