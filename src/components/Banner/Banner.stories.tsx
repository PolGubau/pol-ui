import type { Meta, StoryFn } from '@storybook/react'
import { HiX } from 'react-icons/hi'
import type { BannerComponentProps } from './Banner'
import { Banner } from './Banner'

export default {
  title: 'Components/Banner',
  component: Banner,
} as Meta

const Template: StoryFn<BannerComponentProps> = args => <Banner {...args} />

export const DefaultBanner = Template.bind({})
DefaultBanner.args = {
  children: (
    <>
      <span>Welcome back to Pol-ui</span>
      <Banner.CloseButton>
        <HiX className="h-4 w-4" />
      </Banner.CloseButton>
    </>
  ),
}

export const BorderedBanner = Template.bind({})
BorderedBanner.storyName = 'With border'
BorderedBanner.args = {
  bordered: true,
  children: <span>Welcome back to Pol-ui</span>,
}
export const CustomBanner = Template.bind({})
CustomBanner.storyName = 'Custom styles'
CustomBanner.args = {
  className: 'bg-success-300 py-4 px-6 rounded-b-3xl',
  children: (
    <>
      <span>Welcome back to Pol-ui</span>
      <Banner.CloseButton>
        <HiX className="h-4 w-4" />
      </Banner.CloseButton>
    </>
  ),
}
export const CustomCloseButton = Template.bind({})
CustomCloseButton.args = {
  className: 'bg-info-300 py-4 px-6 rounded-3xl',
  children: (
    <>
      <span>Welcome back to Pol-ui, check our blog!</span>
      <Banner.CloseButton className="rounded-lg">
        <HiX className="h-4 w-4" /> Close
      </Banner.CloseButton>
    </>
  ),
}
