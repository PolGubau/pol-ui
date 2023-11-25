import { HiMail } from 'react-icons/hi';
import { Label, TextInput } from '~/src';
import React from 'react';

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
      <TextInput id="email4" type="email" rightIcon={HiMail} placeholder="name@flowbite.com" required />
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
      <TextInput id="email4" type="email" rightIcon={HiMail} placeholder="name@flowbite.com" required />
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
      <TextInput id="email4" type="email" rightIcon={HiMail} placeholder="name@flowbite.com" required />
    </div>
  );
}

export const inputRightIcon = {
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
  githubSlug: 'forms/forms.inputRightIcon.tsx',
  component: <Component />,
};
