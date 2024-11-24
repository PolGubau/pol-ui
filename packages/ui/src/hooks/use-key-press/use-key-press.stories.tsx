import type { Meta } from "@storybook/react"

import { Toaster, toast } from "../../components"
import { PoluiProvider } from "../../providers/PoluiProvider"
import { KeyPressItem, useKeyPress } from "./use-key-press"

export default {
  title: "Hooks/useKeyPress",
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
  const saveFunction = () => {
    toast("Save function triggered")
  }

  const undoFunction = () => {
    toast("Undo function triggered")
  }

  const shortcuts: KeyPressItem[] = [
    {
      key: ["Control", "KeyS"],
      event: saveFunction,
    },
    {
      key: ["Control", "KeyZ"],
      event: undoFunction,
    },
  ]

  useKeyPress({ keyPressItems: shortcuts })

  return (
    <div>
      <h1>Keyboard Shortcuts Example</h1>
      <p>Press Ctrl+S to save and Ctrl+Z to undo.</p>
    </div>
  )
}
