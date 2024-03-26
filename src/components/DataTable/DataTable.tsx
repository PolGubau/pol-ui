/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as React from 'react'
import type {
  ColumnDef,
  ColumnFiltersState,
  OnChangeFn,
  RowSelectionState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '../Button'
import { Checkbox } from '../Checkbox'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../Table'
import { TbChevronDown, TbChevronUp, TbDots } from 'react-icons/tb'
import { Dropdown, DropdownItem } from '../Dropdown'
import { cn } from '../../helpers'
import { DebouncedInput } from '../DebouncedInput'
import type { Identification } from '../../types'

interface DataTableProps<T> {
  data: T[]
  actions?: (row: T) => { label: string; onClick: () => void }[]
  selectedRows?: Identification[]
  onSelectedRowsChange?: (selectedRows: Identification[]) => void
}

export const DataTable = <T extends { id: Identification }>({
  data = [],
  actions,
  selectedRows = [],
  onSelectedRowsChange,
}: DataTableProps<T>) => {
  const inferredColumns = React.useMemo(() => {
    if (data.length === 0) {
      return []
    }

    // Get keys from the first item in the data array
    const keys = Object.keys(data[0]) as (keyof T)[]
    const keysButId = keys.filter(key => key !== 'id')

    const columns: ColumnDef<T>[] = keysButId.map(key => ({
      accessorKey: key,
      header: ({ column }: any) => {
        return <span className="capitalize">{column.id}</span>
      },
      cell: ({ row }: any) => <div>{row.getValue(key)}</div>,
    }))

    const firstColumn: ColumnDef<T> = {
      id: 'id',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onChange={() => table.toggleAllPageRowsSelected(!table.getIsAllPageRowsSelected())}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onChange={() => row.toggleSelected(!row.getIsSelected())}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    }

    const actionsColumn: ColumnDef<T> = {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const indexOfData = data.indexOf(row.original)

        const rowInData = data[indexOfData]
        if (!rowInData) return null

        return (
          <Dropdown trigger={<TbDots className="h-4 w-4" />}>
            {actions?.(rowInData).map(action => (
              <DropdownItem key={action.label} onClick={action.onClick}>
                {action.label}
              </DropdownItem>
            ))}
          </Dropdown>
        )
      },
    }
    const hasActions = actions && actions.length > 0

    if (!hasActions) {
      return [firstColumn, ...columns]
    }

    return [firstColumn, ...columns, actionsColumn]
  }, [actions, data])
  const columns: ColumnDef<T>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onChange={() => table.toggleAllPageRowsSelected(!table.getIsAllPageRowsSelected())}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onChange={() => row.toggleSelected(!row.getIsSelected())}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'status',
      header: ({ column }) => {
        return <span className="capitalize">{column.id}</span>
      },
      cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
    },
    {
      accessorKey: 'email',
      header: ({ column }) => {
        return <span className="capitalize">{column.id}</span>
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
    },
    {
      accessorKey: 'amount',
      header: ({ column }) => {
        return <span className="capitalize">{column.id}</span>
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue('amount'))

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount)

        return <div>{formatted}</div>
      },
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: () =>
        // { row }
        {
          return (
            <Dropdown trigger={<TbDots className="h-4 w-4" />}>
              <DropdownItem>View customer</DropdownItem>
              <DropdownItem>View payment details</DropdownItem>
            </Dropdown>
          )
        },
    },
  ]
  const [globalFilter, setGlobalFilter] = React.useState('')

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

  // example of how to manage row selection:
  // {1: true, 2: true} means rows with INDEX 1 and 2 are selected
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})

  const changeSelectedRows: OnChangeFn<RowSelectionState> = React.useCallback(
    newRows => {
      // we set the new row selection state
      setRowSelection(newRows)

      // we get the new data in RowSelectionState format, we want to convert it to the Identification[] format taking the keys of the object
      const selectedRows = Object.keys(newRows).map(Number)
      onSelectedRowsChange?.(selectedRows)
    },
    [onSelectedRowsChange],
  )

  // each time selectedRows changes from the parent, we update the rowSelection state
  React.useEffect(() => {
    const newSelection: RowSelectionState = selectedRows.reduce((acc, row) => {
      acc[row] = true
      return acc
    }, {} as RowSelectionState)

    setRowSelection(newSelection)
  }, [selectedRows])

  const table = useReactTable({
    data,
    columns: inferredColumns,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: changeSelectedRows,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isMultiSortEvent: (e: any) => e.ctrlKey || e.shiftKey, // also use the `Ctrl` key to trigger multi-sorting
    maxMultiSortColCount: 3, // only allow 3 columns to be sorted at once

    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <section className="w-full">
      <header className="flex items-center py-4 gap-4">
        <DebouncedInput
          className="max-w-xs w-full"
          delay={300}
          value={globalFilter ?? ''}
          onChange={value => setGlobalFilter(String(value))}
          placeholder="Search all columns..."
        />
        <Dropdown label="Columns">
          <ul className="p-3">
            {table
              .getAllColumns()
              .filter(column => column.getCanHide())
              .map(column => {
                return (
                  <li key={column.id}>
                    <Checkbox
                      label={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onChange={() => column.toggleVisibility(!column.getIsVisible())}
                    />
                  </li>
                )
              })}
          </ul>
        </Dropdown>
      </header>
      <Table className="w-full rounded-lg border">
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {' '}
                    {header.isPlaceholder ? null : (
                      <button
                        className={cn('flex gap-2 items-center', {
                          'cursor-pointer select-none': header.column.getCanSort(),
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === 'asc'
                              ? 'Sort ascending'
                              : header.column.getNextSortingOrder() === 'desc'
                                ? 'Sort descending'
                                : 'Clear sort'
                            : undefined
                        }
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <TbChevronUp />,
                          desc: <TbChevronDown />,
                        }[header.column.getIsSorted() as string] ?? null}{' '}
                      </button>
                    )}{' '}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <footer className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
          selected.
        </div>
        <div className="space-x-2 flex gap-2">
          <Button outline size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button outline size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </footer>
    </section>
  )
}
