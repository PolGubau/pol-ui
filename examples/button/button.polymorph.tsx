import { Button } from '~/src';

const code = `
'use client';

import { Button } from 'pol-ui';
import Link from 'next/link';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button as="span" className="cursor-pointer">
        Span Button
      </Button>
      <Button as={Link} href="#">
        Next Link Button
      </Button>
    </div>
  );
}
`;

const codeRSC = `
import { Button } from 'pol-ui';
import Link from 'next/link';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button as="span" className="cursor-pointer">
        Span Button
      </Button>
      <Button as={Link} href="#">
        Next Link Button
      </Button>
    </div>
  );
}
`;

function Component() {
  return (
    <Button as="span" className="cursor-pointer">
      Span Button
    </Button>
  );
}

export const polymorph = {
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
  githubSlug: 'button/button.polymorph.tsx',
  component: <Component />,
};
