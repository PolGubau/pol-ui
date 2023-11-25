import { Datepicker } from '~/src';
import React from 'react';

const code = `
'use client';

import { Datepicker } from 'pol-ui';

function Component() {
  return <Datepicker autoHide={false} />;
}
`;

const codeRSC = `
import { Datepicker } from 'pol-ui';

function Component() {
  return <Datepicker autoHide={false} />;
}
`;

function Component() {
  return <Datepicker autoHide={false} />;
}

export const autoHide = {
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
  githubSlug: 'datepicker/datepicker.autoHide.tsx',
  component: <Component />,
};
