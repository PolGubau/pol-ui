import type { Meta } from "@storybook/react"
import { TbChevronRight } from "react-icons/tb"

import { Toaster, toast } from "../Toaster"
import { TimedButton } from "./TimedButton"

export default {
  title: "Components/TimedButton",
  component: TimedButton,
  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
        <Toaster />
      </div>
    ),
  ],
} as Meta

export const Example = () => (
  <>
    <TimedButton onLongPress={() => toast("Action confirmed")}>
      <div className="z-10 flex gap-2 items-center">
        Long Press me
        <TbChevronRight />
      </div>
    </TimedButton>
  </>
)
