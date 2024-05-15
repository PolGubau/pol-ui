import type { Meta, StoryFn } from '@storybook/react'
import { LoadingBar, LoadingBarProvider } from './LoadingBar'

export default {
  title: 'Components/LoadingBar',
  component: LoadingBar,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col w-full">
        <div className="max-w-xl">
          <LoadingBarProvider>
            {/* I.e. using Tailwind CSS to show the progress bar with custom styling */}
            <LoadingBar className="fixed h-1 shadow-lg shadow-sky-500/20 bg-sky-500 top-0" />
            <Story />
          </LoadingBarProvider>
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn = args => <LoadingBar {...args} />

export const Default = Template.bind({})
Default.args = {}
