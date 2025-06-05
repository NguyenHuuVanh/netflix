/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Netflix Custom Colors
      colors: {
        // Primary colors
        "netflix-red": "#E50814",
        "netflix-white": "#FFFFFF",
        "netflix-black": "#000000",

        // Secondary colors
        "netflix-red-100": "#EB3942",
        "netflix-red-200": "#C11119",
        "netflix-red-300": "#F50723",
        "netflix-blue-100": "#0071EB",
        "netflix-blue-200": "#448EF4",
        "netflix-blue-300": "#54B9C5",
        "netflix-green": "#46D369",

        // Neutral colors (Grey variations)
        "netflix-grey": {
          10: "#e5e5e5",
          20: "#dcdcdc",
          35: "#d2d2d2",
          50: "#bcbcbc",
          100: "#b3b3b3",
          250: "#777777",
          350: "#545454",
          400: "#414141",
          450: "#404040",
          500: "#3a3a3a",
          550: "#363636",
          600: "#333333",
          650: "#2f2f2f",
          700: "#2a2a2a",
          750: "#262626",
          800: "#232323",
          850: "#181818",
          900: "#141414",
        },

        // Background colors
        "netflix-bg": {
          primary: "#141414",
          secondary: "#000000",
          tertiary: "#1A1A1A",
          card: "#2A2A2A",
          modal: "#333333",
        },

        // Transparent colors
        "netflix-transparent-white": {
          15: "rgba(255, 255, 255, 0.15)",
          20: "rgba(255, 255, 255, 0.20)",
          30: "rgba(255, 255, 255, 0.30)",
          35: "rgba(255, 255, 255, 0.35)",
          50: "rgba(255, 255, 255, 0.50)",
          70: "rgba(255, 255, 255, 0.70)",
        },

        "netflix-transparent-black": {
          30: "rgba(0, 0, 0, 0.30)",
          60: "rgba(0, 0, 0, 0.60)",
          90: "rgba(0, 0, 0, 0.90)",
        },
      },

      // Netflix Font Family
      fontFamily: {
        netflix: [
          '"Netflix Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        "netflix-heading": ['"Bebas Neue"', '"Netflix Sans"', "Arial", "sans-serif"],
        "netflix-display": ['"Bebas Neue"', "Impact", '"Arial Black"', "sans-serif"],
      },

      // Custom spacing for Netflix design
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },

      // Custom border radius
      borderRadius: {
        netflix: "4px",
        "netflix-card": "8px",
      },

      // Custom shadows
      boxShadow: {
        netflix: "0 4px 8px rgba(0, 0, 0, 0.3)",
        "netflix-card": "0 8px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
