'use client'

import { useMemo, type ComponentProps, type FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../helpers/merge-deep'
import { getTheme } from '../../theme-store'
import type { DeepPartial } from '../../types/types'
import { TableBody } from './TableBody'
import { TableCell } from './TableCell'
import { TableContext } from './TableContext'
import { TableHead } from './TableHead'
import { TableHeadCell } from './TableHeadCell'
import { TableRow } from './TableRow'
import type { TableTheme } from './theme'

export interface TableProps extends ComponentProps<'table'> {
  striped?: boolean
  hoverable?: boolean
  theme?: DeepPartial<TableTheme>
  hasShadow?: boolean
}

const TableComponent: FC<TableProps> = ({
  children,
  className,
  striped,
  hoverable,
  hasShadow = true,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().table, customTheme)

  const value = useMemo(() => ({ theme, striped, hoverable }), [theme, striped, hoverable])

  return (
    <div data-testid="table-element" className={twMerge(theme.root.wrapper)}>
      <TableContext.Provider value={value}>
        <div className={twMerge(hasShadow && theme.root.shadow, className)}></div>
        <table className={twMerge(theme.root.base, className)} {...props}>
          {children}
        </table>
      </TableContext.Provider>
    </div>
  )
}

TableComponent.displayName = 'Table'
TableHead.displayName = 'Table.Head'
TableBody.displayName = 'Table.Body'
TableRow.displayName = 'Table.Row'
TableCell.displayName = 'Table.Cell'
TableHeadCell.displayName = 'Table.HeadCell'

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
})
