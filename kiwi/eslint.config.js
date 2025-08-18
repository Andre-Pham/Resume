import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  // Ignore build artifacts and dependencies to avoid linting unnecessary files
  { ignores: ["dist", "build", "coverage", "node_modules"] },

  // Apply language settings, module type, globals, and React hook plugin to all source files
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    settings: { react: { version: "detect" } },
    plugins: { "react-hooks": reactHooks, import: importPlugin },
    rules: {
      // Enforce the Rules of Hooks for React hooks usage
      "react-hooks/rules-of-hooks": "error",
      // Warn about missing dependencies in React effect hooks
      "react-hooks/exhaustive-deps": "warn",
      // No console.log
      "no-console": "error",
    },
  },

  // Rules applied to src files
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    rules: {
      // Ban default exports
      "import/no-default-export": "error",
    },
  },

  // Apply ESLint's core recommended rules
  js.configs.recommended,

  // Apply TypeScript-specific recommended rules without type information
  ...tseslint.configs.recommended,

  // Apply recommended React linting rules
  react.configs.flat.recommended,

  // Enable linting for the JSX runtime in React
  react.configs.flat["jsx-runtime"],

  // Apply accessibility linting rules for JSX elements
  jsxA11y.flatConfigs.recommended,

  // Apply type-aware linting rules to TypeScript files in src directory
  ...tseslint.configs.recommendedTypeChecked.map((c) => ({
    ...c,
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ...(c.languageOptions ?? {}),
      parserOptions: {
        ...(c.languageOptions?.parserOptions ?? {}),
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })),

  // Disable type-checking for JavaScript and config files to avoid parser errors
  {
    files: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
      "**/*.config.*",
      "eslint.config.*",
      "vite.config.*",
      "tailwind.config.*",
      "**/scripts/**/*.*",
    ],
    languageOptions: { parserOptions: { project: false } },
  },

  // Disable formatting rules to let Prettier handle code formatting
  eslintConfigPrettier,
);
