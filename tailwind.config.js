const THEME = require("./common/theme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: THEME.breakpoints,
    fill: (tw_theme) => ({
      ...tw_theme,
      ...THEME.colors,
    }),
    extend: {
      colors: THEME.colors,
      listStyleType: {
        alpha: "lower-alpha",
      },
      zIndex: {
        header: 2000000,
        modal: 200000000,
        toast: 2000000000,
      },
      lineHeight: {
        0: "0px",
      },
      maxWidth: {
        611: "38.188rem",
        753: "47.063rem",
      },
      maxHeight: {
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "95vh": "95vh",
        "100vh": "100vh",
        "115vh": "115vh",
      },
      minHeight: {
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "95vh": "95vh",
        "100vh": "100vh",
        "115vh": "115vh",
      },
      spacing: {
        22: "5.5rem",
        40: "8.75rem",
        64: "16rem",
        72: " 18rem",
        80: "20rem",
        96: "24rem",
        150: "9.375rem",
        175: "10.938rem",
        240: "15rem",
        247: "15.438rem",
        279: "17.438rem",
        300: "18.75rem",
        345: "21.563rem",
        349: "21.813rem",
        368: "23rem",
        390: "24.375rem",
        407: "25.43rem",
        415: "25.938rem",
        417: "26.063rem",
        450: "28.125rem",
        460: "28.75rem",
        464: "29rem",
        490: "30.625rem",
        512: "32rem",
        529: "33.063rem",
        540: "33.75rem",
        564: "35.25rem",
        600: "37.5rem",
        609: "38.063rem",
        610: "38.125rem",
        640: "40rem",
        672: "42rem",
        720: "45rem",
        730: "45.625rem",
        735: "45.938rem",
        753: "47.063rem",
        835: "52.188rem",
        918: "57.375rem",
        1100: "68.75rem",
        //
        "6px": "6px",
        "45pc": "45%",
        "1px": "0.063rem",
        "2px": "0.125rem",
      },
      boxShadow: {
        button: "0px 0px 20px rgba(227, 230, 252, 0.7)",
        secondary: "0px 0px 20px 0px #E3E6FC 70%",
        beta: "5px -4px 10px 0px #4A60D4 inset",
        layout: "0px 0px 15px 0px #E7E7E7",
        label: "0px 0px 5px 0px #E7E7E7",
        icon: "0px 0px 3px 0px #CECECE",
      },
      borderRadius: {
        15: "0.938rem",
        22: "1.3125em",
      },
      borderWidth: {
        1: "1px",
      },
      animation: {
        swing:
          "swing-in-top-fwd 0.5s cubic-bezier(0.175,0.885,0.32,1.275) both",
        scaleUp:
          "scale-up-center 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both",
        swingIn:
          "swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both",
        scaleInCenter:
          " scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        fadeInFwd:
          "fade-in-fwd 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
      backgroundSize: {
        "hero-xl": "855px 100%",
        "hero-lg": "657px 100%",
        "hero-md": "529px 100%",
        "hero-xs": "95% 319px",
        "about-pattern-xl": "1180px 735px",
        "about-pattern-lg": "898px 672px",
        "about-pattern-md": "609px 417px",
        "about-pattern-xs": "95% auto",
      },
    },
    fontSize: THEME.fontSizes,
    fontFamily: {
      sans: "Poppins",
      serif: "Poppins",
      mono: "Poppins",
      display: "Poppins",
      body: "Poppins",
    },
    animation: {
      swing: "swing-in-top-fwd 0.5s cubic-bezier(0.175,0.885,0.32,1.275) both",
      scaleUp:
        "scale-up-center 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both",
      swingIn:
        "swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both",
      scaleInCenter:
        " scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      fadeInFwd:
        "fade-in-fwd 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
    },
    backgroundImage: (theme) => ({
      "gradient-primary":
        "linear-gradient(298.69deg, theme('colors.primary.DEFAULT') -2.42%, theme('colors.primary.DEFAULT') 102.42%)",
    }),
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      fill: ["hover", "group-hover"],
      borderStyle: ["hover", "group-hover"],
      borderWidth: ["hover", "group-hover"],
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen xs": {
            maxWidth: "100%",
            padding: "0 1em",
          },
          "@screen sm": {
            maxWidth: "100%",
            padding: "0 1em",
          },
          "@screen md": {
            maxWidth: "690px",
            padding: "0",
          },
          "@screen lg": {
            maxWidth: "930px",
            padding: "0",
          },
          "@screen xl": {
            maxWidth: "1100px",
            padding: "0",
          },
        },
      });
    },
  ],
};
