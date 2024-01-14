import type { DatepickerTheme } from '.'

export const datePickerTheme: DatepickerTheme = {
  root: {
    base: 'relative',
  },
  popup: {
    root: {
      base: 'absolute top-10 z-50 block pt-2',
      inline: 'relative top-0 z-auto',
      inner: 'inline-block rounded-xl p-3 shadow-lg bg-secondary-100 dark:bg-secondary-800',
    },
    header: {
      base: '',
      title: 'px-2 py-3 text-center font-semibold text-secondary-900 dark:text-secondary-50',
      selectors: {
        base: 'flex justify-between mb-2 flex gap-2',
        button: {
          base: 'view-switch bg-transparent text-secondary-900 dark:text-secondary-50',
          prev: '',
          next: '',
          view: 'flex flex-1',
        },
      },
    },
    view: {
      base: 'p-1',
    },
    footer: {
      base: 'flex mt-2 space-x-2',
      button: {
        base: '',
        today: 'flex flex-1',
        clear: '',
      },
    },
  },
  views: {
    days: {
      header: {
        base: 'grid grid-cols-7 mb-1',
        title: 'dow h-6 text-center text-sm font-medium leading-6 text-secondary-600 dark:text-primary-400',
      },
      items: {
        base: 'grid w-64 grid-cols-7',
        item: {
          base: 'block flex-1 bg-transparent text-primary-900 dark:text-primary-50/70 text-center text-sm font-semibold flex items-center justify-center rounded-xl',
          selected: {
            on: 'bg-primary text-primary-50 hover:brightness-90 dark:bg-primary-600 dark:text-primary-50',
            off: ' hover:bg-primary-100 dark:hover:bg-primary-600',
          },
          disabled: 'text-primary-900 dark:textprimary-50 opacity-50 cursor-not-allowed',
        },
      },
    },
    months: {
      items: {
        base: 'grid w-64 grid-cols-4 gap-1',
        item: {
          base: 'flex-1 text-center bg-transparent  rounded-xl text-center text-sm font-semibold text-primary-900 dark:text-primary-50 ',
          selected: {
            on: 'bg-primary-700 text-primary-50 hover:bg-brightness-90 ',
            off: ' hover:bg-primary-100 dark:hover:bg-primary-600',
          },
          disabled: 'text-primary-500',
        },
      },
    },
    years: {
      items: {
        base: 'grid w-64 grid-cols-4 gap-1',
        item: {
          base: 'flex-1 text-center bg-transparent  rounded-xl text-center text-sm font-semibold text-primary-900 dark:text-primary-50 ',
          selected: {
            on: 'bg-primary-700 text-primary-50 hover:bg-brightness-90 ',
            off: ' hover:bg-primary-100 dark:hover:bg-primary-600',
          },
          disabled: 'text-primary-500',
        },
      },
    },
    decades: {
      items: {
        base: 'grid w-64 grid-cols-4 gap-1',
        item: {
          base: 'flex-1 text-center bg-transparent  rounded-xl text-center text-sm font-semibold text-primary-900 dark:text-primary-50 ',
          selected: {
            on: 'bg-primary-700 text-primary-50 hover:bg-brightness-90 ',
            off: ' hover:bg-primary-100 dark:hover:bg-primary-600',
          },
          disabled: 'text-secondary-500',
        },
      },
    },
  },
}
