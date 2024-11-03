import React from "react"
import type { Meta } from "@storybook/react"

import { ColorsEnum } from "../../types"
import Gauge from "./Gauge"

export default {
  title: "Components/Gauge",
  component: Gauge,
  tags: ["Gauge", "autodocs"],
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center justify-center h-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta

export const Default = () => <Gauge value={55} />

export const Empty = () => <Gauge value={0} />

export const Animated = () => {
  const [value, setValue] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue(Math.random() * 100)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return <Gauge value={value} />
}

export const WithCustomValue = () => <Gauge value={75} />
export const Complete = () => <Gauge value={100} />
export const ABit = () => <Gauge value={10} />
export const WithCustomMaxValue = () => <Gauge value={1} max={3} />
export const ShowValue = () => <Gauge value={2} max={3} show="value" />

export const AllColors = () => {
  return (
    <div className="flex gap-4">
      {Object.keys(ColorsEnum).map((color) => (
        <Gauge key={color} value={55} color={color as any} />
      ))}
    </div>
  )
}

export const DifferentSizes = () => {
  return (
    <div className="flex gap-4">
      {["w-[50px]", "w-[60px]", "w-[70px]", "w-[80px]"].map((s) => (
        <Gauge key={s} value={55} className={s} />
      ))}
    </div>
  )
}
export const DifferentStrokeWidth = () => {
  return (
    <div className="flex gap-4">
      {[2, 6, 10, 14].map((s) => (
        <Gauge key={s} value={s} strokeWidth={s} />
      ))}
    </div>
  )
}
