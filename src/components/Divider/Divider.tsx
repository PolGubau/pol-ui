import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { DividerTheme } from './theme'

export interface DividerProps extends ComponentProps<'hr'> {
  theme?: DeepPartial<DividerTheme>
}

/**
 * 
 * @name Divider
 * @description The Divider component is used to separate content within a section or a page, and it is used to create a visual separation between different sections of a page.
 * @returns React.FC<DividerProps>
 */
export const Divider: FC<DividerProps> = ({ className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().divider, customTheme)
  return <hr data-testid="divider" className={twMerge(theme.base, className)} {...props} />
}
