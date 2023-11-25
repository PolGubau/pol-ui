'use client';
import React from 'react';
import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import { TableBody, type TableBodyTheme } from './TableBody';
import { TableCell } from './TableCell';
import { TableContext } from './TableContext';
import { TableHead, type TableHeadTheme } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import { TableRow, type TableRowTheme } from './TableRow';

export interface TableTheme {
  root: TableRootTheme;
  head: TableHeadTheme;
  row: TableRowTheme;
  body: TableBodyTheme;
}

export interface TableRootTheme {
  base: string;
  shadow: string;
  wrapper: string;
}

export interface TableProps extends ComponentProps<'table'> {
  striped?: boolean;
  hoverable?: boolean;
  theme?: DeepPartial<TableTheme>;
}

const TableComponent: FC<TableProps> = ({
  children,
  className,
  striped,
  hoverable,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().table, customTheme);

  return (
    <div data-testid="table-element" className={twMerge(theme.root.wrapper)}>
      <TableContext.Provider value={{ theme, striped, hoverable }}>
        <div className={twMerge(theme.root.shadow, className)}></div>
        <table className={twMerge(theme.root.base, className)} {...props}>
          {children}
        </table>
      </TableContext.Provider>
    </div>
  );
};

TableComponent.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TableHeadCell.displayName = 'Table.HeadCell';

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
