module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:storybook/recommended",
        "plugin:@stylistic/recommended-extends",
        "plugin:jsonc/recommended-with-jsonc",
        "prettier",
    ],
    ignorePatterns: ["dist", "storybook-static", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "@stylistic/arrow-parens": ["error", "always"],
        "@stylistic/indent": ["error", 4],
        "@stylistic/jsx-indent": ["error", 4],
        "@stylistic/jsx-indent-props": ["error", 4],
        "@stylistic/jsx-one-expression-per-line": [0],
        "@stylistic/quote-props": ["error", "as-needed", { numbers: true }],
        "@stylistic/quotes": ["error", "double"],
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
    overrides: [
        {
            files: ["**/*.json"],
            rules: {
                "@stylistic/quote-props": ["error", "always", {}],
                "@stylistic/comma-dangle": ["error", "never"],
            },
        },
    ],
}
