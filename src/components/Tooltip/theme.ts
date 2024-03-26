export type TooltipTheme = {
  target: string
  animation: string
  arrow: {
    base: string

    placement: string
  }
  base: string
  hidden: string
}

export const tooltipTheme: TooltipTheme = {
  target: 'w-fit',
  animation: 'transition-opacity',
  arrow: {
    base: 'absolute z-10 h-2 w-2 rotate-45 bg-secondary-100 dark:bg-secondary-700 pointer-events-none user-select-none',

    placement: '-4px',
  },
  base: 'shadow-lg absolute inline-block z-10 rounded-xl py-2 px-3 text-sm font-medium bg-secondary-100 text-secondary-900 dark:bg-secondary-700 dark:text-white',
  hidden: 'invisible opacity-0',
}
