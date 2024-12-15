import type { Preview } from "@storybook/react";
import type { PropsWithChildren } from "react";

import "./style.css";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    // <PoluiProvider defaultLanguage={defaultLanguage} allLanguages={allLangs}>
    <main className="w-full h-full bg-secondary-50 dark:bg-secondary-900 relative grid pt-6 p-2 min-h-[300px] relative">
      {children}
      {/* <Toolbox>
        <DarkThemeToggle className="text-white dark:text-white" />
      </Toolbox> */}
    </main>
    // </PoluiProvider>
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
