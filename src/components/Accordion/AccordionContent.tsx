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
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen } = useAccordionContext()

  const theme = mergeDeep(getTheme().accordion.content, customTheme)

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className={twMerge(theme.base, className)} data-testid="ui-accordion-content" hidden={!isOpen} {...props}>
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.99 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.99 }}
            transition={{ ease: 'linear', duration: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
