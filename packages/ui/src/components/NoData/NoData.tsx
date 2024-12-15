"use client";

import type React from "react";
import type { ComponentProps } from "react";

import { cn } from "../../helpers";
import { type MainSizes, MainSizesEnum } from "../../types";
import { default as DefaultIllustration, default as EmptySvg } from "./default-illustration";

export interface NoDataProps extends ComponentProps<"div"> {
  description?: string;
  size?: MainSizes;
  illustration?: React.ReactNode;
}

export const NoData: React.FC<NoDataProps> = ({
  description,
  size = MainSizesEnum.md,
  illustration = <DefaultIllustration />,
  ...props
}: NoDataProps) => {
  return (
    <div className="flex flex-col items-center" {...props}>
      {illustration ?? (
        <EmptySvg
          className={cn({
            "scale-75": size === MainSizesEnum.xs,
            "scale-90": size === MainSizesEnum.sm,
            "scale-125": size === MainSizesEnum.lg,
            "scale-150": size === MainSizesEnum.xl,
          })}
        />
      )}

      {description && (
        <p
          className={cn("text-secondary-400 dark:text-background-onPrimary", {
            "text-sm mt-1": size === MainSizesEnum.xs,
            "text-base mt-2": size === MainSizesEnum.sm,
            "text-lg mt-4": size === MainSizesEnum.md,
            "text-2xl mt-8": size === MainSizesEnum.lg,
            "text-3xl mt-12": size === MainSizesEnum.xl,
          })}
        >
          {description}
        </p>
      )}
    </div>
  );
};
