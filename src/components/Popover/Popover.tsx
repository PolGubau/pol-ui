'use client'

import * as React from 'react'
import * as Primitive from '@radix-ui/react-popover'
import { twMerge } from 'tailwind-merge'
import { AnimatePresence } from 'framer-motion'

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

const base = 'z-50 min-w-72 rounded-md border bg-secondary-50 p-4 text-secondary-900 shadow-md outline-none '
const animation =
  ' will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade'

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => {
  return (
    <AnimatePresence mode="wait">
      <Primitive.Portal>
        <Primitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={twMerge(base, animation, className)}
          {...props}
        />
      </Primitive.Portal>
    </AnimatePresence>
  )
})
PopoverContent.displayName = 'PopoverContent'
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
