import type { Meta, StoryFn } from '@storybook/react'
import type { HelperTextProps } from './HelperText'
import { HelperText } from './HelperText'

export default {
  title: 'Components/Texts/HelperText',
  component: HelperText,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col  min-h-[400px] justify-center items-center bg-secondary-50">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<HelperTextProps> = args => <HelperText {...args} />

export const DefaultLabel = Template.bind({})
DefaultLabel.storyName = 'HelperText'
DefaultLabel.args = {
  children: 'HelperText',
}
