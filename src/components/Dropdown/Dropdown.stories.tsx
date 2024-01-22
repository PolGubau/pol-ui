import type { Meta } from '@storybook/react'
import { Menu, MenuItem, MenuProps } from './DropdownTest'

export default {
  title: 'Components/Dropdown',
  component: Menu,
  args: {
    title: 'Dropdown example',
    label: 'Dropdown button',
    placement: 'auto',
    disabled: false,
  },
  decorators: [
    Story => (
      <div className="flex p-6 flex-col items-center pt-20 min-h-[400px] h-screen  bg-primary-100">
        <Story />
      </div>
    ),
  ],
} as Meta

// const Template: StoryFn<DropdownProps> = args => <Dropdown {...args} />
export const Default = (args: MenuProps) => (
  <div className="flex gap-3 flex-wrap">
    <Menu label="Edit">
      <MenuItem label="Undo" onClick={() => console.log('Undo')} />
      <MenuItem label="Redo" disabled />
      <MenuItem label="Cut" />
      <Menu label="Copy as">
        <MenuItem label="Text" />
        <MenuItem label="Video" />
        <Menu label="Image">
          <MenuItem label=".png" />
          <MenuItem label=".jpg" />
          <MenuItem label=".svg" />
          <MenuItem label=".gif" />
        </Menu>
        <MenuItem label="Audio" />
      </Menu>
      <Menu label="Share">
        <MenuItem label="Mail" />
        <MenuItem label="Instagram" />
      </Menu>
    </Menu>
  </div>
)

// export const WithDivider = Template.bind({})
// WithDivider.storyName = 'With divider'
// WithDivider.args = {
//   children: (
//     <>
//       <Dropdown.Item>Dashboard</Dropdown.Item>
//       <Dropdown.Item>Settings</Dropdown.Item>
//       <Dropdown.Item>Earnings</Dropdown.Item>
//       <Dropdown.Divider />
//       <Dropdown.Item>Separated link</Dropdown.Item>
//     </>
//   ),
// }

// export const WithHeader = Template.bind({})
// WithHeader.storyName = 'With header'
// WithHeader.args = {
//   children: (
//     <>
//       <Dropdown.Header>
//         <span className="block text-sm">Bonnie Green</span>
//         <span className="block truncate text-sm font-medium">name@polgubau.com</span>
//       </Dropdown.Header>
//       <Dropdown.Item>Dashboard</Dropdown.Item>
//       <Dropdown.Item>Settings</Dropdown.Item>
//       <Dropdown.Item>Earnings</Dropdown.Item>
//       <Dropdown.Divider />
//       <Dropdown.Item>Sign out</Dropdown.Item>
//     </>
//   ),
// }

// export const Inline = Template.bind({})
// Inline.args = {
//   inline: true,
//   children: (
//     <>
//       <Dropdown.Item>Dashboard</Dropdown.Item>
//       <Dropdown.Item>Settings</Dropdown.Item>
//       <Dropdown.Item>Earnings</Dropdown.Item>
//       <Dropdown.Item>Sign out</Dropdown.Item>
//     </>
//   ),
// }

// export const CustomTrigger = Template.bind({})
// CustomTrigger.args = {
//   renderTrigger: () => <button>Custom button</button>,
//   children: (
//     <>
//       <Dropdown.Item>Dashboard</Dropdown.Item>
//       <Dropdown.Item>Settings</Dropdown.Item>
//       <Dropdown.Item>Earnings</Dropdown.Item>
//       <Dropdown.Item>Sign out</Dropdown.Item>
//     </>
//   ),
// }

// export const CustomItem = Template.bind({})
// CustomItem.args = {
//   children: (
//     <>
//       <Dropdown.Item>Default button</Dropdown.Item>
//       <Dropdown.Item as="span">As span</Dropdown.Item>
//       <Dropdown.Divider />
//       <Dropdown.Item as="a" href="https://polgubau.com/" target="_blank">
//         As link
//       </Dropdown.Item>
//     </>
//   ),
// }

// export const ItemClickHandler = Template.bind({})
// ItemClickHandler.storyName = 'Item click handlers'
// ItemClickHandler.args = {
//   children: (
//     <>
//       <Dropdown.Item onClick={action('Dashboard!')}>Dashboard</Dropdown.Item>
//       <Dropdown.Item onClick={action('Settings!')}>Settings</Dropdown.Item>
//       <Dropdown.Item onClick={action('Earnings!')}>Earnings</Dropdown.Item>
//       <Dropdown.Item onClick={action('Sign out!')}>Sign out</Dropdown.Item>
//     </>
//   ),
// }
