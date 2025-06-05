import { COLORS } from "../constants";

// Color utility functions
export const getColor = {
  // Primary colors: white, black, red
  primary: (variant: "white" | "black" | "red"): string => {
    return COLORS.primary[variant];
  },

  // Secondary colors: red100, red200, red300, blue100, blue200, blue300, green
  secondary: (variant: "red100" | "red200" | "red300" | "blue100" | "blue200" | "blue300" | "green"): string => {
    return COLORS.secondary[variant];
  },

  // Neutral colors: grey variations
  neutral: (
    variant:
      | "grey10"
      | "grey20"
      | "grey35"
      | "grey50"
      | "grey100"
      | "grey250"
      | "grey300T40"
      | "grey300T70"
      | "grey350"
      | "grey400"
      | "grey450"
      | "grey500"
      | "grey550"
      | "grey600T60"
      | "grey600"
      | "grey650"
      | "grey700"
      | "grey750"
      | "grey800"
      | "grey850"
      | "grey900"
  ): string => {
    return COLORS.neutral[variant];
  },

  // Transparent white: 15, 20, 30, 35, 50, 70
  transparentWhite: (variant: "15" | "20" | "30" | "35" | "50" | "70"): string => {
    return COLORS.transparentWhite[variant];
  },

  // Transparent black: 30, 60, 90
  transparentBlack: (variant: "30" | "60" | "90"): string => {
    return COLORS.transparentBlack[variant];
  },
};
