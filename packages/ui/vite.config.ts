/// <reference types="vite/client" />
/// <reference types="vitest" />
import path, { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { globSync } from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// https://github.com/vitejs/vite/issues/1579#issuecomment-1483756199
		libInjectCss(),
		dts({
			exclude: ["**/*.stories.ts", "src/test", "**/*.test.tsx"],
			entryRoot: "src",
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/main.ts"),
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			// https://rollupjs.org/configuration-options/#input
			input: Object.fromEntries(
				globSync([
					"src/components/**/index.ts", // Componentes
					"src/hooks/**/*.ts", // Hooks
					"src/helpers/**/*.ts", // Helpers
					"src/plugins/**/*.ts", // Plugins
					"src/theme/**/*.ts", // Tema y configuración
					"src/constants/**/*.ts", // Constantes
					"src/i18n/**/*.ts", // Internacionalización
					"src/index.ts", // El archivo principal
				])
					.filter(
						(file) =>
							!(
								file.includes("setup-test.d.ts") ||
								file.includes("stories") ||
								file.includes("test") ||
								file.includes("spec")
							),
					)
					.map((file) => {
						// This remove `src/` as well as the file extension from each
						// file, so e.g. src/nested/foo.js becomes nested/foo
						const entryName = path.relative(
							"src",
							file.slice(0, file.length - path.extname(file).length),
						);
						// This expands the relative paths to absolute paths, so e.g.
						// src/nested/foo becomes /project/src/nested/foo.js
						const entryUrl = fileURLToPath(new URL(file, import.meta.url));
						return [entryName, entryUrl];
					}),
			),
			output: {
				entryFileNames: "[name].js",
				assetFileNames: "assets/[name][extname]",
				globals: {
					react: "React",
					"react-dom": "React-dom",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
});
