import { Colors } from '../PoluiProvider'
import { MainSizesElastic, RoundedSizes } from '../PoluiProvider/PoluiTheme'

export interface ProgressTheme {
  base: string
  label: string
  bar: string
  color: Colors
  size: MainSizesElastic
  rounded: RoundedSizes
}
export const progressTheme: ProgressTheme = {
  base: 'w-full overflow-hidden bg-secondary-200 dark:bg-secondary-700 min-w-[40px] flex flex-1 relative',
  label: 'mb-1 flex justify-between font-medium dark:text-white',
  bar: 'space-x-2 ',
  color: {
    info: 'bg-info dark:bg-info-500',
    success: 'bg-success dark:bg-success-500',
    warning: 'bg-warning dark:bg-warning-500',
    error: 'bg-error dark:bg-error-500',
    primary: 'bg-primary dark:bg-primary-500',
    secondary: 'bg-secondary dark:bg-secondary-500',
  },
  size: {
    xs: 'h-0.5',
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-6',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  },
}
