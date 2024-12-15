import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

import { mergeDeep } from "../../helpers/merge-deep/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types/types";

export interface AvatarGroupCounterTheme {
  base: string;
}

export interface AvatarGroupCounterProps extends ComponentProps<"a"> {
  theme?: DeepPartial<AvatarGroupCounterTheme>;
  total?: number;
}

export const AvatarGroupCounter: FC<AvatarGroupCounterProps> = ({
  className,
  href,
  theme: customTheme = {},
  total,
  ...props
}) => {
  const theme = mergeDeep(getTheme().avatar, customTheme);

  return (
    <a href={href} className={twMerge(theme.groupCounter, className)} {...props}>
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = "Avatar.GroupCounter";
