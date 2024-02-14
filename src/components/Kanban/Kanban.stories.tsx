import type { Meta, StoryFn } from '@storybook/react'
import type { KanbanProps } from './Kanban'
import { Kanban } from './Kanban'
import React from 'react'
export default {
  title: 'Components/Kanban',
  component: Kanban,
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center pt-10">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<KanbanProps> = args => <Kanban {...args} />
export const Default = Template.bind({})
