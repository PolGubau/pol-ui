import { Avatar } from '~/src';
import React from 'react';

const code = `
'use client';

import { Avatar } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" status="online" />
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="busy" statusPosition="top-right" />
      <Avatar img="/images/people/profile-picture-5.jpg" status="offline" statusPosition="bottom-left" />
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="away" statusPosition="bottom-right" />
    </div>
  );
}
`;

const codeRSC = `
import { Avatar } from 'pol-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" status="online" />
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="busy" statusPosition="top-right" />
      <Avatar img="/images/people/profile-picture-5.jpg" status="offline" statusPosition="bottom-left" />
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="away" statusPosition="bottom-right" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" status="online" />
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="busy" statusPosition="top-right" />
      <Avatar img="/images/people/profile-picture-5.jpg" status="offline" statusPosition="bottom-left" />
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="away" statusPosition="bottom-right" />
    </div>
  );
}

export const dotIndicator = {
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
  githubSlug: 'avatar/avatar.dotIndicator.tsx',
  component: <Component />,
};
