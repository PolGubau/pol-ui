import { Button, Tooltip } from '~/src';
import React from 'react';
const code = `
'use client';

import { Button, Tooltip } from 'pol-ui';

function Component() {
  return (
    <div className="flex gap-2">
      <Tooltip content="Tooltip content" trigger="hover">
        <Button>Tooltip hover</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" trigger="click">
        <Button>Tooltip click</Button>
      </Tooltip>
    </div>
  );
}
`;

const codeRSC = `
import { Button, Tooltip } from 'pol-ui';

function Component() {
  return (
    <div className="flex gap-2">
      <Tooltip content="Tooltip content" trigger="hover">
        <Button>Tooltip hover</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" trigger="click">
        <Button>Tooltip click</Button>
      </Tooltip>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex gap-2">
      <Tooltip content="Tooltip content" trigger="hover">
        <Button>Tooltip hover</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" trigger="click">
        <Button>Tooltip click</Button>
      </Tooltip>
    </div>
  );
}

export const trigger = {
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
  githubSlug: 'tooltip/tooltip.trigger.tsx',
  component: <Component />,
};
