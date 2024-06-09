import { type Config } from 'tailwindcss';
import { poluiPlugin } from './packages/ui/src';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [poluiPlugin()],
};

export default config;
