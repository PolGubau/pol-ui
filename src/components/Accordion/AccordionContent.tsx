'use client'
import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types'
import { useAccordionContext } from './AccordionPanelContext'
import { AnimatePresence, motion } from 'framer-motion'
export interface AccordionComponentTheme {
  base: string
}

export interface AccordionContentProps extends ComponentProps<'div'> {
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

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className={twMerge(theme.base, className)} data-testid="ui-accordion-content" hidden={!isOpen} {...props}>
          <motion.div
            initial={hasMotion?{ opacity: 0, height: 0, scale: 0.99 }:undefined}
            animate={hasMotion?{ opacity: 1, height: 'auto', scale: 1 }:undefined}
            exit={hasMotion?{ opacity: 0, height: 0, scale: 0.99 }:undefined}
            transition={hasMotion?{ ease: 'linear', duration: 0.2 }:undefined}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
