import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import type { DropdownProps } from './Dropdown';
import { Dropdown } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    title: 'Dropdown example',
    label: 'Dropdown button',
    placement: 'auto',
    disabled: false,
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </>
  ),
};

export const WithDivider = Template.bind({});
WithDivider.storyName = 'With divider';
WithDivider.args = {
  children: (
    <>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Separated link</Dropdown.Item>
    </>
  ),
};

export const WithHeader = Template.bind({});
WithHeader.storyName = 'With header';
WithHeader.args = {
  children: (
    <>
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </>
  ),
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
  children: (
    <>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </>
  ),
};

export const CustomTrigger = Template.bind({});
CustomTrigger.args = {
  renderTrigger: () => <button>Custom button</button>,
  children: (
    <>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </>
  ),
};

export const CustomItem = Template.bind({});
CustomItem.args = {
  children: (
    <>
      <Dropdown.Item>Default button</Dropdown.Item>
      <Dropdown.Item as="span">As span</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item as="a" href="https://flowbite.com/" target="_blank">
        As link
      </Dropdown.Item>
    </>
  ),
};

export const ItemClickHandler = Template.bind({});
ItemClickHandler.storyName = 'Item click handlers';
ItemClickHandler.args = {
  children: (
    <>
      <Dropdown.Item onClick={action('Dashboard!')}>Dashboard</Dropdown.Item>
      <Dropdown.Item onClick={action('Settings!')}>Settings</Dropdown.Item>
      <Dropdown.Item onClick={action('Earnings!')}>Earnings</Dropdown.Item>
      <Dropdown.Item onClick={action('Sign out!')}>Sign out</Dropdown.Item>
    </>
  ),
};
