import type { ListTheme } from './List';

export const listTheme: ListTheme = {
  root: {
    base: 'space-y-1 text-gray-500 list-inside dark:text-gray-400',
    ordered: {
      off: 'list-disc',
      on: 'list-decimal',
    },
    unstyled: 'list-none',
    nested: 'ps-5 mt-2 space-y-1',
  },
};
