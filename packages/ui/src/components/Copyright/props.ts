import type { ComponentProps } from "react";
import type { DeepPartial } from "../../types";
import type { CopyrightTheme } from "./theme";

/**
 * @name CopyrightProps
 * @description Props for the Copyright component.
 */
export interface CopyrightProps extends ComponentProps<"div"> {
  by?: string;
  href?: string;

  /**
   * @name theme
   * @description Optional prop to change the theme of the copyright text.
   * @default {}
   * @type DeepPartial<CopyrightTheme>
   * @example
   * ```tsx
   * <Copyright theme={{ color: 'text-red-500' }} />
   * ```
   */
  theme?: DeepPartial<CopyrightTheme>;

  /**
   * @name year
   * @description Optional prop to specify the year for the copyright.
   * @default null
   * @type number
   * @example
   * ```tsx
   * <Copyright year={2024} />
   * ```
   */
  year?: number;
}
