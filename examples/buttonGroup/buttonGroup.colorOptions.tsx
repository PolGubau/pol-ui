import { Button, ButtonGroup } from '~/src';
import React from 'react';

const code = `
'use client';

import { Button } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button.Group>
        <Button color="info">Profile</Button>
        <Button color="info">Settings</Button>
        <Button color="info">Messages</Button>
      </Button.Group>
      <Button.Group>
        <Button >Profile</Button>
        <Button >Settings</Button>
        <Button >Messages</Button>
      </Button.Group>
      <Button.Group>
        <Button >Profile</Button>
        <Button >Settings</Button>
        <Button >Messages</Button>
      </Button.Group>
    </div>
  );
}
`;

const codeRSC = `
import { Button, ButtonGroup } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup>
        <Button color="info">Profile</Button>
        <Button color="info">Settings</Button>
        <Button color="info">Messages</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button >Profile</Button>
        <Button >Settings</Button>
        <Button >Messages</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button >Profile</Button>
        <Button >Settings</Button>
        <Button >Messages</Button>
      </ButtonGroup>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup>
        <Button color="info">Profile</Button>
        <Button color="info">Settings</Button>
        <Button color="info">Messages</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Profile</Button>
        <Button>Settings</Button>
        <Button>Messages</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Profile</Button>
        <Button>Settings</Button>
        <Button>Messages</Button>
      </ButtonGroup>
    </div>
  );
}

export const colorOptions = {
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
  githubSlug: 'buttonGroup/buttonGroup.colorOptions.tsx',
  component: <Component />,
};
