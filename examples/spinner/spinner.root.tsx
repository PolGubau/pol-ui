import React from 'react';
import { Spinner } from '~/src';

const code = `
'use client';

import { Spinner } from 'pol-ui';

function Component() {
  return <Spinner aria-label="Default status example" />;
}
`;

const codeRSC = `
import { Spinner } from 'pol-ui';

function Component() {
  return <Spinner aria-label="Default status example" />;
}
`;

function Component() {
  return <Spinner aria-label="Default status example" />;
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
  githubSlug: 'spinner/spinner.root.tsx',
  component: <Component />,
};
