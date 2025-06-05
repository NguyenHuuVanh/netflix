// TailwindCSS integration with Netflix color system

/**
 * Generate TailwindCSS class names for Netflix colors
 */
export const tailwindColors = {
  // Primary colors
  primary: {
    red: 'bg-netflix-red text-netflix-white',
    white: 'bg-netflix-white text-netflix-black',
    black: 'bg-netflix-black text-netflix-white',
  },
  
  // Secondary colors
  secondary: {
    red100: 'bg-netflix-red-100',
    red200: 'bg-netflix-red-200', 
    red300: 'bg-netflix-red-300',
    blue100: 'bg-netflix-blue-100',
    blue200: 'bg-netflix-blue-200',
    blue300: 'bg-netflix-blue-300',
    green: 'bg-netflix-green',
  },
  
  // Neutral backgrounds
  neutral: {
    grey100: 'bg-netflix-grey-100',
    grey500: 'bg-netflix-grey-500',
    grey600: 'bg-netflix-grey-600',
    grey700: 'bg-netflix-grey-700',
    grey800: 'bg-netflix-grey-800',
    grey900: 'bg-netflix-grey-900',
  },
  
  // Background utilities
  background: {
    primary: 'bg-netflix-bg-primary',
    secondary: 'bg-netflix-bg-secondary',
    card: 'bg-netflix-bg-card',
    modal: 'bg-netflix-bg-modal',
  },
  
  // Text colors
  text: {
    primary: 'text-netflix-white',
    secondary: 'text-netflix-grey-100',
    tertiary: 'text-netflix-grey-250',
    red: 'text-netflix-red',
  },
};

/**
 * Common TailwindCSS component classes for Netflix UI
 */
export const netflixClasses = {
  // Button variants
  button: {
    primary: 'bg-netflix-red hover:bg-netflix-red-200 text-netflix-white font-bold py-3 px-6 rounded-netflix transition-colors duration-200',
    secondary: 'bg-netflix-grey-600 hover:bg-netflix-grey-500 text-netflix-white font-bold py-3 px-6 rounded-netflix transition-colors duration-200',
    outline: 'border-2 border-netflix-red text-netflix-red hover:bg-netflix-red hover:text-netflix-white font-bold py-3 px-6 rounded-netflix transition-all duration-200',
  },
  
  // Card variants
  card: {
    default: 'bg-netflix-bg-card border border-netflix-grey-600 rounded-netflix-card p-5 shadow-netflix-card',
    modal: 'bg-netflix-bg-modal border border-netflix-grey-550 rounded-netflix-card p-6 shadow-netflix',
  },
  
  // Text variants
  text: {
    heading: 'font-netflix-heading text-netflix-white',
    title: 'font-netflix font-bold text-netflix-white',
    body: 'font-netflix text-netflix-grey-100',
    light: 'font-netflix font-light text-netflix-grey-250',
  },
  
  // Layout utilities
  container: 'mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-12 lg:py-16',
};

/**
 * Helper function to combine TailwindCSS classes
 */
export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Generate custom TailwindCSS utility for responsive design
 */
export const responsiveClasses = {
  // Responsive grid
  movieGrid: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4',
  
  // Responsive text
  heroTitle: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
  sectionTitle: 'text-xl sm:text-2xl md:text-3xl',
  
  // Responsive spacing
  sectionSpacing: 'py-8 sm:py-12 md:py-16 lg:py-20',
  containerSpacing: 'px-4 sm:px-6 lg:px-8 xl:px-12',
};
