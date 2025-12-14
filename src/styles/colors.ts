// src/styles/colors.ts

type Shade =
  | 50 | 100 | 200 | 300 | 400
  | 500 | 600 | 700 | 800 | 900;

type ColorScale = Record<Shade, string>;

const generateScale = (base: string): ColorScale => ({
  50:  `${base}0D`,
  100: `${base}1A`,
  200: `${base}33`,
  300: `${base}4D`,
  400: `${base}66`,
  500: `${base}80`,
  600: `${base}99`,
  700: `${base}B3`,
  800: `${base}CC`,
  900: `${base}E6`,
});

export const Colors = {
  primary: generateScale("#4CAF50"),
  secondary: generateScale("#FFC107"),

  red: generateScale("#F44336"),
  pink: generateScale("#E91E63"),
  purple: generateScale("#9C27B0"),
  deepPurple: generateScale("#673AB7"),
  indigo: generateScale("#3F51B5"),
  blue: generateScale("#2196F3"),
  lightBlue: generateScale("#03A9F4"),
  cyan: generateScale("#00BCD4"),
  teal: generateScale("#009688"),
  green: generateScale("#4CAF50"),
  lightGreen: generateScale("#8BC34A"),
  lime: generateScale("#CDDC39"),
  yellow: generateScale("#FFEB3B"),
  amber: generateScale("#FFC107"),
  orange: generateScale("#FF9800"),
  deepOrange: generateScale("#FF5722"),
  brown: generateScale("#795548"),
  grey: generateScale("#9E9E9E"),
  blueGrey: generateScale("#607D8B"),

  success: generateScale("#2ECC71"),
  warning: generateScale("#F1C40F"),
  danger: generateScale("#E74C3C"),
  info: generateScale("#3498DB"),
} as const;
