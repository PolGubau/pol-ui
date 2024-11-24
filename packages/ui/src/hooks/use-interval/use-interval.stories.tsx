import React from "react"
import type { Meta } from "@storybook/react"

import { Toaster, toast } from "../../components"
import { PoluiProvider } from "../../providers/PoluiProvider"
import { useInterval } from "./use-interval"

export default {
  title: "Hooks/useInterval",
  component: PoluiProvider,

  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} as Meta
export const Default: React.FC = () => {
  useInterval(() => {
    toast("interval")
  }, 1000)

  return (
    <div className="flex justify-center flex-col gap-2">
      <h1>useInterval Example</h1>
      <p>
        This example will show a toast every 1 second using the useInterval hook
      </p>
    </div>
  )
}
