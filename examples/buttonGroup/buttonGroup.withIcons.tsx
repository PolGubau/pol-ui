import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';
import { Button, ButtonGroup } from '~/src';

const code = `
'use client';

import { Button } from 'pol-ui';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';

function Component() {
  return (
    <Button.Group>
      <Button color="gray">
        <HiUserCircle className="mr-3 h-4 w-4" />
        Profile
      </Button>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" />
        Settings
      </Button>
      <Button color="gray">
        <HiCloudDownload className="mr-3 h-4 w-4" />
        Messages
      </Button>
    </Button.Group>
  );
}
`;

const codeRSC = `
import { Button, ButtonGroup } from 'pol-ui';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';

function Component() {
  return (
    <ButtonGroup>
      <Button color="gray">
        <HiUserCircle className="mr-3 h-4 w-4" />
        Profile
      </Button>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" />
        Settings
      </Button>
      <Button color="gray">
        <HiCloudDownload className="mr-3 h-4 w-4" />
        Messages
      </Button>
    </ButtonGroup>
  );
}
`;

function Component() {
  return (
    <ButtonGroup>
      <Button color="gray">
        <HiUserCircle className="mr-3 h-4 w-4" />
        Profile
      </Button>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" />
        Settings
      </Button>
      <Button color="gray">
        <HiCloudDownload className="mr-3 h-4 w-4" />
        Messages
      </Button>
    </ButtonGroup>
  );
}

export const withIcons = {
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
  githubSlug: 'buttonGroup/buttonGroup.withIcons.tsx',
  component: <Component />,
};
