import type { Meta, StoryFn } from "@storybook/react"

import { PoluiProvider } from "../.."
import { Button } from "../Button"
import { DarkThemeToggle } from "./DarkThemeToggle"

export default {
  title: "Components/DarkThemeToggle",
  component: DarkThemeToggle,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-auto min-h-[200px] bg:secondary-50 dark:bg-secondary-900 rounded-xl   flex-col gap-4">
        <Story />
        <Button>Test button</Button>
      </div>
    ),
  ],
} as Meta

const Template: StoryFn = (args) => (
  <PoluiProvider>
    <DarkThemeToggle {...args} />
  </PoluiProvider>
)

export const DefaultDarkThemeToggle = Template.bind({})
DefaultDarkThemeToggle.storyName = "Default"
DefaultDarkThemeToggle.args = {}
export const CustomClasses = Template.bind({})
CustomClasses.storyName = "Custom Styles"
CustomClasses.args = {
  className:
    "bg-transparent hover:bg-gray-100 dark:hover:bg-secondary-800 text-secondary text-secondary-900 dark:text-secondary-50",
}
