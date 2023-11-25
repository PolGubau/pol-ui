import { Datepicker } from '~/src';
import React from 'react';

const code = `
'use client';

import { Datepicker } from 'pol-ui';

function Component() {
  return <Datepicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
}
`;

const codeRSC = `
import { Datepicker } from 'pol-ui';

function Component() {
  return <Datepicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
}
`;

function Component() {
  return <Datepicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />;
}

export const localization = {
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
  githubSlug: 'datepicker/datepicker.localization.tsx',
  component: <Component />,
};
