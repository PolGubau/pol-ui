import type { Meta, StoryFn } from '@storybook/react'
import { Avatar } from './Avatar'
import type { AvatarGroupProps } from './AvatarGroup'

export default {
  title: 'Components/Avatar',
  component: Avatar.Group,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<AvatarGroupProps> = args => (
  <Avatar.Group {...args}>
    <Avatar img="https://avatars.githubusercontent.com/u/104431726?v=4" stacked />
    <Avatar img="https://avatars.githubusercontent.com/u/104431726?v=4" stacked />
    <Avatar img="https://avatars.githubusercontent.com/u/94074414?s=80&v=4" stacked />
    <Avatar img="https://avatars.githubusercontent.com/u/78301921?s=80&v=4" stacked />
    <Avatar.Counter total={99} href="#" />
  </Avatar.Group>
)

export const DefaultAvatarGroup = Template.bind({})
DefaultAvatarGroup.storyName = 'Grouped'
DefaultAvatarGroup.args = {}
