'use client'

import React from 'react'
import { useBoolean, useMediaQuery } from '../../hooks'
import { Button } from '../Button'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../helpers'
import { Drawer } from '../Drawer'

export interface ExpandableButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the content will be shown only once and won't be able to be opened or closed again.
   */
  once?: boolean

  trigger?: React.ReactNode
  label?: string
  triggerWrapperClassName?: string
}

const ExpandableButton = ({
  children,
  once,
  trigger,
  triggerWrapperClassName,
  label = 'Click to toggle',
  ...rest
}: ExpandableButtonProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const { value, toggle, setTrue } = useBoolean(false)
  const handleClick = () => {
    if (once) {
      !value && setTrue()
    } else {
      toggle()
    }
  }

  const defaultTrigger = trigger ?? <Button className="w-full">{label}</Button>
  return (
    <div className="flex flex-col w-full" {...rest}>
      {
        <div
          data-state={value ? 'open' : 'closed'}
          className={cn(triggerWrapperClassName)}
          onClickCapture={e => {
            e.stopPropagation()
            handleClick()
          }}
        >
          {defaultTrigger}
        </div>
      }
      {isDesktop && (
        <AnimatePresence mode="wait">
          {value && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.99 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.99 }}
              transition={{ ease: 'linear', duration: 0.15 }}
              className={cn('overflow-hidden', rest.className)}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {!isDesktop && (
        <Drawer open={value} onClose={toggle} trigger={<></>}>
          {children}
        </Drawer>
      )}
    </div>
  )
}

export default ExpandableButton
