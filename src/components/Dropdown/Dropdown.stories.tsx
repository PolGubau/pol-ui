import type { Meta } from '@storybook/react'
import { Dropdown, DropdownItem, DropdownProps } from './Dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
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
export const Default = (args: DropdownProps) => (
  <div className="flex gap-3 flex-wrap">
    <Dropdown label="Edit">
      <DropdownItem label="Undo" onClick={() => console.log('Undo')} />
      <DropdownItem label="Redo" disabled />
      <DropdownItem label="Cut" />
      <Dropdown label="Copy as">
        <DropdownItem label="Text" />
        <DropdownItem label="Video" />
        <Dropdown label="Image">
          <DropdownItem label=".png" />
          <DropdownItem label=".jpg" />
          <DropdownItem label=".svg" />
          <DropdownItem label=".gif" />
        </Dropdown>
        <DropdownItem label="Audio" />
      </Dropdown>
      <Dropdown label="Share">
        <DropdownItem label="Mail" />
        <DropdownItem label="Instagram" />
      </Dropdown>
    </Dropdown>
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
