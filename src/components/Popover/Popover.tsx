'use client'

import * as React from 'react'
import * as Primitive from '@radix-ui/react-popover'
import { twMerge } from 'tailwind-merge'
import { AnimatePresence } from 'framer-motion'
import type { Align, DeepPartial, RoundedSizes } from '../../types'
import { AlignEnum, RoundedSizesEnum } from '../../types'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { PopoverTheme } from './theme'

/**
 * @name Popover
 * @description A popover is a transient view that appears above other content onscreen when a control is tapped. Can be controlled or uncontrolled. Customize side, alignment, offsets, collision handling. Optionally render a pointing arrow. Focus is fully managed and customizable. Supports modal and non-modal modes. Dismissing and layering behavior is highly customizable.
 *  @summary A popover is a transient view that appears above other content onscreen when a control is tapped.
 *
 * @prop {string} align - The alignment of the popover content relative to the trigger.
 * @prop {string} sideOffset - The distance between the popover content and the trigger.
 * @prop {string} className - The class name of the popover content.
 * @prop {string} children - The children of the popover content.
 * @prop {string} ref - The ref of the popover content.
 *
 * @example
 * <Popover>
 *  <PopoverTrigger>
 *   <Button>Open Popover</Button>
 * </PopoverTrigger>
 * <PopoverContent>Content of the popover</PopoverContent>
 * </Popover>
 *
 *
 *
 */
const Popover = Primitive.Root

const PopoverTrigger = Primitive.Trigger

const PopoverAnchor = Primitive.Anchor

export interface PopoverProps extends React.ComponentPropsWithoutRef<typeof Primitive.Root> {
  children: React.ReactNode
  align?: Align
  sideOffset?: number
  className?: string
  theme?: DeepPartial<PopoverTheme>
  rounded?: RoundedSizes
}

const PopoverContent = React.forwardRef<React.ElementRef<typeof Primitive.Content>, PopoverProps>(
  (
    {
      className,
      align = AlignEnum.center,
      sideOffset = 4,
      rounded = RoundedSizesEnum.md,
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().popover, customTheme)

    return (
      <AnimatePresence mode="wait">
        <Primitive.Portal>
          <Primitive.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            className={twMerge(theme.base, theme.animation, theme.rounded[rounded], className)}
            {...props}
          />
        </Primitive.Portal>
      </AnimatePresence>
    )
  },
)
PopoverContent.displayName = 'PopoverContent'
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
