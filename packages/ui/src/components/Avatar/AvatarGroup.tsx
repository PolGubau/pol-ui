import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

import { mergeDeep } from "../../helpers/merge-deep/merge-deep"
import { getTheme } from "../../theme-store"
import type { DeepPartial } from "../../types/types"
import type { AvatarTheme } from "./theme"

export interface AvatarGroupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<AvatarTheme>
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().avatar, customTheme)

  return (
    <div
      data-testid="avatar-group-element"
      className={twMerge(theme.group, className)}
      {...props}
    >
      {children}
    </div>
  )
}

AvatarGroup.displayName = "AvatarGroup"
