import type { Meta } from "@storybook/react"
import { TbChevronRight } from "react-icons/tb"

import { Toaster, toast } from "../Toaster"
import { TimedButton } from "./TimedButton"

export default {
  title: "Components/TimedButton",
  component: TimedButton,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20  ">
        <Story />
        <Toaster />
      </div>
    ),
  ],
} as Meta

export const Default = () => (
  <TimedButton onLongPress={() => toast("Action confirmed")}>
    Long Press me
    <TbChevronRight />
  </TimedButton>
)
