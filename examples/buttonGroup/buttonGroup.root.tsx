import { Button, ButtonGroup } from '~/src';
import React from 'react';

const code = `
'use client';

import { Button } from 'pol-ui';

function Component() {
  return (
    <Button.Group>
      <Button color="gray">Profile</Button>
      <Button color="gray">Settings</Button>
      <Button color="gray">Messages</Button>
    </Button.Group>
  );
}
`;

const codeRSC = `
import { Button, ButtonGroup } from 'pol-ui';

function Component() {
  return (
    <ButtonGroup>
      <Button color="gray">Profile</Button>
      <Button color="gray">Settings</Button>
      <Button color="gray">Messages</Button>
    </ButtonGroup>
  );
}
`;

function Component() {
  return (
    <ButtonGroup>
      <Button color="gray">Profile</Button>
      <Button color="gray">Settings</Button>
      <Button color="gray">Messages</Button>
    </ButtonGroup>
  );
}

export const root = {
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
  githubSlug: 'buttonGroup/buttonGroup.root.tsx',
  component: <Component />,
};
