import type { AccordionTheme } from './Accordion'

export const accordionTheme: AccordionTheme = {
  root: {
    base: 'divide-y divide-secondary-200 border-secondary-200 dark:divide-secondary-700 dark:border-secondary-700 transition-all ',
    isBordered: {
      off: 'rounded-xl border',
      on: 'border-b',
    },
  },
  content: {
    base: 'py-4 px-4  last:rounded-b-xl dark:bg-secondary-900 first:rounded-t-xl',
  },
  title: {
    arrow: {
      base: 'h-6 w-6 shrink-0 rotate-0 transition-all transform origin-center',
      open: {
        off: '',
        on: 'rotate-180 ',
      },
    },
    base: 'flex w-full items-center justify-between first:rounded-t-xl last:rounded-b-xl py-5 px-5 text-left font-medium text-secondary-500 dark:text-secondary-400',
    isBordered: {
      off: 'hover:bg-secondary-100 dark:hover:bg-secondary-800 dark:focus:ring-secondary-800',
      on: 'bg-transparent',
    },
    heading: '',
    open: {
      off: 'text-secondary-800',
      on: 'text-secondary-900 bg-secondary-100 dark:bg-secondary-800 dark:text-white',
    },
  },
}
