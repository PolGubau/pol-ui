import { Progress } from '~/src';
import React from 'react';

const code = `
'use client';

import { Progress } from 'pol-ui';

function Component() {
  return <Progress progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />;
}
`;

const codeRSC = `
import { Progress } from 'pol-ui';

function Component() {
  return <Progress progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />;
}
`;

function Component() {
  return <Progress progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />;
}

export const withLabels = {
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
  githubSlug: 'progress/progress.withLabels.tsx',
  component: <Component />,
};
