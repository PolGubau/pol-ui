import type { Meta, StoryFn } from "@storybook/react";
import { TbAt, TbDownload, TbSettings, TbUser } from "react-icons/tb";
import type { ListGroupProps } from "./ListGroup";
import { ListGroup } from "./ListGroup";
import { ListItem } from "./ListItem";

export default {
  title: "Components/ListGroup",
  component: ListGroup,
} as Meta;

const Template: StoryFn<ListGroupProps> = (args) => <ListGroup {...args} />;

export const DefaultListGroup = Template.bind({});
DefaultListGroup.storyName = "Default";
DefaultListGroup.args = {
  children: (
    <>
      <ListItem>Profile</ListItem>
      <ListItem>Settings</ListItem>
      <ListItem>Messages</ListItem>
      <ListItem>Download</ListItem>
    </>
  ),
};

export const WithLinks = Template.bind({});
WithLinks.storyName = "With links";
WithLinks.args = {
  children: (
    <>
      <ListItem active={true} href="#">
        Profile
      </ListItem>
      <ListItem href="#">Settings</ListItem>
      <ListItem href="#">Messages</ListItem>
      <ListItem href="#">Download</ListItem>
    </>
  ),
};

export const WithButtons = Template.bind({});
WithButtons.storyName = "With buttons";
WithButtons.args = {
  children: (
    <>
      <ListItem
        active={true}
        onClick={() => {
          alert("Profile clicked!");
        }}
      >
        Profile
      </ListItem>
      <ListItem
        onClick={() => {
          alert("Settings clicked!");
        }}
      >
        Settings
      </ListItem>
      <ListItem
        onClick={() => {
          alert("Messages clicked!");
        }}
      >
        Messages
      </ListItem>
      <ListItem
        onClick={() => {
          alert("Download clicked!");
        }}
      >
        Download
      </ListItem>
    </>
  ),
};

export const WithIcons = Template.bind({});
WithIcons.storyName = "With icons";
WithIcons.args = {
  children: (
    <>
      <ListItem active={true} icon={TbUser}>
        Profile
      </ListItem>
      <ListItem icon={TbSettings}>Settings</ListItem>
      <ListItem icon={TbAt}>Messages</ListItem>
      <ListItem icon={TbDownload}>Download</ListItem>
    </>
  ),
};
export const Row = Template.bind({});
Row.storyName = "Row direction";
Row.args = {
  direction: "row",
  children: (
    <>
      <ListItem active={true} href="#">
        Profile
      </ListItem>
      <ListItem href="#">Settings</ListItem>
      <ListItem href="#">Messages</ListItem>
      <ListItem href="#">Download</ListItem>
    </>
  ),
};
