import type { Meta, StoryFn } from '@storybook/react'
import type { AvatarProps } from './Avatar'
import { Avatar } from './Avatar'
import React from 'react'
export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta

const Template: StoryFn<AvatarProps> = args => <Avatar {...args} />

export const DefaultAvatar = Template.bind({})
DefaultAvatar.storyName = 'Default'
DefaultAvatar.args = {
  alt: 'Your avatar',
  img: 'https://avatars.githubusercontent.com/u/63197171?v=4',
}
export const BorderedAvatar = Template.bind({})
BorderedAvatar.args = {
  alt: 'Your avatar',
  bordered: true,
  img: 'https://avatars.githubusercontent.com/u/63197171?v=4',
}

export const CustomImage: StoryFn<AvatarProps> = props => (
  <>
    <Avatar
      {...props}
      img={props => (
        <picture>
          <source media="(min-width: 900px)" srcSet="https://avatars.githubusercontent.com/u/63197171?v=4" />
          <source media="(min-width: 480px)" srcSet="https://avatars.githubusercontent.com/u/63197171?v=4" />
          <img alt="profile" src="https://avatars.githubusercontent.com/u/63197171?v=4" {...props} />
        </picture>
      )}
    />
    <small className="block text-center text-gray-500">Hint: Resize the viewport</small>
  </>
)

CustomImage.storyName = 'Custom Image Element'
