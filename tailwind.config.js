/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center : true,
      padding : "16px",
    },
    backgroundImage:{
      hero : "url('/public/assets/image/bg-overlay.png')",
      banner: "url('/assets/image/banner.png')"
    },
    screens: {
      // 'base': '375px',
      'sm': '425px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1320px',
      // // => @media (min-width: 1536px) { ... }
    },  
    extend: {
      fontFamily : {
        openSans : ["Open Sans", "sans-serif"]
      },
      colors : {
        "Purple" : "#5E50A1",
        "Black"  : "#1F2A36",
        "yellow" : "#FBB017",
        "Grey"   : "#46505C",
        "Grey1"  : "#F6F7F8",
        "Grey2"  : "#9EA0A5",
        "Input" : "#E2E5ED",
      },
    },
  },
  plugins: [],
}

