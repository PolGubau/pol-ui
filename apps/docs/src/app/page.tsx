import Image from 'next/image';

export default function Home() {
  /**
   * The `process.cwd()` function returns the current working directory of the Node.js process.
   * In dev: /Users/username/Projects/nextjs-starter
   * In prod: /vercel/path0
   */
  const rootDir = process.cwd();
  console.log('rootDir:', rootDir);

  /** get all files in the package packages/pol-ui inside this same monorepo, now we are in /apps/docs */
  const fs = require('fs');
  const path = require('path');
  const polUiDir = path.join(rootDir, '../../packages/ui/src');

  const componentsUrl = path.join(polUiDir, 'components');
  // get all dirs in the components folder, be sure we don't get the /index.ts file
  const components = fs
    .readdirSync(componentsUrl)
    .filter((file: string) => !file.includes('index.ts'));

  const componentsData = components.map((component: any) => {
    const componenDirUrl = path.join(componentsUrl, component);
    const componentUrl = path.join(componenDirUrl, `${component}.tsx`);
    const componentCode = fs.readFileSync(componentUrl, 'utf8');

    // get the storybook file, Could be not found
    const storybookUrl =
      path.join(componenDirUrl, `${component}.stories.tsx`) || '';
    const storybookCode = fs.readFileSync(storybookUrl, 'utf8');

    return {
      name: component,
      files: {
        component: componentCode,
        storybook: storybookUrl,
      },
    };
  });
  console.log(componentsData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {components.map((component: any) => (
        <div key={component} className="flex items-center justify-center">
          <Image
            src={`/api/image?name=${component}`}
            alt={component}
            width={200}
            height={200}
          />
          <p className="text-2xl font-bold">{component}</p>
        </div>
      ))} */}
    </main>
  );
}
