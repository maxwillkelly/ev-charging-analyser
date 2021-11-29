import color from "color";

type Colours = {
  primary: string;
  secondary: string;
  lightestGrey: string;
  lightGrey: string;
  jet: string;
  darkGrey: string;
  black: string;
  white: string;
  green: string;
  error: string;
};

const colours: Colours = {
  primary: "#0A99FF",
  secondary: color("#000000").alpha(0.64).rgb().string(),
  lightestGrey: "#e5e5e5",
  lightGrey: "#C4C4C4",
  jet: "#AAAAAA",
  darkGrey: "#34312D",
  black: "#14110F",
  white: "#FFFFFF",
  green: "#21C056",
  error: "#F40119",
};

export default colours;
