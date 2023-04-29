import { ITheme } from "../types";
import { globalTheme } from "./globalTheme";

export const venusTheme: ITheme = {
  content: {
    width: "100%",
    maxWidth: "800px",
    centered: false,
    padding: "0px",
  },
  colors: {
    primary: "#5D3333",
    secondary: "#C44D4D",
    neutral: "#F9C8C8",
    accent: "#E437B3",
    error: "#FF974D",
  },
  borderRadius: {
    none: "0px",
    small: "0px",
    medium: "5px",
    large: "10px",
    rounded: "9999px",
  },
  spacing: {
    small: "10px",
    medium: "15px",
    large: "50px",
  },
  fonts: {
    primary: "Poppins",
    secondary: "Roboto",
  },
  shadows: {
    small: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.25)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.25)",
  },
  fontSize: {
    small: "12px",
    medium: "14px",
    large: "16px",
  },
  ...globalTheme,
};
