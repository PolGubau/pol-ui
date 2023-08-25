import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [
		react(),
		dts(),
		cssInjectedByJsPlugin(),
		svgr({
			exportAsDefault: true,
			svgrOptions: {
				icon: true,
			},
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "@pol/ui",
			fileName: "@pol/ui",
		},
		rollupOptions: {
			external: ["react"],
			output: {
				globals: {
					react: "React",
				},
			},
		},
	},
});
