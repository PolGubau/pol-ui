"use client";

import type { ComponentProps, FC, ReactNode } from "react";
import { HiX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import { getTheme } from "../../theme-store";
import { ColorsEnum, RoundedSizesEnum } from "../../types/enums";
import type { Colors, DeepPartial, RoundedSizes } from "../../types/types";
import { IconButton } from "../IconButton";
import type { AlertTheme } from "./theme";

export interface AlertProps extends Omit<ComponentProps<"div">, "color"> {
  additionalContent?: ReactNode;
  color?: Colors;
  icon?: FC<ComponentProps<"svg">>;
  onDismiss?: () => void;
  rounded?: RoundedSizes;
  theme?: DeepPartial<AlertTheme>;
  bordered?: boolean;
}

/**
 *
 * @name Alert
 *
 * @description The Alert component is used to display a message to the user
 *
 * @param {React.ReactNode} props.additionalContent - The additional content of the alert
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
 * @returns React.ReactNode
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
  additionalContent,
  children,
  className,
  color = ColorsEnum.secondary,
  icon: Icon,
  onDismiss,
  rounded = RoundedSizesEnum.md,
  theme: customTheme = {},
  bordered,
  ...props
}: AlertProps): React.ReactNode => {
  const theme: AlertTheme = mergeDeep(getTheme().alert, customTheme);

  const handleOnDismiss = () => {
    onDismiss?.();
  };

  return (
    <div
      className={twMerge(
        theme.base,
        theme.color[color],
        theme.rounded[rounded],
        bordered && theme.borderAccent,
        className,
      )}
      role="alert"
      {...props}
    >
      <div className={theme.wrapper} data-testid="ui-alert-wrapper">
        {Icon && <Icon className={theme.icon} data-testid="ui-alert-icon" />}
        <div>{children}</div>
        {typeof onDismiss === "function" && (
          <IconButton
            label="Dismiss"
            title="Dismiss"
            data-testid="ui-alert-dismiss"
            type="button"
            onClick={handleOnDismiss}
            color={color}
          >
            <HiX aria-hidden={true} title="Dismiss" />
          </IconButton>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
};
