import type { Meta, StoryFn } from '@storybook/react'
import type { TimelineProps } from './Timeline'
import { Timeline } from './Timeline'

export default {
  title: 'Components/Timeline',
  component: Timeline,
} as Meta

const Template: StoryFn<TimelineProps> = args => <Timeline {...args} />

const Example = () => (
  <>
    <Timeline.Item>
      February 2022
      <h2 className="text-black font-bold">Application UI code in Tailwind CSS</h2>
      Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
      E-commerce & Marketing pages.
    </Timeline.Item>
    <Timeline.Item>
      March 2022
      <h2 className="text-black font-bold">Application UI code in Tailwind CSS</h2>
      All of the pages and components are first designed in Figma and we keep a parity between the two versions even as
      we update the project.
    </Timeline.Item>
    <Timeline.Item>
      April 2022
      <h2 className="text-black font-bold">Application UI code in Tailwind CSS</h2>
      Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
    </Timeline.Item>
  </>
)
export const Default = Template.bind({})
Default.args = {
  children: <Example />,
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  horizontal: true,
  children: <Example />,
}
