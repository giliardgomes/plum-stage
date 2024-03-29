module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "plugin:@stylistic/recommended-extends",
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "@stylistic/arrow-parens": ["error", "always"],
        "@stylistic/indent": ["error", 4],
        "@stylistic/jsx-indent": ["error", 4],
        "@stylistic/jsx-one-expression-per-line": [0],
        "@stylistic/quotes": ["error", "double"],
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
}
