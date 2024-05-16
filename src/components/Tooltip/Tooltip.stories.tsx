import type { Meta, StoryFn } from '@storybook/react'
import { TbFile } from 'react-icons/tb'
import { useBoolean } from '../../hooks'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import type { TooltipProps } from './Tooltip'
import { Tooltip } from './Tooltip'
import type { Align, Side } from '../../types'
import { AlignEnum, SidesEnum } from '../../types'
export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [
    Story => (
      <div className="flex p-6 grid place-items-center min-h-[200px] bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<TooltipProps> = args => <Tooltip {...args} />

export const DefaultTooltip = Template.bind({})
DefaultTooltip.storyName = 'Default'
DefaultTooltip.args = {
  content: 'Tooltip content',
  children: <Button>Default tooltip</Button>,
}
export const DefaultOpened = Template.bind({})
DefaultOpened.args = {
  ...DefaultTooltip.args,
  defaultOpen: true,
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
      <Tooltip content="Tooltip content">
        <Button>Default tooltip</Button>
      </Tooltip>
    </div>
    <div className="flex p-8 bg-secondary-900 dark">
      <Tooltip content="Tooltip content">
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
      <Button color="secondary" onClick={toggle} className="w-fit">
        Click me to toggle tooltip
      </Button>
    </div>
  )
}
export const AllSides = () => {
  return (
    <div className="flex gap-4">
      {Object.keys(SidesEnum).map(side => (
        <Tooltip key={side} content="Tooltip content" side={side as Side}>
          <Button>{side} tooltip</Button>
        </Tooltip>
      ))}
    </div>
  )
}
export const AllAlignments = () => {
  return (
    <div className="flex gap-4">
      {Object.keys(AlignEnum).map(align => (
        <Tooltip key={align} content="Tooltip content" align={align as Align}>
          <Button>{align} tooltip</Button>
        </Tooltip>
      ))}
    </div>
  )
}
export const DisableHoverableContent = Template.bind({})
DisableHoverableContent.parameters = {
  docs: {
    description: {
      story:
        'When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.',
    },
  },
}

DisableHoverableContent.args = {
  ...DefaultTooltip.args,
  disableHoverableContent: true,
}
export const SideOffset = Template.bind({})
SideOffset.args = {
  ...DefaultTooltip.args,
  sideOffset: 20,
}
export const OnEscapeKeyDown = Template.bind({})
OnEscapeKeyDown.args = {
  ...DefaultTooltip.args,
  onEscapeKeyDown: () => alert('Escape key pressed'),
}
export const OnPointerDownOutside = Template.bind({})
OnPointerDownOutside.args = {
  ...DefaultTooltip.args,
  onPointerDownOutside: () => alert('Pointer down outside'),
}
