import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
/// <reference types="vitest" />
import tsconfigPaths from "vite-tsconfig-paths";
import { peerDependencies } from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "~/*": resolve(__dirname, "src/*"),
      "~/components/*": resolve(__dirname, "src/components/*"),
      "~/hooks/*": resolve(__dirname, "src/hooks/*"),
      "~/helpers/*": resolve(__dirname, "src/helpers/*"),
      "~/types/*": resolve(__dirname, "src/types/*"),
    },
  },
  plugins: [react(), dts(), tsconfigPaths()],
  build: {
    copyPublicDir: false,
    target: "esnext",
    // minify: false,
    // lib: {
    // 	name: "pol-ui",
    // 	entry: {
    // 		"pol-ui": resolve(__dirname, "src/index.ts"),
    // 		components: resolve(__dirname, "src/components/index.ts"),
    // 	},
    // 	// entry: resolve(__dirname, join("src", "index.ts")),
    // 	fileName: "index",
    // 	formats: ["es"],
    // },
    rollupOptions: {
      external: ["react/jsx-runtime", ...Object.keys(peerDependencies)],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts"],
          })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative("src", file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
    },
  },
});
