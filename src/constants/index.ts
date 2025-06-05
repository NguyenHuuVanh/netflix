// API Configuration
// export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';
// App Configuration
export const APP_NAME = "Netflix Clone";
export const APP_VERSION = "1.0.0";

// UI Constants
export const BREAKPOINTS = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  large: "1440px",
} as const;

export const COLORS = {
  primary: {
    white: "#FFFFFF",
    black: "#000000",
    red: "#E50814", // Main Netflix Red
  },

  secondary: {
    red100: "#EB3942",
    red200: "#C11119",
    red300: "#F50723",
    blue100: "#0071EB",
    blue200: "#448EF4",
    blue300: "#54B9C5",
    green: "#46D369", // Main Netflix Green
  },

  neutral: {
    grey10: "#e5e5e5",
    grey20: "#dcdcdc",
    grey35: "#d2d2d2",
    grey50: "#bcbcbc",
    grey100: "#b3b3b3",
    grey250: "#777777",
    grey300T40: "rgba(109, 109, 109, 0.4)", // grey300 with 40% opacity
    grey300T70: "rgba(109, 109, 109, 0.7)", // grey300 with 70% opacity
    grey350: "#545454",
    grey400: "#414141",
    grey450: "#404040",
    grey500: "#3a3a3a",
    grey550: "#363636",
    grey600T60: "rgba(51, 51, 51, 0.6)", // grey550 with 60% opacity
    grey600: "#333333",
    grey650: "#2f2f2f",
    grey700: "#2a2a2a",
    grey750: "#262626",
    grey800: "#232323",
    grey850: "#181818",
    grey900: "#141414",
  },

  transparentWhite: {
    15: "rgba(255, 255, 255, 0.15)", // 15% opacity
    20: "rgba(255, 255, 255, 0.20)", // 20% opacity
    30: "rgba(255, 255, 255, 0.30)", // 30% opacity
    35: "rgba(255, 255, 255, 0.35)", // 35% opacity
    50: "rgba(255, 255, 255, 0.50)", // 50% opacity
    70: "rgba(255, 255, 255, 0.70)", // 70% opacity
  },

  transparentBlack: {
    30: "rgba(0, 0, 0, 0.30)", // 30% opacity
    60: "rgba(0, 0, 0, 0.60)", // 60% opacity
    90: "rgba(0, 0, 0, 0.90)", // 90% opacity
  },
} as const;

// Font Constants
export const FONTS = {
  primary: '"Netflix Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  heading: '"Bebas Neue", "Netflix Sans", Arial, sans-serif',
  display: '"Bebas Neue", Impact, Arial Black, sans-serif',
} as const;

// Netflix specific constants
export const MOVIE_CATEGORIES = {
  TRENDING: "trending",
  TOP_RATED: "top_rated",
  ACTION: "action",
  COMEDY: "comedy",
  HORROR: "horror",
  ROMANCE: "romance",
  DOCUMENTARY: "documentary",
} as const;
