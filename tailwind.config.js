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
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.25em",
      "5xl": "2.8125rem",
      "6xl": "3.75rem",
      hero: "100px",
      herosub: "30px",
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
        black: "#222222",
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
        25: "6.25rem",
        30: "7.5rem",
        35: "8.75rem",
        footer: "9.25rem",
        40: "10rem",
        45: "11.25rem",
        47.5: "11.875rem",
        50: "12.5rem",
        desktop: "13.75rem",
        60: "15rem",
        onethird: "20.375rem",
        "342px": "21.375rem",
        deshalf: "30.625rem",
        deswhole: "56.375rem",
        digitaldes: "68.75rem",
        digitalmob: "1500px",
        logo: "113px",
        hoverbg: "780px",
      },
    },
  },
  variants: {},
  plugins: [],
};
