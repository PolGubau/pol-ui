import type { Meta, StoryFn } from '@storybook/react'
import type { CheckboxProps } from './Checkbox'
import { Checkbox } from './Checkbox'
import { ColorsEnum } from '../PoluiProvider/enums'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta

const Template: StoryFn<CheckboxProps> = args => <Checkbox {...args} />

export const DefaultCheckbox = Template.bind({})
DefaultCheckbox.storyName = 'Checkbox'
DefaultCheckbox.args = {}

export const AllColors = (): JSX.Element => (
  <div className="flex flex-wrap gap-2">
    {Object.keys(ColorsEnum).map(status => (
      <div key={status} className="flex flex-col items-center justify-center">
        <Checkbox color={status as keyof typeof ColorsEnum} defaultChecked />
      </div>
    ))}
  </div>
)
