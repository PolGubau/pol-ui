import type { Meta } from '@storybook/react'
import { DataTable } from './DataTable'
import { Toaster, toast } from '../Toaster'
import React from 'react'
import type { RowSelectionState } from '@tanstack/react-table'

export default {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  args: {
    title: 'Dropdown example',
    placement: 'auto',
    disabled: false,
    label: 'Dropdown',
  },
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta
const data = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
  {
    id: 'gery',
    amount: 999,
    status: 'success',
    email: 'dia@blo.com',
  },
]

export const Default = () => (
  <DataTable
    data={data}
    actions={row => [
      { label: 'Print email', onClick: () => toast({ title: row.email }) },
      {
        label: 'Copy ID',
        onClick: () => {
          navigator.clipboard.writeText(row.id)
          toast({ title: `ID ${row.id} copied to clipboard` })
        },
      },
    ]}
  />
)
export const ControlledSelection = () => {
  // example of how to manage row selection:
  // {1: true, 2: true} means rows with INDEX 1 and 2 are selected
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  return (
    <>
      <pre> SelectedRows:{JSON.stringify(rowSelection)}</pre>
      <DataTable
        selectedRows={rowSelection}
        onRowSelectionChange={setRowSelection}
        data={data}
        actions={row => [
          { label: 'Print email', onClick: () => toast({ title: row.email }) },
          {
            label: 'Copy ID',
            onClick: () => {
              navigator.clipboard.writeText(row.id)
              toast({ title: `ID ${row.id} copied to clipboard` })
            },
          },
        ]}
      />
    </>
  )
}
