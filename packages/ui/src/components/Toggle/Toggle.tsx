"use client";

import type React from "react";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import { type Colors, ColorsEnum, type DeepPartial } from "../../types";
import { IconButton, type IconButtonProps } from "../IconButton";
import type { ToggleTheme } from "./theme";

export interface ToggleProps extends IconButtonProps {
  active?: boolean;
  theme?: DeepPartial<ToggleTheme>;
  color?: Colors;
}

/**
 * @name Toggle
 *
 * @description A simple toggle component that can be used to switch between two states as a button
 *
 * @returns {React.FC<ToggleProps>}
 * @example
 *
 * <Toggle onClick={toggle} active={value}>
 *  <TbItalic />
 * </Toggle>
 *
 * @returns {React.ReactNode}
 */
export const Toggle: React.FC<ToggleProps> = ({
  active = false,
  color = ColorsEnum.primary,
  theme: customTheme = {},
  rounded = "lg",
  className,

  ...props
}: ToggleProps): React.ReactNode => {
  const theme = mergeDeep(getTheme().toggle, customTheme);

  return (
    <IconButton
      {...props}
      rounded={rounded}
      className={cn(
        theme.base,

        active ? theme.active.on.base : theme.active.off.base,
        active ? theme.active.on.colors[color] : theme.active.off.colors[color],
        className,
      )}
    />
  );
};
