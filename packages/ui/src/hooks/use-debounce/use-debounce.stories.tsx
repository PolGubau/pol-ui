import { useState } from "react"
import type { Meta } from "@storybook/react"

import { Input, Toaster } from "../../components"
import { PoluiProvider } from "../../providers/PoluiProvider"
import { useDebounce } from "./use-debounce"

export default {
  title: "Hooks/useDebounce",
  component: PoluiProvider,

  decorators: [
    (Story) => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] bg-secondary-50 ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} as Meta
export const Default: React.FC = () => {
  const [text, setText] = useState<string>("")
  const delayed = useDebounce(text, 500)

  return (
    <div className="flex justify-center flex-col gap-2">
      <h1>Debounce Example</h1>
      <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <p>Debounced value: {delayed}</p>
    </div>
  )
}
