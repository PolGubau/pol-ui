import type { TableBodyTheme } from './TableBody'
import type { TableHeadTheme } from './TableHead'
import type { TableRowTheme } from './TableRow'

export interface TableTheme {
  root: TableRootTheme
  head: TableHeadTheme
  row: TableRowTheme
  body: TableBodyTheme
}

export interface TableRootTheme {
  base: string
  shadow: string
  wrapper: string
}
export const tableTheme: TableTheme = {
  root: {
    base: 'w-full text-left text-sm text-secondary-800 dark:text-secondary-200',
    shadow: 'shadow-xl-z-10',
    wrapper: 'relative',
  },
  body: {
    base: 'group/body',
    cell: {
      base: 'group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4',
    },
  },
  head: {
    base: 'group/head text-xs uppercase text-secondary-900 dark:text-secondary-100',
    cell: {
      base: 'group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-secondary-50 dark:bg-secondary-700 px-6 py-3',
    },
  },
  row: {
    base: 'group/row',
    hovered: 'hover:bg-secondary-50 dark:hover:bg-secondary-600',
    striped: 'odd:bg-white even:bg-secondary-50 odd:dark:bg-secondary-800 even:dark:bg-secondary-700',
  },
}
