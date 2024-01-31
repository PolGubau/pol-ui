import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'

export interface AvatarGroupTheme {
  base: string
}

export interface AvatarGroupProps extends ComponentProps<'div'> {
  theme?: DeepPartial<AvatarGroupTheme>
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().avatar.group, customTheme)

  return (
    <div data-testid="avatar-group-element" className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  )
}

AvatarGroup.displayName = 'Avatar.Group'
