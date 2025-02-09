import type { ComponentProps } from "react";

import type { Colors, DeepPartial } from "../../types";
import type { CheckboxTheme } from "./theme";

/**
 * @name CheckboxProps
 * @description Props for the Checkbox component.
 */
export interface CheckboxProps extends Omit<ComponentProps<"input">, "type" | "ref" | "color" | "checked"> {
  theme?: DeepPartial<CheckboxTheme>;

  ref?: React.Ref<HTMLInputElement>;

  /**
   * @name color
   * @description Optional prop to specify the color of the checkbox.
   * @default primary
   * @type Colors
   * @enum [primary, secondary, success, error, warning, info]
   * @example
   * ```tsx
   * <Checkbox color="primary" />
   * <Checkbox color="secondary" />
   * <Checkbox color="success" />
   * ```
   */
  color?: Colors;

  /**
   * @name label
   * @description Optional prop to add a label to the checkbox.
   * @default null
   * @type string
   * @example
   * ```tsx
   * <Checkbox label="Agree to terms" />
   * ```
   */
  label?: string;

  checked?: CheckedState;
}

export type CheckedState = boolean | "indeterminate";
