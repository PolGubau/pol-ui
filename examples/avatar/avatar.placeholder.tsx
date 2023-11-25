import { Avatar } from '~/src';
import React from 'react';

const code = `
'use client';

import { Avatar } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar />
      <Avatar rounded />
    </div>
  );
}
`;

const codeRSC = `
import { Avatar } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar />
      <Avatar rounded />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar />
      <Avatar rounded />
    </div>
  );
}

export const placeholder = {
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
  githubSlug: 'avatar/avatar.placeholder.tsx',
  component: <Component />,
};
