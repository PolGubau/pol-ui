import type { Meta, StoryFn } from '@storybook/react';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Navbar, type NavbarComponentProps } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: StoryFn<NavbarComponentProps> = (args) => (
  <div className="w-4/5">
    <Navbar {...args} />
  </div>
);

export const DefaultNavbar = Template.bind({});
DefaultNavbar.storyName = 'Default';
DefaultNavbar.args = {
  children: (
    <>
      <Navbar.Brand href="https://Pol-ui.com/">
        <img src="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75" className="mr-3 h-6 sm:h-9" alt="Pol-ui Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pol-ui</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
};

export const WithCTA = Template.bind({});
WithCTA.args = {
  children: (
    <>
      <Navbar.Brand href="https://Pol-ui.com/">
        <img src="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75" className="mr-3 h-6 sm:h-9" alt="Pol-ui Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pol-ui</span>
      </Navbar.Brand>
      <div className="flex gap-3 md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
};

export const WithDropdown = Template.bind({});
WithDropdown.storyName = 'With dropdown';
WithDropdown.args = {
  children: (
    <>
      <Navbar.Brand href="https://Pol-ui.com/">
        <img src="https://polgubau.com/_next/image?url=%2Fimages%2Fme.png&w=256&q=75" className="mr-3 h-6 sm:h-9" alt="Pol-ui Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pol-ui</span>
      </Navbar.Brand>
      <div className="flex gap-3 md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://Pol-ui.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@Pol-ui.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
};
