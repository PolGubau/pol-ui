import type { Meta, StoryFn } from '@storybook/react'
import { Button } from '../Button'
import { ButtonGroup, type ButtonGroupProps } from './ButtonGroup'

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as Meta

const Template: StoryFn<ButtonGroupProps> = args => (
  <ButtonGroup {...args}>
    <Button className="rounded-r-none">Profile</Button>
    <Button rounded="none">Settings</Button>
    <Button className="rounded-l-none">Messages</Button>
  </ButtonGroup>
)

export const DefaultAvatarGroup = Template.bind({})
DefaultAvatarGroup.storyName = 'ButtonGroup'
DefaultAvatarGroup.args = {}
