import type { Meta } from '@storybook/react'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './Table'

export default {
  title: 'Components/Table',
  component: Table,
  tags:['autodocs']
} as Meta
const components = [
  {
    invoice: 'C1',
    paymentStatus: 'Button',
    downloads: '255',
    description: 'Small clickable element',
  },
  {
    invoice: 'C2',
    paymentStatus: 'Input',
    downloads: '151',
    description: 'Text input field',
  },
  {
    invoice: 'C3',
    paymentStatus: 'Table',
    downloads: '356',
    description: 'Data grid with rows and columns',
  },
  {
    invoice: 'C4',
    paymentStatus: 'Avatar',
    downloads: '450',
    description: 'Profile picture or user icon',
  },
  {
    invoice: 'C5',
    paymentStatus: 'Accordion',
    downloads: '550',
    description: 'Expandable content',
  },
  {
    invoice: 'C6',
    paymentStatus: 'Radio',
    downloads: '220',
    description: 'Single choice input',
  },
  {
    invoice: 'C7',
    paymentStatus: 'Popover',
    downloads: '303',
    description: 'Floating content',
  },
]

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Component</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {components.map(invoice => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.description}</TableCell>
            <TableCell className="text-right">{invoice.downloads}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Downloads</TableCell>
          <TableCell className="text-right">
            {components.reduce((acc, curr) => acc + parseInt(curr.downloads), 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
