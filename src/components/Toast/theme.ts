import type { ToastTheme } from './Toast'

export const toastTheme: ToastTheme = {
  root: {
    base: 'flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400',
    closed: 'opacity-0 ease-out',
  },
  toggle: {
    base: '-mx-1.5 -my-1.5 ml-auto ',
    icon: 'h-5 w-5 shrink-0',
  },
}
