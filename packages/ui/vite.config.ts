/// <reference types="vitest" />

import path, { join, resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { peerDependencies } from "./package.json";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [react(), dts()],
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
