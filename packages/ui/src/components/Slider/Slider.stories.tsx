import type { Meta, StoryFn } from '@storybook/react'
import type { SliderProps } from './Slider'
import { Slider } from './Slider'
import { ColorsEnum } from '../../types'

export default {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  decorators: [
    (Story): JSX.Element => (
      <div className="flex flex-col gap-10">
        <div className="flex flex-col bg-secondary-50 min-h-10 p-4 gap-4">
          In Light theme
          <Story />
        </div>
        <div className="flex flex-col dark bg-secondary-900 min-h-10 p-4 gap-4 text-white">
          In Dark theme
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<SliderProps> = args => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {}
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const AllColors = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {Object.keys(ColorsEnum).map(color => (
        <Slider key={color} color={color as any} />
      ))}
    </div>
  )
}
