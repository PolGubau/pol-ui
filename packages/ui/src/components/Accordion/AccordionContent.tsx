"use client"

import type { ComponentProps, FC } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "../../helpers"
import { mergeDeep } from "../../helpers/merge-deep/merge-deep"
import { getTheme } from "../../theme-store"
import type { DeepPartial } from "../../types/types"
import { useAccordionContext } from "./AccordionPanelContext"

export interface AccordionComponentTheme {
  base: string
}

export interface AccordionContentProps extends ComponentProps<"div"> {
  theme?: DeepPartial<AccordionComponentTheme>
  hasMotion?: boolean
}

/**
 * @name AccordionContent
 * @description AccordionContent is the content of the accordion panel that is shown when the panel is open.
 * @param {AccordionContentProps} props
 * @returns {JSX.Element}
 * @example
 * <AccordionContent>
 *  <p>Content</p>
 * </AccordionContent>
 *
 * @example
 * <AccordionContent theme={{base: 'bg-red-500'}}>
 *  <p>Content</p>
 * </AccordionContent>
 */
export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  hasMotion = true,
  ...props
}) => {
  const { isOpen } = useAccordionContext()

  const theme = mergeDeep(getTheme().accordion.content, customTheme)

  const animations = {
    init: { opacity: 0, height: 0, scale: 0.99 },
    open: { opacity: 1, height: "auto", scale: 1 },
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div
          className={cn(theme.base, className)}
          data-testid="ui-accordion-content"
          hidden={!isOpen}
          {...props}
        >
          <motion.div
            initial={hasMotion ? animations.init : undefined}
            animate={hasMotion ? animations.open : undefined}
            exit={hasMotion ? animations.init : undefined}
            transition={
              hasMotion ? { ease: "linear", duration: 0.15 } : undefined
            }
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
