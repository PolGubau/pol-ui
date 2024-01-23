import type { TooltipTheme } from './Tooltip'

export const tooltipTheme: TooltipTheme = {
  target: 'w-fit',
  animation: 'transition-opacity',
  arrow: {
    base: 'absolute z-10 h-2 w-2 rotate-45',
    style: {
      dark: 'bg-secondary-900 dark:bg-secondary-700',
      light: 'bg-white',
      auto: 'bg-white dark:bg-secondary-700',
    },
    placement: '-4px',
  },
  base: 'absolute inline-block z-10 rounded-xl py-2 px-3 text-sm font-medium shadow-sm',
  hidden: 'invisible opacity-0',
  style: {
    dark: 'bg-secondary-900 text-white dark:bg-secondary-700',
    light: 'border border-secondary-200 bg-secondary-50 text-secondary-900',
    auto: 'border border-secondary-200 bg-white text-secondary-900 dark:border-none dark:bg-secondary-700 dark:text-white',
  },
  content: 'relative z-20',
}
