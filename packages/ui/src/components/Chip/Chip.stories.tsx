import type { Meta, StoryFn } from '@storybook/react'
import { Chip, type ChipProps } from './Chip'
import { TbDots, TbTrash, TbX } from 'react-icons/tb'
import { Dropdown, DropdownItem } from '../Dropdown'
import { Divider } from '../Divider'
import type { Colors } from '../../types'
import { ColorsEnum } from '../../types'
import { Toaster, toast } from '../Toaster'

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<ChipProps> = args => <Chip {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Chip',
}
export const OnClick = Template.bind({})
OnClick.args = {
  children: 'Chip',
  onClick: () => {
    toast({ title: 'Clicked' })
  },
}
export const Disabled = Template.bind({})
Disabled.args = {
  children: 'disabled',
  disabled: true,
}
export const OnDelete = Template.bind({})
OnDelete.args = {
  children: 'Chip',
  actions: [
    {
      onClick: () => {
        toast({ title: 'Delete' })
      },
      icon: <TbX />,
    },
  ],
}
export const MultipleActions = Template.bind({})
MultipleActions.args = {
  children: 'Custom Icon',
  actions: [
    {
      onClick: () => {
        toast({ title: 'More actions' })
      },
      icon: <TbDots />,
    },
    {
      onClick: () => {
        toast({ title: 'Delete' })
      },
      icon: <TbTrash />,
    },
  ],
}
export const DropdownExample = Template.bind({})
DropdownExample.args = {
  children: 'Custom Icon',
  actions: [
    {
      element: (
        <Dropdown
          label="Example"
          trigger={
            <div className="flex items-center justify-center pr-1">
              <TbDots color="#000" />
            </div>
          }
        >
          <DropdownItem label="Undo" onClick={() => { alert('Undo'); }} shortcut="⌘Z" />
          <DropdownItem label="Redo" shortcut="⌘Y" onClick={() => { alert('Redo'); }} />
          <Divider />
          <DropdownItem label="More actions" onClick={() => { alert('More actions'); }} />
        </Dropdown>
      ),
    },
  ],
}
export const AllColors = () => {
  return (
    <div className="flex gap-4 items-center justify-center flex-col">
      <div className="flex gap-4 items-center justify-center p-3  rounded-3xl">
        {Object.keys(ColorsEnum).map((color, index) => (
          <Chip key={index} color={color as Colors}>
            {color}
          </Chip>
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center dark p-3 bg-secondary-900 rounded-3xl">
        {Object.keys(ColorsEnum).map((color, index) => (
          <Chip key={index} color={color as Colors}>
            {color}
          </Chip>
        ))}
      </div>
    </div>
  )
}
