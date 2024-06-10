import React from "react"
import type { Meta } from "@storybook/react"

import { Card, Toaster, toast } from "../../components"
import { PoluiProvider } from "../../components/PoluiProvider"
import { useLongPress } from "./use-long-press"

export default {
  title: "Hooks/useLongPress",
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
  const { onMouseDown, onTouchStart, onMouseUp, onTouchEnd } = useLongPress({
    delay: 1000,
    onLongPress: () => {
      toast("pressed for 1 second")
    },
  })

  return (
    <div className="flex justify-center flex-col gap-2">
      <h1>useLongPress Example</h1>
      <Card
        className="active:scale-90 transition-transform duration-200 ease-in-out"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
      >
        Press and hold for 1 second
      </Card>
    </div>
  )
}
