import type { Meta, StoryFn } from '@storybook/react';
import { Button } from '..';
import type { ButtonGroupProps } from '../ButtonGroup/ButtonGroup';

export default {
  title: 'Components/Button',
  component: Button.Group,
} as Meta;

const Template: StoryFn<ButtonGroupProps> = (args) => (
  <Button.Group {...args}>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </Button.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'ButtonGroup';
DefaultAvatarGroup.args = {};
