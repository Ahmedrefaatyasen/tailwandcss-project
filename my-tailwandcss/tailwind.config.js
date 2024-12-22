/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#67dbda"
      },
      keyframes:{
        moveright:{
          "0%":{transform:"translateX(0)"},
          "50%":{transform:"translateX(10px)"},
          "100%":{transform:"translateX(0)"}
        }
      },
      animation:{
        moveright:"moveright 1s ease-in-out infinite"
      },
      screens:{
        sm:"540px",
        md:"720px",
        lg:"960px",
        xl:"1140px",
        xll:"1320px"
      }
    },
  },
  plugins: [],
}
