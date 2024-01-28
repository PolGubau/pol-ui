import type { Meta } from '@storybook/react'
import { Radio } from './Radio'
import React from 'react'

export default {
  title: 'Components/Radio',
  component: Radio,
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
  argTypes: {
    // controlled value prop
    value: {
      control: {
        disable: true,
      },
    },
  },
} as Meta

export const Default = (): JSX.Element => {
  const options = ['Option 1', 'Option 2', 'Option 3']
  const [value, setValue] = React.useState(options[0])
  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl">
      {options.map(option => {
        return (
          <Radio
            key={option}
            layoutId="1"
            // id={option}
            checked={value === option}
            onClick={() => setValue(option)}
            value={option}
            label={option}
          />
        )
      })}
    </div>
  )
}

export const DarkMode = (): JSX.Element => {
  const options = ['Option 1', 'Option 2', 'Option 3']
  const [value, setValue] = React.useState(options[0])
  return (
    <div className="dark flex flex-col gap-2 bg-secondary-900 p-4 rounded-xl">
      {options.map(option => {
        return (
          <Radio
            key={option}
            layoutId="2"
            checked={value === option}
            onClick={() => setValue(option)}
            value={option}
            label={option}
          />
        )
      })}
    </div>
  )
}
