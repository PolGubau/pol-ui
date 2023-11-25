import type { Meta, StoryFn } from '@storybook/react';
import { PoluiProvider } from '../PoluiProvider';
import { DarkThemeToggle } from './DarkThemeToggle';
import React from 'react';

export default {
  title: 'Components/DarkThemeToggle',
  component: DarkThemeToggle,
} as Meta;

const Template: StoryFn = (args) => (
  <PoluiProvider>
    <DarkThemeToggle {...args} />
  </PoluiProvider>
);

export const DefaultDarkThemeToggle = Template.bind({});
DefaultDarkThemeToggle.storyName = 'Default';
DefaultDarkThemeToggle.args = {};
