import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { MultiOption } from './MultiOption'

export default {
  title: 'Components/MultiOption',
  component: MultiOption,
  decorators: [
    Story => (
      <div className="bg-secondary-50 flex flex-col w-full h-screen overflow-auto dark:bg-secondary-900 p-6">
        <div className="w-lg">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const TwoOptions = () => {
  const options = ['1', '2']
  const [value, setValue] = useState(options[0])
  return <MultiOption value={value} onChange={v => { setValue(v); }} options={options} />
}
export const ThreeOptions = () => {
  const options = ['1', '2', '3']
  const [value, setValue] = useState(options[0])
  return <MultiOption value={value} onChange={v => { setValue(v); }} options={options} />
}
export const TenOptions = () => {
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  const [value, setValue] = useState(options[0])
  return <MultiOption value={value} onChange={v => { setValue(v); }} options={options} />
}
