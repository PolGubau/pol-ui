/// <reference types="vitest" />
import tsconfigPaths from "vite-tsconfig-paths";

import { join, resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { peerDependencies } from "./package.json";

export default defineConfig({
  resolve: {
    alias: {
      "@/*": resolve(__dirname, "src/*"),
      "@components/*": resolve(__dirname, "src/components/*"),
      "@hooks/*": resolve(__dirname, "src/hooks/*"),
      "@helpers/*": resolve(__dirname, "src/helpers/*"),
      "@types/*": resolve(__dirname, "src/types/*"),
    },
  },
  plugins: [react(), dts(), tsconfigPaths()],
  build: {
    copyPublicDir: false,
    target: "esnext",
    // minify: false,
    lib: {
      entry: resolve(__dirname, join("src", "index.ts")),
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: ["react/jsx-runtime", ...Object.keys(peerDependencies)],
    },
  },
});
