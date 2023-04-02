import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// put my name in the header
