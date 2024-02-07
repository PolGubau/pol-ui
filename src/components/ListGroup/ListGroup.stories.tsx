import type { Meta, StoryFn } from '@storybook/react'
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi'
import type { ListGroupProps } from './ListGroup'
import { ListGroup } from './ListGroup'
import { ListItem } from './ListItem'

export default {
  title: 'Components/ListGroup',
  component: ListGroup,
} as Meta

const Template: StoryFn<ListGroupProps> = args => <ListGroup {...args} />

export const DefaultListGroup = Template.bind({})
DefaultListGroup.storyName = 'Default'
DefaultListGroup.args = {
  children: (
    <>
      <ListItem>Profile</ListItem>
      <ListItem>Settings</ListItem>
      <ListItem>Messages</ListItem>
      <ListItem>Download</ListItem>
    </>
  ),
}

export const WithLinks = Template.bind({})
WithLinks.storyName = 'With links'
WithLinks.args = {
  children: (
    <>
      <ListItem active href="#">
        Profile
      </ListItem>
      <ListItem href="#">Settings</ListItem>
      <ListItem href="#">Messages</ListItem>
      <ListItem href="#">Download</ListItem>
    </>
  ),
}

export const WithButtons = Template.bind({})
WithButtons.storyName = 'With buttons'
WithButtons.args = {
  children: (
    <>
      <ListItem active onClick={() => alert('Profile clicked!')}>
        Profile
      </ListItem>
      <ListItem>Settings</ListItem>
      <ListItem>Messages</ListItem>
      <ListItem>Download</ListItem>
    </>
  ),
}

export const WithIcons = Template.bind({})
WithIcons.storyName = 'With icons'
WithIcons.args = {
  children: (
    <>
      <ListItem active icon={HiUserCircle}>
        Profile
      </ListItem>
      <ListItem icon={HiOutlineAdjustments}>Settings</ListItem>
      <ListItem icon={HiInbox}>Messages</ListItem>
      <ListItem icon={HiCloudDownload}>Download</ListItem>
    </>
  ),
}
