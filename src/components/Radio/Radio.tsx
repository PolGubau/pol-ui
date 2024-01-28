'use client'
import type { ComponentProps } from 'react'
import React, { forwardRef, useId } from 'react'
import { motion } from 'framer-motion'
import { Label } from '../Label'
import type { DeepPartial } from '../../types'
import type { RadioTheme } from './theme'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'

export interface RadioProps extends Omit<ComponentProps<'input'>, 'ref' | 'type' | 'checked' | 'onClick'> {
  theme?: DeepPartial<RadioTheme>
  label?: string
  layoutId?: string
  checked: boolean
  inputClassNames?: string
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      theme: customTheme = {},
      inputClassNames,
      layoutId = 'radio_layout_id',
      label,
      onClick,
      checked,
      ...props
    },
    ref,
  ) => {
    const theme: RadioTheme = mergeDeep(getTheme().radio, customTheme)

    const randomId = useId()

    return (
      <li className={twMerge(theme.root, className)}>
        <div className={twMerge(theme.input.base)}>
          <input
            ref={ref}
            type="radio"
            onClick={onClick}
            id={randomId}
            className={twMerge(theme.input.input, inputClassNames)}
            {...props}
          />
          <div className={twMerge(theme.input.fakeInput)} />
          {checked && (
            <motion.div
              className={twMerge(theme.input.marker)}
              layoutId={layoutId}
              transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
            />
          )}
        </div>
        {label && <Label className={twMerge(theme.label)} htmlFor={randomId} value={label} />}
      </li>
    )
  },
)

Radio.displayName = 'Radio'
