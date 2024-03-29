import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
    stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
        "@storybook/addon-mdx-gfm",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    core: {
        disableTelemetry: true,
    },
    docs: {
        autodocs: "tag",
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
}
export default config
