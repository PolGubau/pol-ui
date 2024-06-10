import React from "react"
import type { Meta } from "@storybook/react"

import { Toaster } from "../../components"
import { PoluiProvider } from "../../components/PoluiProvider"
import { useMediaQuery } from "./use-media-query"

export default {
  title: "Hooks/useMediaQuery",
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
  const isSmallScreen = useMediaQuery("(max-width: 600px)")

  return (
    <div>
      {isSmallScreen ? (
        <p>The screen is smaller than 600px.</p>
      ) : (
        <p>The screen is at least 600px wide.</p>
      )}
    </div>
  )
}
