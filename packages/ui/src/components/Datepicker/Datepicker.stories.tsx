import type { Meta } from "@storybook/react"

import { Datepicker } from "./Datepicker"
import { WeekStart } from "./helpers"

export default {
  title: "Components/Datepicker",
  component: Datepicker,
  decorators: [
    (Story) => (
      <div className="p-6 ">
        <Story />
      </div>
    ),
  ],

  tags: ["autodocs"],
  argTypes: {
    language: {
      control: {
        type: "select",
        options: ["en", "es-ES"],
      },
    },
    weekStart: {
      options: Object.values(WeekStart).filter((x) => typeof x === "string"),
      mapping: WeekStart,
      control: {
        type: "select",
        labels: Object.entries(WeekStart)
          .filter(([, value]) => typeof value !== "string")
          .reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {}),
      },
    },
  },
} as Meta

export const Default = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    <Datepicker />
  </div>
)

export const AutoHideDisabled = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    <Datepicker autoHide={false} />
  </div>
)
export const Inline = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    <Datepicker inline />
  </div>
)
export const RangedDates = (): JSX.Element => (
  <div className="flex flex-wrap gap-6">
    <Datepicker
      minDate={new Date("2021-01-01")}
      maxDate={new Date("2021-12-31")}
    />
  </div>
)
