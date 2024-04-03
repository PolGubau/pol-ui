import type { Meta, StoryFn } from '@storybook/react'
import { Button } from '../Button'
import type { TooltipProps } from './Tooltip'
import { Tooltip } from './Tooltip'
import { TbFile } from 'react-icons/tb'
import { IconButton } from '../IconButton'
import { useBoolean } from '../../hooks'
export default {
  title: 'Components/Tooltip',
  component: Tooltip,
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
} as Meta

const Template: StoryFn<TooltipProps> = args => <Tooltip {...args} />

export const DefaultTooltip = Template.bind({})
DefaultTooltip.storyName = 'Default'
DefaultTooltip.args = {
  content: 'Tooltip content',
  placement: 'bottom',
  children: <Button>Default tooltip</Button>,
}

export const IconUseCase = Template.bind({})
IconUseCase.args = {
  content: 'Upload a file',
  children: (
    <IconButton>
      <TbFile size={20} />
    </IconButton>
  ),
}

export const DarkMode = () => (
  <div className=" grid grid-cols-2 border border-secondary rounded-2xl overflow-hidden">
    <div className="flex p-8 ">
      <Tooltip content="Tooltip content" placement="bottom">
        <Button>Default tooltip</Button>
      </Tooltip>
    </div>
    <div className="flex p-8 bg-secondary-900 dark">
      <Tooltip content="Tooltip content" placement="bottom">
        <Button>Default tooltip</Button>
      </Tooltip>
    </div>
  </div>
)

export const Controlled = () => {
  const { value, toggle } = useBoolean(false)
  return (
    <div className="flex gap-4">
      <Tooltip open={value} onOpenChange={toggle} content="My tooltip">
        <Button>My trigger</Button>
      </Tooltip>
      <Button color="secondary" outline onClick={toggle} className="w-fit">
        Click me to toggle tooltip
      </Button>
    </div>
  )
}
