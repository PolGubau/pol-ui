import React from 'react'
import { type IconButtonProps } from '../IconButton'
import { cn } from '../../helpers'
import type { RoundedSizes } from '../../types'
export interface ToggleProps extends IconButtonProps {
  active?: boolean
  children: React.ReactNode
  rounded?: RoundedSizes
}
export const Toggle: React.FC<ToggleProps> = ({ active = false, children, ...props }: ToggleProps) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center aspect-square h-10',
        'rounded-full',
        active ? 'bg-primary' : 'bg-gray-300',

        'transition-colors duration-300',
        'focus:outline-none',
        'hover:bg-primary-dark',
      )}
      {...props}
    >
      {children}
    </button>
  )
}
