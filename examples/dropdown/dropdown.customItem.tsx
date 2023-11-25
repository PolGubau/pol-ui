import { Dropdown, DropdownItem } from '~/src';

const code = `
'use client';

import { Dropdown } from 'pol-ui';

function Component() {
  return (
    <Dropdown dismissOnClick={false} label="My custom item">
      <Dropdown.Item as={Link} href="#">
        Home
      </Dropdown.Item>
      <Dropdown.Item as="a" href="https://flowbite.com/" target="_blank">
        External link
      </Dropdown.Item>
    </Dropdown>
  );
}
`;

const codeRSC = `
import { Dropdown, DropdownItem } from 'pol-ui';

function Component() {
  return (
    <Dropdown dismissOnClick={false} label="My custom item">
      <DropdownItem as={Link} href="#">
        Home
      </DropdownItem>
      <DropdownItem as="a" href="https://flowbite.com/" target="_blank">
        External link
      </DropdownItem>
    </Dropdown>
  );
}
`;

function Component() {
  return (
    <Dropdown dismissOnClick={false} label="My custom item">
      <DropdownItem>Home</DropdownItem>
      <DropdownItem>External link</DropdownItem>
    </Dropdown>
  );
}

export const customItem = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'dropdown/dropdown.customItem.tsx',
  component: <Component />,
};
