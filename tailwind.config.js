module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: {
    // enabled: true,
    content: ["./src/**/*.html"],
  },
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1680px",
    },
    fontFamily: {
      Proxima: ['"Proxima Nova"', "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
    opacity: {
      0: "0",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
    },
    borderColor: {
      primary: "#003665",
      secondary: "#C98900",
      bdlight: "rgba(34,34,34,0.1)",
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        primary: "#003665",
        secondary: "#C98900",
        secondaryhover: "#B07800",
        whitehover: "#F2F2F2",
        black: "#000000",
        bodytext: "#888888",
        bdlight: "#D3D3D3",
        bddark: "#A8A8A8",
        input: "#F0F0F0",
        placeholder: "#C0C0C0",
        gray: {
          100: "#eeeeee",
          200: "#dddddd",
          300: "#cccccc",
          400: "#bbbbbb",
          500: "#aaaaaa",
          600: "#999999",
          700: "#666666",
          800: "#333333",
          900: "#222222",
        },
      },
      spacing: {
        1.5: "0.375rem",
        2.5: "0.625rem",
        4.5: "1.125rem",
        7: "1.75rem",
        7.5: "1.875rem",
        11: "2.75rem",
        12.5: "3.125rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
        22.5: "5.625rem",
        25: "6.25rem",
        30: "7.5rem",
        35: "8.75rem",
        footer: "9.25rem",
        40: "10rem",
        45: "11.25rem",
        47.5: "11.875rem",
        50: "12.5rem",
        55: "13.75rem",
        60: "15rem",
        81.5: "20.375rem",
        85.5: "21.375rem",
        100: "25rem",
        122.5: "30.625rem",
        129: "32.25rem",
        225.5: "56.375rem",
        digitaldes: "68.75rem",
        digitalmob: "1500px",
        logo: "113px",
        hoverbg: "780px",
      },
      fontSize: {
        "2xl": "1.75rem",
        7.5: "1.875rem",
        "3xl": "2rem",
        9: "2.25em",
        "5xl": "2.8125rem",
        12: "3rem",
        "6xl": "3.75rem",
        14: "3.5rem",
        16: "4rem",
        25: "6.25rem",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "1/12": "8.33333333%",
        "2/12": "16.6666667%",
        "3/12": "25%",
        "4/12": "33.33333333%",
        "5/12": "41.6666666%",
        "6/12": "50%",
        "7/12": "58.3333333%",
        "8/12": "66.6666666%",
        "9/12": "75%",
        "10/12": "83.3333333%",
        "11/12": "91.6666666%",
        "22%": "22%",
        "78%": "78%",
      },
      maxWidth: {
        "200px": "12.25rem",
        "228px": "14.25rem",
        "1000px": "62.5rem",
      },

      inset: {
        "1/2": "50%",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        10: "2.5rem",
        "42px": "2.625rem",
        "50px": "3.125rem",
        "-11": "-2.75rem",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {},
  plugins: [],
};
