import { Datepicker } from '~/src';
import React from 'react';

const code = `
'use client';

import { Datepicker } from 'pol-ui';

function Component() {
  return <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />;
}
`;

const codeRSC = `
import { Datepicker } from 'pol-ui';

function Component() {
  return <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />;
}
`;

function Component() {
  return <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />;
}

export const range = {
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
  githubSlug: 'datepicker/datepicker.range.tsx',
  component: <Component />,
};
