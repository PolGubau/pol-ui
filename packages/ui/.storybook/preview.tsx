import { PropsWithChildren } from "react"
import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"

import { DarkThemeToggle, Toaster } from "../src/components"
import { useThemeMode } from "../src/hooks"
import "./style.css"
import { PoluiProvider, cn } from "../src"

const Provider = ({ children }: PropsWithChildren) => {
  const { computedMode } = useThemeMode()

  const darkOrLight = computedMode === "dark" ? "dark" : "light"
  return (
    <PoluiProvider
      theme={{
        mode: computedMode,
      }}
    >
      <div
        className={cn("relative w-full h-full grid", {
          // dark: darkOrLight === "dark",
        })}
      >
        <div className="w-full h-full bg-background dark:bg-secondary-900 relative grid pt-6 rounded-xl p-2 min-h-[300px]">
          {children}
          <div
            className="absolute scale-50"
            style={{
              right: ".3em",
              top: ".3em",
            }}
          >
            <DarkThemeToggle />
          </div>
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
