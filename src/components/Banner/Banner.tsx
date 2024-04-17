'use client'

import { useState, type ComponentProps, type FC, type MouseEventHandler } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep/merge-deep'
import { getTheme } from '../../theme-store'
import type { Colors, DeepPartial, RoundedSizes } from '../../types/types'
import { ColorsEnum, RoundedSizesEnum } from '../../types'
import { IconButton } from '../IconButton'
import { TbX } from 'react-icons/tb'
import type { BannerTheme } from './theme'
import { motion, AnimatePresence } from 'framer-motion'
export interface BannerComponentProps extends ComponentProps<'header'> {
  className?: string
  bordered?: boolean
  closable?: boolean
  color?: Colors
  onClose?: MouseEventHandler<HTMLButtonElement>
  theme?: DeepPartial<BannerTheme>
  buttonClassName?: string
  hasMotion?: boolean
  motionDistance?: number
  rounded?: RoundedSizes
}
/**
 * Banner component
 * @description The Banner component is used to display a message to the user with a variety of colors and styles, it can be closable or not. It can be used to display a message, a warning, an error, a success message...
 * @returns React.FC<BannerComponentProps>
 */

export const Banner: FC<BannerComponentProps> = ({
  children,
  bordered = false,
  theme: customTheme = {},
  className,
  closable = true,
  color = ColorsEnum.primary,
  onClose,
  buttonClassName,
  hasMotion = true,
  motionDistance = 50,
  rounded = RoundedSizesEnum['2xl'],
  ...props
}) => {
  const theme = mergeDeep(getTheme().banner, customTheme)

  const [open, setOpen] = useState(true)
  const handleOnClose: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    setOpen(false)
    onClose?.(event)
  }

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={hasMotion && { opacity: 0, y: -motionDistance }}
          animate={hasMotion && { opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -motionDistance }}
          transition={{ duration: 0.3 }}
        >
          <header
            data-testid="pol-ui-banner"
            role="banner"
            tabIndex={-1}
            className={twMerge(
              theme.base,
              theme.bordered[bordered ? 'on' : 'off'],
              theme.color[color],
              theme.rounded[rounded],
              className,
            )}
            {...props}
          >
            {children}
            {closable && (
              <IconButton
                onClick={handleOnClose}
                color={color}
                className={twMerge('bg-transparent text-current rounded-full', buttonClassName)}
              >
                <TbX className="h-4 w-4" />
              </IconButton>
            )}
          </header>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
