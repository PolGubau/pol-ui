import type { Meta, StoryFn } from '@storybook/react'
import type { TableProps } from './Table'
import { Table } from './Table'
import { IconButton } from '../IconButton'
import { TbEdit, TbEye } from 'react-icons/tb'

export default {
  title: 'Components/Tables',
  component: Table,
} as Meta

const mockUsers = [
  {
    id: 1,
    name: 'Albert Arrebola',
    username: 'arrebolsillo',
    email: 'bolarre@polui.com',
    address: 'Calle Eucalipto 66',
  },
  {
    id: 2,
    name: 'Cristina Llull',
    username: 'cristinallull',
    email: 'cristinallull@polui.com',
    address: 'Calle 123',
  },
  {
    id: 3,
    name: 'Berta Pasamontes',
    username: 'donutconchocolate',
    email: 'donutconchocolate@polui.com',
    address: 'Avenida 123',
  },
  {
    id: 4,
    name: 'Pepito Grillo',
    username: 'PepeGrillo',
    email: 'PepeGrillo@polui.com',
    address: 'Pasillo 4',
  },
]

const Template: StoryFn<TableProps> = args => (
  <Table {...args}>
    <Table.Head>
      <Table.HeadCell>Name</Table.HeadCell>
      <Table.HeadCell>Username</Table.HeadCell>
      <Table.HeadCell>Email</Table.HeadCell>
      <Table.HeadCell>Address</Table.HeadCell>
      <Table.HeadCell>
        <span className="sr-only">Edit</span>
      </Table.HeadCell>
    </Table.Head>

    <Table.Body className="divide-y">
      {mockUsers.map(user => (
        <Table.Row key={user.id}>
          <Table.Cell>{user.name}</Table.Cell>
          <Table.Cell>{user.username}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
          <Table.Cell>{user.address}</Table.Cell>
          <Table.Cell>
            <div className="flex gap-1">
              <IconButton title="Edit">
                <TbEdit />
              </IconButton>
              <IconButton title="Edit" color="info">
                <TbEye />
              </IconButton>
            </div>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)

export const DefaultTable = Template.bind({})
DefaultTable.storyName = 'Default'
