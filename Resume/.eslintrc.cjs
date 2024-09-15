module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["standard-with-typescript", "plugin:react/recommended", "plugin:prettier/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "object-shorthand": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
