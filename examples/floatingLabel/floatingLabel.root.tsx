import { FloatingLabel } from '~/src';
import React from 'react';

const code = `
'use client';

import { Spinner } from 'pol-ui';

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" />
      <FloatingLabel variant="outlined" label="Label" />
      <FloatingLabel variant="standard" label="Label" />
    </div>
  );
}
`;

const codeRSC = `
import { Spinner } from 'pol-ui';

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" />
      <FloatingLabel variant="outlined" label="Label" />
      <FloatingLabel variant="standard" label="Label" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" />
      <FloatingLabel variant="outlined" label="Label" />
      <FloatingLabel variant="standard" label="Label" />
    </div>
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
  githubSlug: 'floatingLabel/floatingLabel.root.tsx',
  component: <Component />,
};
