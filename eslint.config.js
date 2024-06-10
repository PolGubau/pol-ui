import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: [
          "./tsconfig.eslint.json",
          "./packages/*/tsconfig.json",
          "./apps/*/tsconfig.json",
        ],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: [
      "eslint.config.js", // Exclude eslint.config.js from being linted
    ],
  }
)
