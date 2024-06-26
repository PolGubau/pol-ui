import type { Config } from 'tailwindcss';
import { poluiPlugin } from 'pol-ui';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  plugins: [poluiPlugin()],
};
export default config;
