export const types = [
	{ value: "feat", name: "feat:     Add a new feature or functionality" },
	{ value: "fix", name: "fix:      Fix a bug in the code" },
	{ value: "docs", name: "docs:     Documentation only changes" },
	{
		value: "style",
		name: "style:    Changes that do not affect the meaning of the code (whitespace, formatting...)",
	},
	{
		value: "refactor",
		name: "refactor: A code change that neither fixes a bug nor adds a feature",
	},
	{
		value: "test",
		name: "test:     Add missing tests or fix existing tests",
	},
	{
		value: "chore",
		name: "chore:    Changes to tools, build processes, or auxiliary libraries (e.g., documentation generation)",
	},
	{ value: "revert", name: "revert:   Revert a previous commit" },
];
export const scopes = [
	{ name: "router" },
	{ name: "components" },
	{ name: "hooks" },
	{ name: "styles" },
	{ name: "docs" },
	{ name: "utils" },
	{ name: "config" },
	{ name: "tests" },
	{ name: "other" },
];
export const allowCustomScopes = true;
export const allowBreakingChanges = ["feat", "fix"];
export const skipQuestions = ["body", "footer"];
