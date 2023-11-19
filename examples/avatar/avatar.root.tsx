import { type CodeData } from '~/components/code-demo';
import { Avatar } from '~/src';

const code = `
'use client';

import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
      <Avatar img="/images/people/profile-picture-5.jpg" />
    </div>
  );
}
`;

const codeRSC = `
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
      <Avatar img="/images/people/profile-picture-5.jpg" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />
      <Avatar img="/images/people/profile-picture-5.jpg" />
    </div>
  );
}

export const root: CodeData = {
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
  githubSlug: 'avatar/avatar.root.tsx',
  component: <Component />,
};
