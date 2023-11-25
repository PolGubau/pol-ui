import { Button, Tooltip } from '~/src';
import React from 'react';

const code = `
'use client';

import { Button, Tooltip } from 'pol-ui';

function Component() {
  return (
    <Tooltip content="Tooltip content" arrow={false}>
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}
`;

const codeRSC = `
import { Button, Tooltip } from 'pol-ui';

function Component() {
  return (
    <Tooltip content="Tooltip content" arrow={false}>
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}
`;

function Component() {
  return (
    <Tooltip content="Tooltip content" arrow={false}>
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}

export const disableArrow = {
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
  githubSlug: 'tooltip/tooltip.disableArrow.tsx',
  component: <Component />,
};
