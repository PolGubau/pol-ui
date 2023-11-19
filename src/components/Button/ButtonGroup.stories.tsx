import type { Meta, StoryFn } from '@storybook/react';
import { Button } from '.';
import type { ButtonGroupProps } from './ButtonGroup';

export default {
  title: 'Components/Button',
  component: Button.Group,
} as Meta;

const Template: StoryFn<ButtonGroupProps> = (args) => (
  <Button.Group {...args}>
    <Button color="gray">Profile</Button>
    <Button color="gray">Settings</Button>
    <Button color="gray">Messages</Button>
  </Button.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'ButtonGroup';
DefaultAvatarGroup.args = {};
