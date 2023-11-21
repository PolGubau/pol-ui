import type { Meta, StoryFn } from '@storybook/react';
import { theme } from '../../theme';
import type { ButtonProps } from './Button';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: Object.keys(theme.button.color),
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
    rounded: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full', 'none'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    disabled: false,
    isProcessing: false,
    processingLabel: 'Processing',
    rounded: 'md',
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.storyName = 'Default';
DefaultButton.args = {
  children: 'Button',
};
