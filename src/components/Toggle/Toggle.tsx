import React from 'react'
import { IconButton, type IconButtonProps } from '../IconButton'
import { cn } from '../../helpers'
import type { RoundedSizes } from '../../types'

export interface ToggleProps extends IconButtonProps {
  active?: boolean
  children: React.ReactNode
  rounded?: RoundedSizes
}
export const Toggle: React.FC<ToggleProps> = ({ active = false, rounded = 'xl', children, ...props }: ToggleProps) => {
  return (
    <IconButton
      rounded={rounded}
      {...props}
      theme={{
        color: {
          success: cn({
            'bg-success/40 focus:bg-success-50 text-success-800 ': active,
            'hover:bg-success/20 focus:bg-success/40 text-success-800 ': !active,
          }),
          warning: cn({
            'bg-warning/40 focus:bg-warning-50 text-warning-800 ': active,
            'hover:bg-warning/20 focus:bg-warning/40 text-warning-800 ': !active,
          }),
          info: cn({
            'bg-info/40 focus:bg-info-50 text-info-800 ': active,
            'hover:bg-info/20 focus:bg-info/40 text-info-800 ': !active,
          }),
          error: cn({
            'bg-error/40 focus:bg-error-50 text-error-800 ': active,
            'hover:bg-error/20 focus:bg-error/40 text-error-800 ': !active,
          }),
          primary: cn({
            'bg-primary/40 focus:bg-primary-50 text-primary-800 ': active,
            'hover:bg-primary/20 focus:bg-primary/40 text-primary-800 ': !active,
          }),
          secondary: cn({
            'bg-secondary/40 focus:bg-secondary-50 text-secondary-800 ': active,
            'hover:bg-secondary/20 focus:bg-secondary/40 text-secondary-800 ': !active,
          }),
        },
      }}
    >
      {children}
    </IconButton>
  )
}
