import { Alert } from '~/src';

const code = `
'use client';

import { Alert } from 'pol-ui';

function Component() {
  return (
    <Alert color="warning" rounded>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}
`;

const codeRSC = `
import { Alert } from 'pol-ui';

function Component() {
  return (
    <Alert color="warning" rounded>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}
`;

function Component() {
  return (
    <Alert color="warning" rounded>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}

export const rounded = {
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
  githubSlug: 'alert/alert.rounded.tsx',
  component: <Component />,
};
