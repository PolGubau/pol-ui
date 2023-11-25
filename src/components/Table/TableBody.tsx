'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { TableBodyContext } from './TableBodyContext';
import type { TableCellTheme } from './TableCell';
import { useTableContext } from './TableContext';

export interface TableBodyTheme {
  base: string;
  cell: TableCellTheme;
}

export interface TableBodyProps extends ComponentProps<'tbody'> {
  theme?: DeepPartial<TableBodyTheme>;
}

export const TableBody: FC<TableBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useTableContext();

  const theme = mergeDeep(rootTheme.body, customTheme);

  return (
    <TableBodyContext.Provider value={{ theme }}>
      <tbody className={twMerge(theme.base, className)} {...props}>
        {children}
      </tbody>
    </TableBodyContext.Provider>
  );
};
