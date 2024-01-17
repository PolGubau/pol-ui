/* eslint-disable react/prop-types */

import type { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'
import type { SwitchProps } from './Switch'
import { Switch } from './Switch'
import { ColorsEnum, MainSizesEnum } from '../PoluiProvider/enums'

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<SwitchProps> = ({ checked, ...args }) => {
  const [switchChecked, setSwitchChecked] = useState(checked)

  const handleChange = () => {
    setSwitchChecked(currentCheck => !currentCheck)
  }

  return <Switch {...args} checked={switchChecked} onChange={handleChange} />
}

export const DefaultSwitch = Template.bind({})
DefaultSwitch.storyName = 'Switch'
DefaultSwitch.args = {}
DefaultSwitch.argTypes = {
  color: {
    description: 'Control defaults for colors',
    control: {
      type: 'radio',
      options: Object.keys(ColorsEnum),
    },
  },
}

export const AllColors = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(ColorsEnum).map(v => (
      <div key={v} className="flex flex-col items-center justify-center">
        <Template color={v} checked={true} onChange={() => {}} label={v} />
      </div>
    ))}
    <div className="flex flex-wrap gap-6 dark pt-10">
      Dark Mode
      <div className="bg-secondary-900 text-secondary-50 flex gap-2 flex-wrap p-4">
        {Object.keys(ColorsEnum).map(v => (
          <div key={v} className="flex flex-col items-center justify-center">
            <Template color={v} checked={true} onChange={() => {}} label={v} />
          </div>
        ))}
      </div>
    </div>
  </div>
)
AllColors.storyName = 'All Colors'

export const AllSizes = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(MainSizesEnum).map(v => (
      <div key={v} className="flex flex-col items-center justify-center">
        <Template size={v} checked={true} onChange={() => {}} label={v} />
      </div>
    ))}
  </div>
)
AllSizes.storyName = 'All Sizes'

// export const SmallSwitch = Template.bind({})
// SmallSwitch.storyName = 'Small  switch'
// SmallSwitch.args = {
//   sizing: 'sm',
//   label: 'small  switch',
// }
