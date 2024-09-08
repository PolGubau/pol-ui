import { poluiPlugin } from "pol-ui";
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/pol-ui/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [
    poluiPlugin({
      colors: {
        primary: {
          50: "#ffffd3",
          100: "#ffffc4",
          200: "#ffffb0",
          300: "#ffff96",
          400: "#ffff73",
          500: "#ffff44",
          600: "#ffff13",
          700: "#e9e900",
          800: "#c6c600",
          900: "#494900",
        },
      },
    }),
  ],
};

export default config;
