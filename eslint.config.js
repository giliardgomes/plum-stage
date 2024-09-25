import stylistic from "@stylistic/eslint-plugin"
import reactRefresh from "eslint-plugin-react-refresh"
import tsParser from "@typescript-eslint/parser"
import a11y from "eslint-plugin-jsx-a11y"
import reactHooks from "eslint-plugin-react-hooks"
import storybook from "eslint-plugin-storybook"
import eslintPluginJsonc from "eslint-plugin-jsonc"

export default [
    // a11y.configs.recommended,
    // reactHooks.configs.recommended,
    // storybook.configs.recommended,
    { ignores: ["**/dist/**", "**/storybook-static/**"] },
    { files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"] },
    stylistic.configs["recommended-flat"],
    {
        name: "Plum Eslint Config",
        languageOptions: { parser: tsParser },
        plugins: {
            "@stylistic": stylistic,
            "react-refresh": reactRefresh,
            jsonc: eslintPluginJsonc,
        },
        rules: {
            "@stylistic/arrow-parens": ["error", "always"],
            "@stylistic/brace-style": ["error", "1tbs"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/jsx-indent": ["error", 4],
            "@stylistic/jsx-indent-props": ["error", 4],
            "@stylistic/quote-props": ["error", "as-needed", { numbers: true }],
            "@stylistic/quotes": ["error", "double"],
            "jsonc/comma-dangle": ["error", "never"],
            "jsonc/indent": ["error", 4],
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        },

    },
    {
        linterOptions: { reportUnusedDisableDirectives: "error" },
    },
    ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
]
