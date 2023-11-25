import { HiCheck } from 'react-icons/hi';
import { Badge } from '~/src';
import React from 'react';

const code = `
'use client';

import { Badge } from 'pol-ui';
import { HiCheck, HiClock } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck} />
      <Badge color="gray" icon={HiCheck} />
      <Badge size="sm" icon={HiCheck} />
      <Badge color="gray" size="sm" icon={HiCheck} />
    </div>
  );
}
`;

const codeRSC = `
import { Badge } from 'pol-ui';
import { HiCheck, HiClock } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck} />
      <Badge color="gray" icon={HiCheck} />
      <Badge size="sm" icon={HiCheck} />
      <Badge color="gray" size="sm" icon={HiCheck} />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck} />
      <Badge color="gray" icon={HiCheck} />
      <Badge size="sm" icon={HiCheck} />
      <Badge color="gray" size="sm" icon={HiCheck} />
    </div>
  );
}

export const withIconOnly = {
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
  githubSlug: 'badge/badge.withIconOnly.tsx',
  component: <Component />,
};
