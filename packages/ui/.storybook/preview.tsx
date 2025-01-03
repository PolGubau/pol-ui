import type { Preview } from "@storybook/react";
import type { PropsWithChildren } from "react";
import { DarkThemeToggle } from "../src/components/DarkThemeToggle/DarkThemeToggle";
import { Toolbox } from "../src/components/Toolbox/Toolbox";
import { PoluiProvider } from "../src/providers/PoluiProvider/PoluiProvider";
import "./style.css";
import { Locale, defaultLanguage, getSupportedLanguages } from "../src/i18n";

const Provider = ({ children }: PropsWithChildren) => {
  const availableLocales: Locale[] = ["en", "es", "de"];
  const allLangs = getSupportedLanguages(availableLocales);
  return (
    <PoluiProvider defaultLanguage={defaultLanguage} allLanguages={allLangs}>
      <main className="relative relative grid h-full min-h-[300px] w-full w-full bg-secondary-50 p-2 pt-6 dark:bg-secondary-900">
        {children}
        <Toolbox>
          <DarkThemeToggle className="text-white dark:text-white" />
        </Toolbox>
      </main>
    </PoluiProvider>
  );
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],

  parameters: {
    layout: "centered",

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
