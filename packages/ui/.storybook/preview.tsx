import { PropsWithChildren } from "react"
import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"

import { DarkThemeToggle, Toaster } from "../src/components"
import { useThemeMode } from "../src/hooks"
import "./style.css"
import { PoluiProvider } from "../src"

const Provider = ({ children }: PropsWithChildren) => {
  const { computedMode } = useThemeMode()

  return (
    <PoluiProvider
      theme={{
        mode: computedMode,
      }}
    >
      <div className="w-full h-full bg-background dark:bg-secondary-900 relative grid pt-6 rounded-xl p-2 min-h-[400px]">
        {children}
        <div
          className="absolute"
          style={{
            right: ".5em",
            top: ".5em",
          }}
        >
          <DarkThemeToggle />
        </div>
        <Toaster />
      </div>
    </PoluiProvider>
  )
}

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
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
