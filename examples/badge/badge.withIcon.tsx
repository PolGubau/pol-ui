import { HiCheck, HiClock } from 'react-icons/hi';
import { Badge } from '~/src';

const code = `
'use client';

import { Badge } from 'pol-ui';
import { HiCheck, HiClock } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck}>2 minutes ago</Badge>
      <Badge color="gray" icon={HiClock}>
        3 days ago
      </Badge>
    </div>
  );
}
`;

const codeRSC = `
import { Badge } from 'pol-ui';
import { HiCheck, HiClock } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck}>2 minutes ago</Badge>
      <Badge color="gray" icon={HiClock}>
        3 days ago
      </Badge>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge icon={HiCheck}>2 minutes ago</Badge>
      <Badge color="gray" icon={HiClock}>
        3 days ago
      </Badge>
    </div>
  );
}

export const withIcon = {
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
  githubSlug: 'badge/badge.withIcon.tsx',
  component: <Component />,
};
