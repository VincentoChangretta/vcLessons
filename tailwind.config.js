/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        m: "18px",
        l: "24px",
        title: "45px" 
      },
      colors: {
        primaryColor: "#4264EB",
        primaryColorHover: "#5A77EB",
        primaryColorDark: "#283D8F",
        primaryColorSuperDark: "#0A0F23",
        primaryColorInv: "#fff",
        htmlColor: "#F2672E",
        cssColor: "#4264EB",
        jsColor: "#F2BF26",
        gitColor: "#1a1a1a",
      },
      borderRadius: {
        standartRadius: "30px",
      },
      transitionDuration: {
        hoverDur: ".3s"
      },
      minHeight: {
        minusHeader: "calc(100vh - 116px)"
      }
    },
  },
  plugins: [],
};
