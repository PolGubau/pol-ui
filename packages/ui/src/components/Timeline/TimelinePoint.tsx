"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import type { DeepPartial } from "../../types/types";
import { useTimelineContext } from "./TimelineContext";
import type { TimelinePointTheme } from "./theme";

export interface TimelnePointProps extends ComponentProps<"div"> {
  icon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<TimelinePointTheme>;
}

export const TimelinePoint: FC<TimelnePointProps> = ({
  children,
  className,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineContext();

  const theme = mergeDeep(itemTheme.item.point, customTheme);

  return (
    <div
      data-testid="timeline-point"
      className={twMerge(horizontal && theme.horizontal, !horizontal && theme.vertical, className)}
      {...props}
    >
      {children}
      {Icon ? (
        <span className={twMerge(theme.marker.icon.wrapper)}>
          <Icon aria-hidden={true} className={twMerge(theme.marker.icon.base)} />
        </span>
      ) : (
        <div
          className={twMerge(horizontal && theme.marker.base.horizontal, !horizontal && theme.marker.base.vertical)}
        />
      )}
      {horizontal && <div className={twMerge(theme.line)} />}
    </div>
  );
};
