import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
    stories: [
        "../lib/components/**/*.mdx",
        "../lib/components/**/*.stories.@(js|jsx|ts|tsx)",
        "../lib/molecules/**/*.mdx",
        "../lib/molecules/**/*.stories.@(js|jsx|ts|tsx)",
        "../lib/organisms/**/*.mdx",
        "../lib/organisms/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
    ],
    docs: {
        autodocs: "tag",
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
    // Add exclude pattern for Badge stories
    exclude: ["../lib/components/Badge/**/*.stories.@(js|jsx|ts|tsx)"],
}

export default config
