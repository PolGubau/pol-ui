import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { ListGroupTheme } from './theme'

export interface ListGroupProps extends ComponentProps<'ul'> {
  theme?: DeepPartial<ListGroupTheme>
}
export const ListGroup: FC<ListGroupProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().listGroup, customTheme)

  return (
    <ul className={twMerge(theme.root.base, className)} {...props}>
      {children}
    </ul>
  )
}
