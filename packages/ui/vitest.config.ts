// https://vitest.dev/guide/#configuring-vitest

import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./vitest.setup.ts",
		css: true,
		coverage: {
			thresholds: {
				lines: 0,
				branches: 0,
				functions: 0,
				statements: 0,
			},
			reporter: ["text", "json-summary", "json", "html"],
			reportOnFailure: true,
			include: ["**/*.{ts,tsx}"],
			exclude: [
				"dist/",
				"node_modules/",
				"coverage/",
				"**/*.d.ts",
				"**/*.stories.tsx",
				"**/*.spec.ts",
				"**/*.spec.tsx",
				"**/*.test.ts",
				"**/*.test.tsx",
				"**/props.ts",
				"**/props.tsx",
				"**/theme.ts",
				"**/theme.tsx",
				"**/index.ts",
				"**/test/utils.ts",
				"**/test/props.ts",
				"**/test/**",
				"**/*config*.ts",
				"**/*setup*.ts",
				"**/mock-data.*",
				".storybook/",
				"src/models/**",
				"src/design/**",
				"src/types/**",
				"src/stories/**",
				"src/tests/**",
				"src/plugins/**",
			],
		},
	},
});
