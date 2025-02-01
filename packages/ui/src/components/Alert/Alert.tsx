"use client";

import type { ComponentProps, FC } from "react";
import { HiX } from "react-icons/hi";
import { TbAlertTriangle, TbBulb, TbCheck, TbChevronRight, TbExclamationCircle, TbInfoCircle } from "react-icons/tb";
import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import { ColorsEnum, RoundedSizesEnum } from "../../types/enums";
import type { Colors, DeepPartial, RoundedSizes } from "../../types/types";
import { IconButton } from "../IconButton/IconButton";
import type { AlertTheme } from "./theme";

export interface AlertProps extends Omit<ComponentProps<"div">, "color"> {
  color?: Colors;
  icon?: FC<ComponentProps<"svg">>;
  onDismiss?: () => void;
  rounded?: RoundedSizes;
  theme?: DeepPartial<AlertTheme>;
  bordered?: boolean;
  withIcon?: boolean;
}

/**
 * The Alert component is used to display a message to the user
 *
 * @param {JSX.Element} props.additionalContent - The additional content of the alert
 *
 * @param {Colors} props.color - The color of the alert
 *
 * @param {FC<ComponentProps<'svg'>>} props.icon - The icon of the alert
 *
 * @param {() => void} props.onDismiss - The function to call when the alert is dismissed
 *
 * @param {RoundedSizes} props.rounded - The rounded size of the alert
 *
 * @param {DeepPartial<AlertTheme>} props.theme - The theme of the alert
 *
 * @param {boolean} props.bordered - The border of the alert
 *
 * @param {ComponentProps<'div'>} props - The props of the alert
 *
 * @returns JSX.Element
 *
 * @example
 * <Alert
 *  onDismiss={() => alert('Dismissed')}
 * color={ColorsEnum.primary}
 * icon={BiCheck}
 * rounded={RoundedSizesEnum.lg}
 * bordered
 * >
 * This is a primary alert with a check icon
 * </Alert>
 */

export const Alert: FC<AlertProps> = ({
  children,
  className,
  color = ColorsEnum.secondary,
  icon: Icon,
  onDismiss = undefined,
  withIcon = true,
  rounded = RoundedSizesEnum.md,
  theme: customTheme = {},
  bordered,
  ...props
}: AlertProps) => {
  const theme: AlertTheme = mergeDeep(getTheme().alert, customTheme);

  const defaultIcons = {
    error: TbExclamationCircle,
    success: TbCheck,
    warning: TbAlertTriangle,
    info: TbInfoCircle,
    primary: TbBulb,
    secondary: TbChevronRight,
  };

  const DefaultIcon = Icon || defaultIcons[color];

  return (
    <section
      className={cn(theme.base, theme.color[color], theme.rounded[rounded], bordered && theme.borderAccent, className)}
      role="alert"
      {...props}
    >
      <div className={theme.wrapper} data-testid="ui-alert-wrapper">
        {withIcon && <DefaultIcon className={theme.icon} data-testid="ui-alert-icon" />}
        <div>{children}</div>
        {onDismiss && typeof onDismiss === "function" && (
          <IconButton
            size="sm"
            label="Dismiss"
            title="Dismiss"
            data-testid="ui-alert-dismiss"
            type="button"
            onClick={onDismiss}
            color={color}
          >
            <HiX aria-hidden={true} title="Dismiss" size={17} />
          </IconButton>
        )}
      </div>
    </section>
  );
};
