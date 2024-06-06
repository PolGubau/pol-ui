import type { Meta, StoryFn } from '@storybook/react'
import type { LabelProps } from './Label'
import { Label } from './Label'

export default {
  title: 'Components/Texts/Label',
  component: Label,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center ">
        <div className="max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<LabelProps> = args => <Label {...args} />

export const DefaultLabel = Template.bind({})
DefaultLabel.storyName = 'Label'
DefaultLabel.args = {
  children: 'Label',
}
