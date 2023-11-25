import { Label, TextInput } from '~/src';
import React from 'react';

const code = `
'use client';

import { Label, TextInput } from 'pol-ui';

function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="username3" value="Username" />
      </div>
      <TextInput id="username3" placeholder="Bonnie Green" addon="@" required />
    </div>
  );
}
`;

const codeRSC = `
import { Label, TextInput } from 'pol-ui';

function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="username3" value="Username" />
      </div>
      <TextInput id="username3" placeholder="Bonnie Green" addon="@" required />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="username3" value="Username" />
      </div>
      <TextInput id="username3" placeholder="Bonnie Green" addon="@" required />
    </div>
  );
}

export const inputAddon = {
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
  githubSlug: 'forms/forms.inputAddon.tsx',
  component: <Component />,
};
