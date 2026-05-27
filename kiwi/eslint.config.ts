import js from "@eslint/js"
import stylisticPlugin from "@stylistic/eslint-plugin"
import importPlugin from "eslint-plugin-import"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import unicornPlugin from "eslint-plugin-unicorn"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
  // Ignore build output, generated code, and dependencies
  {
    ignores: ["dist", "build", "coverage", "node_modules", "**/*.d.ts"],
  },

  // ESLint core recommended rules
  js.configs.recommended,

  // TypeScript recommended rules (no type information required) for all TS files
  ...tseslint.configs.recommended,

  // React recommended rules
  reactPlugin.configs.flat.recommended,

  // Enable linting for the React JSX runtime
  reactPlugin.configs.flat["jsx-runtime"],

  // Accessibility rules for JSX elements
  jsxA11yPlugin.flatConfigs.recommended,

  // React hooks recommended rules
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    plugins: { "react-hooks": reactHooksPlugin },
    rules: reactHooksPlugin.configs.recommended.rules,
  },

  // Browser globals + React version detection for app code
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    languageOptions: {
      globals: { ...globals.browser },
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // Node globals for config files
  {
    files: ["*.config.{js,ts,mjs,cjs}"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },

  // Stylistic rules
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    plugins: { "@stylistic": stylisticPlugin },
    rules: {
      "@stylistic/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
        },
      ],
      "@stylistic/quotes": [
        "error",
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: "never",
        },
      ],
      "func-style": ["error", "declaration"],
    },
  },

  // TypeScript rules
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/no-array-delete": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unnecessary-type-conversion": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/only-throw-error": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-promise-reject-errors": "error",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          allowAny: false,
          allowBoolean: false,
          allowNullish: false,
          allowNumberAndString: false,
          allowRegExp: false,
        },
      ],
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "capitalized-comments": [
        "error",
        "always",
        {
          ignoreInlineComments: false,
          ignoreConsecutiveComments: true,
          ignorePattern:
            "eslint|istanbul|ts-?ignore|c8|vitest|prettier|region|endregion",
        },
      ],
      curly: ["error", "all"],
      eqeqeq: "error",
      "no-console": "error",
      "no-case-declarations": "off",
      "no-self-assign": ["error", { props: true }],
      "no-useless-rename": "error",
      "spaced-comment": ["error", "always", { markers: ["/"] }],
    },
  },

  // Import rules
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { import: importPlugin },
    rules: {
      "import/no-relative-packages": "error",
      "import/no-default-export": "error",
      "import/prefer-default-export": "off",
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
    plugins: { import: importPlugin },
    rules: {
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: ["*.config.{js,ts,mjs,cjs}"],
          optionalDependencies: false,
          peerDependencies: true,
        },
      ],
    },
  },

  // Allow default exports for config files
  {
    files: ["*.config.{js,ts,mjs,cjs}"],
    plugins: { import: importPlugin },
    rules: {
      "import/no-anonymous-default-export": "off",
      "import/no-default-export": "off",
    },
  },

  // Enforce kebab-case filenames and modern patterns
  {
    plugins: { unicorn: unicornPlugin },
    rules: {
      "unicorn/filename-case": ["error", { cases: { kebabCase: true } }],
      "unicorn/prefer-global-this": "error",
      "unicorn/prefer-node-protocol": "error",
    },
  },

  // Type-aware parser setup
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
)
