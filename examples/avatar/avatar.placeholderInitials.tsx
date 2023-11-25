import { Avatar } from '~/src';
import React from 'react';

const code = `
'use client';

import { Avatar } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar placeholderInitials="RR" />
      <Avatar placeholderInitials="RR" rounded />
    </div>
  );
}
`;

const codeRSC = `
import { Avatar } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar placeholderInitials="RR" />
      <Avatar placeholderInitials="RR" rounded />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar placeholderInitials="RR" />
      <Avatar placeholderInitials="RR" rounded />
    </div>
  );
}

export const placeholderInitials = {
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
  githubSlug: 'avatar/avatar.placeholderInitials.tsx',
  component: <Component />,
};
