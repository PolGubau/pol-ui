import type { BadgeTheme } from './Badge';

export const badgeTheme: BadgeTheme = {
  root: {
    base: 'flex h-fit items-center gap-1 font-semibold',
    color: {
      info: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',

      failure:
        'bg-failure-100 text-failure-800 dark:bg-failure-200 dark:text-failure-900 group-hover:bg-failure-200 dark:group-hover:bg-failure-300',
      success:
        'bg-success-100 text-success-800 dark:bg-success-200 dark:text-success-900 group-hover:bg-success-200 dark:group-hover:bg-success-300',
      warning:
        'bg-warning-100 text-warning-800 dark:bg-warning-200 dark:text-warning-900 group-hover:bg-warning-200 dark:group-hover:bg-warning-300',
      primary:
        'bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-900 group-hover:bg-primary-200 dark:group-hover:bg-primary-300',
      secondary:
        'bg-secondary-100 text-secondary-800 dark:bg-secondary-200 dark:text-secondary-900 group-hover:bg-secondary-200 dark:group-hover:bg-secondary-300',
    },
    href: 'group',
    size: {
      xs: 'p-1 text-xs',
      sm: 'p-1.5 text-sm',
    },
  },
  icon: {
    off: 'rounded px-2 py-0.5',
    on: 'rounded-full p-1.5',
    size: {
      xs: 'w-3 h-3',
      sm: 'w-3.5 h-3.5',
    },
  },
};
