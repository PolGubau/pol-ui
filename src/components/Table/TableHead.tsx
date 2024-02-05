'use client'

import { useMemo, type ComponentProps, type FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import type { DeepPartial } from '../../types/types'
import { useTableContext } from './TableContext'
import { type TableHeadCellTheme } from './TableHeadCell'
import { TableHeadContext } from './TableHeadContext'
export interface TableHeadTheme {
  base: string
  cell: TableHeadCellTheme
}

export interface TableHeadProps extends ComponentProps<'thead'> {
  theme?: DeepPartial<TableHeadTheme>
}

export const TableHead: FC<TableHeadProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useTableContext()

  const theme = mergeDeep(rootTheme.head, customTheme)

  const value = useMemo(() => ({ theme }), [theme])

  return (
    <TableHeadContext.Provider value={value}>
      <thead className={twMerge(theme.base, className)} {...props}>
        <tr>{children}</tr>
      </thead>
    </TableHeadContext.Provider>
  )
}
