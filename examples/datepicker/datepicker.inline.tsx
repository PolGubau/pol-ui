import { Datepicker } from '~/src';
import React from 'react';

const code = `
'use client';

import { Datepicker } from 'pol-ui';

function Component() {
  return <Datepicker inline />;
}
`;

const codeRSC = `
import { Datepicker } from 'pol-ui';

function Component() {
  return <Datepicker inline />;
}
`;

function Component() {
  return <Datepicker inline />;
}

export const inline = {
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
  githubSlug: 'datepicker/datepicker.inline.tsx',
  component: <Component />,
};
