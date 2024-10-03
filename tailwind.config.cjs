import { poluiPlugin } from "./packages/ui/src"

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [poluiPlugin(), require("@tailwindcss/container-queries")],
}
