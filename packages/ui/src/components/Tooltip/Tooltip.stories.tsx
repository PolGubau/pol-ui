import type { Meta, StoryFn } from "@storybook/react"
import { TbFile } from "react-icons/tb"

import { useBoolean } from "../../hooks"
import { AlignEnum, SidesEnum, type Align, type Side } from "../../types"
import { Button } from "../Button"
import { IconButton } from "../IconButton"
import { Tooltip, type TooltipProps } from "./Tooltip"
import ToolbarExpandable from "../Toolbox/v2"

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <div className="grid place-items-center">
        <Story />
      </div>
    ),
  ],

  tags: ["autodocs"],
} as Meta

const Template: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />

export const DefaultTooltip = Template.bind({})
DefaultTooltip.storyName = "Default"
DefaultTooltip.args = {
  label: "Tooltip content",
  children: <Button>Default tooltip</Button>,
}
export const DefaultOpened = Template.bind({})
DefaultOpened.args = {
  ...DefaultTooltip.args,
  defaultOpen: true,
}

export const IconUseCase = Template.bind({})
IconUseCase.args = {
  label: "Upload a file",
  children: (
    <IconButton>
      <TbFile size={20} />
    </IconButton>
  ),
}

export const New = () => <ToolbarExpandable />

export const Controlled = () => {
  const { value, toggle } = useBoolean(false)
  return (
    <div className="flex gap-4">
      <Tooltip open={value} onOpenChange={toggle} label="My tooltip">
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
      {Object.keys(SidesEnum).map((side) => (
        <Tooltip key={side} label="Tooltip content" side={side as Side}>
          <Button>{side} tooltip</Button>
        </Tooltip>
      ))}
    </div>
  )
}
export const AllAlignments = () => {
  return (
    <div className="flex gap-4">
      {Object.keys(AlignEnum).map((align) => (
        <Tooltip key={align} label="Tooltip content" align={align as Align}>
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
        "When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.",
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
  onEscapeKeyDown: () => {
    alert("Escape key pressed")
  },
}
export const OnPointerDownOutside = Template.bind({})
OnPointerDownOutside.args = {
  ...DefaultTooltip.args,
  onPointerDownOutside: () => {
    alert("Pointer down outside")
  },
}
