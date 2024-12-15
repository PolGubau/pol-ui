import { error } from "./error";
import { info } from "./info";
import { primary } from "./primary";
import { secondary } from "./secondary";
import { success } from "./success";
import type { ThemeColors } from "./types";
import { warning } from "./warning";

export const colors: ThemeColors = {
  info,
  error,
  warning,
  success,
  primary,
  secondary,
};

export type Colors = typeof colors;
