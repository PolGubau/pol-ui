import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Pol-ui Storybook',
  brandUrl: '/',
  brandImage: 'https://ui.polgubau.com/logo.png',
  brandTarget: '_self',

  //
  colorPrimary: '#B49CFF',
  // colorSecondary: '#BFBFBF',

  // // UI
  appBg: '#F3F0FD',
  appContentBg: '#F6F6F6',
  appPreviewBg: '#F6F6F6',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // // Text colors
  // textColor: '#747474',
  // textInverseColor: '#F3F0FD',

  // // Toolbar default and active colors
  // barTextColor: '#9E9E9E',
  // barSelectedColor: '#585C6D',
  // barBg: '#F3F0FD',

  // // Form colors
  // inputBg: '#F9F7FE',
  // inputBorder: '#816ECB',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 10,
})
