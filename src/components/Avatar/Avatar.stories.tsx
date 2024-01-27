import type { Meta, StoryFn } from '@storybook/react'
import type { AvatarProps } from './Avatar'
import { Avatar } from './Avatar'
import React from 'react'
import { MainSizesEnum } from '../../types/enums'
import { AvatarStatusEnum } from './AvatarTypes'
export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [
    Story => (
      <div className="bg-background">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Avatar component is used to represent a user or entity. Also it can be used to group multiple avatars.',
      },
    },
  },
} as Meta

const Template: StoryFn<AvatarProps> = args => <Avatar {...args} />

export const DefaultAvatar = Template.bind({})
DefaultAvatar.storyName = 'Default'
DefaultAvatar.args = {
  alt: 'Your avatar',
  img: '/images/people/me.png',
}
export const WrongImage = Template.bind({})
WrongImage.args = {
  alt: 'Your avatar',
  img: '/images/people/.png',
}
export const BorderedAvatar = Template.bind({})
BorderedAvatar.args = {
  alt: 'Your avatar',
  bordered: true,
  img: '/images/people/me.png',
}

export const CustomImage: StoryFn<AvatarProps> = props => (
  <>
    <Avatar
      {...props}
      img={props => (
        <picture>
          <source media="(min-width: 900px)" srcSet="/images/people/me.png" />
          <source media="(min-width: 480px)" srcSet="/images/people/me.png" />
          <img alt="profile" src="/images/people/me.png" {...props} />
        </picture>
      )}
    />
    <small className="block text-center text-gray-500">Hint: Resize the viewport</small>
  </>
)
CustomImage.storyName = 'Custom Image Element'

export const AllSizes = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(MainSizesEnum).map(size => (
      <div key={size} className="flex flex-col items-center justify-center">
        <Avatar alt="Your avatar" img="/images/people/me.png" size={size} className="mb-2" />
        <span className="text-gray-500">{size}</span>
      </div>
    ))}
  </div>
)

export const AllStatus = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(AvatarStatusEnum).map(status => (
      <div key={status} className="flex flex-col items-center justify-center">
        <Avatar alt="Your avatar" img="/images/people/me.png" status={status} className="mb-2" />
        <span className="text-gray-500">{status}</span>
      </div>
    ))}
  </div>
)
