import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
  ],
  docs: {
    defaultName: "Docs",
    autodocs: true,
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  typescript: {
    check: false, // `false` is default value, but `checked` field is required in types.
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
