import type { Meta, StoryFn } from '@storybook/react'
import { Button } from '../Button'
import type { PopoverProps } from './Popover'
import { Popover } from './Popover'
import { TbFile } from 'react-icons/tb'
import { IconButton } from '../IconButton'
import { Avatar } from '../Avatar'
import { useState } from 'react'

export default {
  title: 'Components/Popover',
  component: Popover,
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} as Meta
const ExampleContent = () => {
  return (
    <div className="flex flex-col items-center rounded-2xl">
      <Avatar size="lg" img={'https://avatars.githubusercontent.com/u/63197171?v=4'} />
      <h2 className="text-lg font-bold mt-2">Pol Gubau Amores</h2>
      <p className="text-sm text-secondary-500">
        Software Engineer at <b>Pol-ui</b>
      </p>

      <div className="mt-4 flex items-center">
        <Button color="secondary">View Profile</Button>
        <Button color="primary" className="ml-2">
          Follow
        </Button>
      </div>
    </div>
  )
}
const Template: StoryFn<PopoverProps> = args => <Popover {...args} />

export const Default = Template.bind({})
Default.args = {
  content: <ExampleContent />,
  children: <Button>Default tooltip</Button>,
}

export const IconUseCase = Template.bind({})
IconUseCase.args = {
  content: <ExampleContent />,
  children: (
    <IconButton>
      <TbFile size={20} />
    </IconButton>
  ),
}

export const DarkMode = () => (
  <div className=" grid grid-cols-2 border border-secondary rounded-2xl overflow-hidden">
    <div className="flex p-8 ">
      <Popover content={<ExampleContent />} placement="bottom">
        <Button>Default tooltip</Button>
      </Popover>
    </div>
    <div className="flex p-8 bg-secondary-900 dark">
      <Popover content={<ExampleContent />} placement="bottom">
        <Button>Default tooltip</Button>
      </Popover>
    </div>
  </div>
)

export function Controlled() {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen} content={<ExampleContent />}>
      <Button onClick={() => setOpen(v => !v)}>My trigger</Button>
    </Popover>
  )
}
