import type { TimelineTheme } from './Timeline'

export const timelineTheme: TimelineTheme = {
  root: {
    direction: {
      horizontal: 'items-base sm:flex',
      vertical: 'relative border-l border-secondary-200 dark:border-secondary-700',
    },
  },
  item: {
    root: {
      horizontal: 'relative mb-6 sm:mb-0',
      vertical: 'mb-10 ml-6',
    },
    content: 'mt-3 sm:pr-8',

    point: {
      horizontal: 'flex items-center',
      line: 'hidden h-0.5 w-full bg-secondary-400 dark:bg-secondary-700 sm:flex',
      marker: {
        base: {
          horizontal: 'absolute -left-1.5 h-3 w-3 rounded-full   bg-secondary-400 dark:bg-secondary-700',
          vertical: 'absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full   bg-secondary-400 dark:bg-secondary-700',
        },
        icon: {
          base: 'h-3 w-3 text-cyan-600 dark:text-cyan-300',
          wrapper:
            'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 dark:bg-primary-800',
        },
      },
      vertical: '',
    },
  },
}
