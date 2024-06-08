import ComponentFrame from '@/components/ComponentFrame';
import dynamic from 'next/dynamic';
import React from 'react';

const rootDir = process.cwd();
const fs = require('fs');
const path = require('path');
const polUiDir = path.join(rootDir, '../../packages/ui/src');
const componentsUrl = path.join(polUiDir, 'components');

//

export type Component = {
  name: string;
  component: {
    url: string;
    code: string;
  };
  storybook: {
    url: string;
    code: string;
  };
};

//
const getComponents = (): string[] => {
  const components = fs
    .readdirSync(componentsUrl)
    .filter((file: string) => !file.includes('index.ts'));
  const componentsExcluded = ['PoluiProvider'];

  const componentsFiltered = components.filter(
    (component: any) => !componentsExcluded.includes(component),
  );
  return componentsFiltered;
};

const componentsData: Component[] = getComponents().map((component: any) => {
  const componenDirUrl = path.join(componentsUrl, component);

  const componentUrl = path.join(componenDirUrl, `${component}.tsx`);
  const componentCode = fs.readFileSync(componentUrl, 'utf8');

  // get the storybook file, Could be not found
  const storybookUrl =
    path.join(componenDirUrl, `${component}.stories.tsx`) || '';
  const storybookCode = fs.readFileSync(storybookUrl, 'utf8');
  const reactCompoent = dynamic(() => import(componentUrl), {
    loading: () => (
      <div className="grid h-full min-h-[400px] place-items-center">
        Loading...
      </div>
    ),
    ssr: false,
  });

  const comp: Component = {
    name: component,
    component: {
      url: componentUrl,
      code: componentCode,
    },
    storybook: {
      url: storybookUrl,
      code: storybookCode,
    },
  };
  return comp;
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {componentsData.map(({ name, component, storybook }) => (
        <div key={name} className="grid grid-cold-2 gap-4">
          <h2>{name}</h2>
          <pre>{storybook.url}</pre>
          <ComponentFrame>
            <div className="bg-red-100 w-full h-fill">
              {React.createElement(component.code, {}) as JSX.Element}
            </div>
          </ComponentFrame>
        </div>
      ))}
    </main>
  );
}
