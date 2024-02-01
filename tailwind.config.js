/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./signup/**/*.{html,js}"],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
   
    fontWeight:{
    thin:["300"],
    light:["400"],
    medium:["500"],
    semibold:["600"],
    bold:["700"],
    extrabold:["800"],
    black:["900"],
    },
  
    colors: {
    secondaryColor: '#FD6B22',
    bgColor: '#ffffff',
    textColor: '#6B6666',
    textDeep:'#1B1D21',
    primaryColor: '#FF4D02CC',
},

    container: {
      center: true,
      // padding: {
      //   Default: '2rem',
      //   sm: '2.5rem'
      // }
    }
    },
    fontFamily: {
      sans:['DM Sans', 'sans-serif']
  },
  },
  plugins: [],
}

