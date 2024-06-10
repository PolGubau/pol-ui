import type { Meta, StoryFn } from '@storybook/react'
import type { SplitButtonProps } from './SplitButton'
import { SplitButton } from './SplitButton'

export default {
  title: 'Components/SplitButton',
  component: SplitButton,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<SplitButtonProps> = props => (
  <SplitButton
    {...props}
    options={[
      {
        label: 'Option 1',
        onClick: () => { alert('One'); },
      },
      {
        label: 'Option 2',
        onClick: () => { alert('Two'); },
      },
      {
        label: 'Option 3',
        onClick: () => { alert('Three'); },
      },
    ]}
  />
)

export const Default = Template.bind({})
export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
}
export const Ghost = Template.bind({})
Ghost.args = {
  variant: 'ghost',
}
