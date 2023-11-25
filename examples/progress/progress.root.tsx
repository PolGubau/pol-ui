import { Progress } from '~/src';
import React from 'react';

const code = `
'use client';

import { Progress } from 'pol-ui';

function Component() {
  return <Progress progress={45} />;
}
`;

const codeRSC = `
import { Progress } from 'pol-ui';

function Component() {
  return <Progress progress={45} />;
}
`;

function Component() {
  return <Progress progress={45} />;
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
  githubSlug: 'progress/progress.root.tsx',
  component: <Component />,
};
