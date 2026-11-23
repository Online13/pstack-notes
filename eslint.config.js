import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
	{ ignores: ["dist/", ".astro/", "node_modules/"] },
	js.configs.recommended,
	// type-aware rules: a lint run shows type problems without reading the code
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	astro.configs.recommended,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname, extraFileExtensions: [".astro"] },
		},
		rules: {
			"@typescript-eslint/no-explicit-any": "error",
			// no `as` casts (`as const` stays allowed): narrow with checks instead
			"@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "never" }],
			"@typescript-eslint/no-non-null-assertion": "error",
			"@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
			"@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
		},
	},
	// astro-eslint-parser does not support projectService
	{ files: ["**/*.astro"], languageOptions: { parserOptions: { projectService: false, project: "./tsconfig.json" } } },
	{ files: ["**/*.js", "**/*.mjs"], extends: [tseslint.configs.disableTypeChecked] },
	// formatting is Prettier's job
	prettier,
);
