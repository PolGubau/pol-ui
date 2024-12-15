"use client";

import { motion } from "framer-motion";
import { type ComponentProps, type FC, useId } from "react";
import { twMerge } from "tailwind-merge";

import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import { getTheme } from "../../theme-store";
import { ColorsEnum, MainSizesEnum, RoundedSizesEnum } from "../../types/enums";
import type { Colors, DeepPartial, MainSizes, RoundedSizesElastic } from "../../types/types";
import type { ProgressTheme } from "./theme";

export interface ProgressProps extends Omit<ComponentProps<"div">, "color"> {
  progress?: number;
  size?: MainSizes;
  label?: string;
  theme?: DeepPartial<ProgressTheme>;
  hasMotion?: boolean;
  color?: Colors;
  rounded?: keyof RoundedSizesElastic;
  barClassName?: string;
}

export const Progress: FC<ProgressProps> = ({
  className,
  color = ColorsEnum.primary,
  progress = 75,
  size = MainSizesEnum.md,
  label,
  hasMotion = true,
  rounded = RoundedSizesEnum.full,
  theme: customTheme = {},
  barClassName,
  ...props
}) => {
  const id = useId();
  const theme = mergeDeep(getTheme().progress, customTheme);

  return (
    <div id={id} aria-label={label} role="progressbar" {...props} aria-valuenow={progress}>
      <label className={theme.label} data-testid="ui-progress-label-container">
        {label && <span data-testid="ui-progress-label">{label}</span>}
      </label>
      <div className={twMerge(theme.base, theme.size[size], theme.rounded[rounded], className)}>
        <motion.div
          initial={hasMotion ? { width: 0 } : false}
          animate={{ width: `${progress}%` }}
          exit={{ width: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className={twMerge(theme.bar, theme.rounded[rounded], theme.color[color], theme.size[size], barClassName)}
        ></motion.div>
      </div>
    </div>
  );
};

Progress.displayName = "Progress";
