import type { ComponentProps } from "react";
import { cn } from "../../helpers";
import { type Colors, ColorsEnum, type MainSizes, MainSizesEnum } from "../../types";

export interface DotProps extends Omit<ComponentProps<"div">, "color"> {
  color?: Colors;
  size?: MainSizes;
}

export const Dot = (props: DotProps) => {
  const { color = ColorsEnum.primary, size = MainSizesEnum.md, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={cn(
        "flex rounded-full",
        {
          "w-1 h-1": size === "xs",
          "w-2 h-2": size === "sm",
          "w-3 h-3": size === "md",
          "w-4 h-4": size === "lg",
          "w-5 h-5": size === "xl",
          "bg-primary": color === ColorsEnum.primary,
          "bg-secondary": color === ColorsEnum.secondary,
          "bg-info": color === ColorsEnum.info,
          "bg-success": color === ColorsEnum.success,
          "bg-warning": color === ColorsEnum.warning,
          "bg-error": color === ColorsEnum.error,
        },
        className,
      )}
    />
  );
};
