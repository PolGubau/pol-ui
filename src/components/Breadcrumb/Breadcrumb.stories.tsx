import type { Meta, StoryFn } from '@storybook/react'
import { HiHome } from 'react-icons/hi'
import type { BreadcrumbComponentProps } from './Breadcrumb'
import { Breadcrumb } from './Breadcrumb'
import { MdTableRestaurant } from 'react-icons/md'
import { BreadcrumbItem } from './BreadcrumbItem'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col  min-h-[400px]  bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<BreadcrumbComponentProps> = args => (
  <Breadcrumb {...args}>
    <BreadcrumbItem href="https://polgubau.com/" icon={HiHome}>
      Home
    </BreadcrumbItem>
    <BreadcrumbItem href="https://polgubau.com/" icon={MdTableRestaurant}>
      Authors
    </BreadcrumbItem>
    <BreadcrumbItem>Pol Gubau Amores</BreadcrumbItem>
  </Breadcrumb>
)

export const Default = Template.bind({})

export const SolidBackground = Template.bind({})
SolidBackground.storyName = 'Solid background'
SolidBackground.args = {
  className: 'bg-primary-400 w-fit py-2 px-4 rounded-xl',
}
