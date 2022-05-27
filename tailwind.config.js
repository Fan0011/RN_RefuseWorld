module.exports = {
  purge: ["./**/*.js", "./**/*.tsx"],
  theme: {
    fontWeight: {
      light: 300,
      medium: 500,
    },
    fontSize: {
      xxs: ["0.75rem", 1.1],
      tiny: ["1rem", 1],
      small: ["1.25rem", 1.3],
      base: ["1.875rem", 1.2666666667],
      large: ["2.8125rem", 1.1],
    },
    fontFamily: {
      sans: [
        "Visuelt",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: [
        "bely-display",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    colors: {
      blue: "#4d7cff",
      brown: "#815900",
      green: "#08c900",
      orange: "#ff9300",
      pink: "#ff27c5",
      purple: "#a346ff",
      red: "#ff0000",
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      social: {
        telegram: "#26A5E4",
        twitter: "#1DA1F2",
        facebook: "#1877F2",
        instagram: "#E4405F",
        whatsapp: "#25D366",
      },
    },
    extend: {
      boxShadow: {
        "pill-black": "0 2px 0 0 rgb(0, 0, 0)",
        "pill-white": "0 2px 0 0 rgb(255, 255, 255)",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      spacing: {
        112: "32rem",
        "cover-image": "45rem",
      },
      zIndex: {
        "-10": "-10",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            fontSize: "20px",
            lineHeight: "30px",
            strong: {
              fontWeight: theme("fontWeight.medium"),
            },
            a: {
              fontWeight: theme("fontWeight.medium"),
            },
            /**
             * Headers
             */
            h1: {
              color: theme("colors.black"),
              fontWeight: "normal",
              fontSize: "30px",
              lineHeight: "38px",

              textAlign: "center",
            },
            h2: {
              color: theme("colors.black"),
              fontWeight: "normal",
              fontSize: "30px",
              lineHeight: "38px",

              textAlign: "center",
            },
            h3: {
              color: theme("colors.black"),
              fontWeight: "normal",
              fontSize: "30px",
              lineHeight: "38px",

              textAlign: "center",
            },
            h4: {
              color: theme("colors.black"),
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "30px",
            },
            h5: {
              color: theme("colors.black"),
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "30px",
            },
            h6: {
              color: theme("colors.black"),
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "30px",
            },
            /**
             * Lists
             */
            "ul > li": {
              paddingLeft: "1.5em",
            },
            "ul > li::before": {
              backgroundColor: theme("colors.black"),
              top: "0.5em",
            },
          },
        },
        lg: {
          css: {
            fontSize: "30px",
            lineHeight: "38px",
            /**
             * Headers
             */
            h1: {
              fontSize: "45px",
              lineHeight: "50px",

              textAlign: "center",
            },
            h2: {
              fontSize: "45px",
              lineHeight: "50px",

              textAlign: "center",
            },
            h3: {
              fontSize: "45px",
              lineHeight: "50px",

              textAlign: "center",
            },
            h4: {
              fontSize: "30px",
              lineHeight: "38px",
            },
            h5: {
              fontSize: "30px",
              lineHeight: "38px",
            },
            h6: {
              fontSize: "30px",
              lineHeight: "38px",
            },
            /**
             * Lists
             */
            "ul > li": {
              paddingLeft: "1.5em",
            },
            "ul > li::before": {
              top: "0.5em",
            },
          },
        },
      }),
    },
  },
  corePlugins: {
    container: false,
  },
  variants: {
    extend: {
      ringWidth: ["group-focus"],
      textColor: ["group-focus"],
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: ["lg"],
    }),
    require("@tailwindcss/forms"),
  ],
};
