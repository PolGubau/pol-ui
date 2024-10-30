import { PropsWithChildren } from "react"
import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"

import { DarkThemeToggle, Toaster } from "../src/components"
import { useThemeMode } from "../src/hooks"
import "./style.css"
import React from "react"

import { PoluiProvider } from "../src"

const Provider = ({ children }: PropsWithChildren) => {
  const { computedMode } = useThemeMode()

  return (
    <PoluiProvider
      theme={{
        mode: computedMode,
      }}
    >
      <main className="w-full h-full bg-secondary-50 dark:bg-secondary-900 relative grid pt-6 p-2 min-h-[300px] relative">
        {children}
        <div className="absolute top-2 right-2">
          <DarkThemeToggle />
        </div>
        <Toaster />
      </main>
    </PoluiProvider>
  )
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    docs: {
      theme: themes.light,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
