import type { Meta, StoryFn } from '@storybook/react'

import type { PasswordInputProps } from './PasswordInput'
import { PasswordInput } from './PasswordInput'

export default {
  title: 'Components/Inputs/PasswordInput',
  component: PasswordInput,
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
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<PasswordInputProps> = args => <PasswordInput {...args} />

export const Default = Template.bind({})
Default.storyName = 'Password input'
Default.args = {
  placeholder: '············',
  label: 'Password',
}
