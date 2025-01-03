import react from "@vitejs/plugin-react-swc";
import { type UserConfig, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import type { InlineConfig } from "vitest";

type ViteConfig = UserConfig & { test: InlineConfig };

const config: ViteConfig = {
  build: {
    sourcemap: true,
  },
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      reporter: ["html", "json", "text"],
      enabled: true,
      all: false,
    },

    environment: "jsdom",

    exclude: ["lib/**/*", "node_modules"],
    globals: true,
    setupFiles: "./src/setup-tests.ts",
  },
};

export default defineConfig(config);
