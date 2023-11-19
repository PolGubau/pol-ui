import Image from 'next/image';
import { type CodeData } from '~/components/code-demo';
import { Avatar } from '~/src';

const code = `
'use client';

import Image from 'next/image';
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar
        img={(props) => (
          <Image
            alt=""
            height="48"
            referrerPolicy="no-referrer"
            src="/images/people/profile-picture-5.jpg"
            width="48"
            {...props}
          />
        )}
      />
      <Avatar
        img={(props) => (
          <picture>
            <source media="(min-width: 900px)" srcSet="/images/people/profile-picture-3.jpg" />
            <source media="(min-width: 480px)" srcSet="/images/people/profile-picture-4.jpg" />
            <Image alt="" height="48" src="/images/people/profile-picture-5.jpg" width="48" {...props} />
          </picture>
        )}
      />
    </div>
  );
}
`;

const codeRSC = `
import Image from 'next/image';
import { Avatar } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar
        img={(props) => (
          <Image
            alt=""
            height="48"
            referrerPolicy="no-referrer"
            src="/images/people/profile-picture-5.jpg"
            width="48"
            {...props}
          />
        )}
      />
      <Avatar
        img={(props) => (
          <picture>
            <source media="(min-width: 900px)" srcSet="/images/people/profile-picture-3.jpg" />
            <source media="(min-width: 480px)" srcSet="/images/people/profile-picture-4.jpg" />
            <Image alt="" height="48" src="/images/people/profile-picture-5.jpg" width="48" {...props} />
          </picture>
        )}
      />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar
        img={(props) => (
          <Image
            alt=""
            height="48"
            referrerPolicy="no-referrer"
            src="/images/people/profile-picture-5.jpg"
            width="48"
            {...props}
          />
        )}
      />
      <Avatar
        img={(props) => (
          <picture>
            <source media="(min-width: 900px)" srcSet="/images/people/profile-picture-3.jpg" />
            <source media="(min-width: 480px)" srcSet="/images/people/profile-picture-4.jpg" />
            <Image alt="" height="48" src="/images/people/profile-picture-5.jpg" width="48" {...props} />
          </picture>
        )}
      />
    </div>
  );
}

export const overrideImage: CodeData = {
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
  githubSlug: 'avatar/avatar.overrideImage.tsx',
  component: <Component />,
};
