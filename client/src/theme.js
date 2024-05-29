export const tokens = {
  grey: {
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  primary: {
    // light green
    100: "#A1D8FF",
    200: "#4682B4",
    300: "#155F8F",
    400: "#002B55",
    500: "#003762",
    600: "#002149",
    700: "#002B55",
    800: "#002750",
    900: "#00264F",
  },
  secondary: {
    // green
    100: "#e0f2f1",
    200: "#b2dfdb",
    300: "#80cbc4",
    400: "#4db6ac",
    500: "#26a69a",
    600: "#009688",
    700: "#00897b",
    800: "#00796b",
    900: "#004d40",
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    light: "#2d2d34",
    main: "#1f2026",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[200],
      light: tokens.primary[100],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: '"Roboto Serif", serif', // Set the default font family to "Roboto Serif"
    fontSize: 12,
    h1: {
      fontFamily: '"Roboto Serif", serif', // Set font family for each heading level
      fontSize: 32,
    },
    h2: {
      fontFamily: '"Roboto Serif", serif',
      fontSize: 24,
    },
    h3: {
      fontFamily: '"Roboto Serif", serif',
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: '"Roboto Serif", serif',
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: '"Roboto Serif", serif',
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: '"Roboto Serif", serif',
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};