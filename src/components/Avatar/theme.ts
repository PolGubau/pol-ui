import type { ColorsType, IBoolean, MainSizesType, Positions, RoundedSizesTypes } from '../../types'
import type { AvatarStatus } from './AvatarTypes'

export interface AvatarTheme {
  root: AvatarRootTheme
  group: string
  groupCounter: string
}

export interface AvatarRootTheme {
  base: string
  bordered: string
  color: ColorsType
  img: AvatarImageTheme
  initials: AvatarInitialsTheme
  rounded: RoundedSizesTypes
  size: MainSizesType
  stacked: string
  status: AvatarStatus & {
    base: string
  }
  statusPosition: Positions
}

export interface AvatarImageTheme extends IBoolean {
  base: string
  placeholder: string
}

export interface AvatarInitialsTheme {
  base: string
  text: string
}

export const avatarTheme: AvatarTheme = {
  root: {
    base: 'flex justify-center items-center space-x-4 rounded',
    bordered: 'p-1 ring-2',
    rounded: {
      xs: 'rounded-xs',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
      none: 'rounded-none',
    },
    color: {
      primary: 'ring-primary dark:bg-primary-600',
      secondary: 'ring-secondary dark:bg-secondary-600',
      error: 'ring-error dark:ring-red-700',
      info: 'ring-cyan-400 dark:ring-cyan-800',
      success: 'ring-green-500 dark:ring-green-500',
      warning: 'ring-yellow-300 dark:ring-yellow-500',
    },
    img: {
      base: 'rounded',
      off: 'relative overflow-hidden bg-gray-100 dark:bg-gray-600',
      on: '',
      placeholder: 'absolute w-auto h-auto text-gray-400 -bottom-1',
    },
    size: {
      xs: 'w-6 h-6',
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-20 h-20',
      xl: 'w-36 h-36',
    },
    stacked: 'ring-2 ring-gray-300 dark:ring-gray-500',
    statusPosition: {
      'bottom-left': '-bottom-1 -left-1',
      'bottom-center': '-bottom-1 center',
      'bottom-right': '-bottom-1 -right-1',
      'top-left': '-top-1 -left-1',
      'top-center': '-top-1 center',
      'top-right': '-top-1 -right-1',
      'center-right': 'center -right-1',
      center: 'center center',
      'center-left': 'center -left-1',
    },
    status: {
      away: 'bg-warning',
      base: 'absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-secondary-800',
      busy: 'bg-error',
      offline: 'bg-secondary',
      online: 'bg-success',
    },
    initials: {
      text: 'font-medium text-secondary-600 dark:text-secondary-300',
      base: 'inline-flex overflow-hidden relative justify-center items-center bg-secondary-100 dark:bg-secondary-600',
    },
  },
  group: 'flex -space-x-4',
  groupCounter:
    'relative grid place-content-center aspect-square h-10 text-xs font-medium text-white bg-secondary-700 rounded-full ring-2 ring-secondary-300 hover:bg-secondary-600 dark:ring-secondary-500',
}
