/* eslint-disable react/prop-types */
import type { Meta, StoryFn } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import type { PaginationProps } from './Pagination'
import { Pagination } from './Pagination'
export default {
  title: 'Components/Pagination',
  component: Pagination,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex items-center justify-center text-center">
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<PaginationProps> = ({ currentPage = 1, layout = 'pagination', totalPages = 100, ...rest }) => {
  const [page, setPage] = useState(currentPage)

  const onPageChange = (page: number) => {
    setPage(page)
  }

  useEffect(() => {
    setPage(currentPage)
  }, [currentPage])

  return <Pagination {...rest} currentPage={page} layout={layout} onPageChange={onPageChange} totalPages={totalPages} />
}

export const Default = Template.bind({})

export const PaginationWithIcons = Template.bind({})
PaginationWithIcons.storyName = 'Pagination with icons'
PaginationWithIcons.args = {
  showIcons: true,
}

export const Nav = Template.bind({})
Nav.args = {
  layout: 'navigation',
}
export const Outline = Template.bind({})
Outline.args = {
  outline: true,
}

export const NavWithIcons = Template.bind({})
NavWithIcons.storyName = 'Nav with icons'
NavWithIcons.args = {
  layout: 'navigation',
  showIcons: true,
}

export const Table = Template.bind({})
Table.args = {
  layout: 'table',
}
export const Labels = Template.bind({})
Labels.args = {
  layout: 'table',
  labels: {
    entries: 'dades',
    of: 'de',
    showing: 'Mostrant',
    to: 'de',
    next: 'Següent',
    previous: 'Anterior',
  },
}

export const TableWithIcons = Template.bind({})
TableWithIcons.storyName = 'Table with icons'
TableWithIcons.args = {
  layout: 'table',
  showIcons: true,
}
