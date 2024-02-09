import type { Meta, StoryFn } from '@storybook/react'
import type { AvatarProps } from './Avatar'
import { Avatar } from './Avatar'
import React from 'react'
import { MainSizesEnum, RoundedSizesEnum } from '../../types/enums'
import { AvatarStatusEnum } from './AvatarTypes'
import type { MainSizes, RoundedSizes } from '../../types'
export default {
  title: 'Components/Avatar',
  component: Avatar,

  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<AvatarProps> = args => <Avatar {...args} />

export const DefaultAvatar = Template.bind({})
DefaultAvatar.storyName = 'Default'
DefaultAvatar.args = {
  alt: 'Your avatar',
  img: 'https://avatars.githubusercontent.com/u/63197171?v=4',
}
export const WrongImage = Template.bind({})
WrongImage.args = {
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

export const AllSizes = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(MainSizesEnum).map(size => (
      <div key={size} className="flex flex-col items-center justify-center">
        <Avatar
          alt="Your avatar"
          img="https://avatars.githubusercontent.com/u/63197171?v=4"
          size={size as MainSizes}
          className="mb-2"
        />
        <span className="text-gray-500">{size}</span>
      </div>
    ))}
  </div>
)

export const AllStatus = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(AvatarStatusEnum).map(status => (
      <div key={status} className="flex flex-col items-center justify-center">
        <Avatar
          alt="Your avatar"
          img="https://avatars.githubusercontent.com/u/63197171?v=4"
          status={status}
          className="mb-2"
        />
        <span className="text-gray-500">{status}</span>
      </div>
    ))}
  </div>
)
export const AllRounded = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(RoundedSizesEnum).map(v => (
      <div key={v} className="flex flex-col items-center justify-center">
        <Avatar
          alt="Your avatar"
          img="https://avatars.githubusercontent.com/u/63197171?v=4"
          rounded={v as RoundedSizes}
          className="mb-2"
        />
        <span className="text-gray-500">{v}</span>
      </div>
    ))}
  </div>
)
