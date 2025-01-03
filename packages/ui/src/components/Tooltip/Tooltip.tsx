import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  TooltipArrowProps,
  TooltipContentProps,
  Trigger,
} from "@radix-ui/react-tooltip";
import type React from "react";

import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { TooltipTheme } from "./theme";

export interface TooltipProps extends Omit<TooltipContentProps, "content"> {
  label: React.ReactNode | undefined;
  arrow?: boolean;
  arrowProps?: TooltipArrowProps & React.RefAttributes<SVGSVGElement>;
  theme?: DeepPartial<TooltipTheme>;
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  disabled?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened. This will
   * override the prop with the same name passed to Provider.
   * @defaultValue 700
   */
  delayDuration?: number;
  /**
   * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
   * @defaultValue false
   */
  closeOnHover?: boolean;
}
export const Tooltip = ({
  children,

  label,
  arrow = true,
  className,

  theme: customTheme = {},
  open,
  defaultOpen,
  onOpenChange,
  arrowProps,

  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened. This will
   * override the prop with the same name passed to Provider.
   * @defaultValue 300
   */
  delayDuration = 300,
  disabled = false,

  /**
   * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
   */
  closeOnHover = true,
  ...rest
}: TooltipProps) => {
  const theme = mergeDeep(getTheme().tooltip, customTheme);

  return (
    <Provider>
      <Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        delayDuration={delayDuration}
        disableHoverableContent={closeOnHover}
      >
        <Trigger asChild={true}>
          <div>{children}</div>
        </Trigger>
        {label && !disabled && (
          <Portal>
            <Content
              sideOffset={rest.sideOffset ?? 5}
              className={cn(theme.content.base, theme.content.animation, className)}
              {...rest}
            >
              {label}
              {arrow && <Arrow className={cn(theme.arrow, arrowProps?.className)} {...arrowProps} />}
            </Content>
          </Portal>
        )}
      </Root>
    </Provider>
  );
};
