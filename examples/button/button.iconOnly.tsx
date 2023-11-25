import { HiOutlineArrowRight } from 'react-icons/hi';
import { Button } from '~/src';

const code = `
'use client';

import { Button } from 'pol-ui';
import { HiOutlineArrowRight } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
      <Button pill>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
      <Button outline>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
      <Button outline pill>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
`;

const codeRSC = `
import { Button } from 'pol-ui';
import { HiOutlineArrowRight } from 'react-icons/hi';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
      <Button pill>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
      <Button outline>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
      <Button outline pill>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
      <Button>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
      <Button outline>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
      <Button outline>
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
    </div>
  );
}

export const iconOnly = {
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
  githubSlug: 'button/button.iconOnly.tsx',
  component: <Component />,
};
