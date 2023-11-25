import { HiMail } from 'react-icons/hi';
import { Label, TextInput } from '~/src';

const code = `
'use client';

import { Label, TextInput } from 'pol-ui';
import { HiMail } from 'react-icons/hi';

function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="email4" value="Your email" />
      </div>
      <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
    </div>
  );
}
`;

const codeRSC = `
import { Label, TextInput } from 'pol-ui';
import { HiMail } from 'react-icons/hi';

function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="email4" value="Your email" />
      </div>
      <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="email4" value="Your email" />
      </div>
      <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
    </div>
  );
}

export const inputLeftIcon = {
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
  githubSlug: 'forms/forms.inputLeftIcon.tsx',
  component: <Component />,
};
