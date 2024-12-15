"use client";

import type React from "react";
import type { ElementType } from "react";
import { TbX } from "react-icons/tb";
import { cn, colorToTailwind, mergeDeep } from "../../helpers";
import { useRipple } from "../../hooks";
import type { MinimalEvent } from "../../hooks/use-ripple/use-ripple";
import { getTheme } from "../../theme-store";
import { type Colors, ColorsEnum, type DeepPartial, type RoundedSizes } from "../../types";
import { IconButton } from "../IconButton/IconButton";
import type { ChipTheme } from "./theme";

const BASE_COMPONENT = "li";
type BaseComponentType = typeof BASE_COMPONENT;

export interface ChipAction extends React.HTMLAttributes<HTMLButtonElement> {
  element?: React.ReactNode;
  icon?: React.ReactNode;
  label: string;
}

export interface ChipProps<T extends ElementType = BaseComponentType> {
  as?: T;
  children?: React.ReactNode;
  label?: React.ReactNode | string;
  onClick?: (e: React.MouseEvent) => void;
  color?: Colors;
  disabled?: boolean;
  rounded?: RoundedSizes;
  actions?: ChipAction[];
  theme?: DeepPartial<ChipTheme>;
  className?: string;
  elementClassName?: string;
  textClassName?: string;
  onDelete?: (e: React.MouseEvent) => void;
}
/**
 *  Chip component
 * @description The chip component is used to display information in a compact way and can be used to trigger actions when clicked or to display actions when hovered over. It can be used to display tags, categories, actions...
 *  @param {ElementType} props.as - The component to render
 * @param {React.ReactNode} props.children - The content of the chip
 * @param {string} props.label - The label of the chip
 * @param {(e: React.MouseEvent) => void} props.onClick - The function to call when the chip is clicked
 * @param {Colors} props.color - The color of the chip
 * @param {boolean} props.disabled - If the chip is disabled
 * @param {RoundedSizes} props.rounded - The rounded size of the chip
 * @param {ChipAction[]} props.actions - The actions of the chip
 * @param {DeepPartial<ChipTheme>} props.theme - The theme of the chip
 * @param {string} props.className - The class name of the chip
 * @param {string} props.elementClassName - The class name of the element
 * @param {string} props.textClassName - The class name of the text
 * @returns
 * @example
 *
 * <Chip
 *  label="Chip"
 * color={ColorsEnum.primary}
 * rounded="md"
 * actions={[
 *  {
 *   icon: <TbX />,
 *  onClick: () => console.info('close'),
 * },
 * ]}
 * />
 *
 * @returns <Chip />
 */

export const Chip = <T extends ElementType = BaseComponentType>({
  as: BaseComponent,
  children,
  label = undefined,
  onClick = undefined,
  actions = [],
  disabled = false,
  color = ColorsEnum.secondary,
  theme: customTheme = {},
  className,
  elementClassName,
  textClassName,
  onDelete,
}: ChipProps<T>) => {
  const Component = onClick ? "button" : (BaseComponent ?? BASE_COMPONENT);
  const theme = mergeDeep(getTheme().chip, customTheme);

  const [ripple, event] = useRipple({
    disabled: disabled,
    opacity: 0.5,
    className: colorToTailwind(color),
  });

  return (
    <Component
      className={cn(
        theme.base,
        actions.length === 0 ? theme.withoutAction : theme.withAction,
        theme.color[color],
        disabled && theme.disabled,
        !disabled && onClick && theme.clickable,
        className,
      )}
      onPointerDown={(e: MinimalEvent) => onClick && event(e)}
      ref={onClick && ripple}
      onClick={onClick}
    >
      <div className={cn(theme.text, textClassName)}>{label ?? children}</div>

      {/* The actions of the chip will be displayed as icons or elements */}
      {onDelete && (
        <IconButton size="xs" onClick={onDelete} color={"error"} disabled={disabled}>
          <TbX />
        </IconButton>
      )}

      {actions.map(({ onClick, element, icon, label }) => (
        <div key={label}>
          {icon && (
            <IconButton
              size="xs"
              onClick={(e) => {
                e.stopPropagation();
                onClick?.(e);
              }}
              disabled={disabled}
            >
              {icon}
            </IconButton>
          )}
          {element && <div className={cn(theme.element, elementClassName)}>{element}</div>}
        </div>
      ))}
    </Component>
  );
};
