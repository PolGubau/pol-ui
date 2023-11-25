import { FileInput, Label } from '~/src';
import React from 'react';

const code = `
'use client';

import { FileInput, Label } from 'pol-ui';

function Component() {
  return (
    <div id="fileUpload" className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="file" value="Upload file" />
      </div>
      <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
    </div>
  );
}
`;

const codeRSC = `
import { FileInput, Label } from 'pol-ui';

function Component() {
  return (
    <div id="fileUpload" className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="file" value="Upload file" />
      </div>
      <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
    </div>
  );
}
`;

function Component() {
  return (
    <div id="fileUpload" className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="file" value="Upload file" />
      </div>
      <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
    </div>
  );
}

export const fileInput = {
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
  githubSlug: 'forms/forms.fileInput.tsx',
  component: <Component />,
};
