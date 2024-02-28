'use client'

import * as React from 'react'
import * as Primitive from '@radix-ui/react-popover'
import { TbX } from 'react-icons/tb'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { cn, mergeDeep } from '../../helpers'
import { getTheme } from '../../theme-store'
import type { Align } from '../../types'
import { RoundedSizesEnum, type DeepPartial, type RoundedSizes, AlignEnum } from '../../types'
import type { PopoverTheme } from './theme'

/**
 * @name Popover
 * @description A popover is a transient view that appears above other content onscreen when a control is tapped. Can be controlled or uncontrolled. Customize side, alignment, offsets, collision handling. Optionally render a pointing arrow. Focus is fully managed and customizable. Supports modal and non-modal modes. Dismissing and layering behavior is highly customizable.
 *  @summary A popover is a transient view that appears above other content onscreen when a control is tapped.
 *
 * @prop {string} align - The alignment of the popover content relative to the trigger.
 * @prop {number} sideOffset - The distance in pixels from the anchor.
 * @prop {string} className - The class name of the popover content.
 * @prop {string} ref - The ref of the popover content.
 * @prop {PopoverTheme} theme - The theme of the popover content.
 * @prop {RoundedSizes} rounded - The rounded size of the popover content.
 * @prop {boolean} open - The controlled open state of the Primitive. Must be used in conjunction with onOpenChange.
 * @prop {boolean} defaultOpen - EThe open state of the popover when it is initially rendered. Use when you do not need to control its open state.
 * @prop {function} onOpenChange - Event handler called when the open state of the popover changes.
 * @prop {string} modal - The modality of the Primitive. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.
 * @prop {string} children - The children of the Primitive.
 *
 * @example
 * <Popover>
 *  <PopoverTrigger>
 *   <Button>Open Popover</Button>
 * </PopoverTrigger>
 * <PopoverContent>Content of the popover</PopoverContent>
 * </Popover>
 */

export interface PopoverProps {
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
  trigger?: React.ReactNode
  label?: string
  rounded?: RoundedSizes
  closeButton?: boolean
  sideOffset?: number
  align?: Align
  side?: 'top' | 'right' | 'bottom' | 'left'
  theme?: DeepPartial<PopoverTheme>
}

export const Popover = ({
  trigger,
  label = 'Open',
  children,
  rounded = RoundedSizesEnum.md,
  closeButton = true,
  align = AlignEnum.center,
  side = 'bottom',

  sideOffset,
  theme: customTheme = {},
  ...props
}: PopoverProps) => {
  const theme = mergeDeep(getTheme().popover, customTheme)

  return (
    <Primitive.Root {...props}>
      <Primitive.Trigger className="focus:ring ring-primary-700 dark:ring-primary-400 focus:outline-none rounded-md">
        {trigger ?? (
          <Button
            tabIndex={-1}
            className="inline-flex items-center justify-center focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none"
            aria-label="Update dimensions"
          >
            {label}
          </Button>
        )}
      </Primitive.Trigger>
      <Primitive.Portal>
        <Primitive.Content
          align={align}
          side={side}
          className={cn(theme.content, theme.animation, theme.rounded[rounded])}
          sideOffset={sideOffset}
        >
          {children}
          {closeButton && (
            <Primitive.Close aria-label="Close" className={theme.closeButton}>
              <IconButton tabIndex={-1}>
                <TbX />
              </IconButton>
            </Primitive.Close>
          )}
          <Primitive.Arrow className="fill-white" />
        </Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  )
}

// export interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof Primitive.Root> {
//   align?: Align
//   trigger?: React.ReactNode
//   sideOffset?: number
//   className?: string
//   theme?: DeepPartial<PopoverTheme>
//   rounded?: RoundedSizes
// }

// const PopoverContent = React.forwardRef<React.ElementRef<typeof Primitive.Content>, PopoverContentProps>(
//   (
//     {
//       className,
//       align = AlignEnum.center,
//       sideOffset = 4,
//       rounded = RoundedSizesEnum.md,
//       theme: customTheme = {},
//       ...props
//     },
//     ref,
//   ) => {
//     const theme = mergeDeep(getTheme().popover, customTheme)

//     return (
//       <Primitive.Portal>
//         <Primitive.Content
//           ref={ref}
//           align={align}
//           sideOffset={sideOffset}
//           className={twMerge(theme.base, theme.animation, theme.rounded[rounded], className)}
//           {...props}
//         ></Primitive.Content>
//       </Primitive.Portal>
//     )
//   },
// )

// PopoverContent.displayName = 'PopoverContent'
