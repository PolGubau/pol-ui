import { Avatar } from '~/src';
import React from 'react';

const code = `
'use client';

import { Avatar } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered />
      <Avatar img="/images/people/profile-picture-5.jpg" bordered />
    </div>
  );
}
`;

const codeRSC = `
import { Avatar } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered />
      <Avatar img="/images/people/profile-picture-5.jpg" bordered />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered />
      <Avatar img="/images/people/profile-picture-5.jpg" bordered />
    </div>
  );
}

export const withBorder = {
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
  githubSlug: 'avatar/avatar.withBorder.tsx',
  component: <Component />,
};
