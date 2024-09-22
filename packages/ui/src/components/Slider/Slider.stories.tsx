import type { Meta, StoryFn } from "@storybook/react"

import { Colors, ColorsEnum } from "../../types"
import { Slider, type SliderProps } from "./Slider"

export default {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
} as Meta

const Template: StoryFn<SliderProps> = (args) => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {
  defaultValue: [20],
}
export const Disabled = Template.bind({})
Disabled.args = {
  defaultValue: [50],
  disabled: true,
}

export const AllColors = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {Object.keys(ColorsEnum).map((color) => (
        <Slider key={color} color={color as Colors} />
      ))}
    </div>
  )
}

export const Vertical = () => {
  return <Slider orientation="vertical" />
}
export const Range = () => {
  return <Slider defaultValue={[25, 75]} />
}
export const Steps = () => {
  return <Slider defaultValue={[50]} step={10} />
}
export const PreventedOverlap = () => {
  return <Slider defaultValue={[25, 75]} step={10} minStepsBetweenThumbs={1} />
}
