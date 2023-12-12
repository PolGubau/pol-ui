import type { ToggleSwitchTheme } from './ToggleSwitch';

export const toggleSwitchTheme: ToggleSwitchTheme = {
  root: {
    base: 'group relative flex items-center rounded-lg focus:outline-none',
    active: {
      on: 'cursor-pointer',
      off: 'cursor-not-allowed opacity-50',
    },
    label: 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300',
  },
  toggle: {
    base: 'toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25',
    checked: {
      on: 'after:translate-x-full after:border-white',
      off: 'border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700',
      color: {
        error: 'bg-red-700 border-red-900',
        success: 'bg-green-500 border-green-500',
        warning: 'bg-yellow-600 border-yellow-600',
        info: 'bg-cyan-600 border-cyan-600',
        primary: 'bg-blue-600 border-blue-600',
        secondary: 'bg-gray-400 border-gray-400',
      },
    },
    sizes: {
      sm: 'w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4',
      md: 'w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5',
      lg: 'w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6',
    },
  },
};
