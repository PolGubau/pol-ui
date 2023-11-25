'use client';

import { Dropdown } from '~/src';

const code = `
'use client';

import { Dropdown } from 'pol-ui';

function Component() {
  return (
    <Dropdown label="Dropdown">
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Dashboard</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Settings</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Earnings</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
`;

function Component() {
  return (
    <Dropdown label="Dropdown">
      <Dropdown.Item onClick={() => alert('Dashboard!')}>Dashboard</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Settings!')}>Settings</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Earnings!')}>Earnings</Dropdown.Item>
      <Dropdown.Item onClick={() => alert('Sign out!')}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export const events = {
  type: 'single',
  code: {
    fileName: 'client',
    language: 'tsx',
    code,
  },
  githubSlug: 'dropdown/dropdown.events.tsx',
  component: <Component />,
};
