import type { ComponentProps, FC } from 'react'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { ListGroupTheme } from './theme'
import { cn } from '../../helpers'

export interface ListGroupProps extends ComponentProps<'ul'> {
  theme?: DeepPartial<ListGroupTheme>
  direction?: 'row' | 'column'
  bordered?: boolean
}

/**
 * @name ListGroup
 * @description The ListGroup component is used to display a list of items in a list format, it is usually used to display a list of items as buttons or links, usefull for navigation in mobile devices.
 * @returns React.FC<ListGroupProps>
 */
export const ListGroup: FC<ListGroupProps> = ({
  children,
  className,
  theme: customTheme = {},
  direction = 'column',
  bordered = true,
  ...props
}) => {
  const theme = mergeDeep(getTheme().listGroup, customTheme)

  return (
    <ul
      className={cn(
        theme.root.base,
        theme.root.direction[direction],
        bordered && theme.root.bordered.base,
        bordered && theme.root.bordered[direction],
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  )
}
