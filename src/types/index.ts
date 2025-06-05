// Common TypeScript types and interfaces
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  poster: string;
  backdrop: string;
  releaseDate: Date;
  genre: string[];
  rating: number;
  duration: number;
  videoUrl?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type LoadingState = "idle" | "loading" | "succeeded" | "failed";

export interface ErrorState {
  message: string;
  code?: string | number;
}

// Color System Types
export type ColorVariant = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  white: string;
  black: string;
  red: string;
}

export interface SecondaryPalette extends Omit<ColorPalette, "white" | "black" | "red"> {
  red100: string;
  red200: string;
  red300: string;
  blue100: string;
  blue200: string;
  blue300: string;
  green: string;
}

export type BackgroundVariant = "primary" | "secondary" | "tertiary" | "card" | "modal";
export type TextVariant = "primary" | "secondary" | "tertiary" | "disabled" | "error" | "success" | "warning" | "info";
export type AccentVariant = "blue" | "green" | "yellow" | "purple" | "pink" | "orange";
export type StatusVariant = "success" | "error" | "warning" | "info";
export type BorderVariant = "primary" | "secondary" | "light" | "focus";
