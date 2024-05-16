import * as PrimitiveTooltip from '@radix-ui/react-tooltip'
import React from 'react'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import type { TooltipTheme } from './theme'

export interface TooltipProps extends Omit<PrimitiveTooltip.TooltipContentProps, 'content'> {
  content: React.ReactNode
  arrow?: boolean
  theme?: DeepPartial<TooltipTheme>
  className?: string
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened. This will
   * override the prop with the same name passed to Provider.
   * @defaultValue 700
   */
  delayDuration?: number
  /**
   * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
   * @defaultValue false
   */
  disableHoverableContent?: boolean
}
export const Tooltip = ({
  children,
  content,
  arrow = true,
  className,

  theme: customTheme = {},
  open,
  defaultOpen,
  onOpenChange,

  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened. This will
   * override the prop with the same name passed to Provider.
   * @defaultValue 300
   */
  delayDuration = 300,

  /**
   * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
   */
  disableHoverableContent,
  ...rest
}: TooltipProps) => {
  const theme = mergeDeep(getTheme().tooltip, customTheme)

  return (
    <PrimitiveTooltip.Provider>
      <PrimitiveTooltip.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        delayDuration={delayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        <PrimitiveTooltip.Trigger asChild>{children}</PrimitiveTooltip.Trigger>
        <PrimitiveTooltip.Portal>
          <PrimitiveTooltip.Content
            sideOffset={rest.sideOffset ?? 5}
            className={cn(theme.content.base, theme.content.animation, className)}
            {...rest}
          >
            {content}
            {arrow && <PrimitiveTooltip.Arrow className="fill-white" />}
          </PrimitiveTooltip.Content>
        </PrimitiveTooltip.Portal>
      </PrimitiveTooltip.Root>
    </PrimitiveTooltip.Provider>
  )
}
