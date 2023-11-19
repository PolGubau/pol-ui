import { type CodeData } from '~/components/code-demo';
import { Datepicker } from '~/src';

const code = `
'use client';

import { Datepicker } from 'flowbite-react';

function Component() {
  return <Datepicker autoHide={false} />;
}
`;

const codeRSC = `
import { Datepicker } from 'flowbite-react';

function Component() {
  return <Datepicker autoHide={false} />;
}
`;

function Component() {
  return <Datepicker autoHide={false} />;
}

export const autoHide: CodeData = {
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
