import { type CodeData } from '~/components/code-demo';
import { Avatar } from '~/src';

const code = `
'use client';

import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" size="xs" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="sm" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="md" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="lg" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="xl" />
    </div>
  );
}
`;

const codeRSC = `
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" size="xs" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="sm" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="md" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="lg" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="xl" />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" size="xs" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="sm" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="md" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="lg" />
      <Avatar img="/images/people/profile-picture-5.jpg" size="xl" />
    </div>
  );
}

export const sizes: CodeData = {
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
  githubSlug: 'avatar/avatar.sizes.tsx',
  component: <Component />,
};
