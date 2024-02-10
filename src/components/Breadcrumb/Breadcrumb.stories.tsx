import type { Meta, StoryFn } from '@storybook/react'
import type { BreadcrumbComponentProps } from './Breadcrumb'
import { Breadcrumb } from './Breadcrumb'
import { BreadcrumbItem } from './BreadcrumbItem'
import { TbHome, TbUser } from 'react-icons/tb'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col ">
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
    <BreadcrumbItem href="https://polgubau.com/" icon={TbHome}>
      Home
    </BreadcrumbItem>
    <BreadcrumbItem href="https://polgubau.com/" icon={TbUser}>
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
