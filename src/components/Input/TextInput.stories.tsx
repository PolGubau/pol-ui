import type { Meta, StoryFn } from '@storybook/react'
import type { InputProps } from './Input'
import { Input } from './Input'
import { TbAt, TbUser } from 'react-icons/tb'
import { ColorsEnum } from '../PoluiProvider/enums'

export default {
  title: 'Components/Input',
  component: Input,
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

const Template: StoryFn<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.storyName = 'Text input'
Default.args = {}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  placeholder: 'Placeholder',
  label: 'Label',
}

export const WithAddon = Template.bind({})
WithAddon.args = {
  placeholder: 'Addon',
  addon: <span>Addon</span>,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  placeholder: 'Username',
  icon: TbUser,
}
export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  placeholder: 'Email',
  rightIcon: TbAt,
}
export const WithHelperText = Template.bind({})
WithHelperText.args = {
  placeholder: 'Email',
  helperText: 'Helper text',
}

export const AllColors = () => (
  <div className="grid grid-cols-2">
    <div className="flex flex-col gap-4 p-4 bg-secondary-50">
      {Object.keys(ColorsEnum).map(color => (
        <Input key={color} placeholder={color} color={color as any} rightIcon={TbAt} />
      ))}
    </div>
    <div className="dark flex flex-col gap-4 p-4 rounded-xl bg-secondary-900">
      {Object.keys(ColorsEnum).map(color => (
        <Input key={color} placeholder={color} color={color as any} rightIcon={TbAt} />
      ))}
    </div>
  </div>
)
