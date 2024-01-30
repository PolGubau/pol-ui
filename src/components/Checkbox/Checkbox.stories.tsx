import type { Meta, StoryFn } from '@storybook/react'
import type { CheckboxProps } from './Checkbox'
import { Checkbox } from './Checkbox'
import { ColorsEnum } from '../../types/enums'
import { useState } from 'react'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center min-h-20  bg-secondary-50">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: StoryFn<CheckboxProps> = args => <Checkbox {...args} />

export const DefaultCheckbox = Template.bind({})
DefaultCheckbox.storyName = 'Checkbox'
DefaultCheckbox.args = {
  label: 'Checkbox',
}

export const Controlled = (): JSX.Element => {
  const [checked, setChecked] = useState(false)
  return (
    <div className="flex flex-wrap gap-2">
      <Checkbox label="Controlled" color={ColorsEnum.primary} checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  )
}
export const AllColors = (): JSX.Element => (
  <div className="flex flex-wrap gap-8">
    {Object.keys(ColorsEnum).map(status => (
      <div key={status} className="flex flex-col items-center justify-center">
        <Checkbox color={status as keyof typeof ColorsEnum} defaultChecked label={status} />
      </div>
    ))}
  </div>
)
