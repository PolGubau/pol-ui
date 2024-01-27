import type { Placement } from '@floating-ui/core'
import type { ComponentProps, FC, ReactNode } from 'react'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import { Floating, type FloatingTheme } from '../Floating'
import type { TriggerReason } from '../PoluiProvider/PoluiTheme'
import { TriggerReasonEnum } from '../../types/enums'

export type TooltipTheme = FloatingTheme

export interface TooltipProps extends Omit<ComponentProps<'div'>, 'content' | 'style'> {
  animation?: false | `duration-${number}`
  arrow?: boolean
  content: ReactNode
  placement?: 'auto' | Placement
  style?: 'dark' | 'light' | 'auto'
  theme?: DeepPartial<TooltipTheme>
  trigger?: TriggerReason
}

export const Tooltip: FC<TooltipProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  className,
  content,
  placement = 'top',
  style = 'auto',
  theme: customTheme = {},
  trigger = TriggerReasonEnum.hover,
  ...props
}) => {
  const theme = mergeDeep(getTheme().tooltip, customTheme)

  return (
    <Floating
      animation={animation}
      arrow={arrow}
      content={content}
      placement={placement}
      style={style}
      theme={theme}
      trigger={trigger}
      className={className}
      {...props}
    >
      {children}
    </Floating>
  )
}

Tooltip.displayName = 'Tooltip'
