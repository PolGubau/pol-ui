import type { ColorsType } from "../../types";

export interface GaugeTheme {
  color: ColorsType;
}

export const gaugeTheme: GaugeTheme = {
  color: {
    primary: "stroke-primary",
    secondary: "stroke-secondary",
    success: "stroke-success",
    warning: "stroke-warning",
    error: "stroke-error",
    info: "stroke-info",
  },
};
