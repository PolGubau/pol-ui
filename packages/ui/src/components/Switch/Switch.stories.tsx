import React, { useState } from "react"
import type { Meta, StoryFn } from "@storybook/react"

import type { Colors, MainSizes } from "../../types"
import { ColorsEnum, MainSizesEnum } from "../../types/enums"
import { Toaster, toast } from "../Toaster"
import { Switch, type SwitchProps } from "./Switch"

export default {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  decorators: [
    (Story): JSX.Element => (
      <div className="flex flex-col gap-10">
        <Toaster />
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

const Template: StoryFn<SwitchProps> = ({ checked, ...args }) => {
  const [switchChecked, setSwitchChecked] = useState(checked)

  const handleChange = () => {
    setSwitchChecked((currentCheck) => !currentCheck)
  }

  return <Switch {...args} checked={switchChecked} onChange={handleChange} />
}

export const DefaultSwitch = Template.bind({})
DefaultSwitch.storyName = "Switch"
DefaultSwitch.args = {}
DefaultSwitch.argTypes = {
  color: {
    description: "Control defaults for colors",
    control: {
      type: "radio",
      options: Object.keys(ColorsEnum),
    },
  },
}

export const AllColors = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(ColorsEnum).map((v) => (
      <div key={v} className="flex flex-col items-center justify-center">
        <Template
          color={v as Colors}
          checked={true}
          onChange={() => {
            toast("Hello")
          }}
          label={v}
        />
      </div>
    ))}
    <div className="flex flex-wrap gap-6 dark pt-10">
      Dark Mode
      <div className="bg-secondary-900 text-secondary-50 flex gap-2 flex-wrap p-4">
        {Object.keys(ColorsEnum).map((v) => (
          <div key={v} className="flex flex-col items-center justify-center">
            <Template
              color={v as Colors}
              checked={true}
              onChange={() => {
                toast("Hello")
              }}
              label={v}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const AllSizes = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    {Object.keys(MainSizesEnum).map((v) => (
      <div key={v} className="flex flex-col items-center justify-center">
        <Template
          size={v as MainSizes}
          checked={true}
          onChange={() => {
            toast("Hello")
          }}
          label={v}
        />
      </div>
    ))}
  </div>
)
