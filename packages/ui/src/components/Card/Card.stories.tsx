import type { Meta } from "@storybook/react"

import { toast } from "../Toaster"
import { Card } from "./Card"

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} as Meta

export const Default = () => {
  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-black dark:text-white">
        Check this Card title!
      </h5>
      <p className="font-normal text-secondary-700 dark:text-secondary-400">
        This components is quite flexible and can be used in many ways.
        Customize it to your needs!
      </p>
    </Card>
  )
}

export const ButtonCard = () => {
  return (
    <Card
      onClick={() => {
        toast("clicked")
      }}
    >
      <h5 className="text-2xl font-bold tracking-tight text-black dark:text-white">
        Check this Card title!
      </h5>
      <p className="font-normal text-secondary-700 dark:text-secondary-400">
        This components is quite flexible and can be used in many ways.
        Customize it to your needs!
      </p>
    </Card>
  )
}
