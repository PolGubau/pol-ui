"use client";

import type { ComponentProps, FC, ReactElement } from "react";

import { cn } from "../../helpers";
import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import { getTheme } from "../../theme-store";
import { ColorsEnum, MainSizesEnum, RoundedSizesEnum } from "../../types/enums";
import type { Colors, DeepPartial, MainSizes, Positions, RoundedSizes } from "../../types/types";
import { Tooltip } from "../Tooltip";
import type { AvatarStatus } from "./AvatarTypes";
import type { AvatarTheme } from "./theme";

export interface AvatarImageProps {
  alt?: string;
  className: string;
  "data-testid": string;
}

export interface AvatarProps extends Omit<ComponentProps<"div">, "color"> {
  alt?: string;
  bordered?: boolean;
  img?: string | ((props: AvatarImageProps) => ReactElement);
  color?: Colors;
  rounded?: RoundedSizes;
  size?: MainSizes;
  stacked?: boolean;
  status?: keyof AvatarStatus;
  statusPosition?: keyof Positions;
  placeholderInitials?: string;
  theme?: DeepPartial<AvatarTheme>;
}

/**
 *
 * @name Avatar
 * @description The Avatar component is used to display a user's profile picture or initials, and can also display a status indicator or a counter. Usefull in a chat application, a social network, a forum...
 *
 * @returns
 */
const Avatar: FC<AvatarProps> = ({
  alt = "",
  bordered = false,
  children,
  className,
  color = ColorsEnum.primary,
  img,
  placeholderInitials = "",
  rounded = RoundedSizesEnum.full,
  size = MainSizesEnum.md,
  stacked = false,
  status,
  statusPosition = "top-left",
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().avatar, customTheme);

  const imgClassName = cn(
    theme.root.img.base,
    bordered && theme.root.bordered,
    bordered && theme.root.color[color],
    theme.root.rounded[rounded],
    stacked && theme.root.stacked,
    theme.root.img.on,
    theme.root.size[size],
    className,
  );

  const imgProps = {
    className: cn(imgClassName, theme.root.img.on),
    "data-testid": "ui-avatar-img",
  };
  return (
    <Tooltip label={props.title}>
      <div className={cn(theme.root.base, className)} data-testid="ui-avatar" {...props}>
        <div className="relative">
          {img ? (
            typeof img === "string" ? (
              // biome-ignore lint/a11y/useAltText: <explanation>
              <img alt={alt} src={img} {...imgProps} />
            ) : (
              img({ alt, ...imgProps })
            )
          ) : placeholderInitials ? (
            <div
              className={cn(
                theme.root.img.off,
                theme.root.initials.base,
                stacked && theme.root.stacked,
                bordered && theme.root.bordered,
                bordered && theme.root.color[color],
                theme.root.size[size],
                theme.root.rounded[rounded],
              )}
              data-testid="ui-avatar-initials-placeholder"
            >
              <span className={cn(theme.root.initials.text)} data-testid="ui-avatar-initials-placeholder-text">
                {placeholderInitials}
              </span>
            </div>
          ) : (
            <div className={cn(imgClassName, theme.root.img.off)} data-testid="ui-avatar-img">
              <svg
                className={theme.root.img.placeholder}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Placeholder</title>
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          {status && (
            <span
              data-testid="ui-avatar-status"
              className={cn(
                theme.root.status.base,
                theme.root.status[status],
                theme.root.statusPosition[statusPosition],
              )}
            />
          )}
        </div>
        {children && <div>{children}</div>}
      </div>
    </Tooltip>
  );
};

export { Avatar };
