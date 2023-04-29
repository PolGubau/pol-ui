import { ITheme } from "../types";
import { globalTheme } from "./globalTheme";

export const mercuryTheme: ITheme = {
  content: {
    width: "100%",
    maxWidth: "1200px",
    centered: true,
    padding: "0px",
  },

  colors: {
    primary: "#2B2D42",
    secondary: "#8D99AE",
    neutral: "#EDF2F4",
    accent: "#FECC02",
    error: "#AA151B",
  },
  borderRadius: {
    none: "0px",
    small: "7px",
    medium: "13px",
    large: "19px",
    rounded: "9999px",
  },
  spacing: {
    small: "5px",
    medium: "10px",
    large: "15px",
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
