import type { Meta, StoryFn } from '@storybook/react'
import type { SplitButtonProps } from './SplitButton'
import { SplitButton } from './SplitButton'

export default {
  title: 'Components/SplitButton',
  component: SplitButton,
} as Meta

const Template: StoryFn<SplitButtonProps> = () => (
  <SplitButton
    options={[
      {
        label: 'Option 1',
        onClick: () => alert('One'),
      },
      {
        label: 'Option 2',
        onClick: () => alert('Two'),
      },
      {
        label: 'Option 3',
        onClick: () => alert('Three'),
      },
    ]}
  />
)

export const Default = Template.bind({})
