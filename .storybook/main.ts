import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config = {
  framework: {
    // name: '@storybook/react-webpack5', // Remove this
    name: '@storybook/nextjs', // Add this
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',

    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],

  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    config.resolve!.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
};

export default config;
