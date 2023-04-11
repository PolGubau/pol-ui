import { mercuryTheme, venusTheme } from "../themes";

export const getTheme = (theme: string) => {
  switch (theme) {
    case "mercury":
      return mercuryTheme;
    case "venus":
      return venusTheme;
    default:
      return mercuryTheme;
  }
};
