import type { Meta, StoryFn } from '@storybook/react'
import type { ExpandableButtonProps } from './ExpandableButton'
import ExpandableButton from './ExpandableButton'
import { Dropdown, DropdownCheckboxItem, DropdownItem, DropdownLabel } from '../Dropdown'
import { Textarea } from '../Textarea'
import { Button } from '../Button'
import { TbChevronRight, TbSend } from 'react-icons/tb'

export default {
  title: 'Components/ExpandableButton',
  tags: ['autodocs'],
  component: ExpandableButton,
  decorators: [
    Story => (
      <div className="bg-secondary-50 min-h-[200px] dark:bg-secondary-900 p-6">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default = () => (
  <ExpandableButton>
    <div className="bg-secondary-100 p-2 flex flex-col gap-2">
      <h4>Add comment</h4>
      <Textarea className="w-full" placeholder="Write a comment" />
      <nav className="flex flex-row-reverse justify-right w-full">
        <Button size={'sm'}>
          Send
          <TbChevronRight className="w-4 h-4" />
        </Button>
      </nav>
    </div>
  </ExpandableButton>
)

export const InDropdown = () => {
  return (
    <div className="flex p-6 flex-col items-center h-full">
      <Dropdown className="w-96">
        <DropdownLabel>User</DropdownLabel>
        <DropdownCheckboxItem>Item 1</DropdownCheckboxItem>
        <DropdownCheckboxItem>Item 2</DropdownCheckboxItem>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <ExpandableButton> Content </ExpandableButton>{' '}
      </Dropdown>
    </div>
  )
}
