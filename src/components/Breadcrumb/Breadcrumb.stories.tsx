import type { Meta, StoryFn } from '@storybook/react'
import { HiHome } from 'react-icons/hi'
import type { BreadcrumbComponentProps } from './Breadcrumb'
import { Breadcrumb } from './Breadcrumb'
import { MdTableRestaurant } from 'react-icons/md'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as Meta

const Template: StoryFn<BreadcrumbComponentProps> = args => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item href="https://polgubau.com/" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="https://polgubau.com/" icon={MdTableRestaurant}>
      Authors
    </Breadcrumb.Item>
    <Breadcrumb.Item>Pol Gubau Amores</Breadcrumb.Item>
  </Breadcrumb>
)

export const Default = Template.bind({})

export const SolidBackground = Template.bind({})
SolidBackground.storyName = 'Solid background'
SolidBackground.args = {
  className: 'bg-primary-400 w-fit py-2 px-4 rounded-xl',
}
