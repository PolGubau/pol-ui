import type { Placement } from '@floating-ui/core'
import { useState, type ComponentProps, type FC, type ReactNode, useEffect } from 'react'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import type { FloatingProps, FloatingTheme } from '../Floating'
import { Floating } from '../Floating'
import { TriggerReasonEnum } from '../../types/enums'

export type TooltipTheme = FloatingTheme

export interface TooltipProps extends Omit<ComponentProps<'div'>, 'content' | 'style'>, Pick<FloatingProps, 'trigger'> {
  animation?: false | `duration-${number}`
  arrow?: boolean
  content: ReactNode
  placement?: 'auto' | Placement
  theme?: DeepPartial<TooltipTheme>
  open?: boolean
  setOpen?: (prevState: boolean) => void
}

export const Tooltip: FC<TooltipProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  className,
  content,
  placement = 'top',
  theme: customTheme = {},
  trigger = TriggerReasonEnum.hover,
  open = false,
  setOpen,
  ...props
}) => {
  const theme = mergeDeep(getTheme().tooltip, customTheme)
  // const { value: open, setValue: setOpen } = useBoolean(false)

  // handleChangeOpen is used to call setOpen from the outside

  const [openState, setOpenState] = useState(open)

  useEffect(() => {
    if (open !== undefined) {
      setOpenState(open)
    }
  }, [open])

  const handleChangeOpen = (value: boolean) => {
    setOpen?.(value)
    setOpenState(value)
  }

  return (
    <Floating
      open={openState}
      setOpen={handleChangeOpen}
      animation={animation}
      arrow={arrow}
      content={content}
      placement={placement}
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
