import { Datepicker } from '~/src';
import React from 'react';

const code = `
'use client';

import { Datepicker } from 'pol-ui';

function Component() {
  return <Datepicker />;
}
`;

const codeRSC = `
import { Datepicker } from 'pol-ui';

function Component() {
  return <Datepicker />;
}
`;

function Component() {
  return <Datepicker />;
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
  githubSlug: 'datepicker/datepicker.root.tsx',
  component: <Component />,
};
