import { Button, ButtonGroup } from '~/src';
import React from 'react';

const code = `
'use client';

import { Button } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button.Group outline>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </Button.Group>
      <Button.Group outline>
        <Button >Profile</Button>
        <Button >Settings</Button>
        <Button >Messages</Button>
      </Button.Group>
      <Button.Group outline>
        <Button>Profile</Button>
        <Button>Settings</Button>
        <Button>Messages</Button>
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
      <ButtonGroup outline>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button >Profile</Button>
        <Button >Settings</Button>
        <Button >Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button>Profile</Button>
        <Button>Settings</Button>
        <Button>Messages</Button>
      </ButtonGroup>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup outline>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button>Profile</Button>
        <Button>Settings</Button>
        <Button>Messages</Button>
      </ButtonGroup>
      <ButtonGroup outline>
        <Button>Profile</Button>
        <Button>Settings</Button>
        <Button>Messages</Button>
      </ButtonGroup>
    </div>
  );
}

export const outline = {
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
  githubSlug: 'buttonGroup/buttonGroup.outline.tsx',
  component: <Component />,
};
