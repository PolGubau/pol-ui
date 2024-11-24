import type { Meta } from "@storybook/react"

import { Button } from "../../components"
import { PoluiProvider } from "../../providers/PoluiProvider"
import { useCounter } from "./use-counter"

export default {
  title: "Hooks/useCounter",
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
  const { count, increment, decrement, reset, setCount } = useCounter(0)

  return (
    <div className="flex justify-center flex-col gap-2">
      <h1>Counter Example</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>

      <Button onClick={reset}>Reset</Button>

      <Button
        onClick={() => {
          setCount(10)
        }}
      >
        Set to 10
      </Button>

      <p>Count: {count}</p>
    </div>
  )
}
