import { Button } from '~/src';

const code = `
'use client';

import { Button } from 'pol-ui';

function Component() {
  return <Button label="2">Messages</Button>;
}
`;

const codeRSC = `
import { Button } from 'pol-ui';

function Component() {
  return <Button label="2">Messages</Button>;
}
`;

function Component() {
  return <Button label="2">Messages</Button>;
}

export const withLabel = {
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
  githubSlug: 'button/button.withLabel.tsx',
  component: <Component />,
};
