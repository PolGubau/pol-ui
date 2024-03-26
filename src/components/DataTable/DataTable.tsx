/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as React from 'react'
import type {
  ColumnDef,
  ColumnFiltersState,
  RowSelectionState,
  SortingState,
  TableOptions,
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

import { Checkbox } from '../Checkbox'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../Table'
import { TbChevronDown, TbChevronUp, TbDots } from 'react-icons/tb'
import { Dropdown, DropdownItem } from '../Dropdown'
import { cn } from '../../helpers'
import { DebouncedInput } from '../DebouncedInput'
import type { Identification } from '../../types'

interface DataTableProps<T> extends Pick<TableOptions<T>, 'onRowSelectionChange'> {
  data: T[]
  actions?: (row: T) => { label: string; onClick: () => void }[]
  selectedRows?: RowSelectionState
}
function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & React.HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return <input type="checkbox" ref={ref} className={className + ' cursor-pointer'} {...rest} />
}

export const DataTable = <T extends { id: Identification }>({
  data = [],
  actions,
  selectedRows,
  onRowSelectionChange,
}: DataTableProps<T>) => {
  const inferredColumns = React.useMemo(() => {
    if (data.length === 0) {
      return []
    }

    // Get keys from the first item in the data array
    const keys = (Object.keys(data[0]) as (keyof T)[]) ?? [] // Get the keys from the first item in the data array
    const keysButId = keys.filter(key => key !== 'id') ?? [] // Remove the 'id' key

    const columns: ColumnDef<T>[] = keysButId.map(key => ({
      accessorKey: key,
      header: ({ column }: any) => {
        return <span className="capitalize">{column.id}</span>
      },
      cell: ({ row }: any) => <div>{row.getValue(key)}</div>,
    }))

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
      return [...columns]
    }
    return [...columns, actionsColumn]
  }, [actions, data])

  const firstColumn = React.useMemo<ColumnDef<T>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
    ],
    [],
  )

  // const firstColumn: ColumnDef<T> = {
  //   id: 'id',
  //   header: ({ table }) => {
  //     if (!table) return null
  //     return (
  //       <IndeterminateCheckbox
  //         {...{
  //           checked: table.getIsAllRowsSelected(),
  //           indeterminate: table.getIsSomeRowsSelected(),
  //           onChange: table.getToggleAllRowsSelectedHandler(),
  //         }}
  //       />
  //     )
  //   },
  //   cell: ({ row }) => {
  //     if (!row) return null
  //     return (
  //       <>
  //         {/* <IndeterminateCheckbox
  //           {...{
  //             checked: row.getIsSelected(),
  //             disabled: !row.getCanSelect(),
  //             indeterminate: row.getIsSomeSelected(),
  //             onChange: row.getToggleSelectedHandler(),
  //           }}
  //         /> */}
  //       </>
  //     )
  //   },
  //   enableSorting: false,
  //   enableHiding: false,
  // }

  const columns = React.useMemo(() => [...firstColumn, ...inferredColumns], [firstColumn, inferredColumns])

  const [globalFilter, setGlobalFilter] = React.useState('')

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection: true,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isMultiSortEvent: (e: any) => e.ctrlKey || e.shiftKey, // also use the `Ctrl` key to trigger multi-sorting
    maxMultiSortColCount: 3, // only allow 3 columns to be sorted at once

    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      rowSelection: selectedRows,
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

      {/*  */}
      <Table className="w-full rounded-lg border">
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableHead key={header.id} colSpan={header.colSpan}>
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
            table.getRowModel().rows.map(row => {
              return (
                <TableRow key={row.id} data-state={'selected'}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              )
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {/* <footer className="flex items-center justify-end space-x-2 py-4">
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
      </footer> */}
    </section>
  )
}
