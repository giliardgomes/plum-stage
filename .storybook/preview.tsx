import React from "react"
import { MantineProvider } from "@mantine/core"
import type { Preview } from "@storybook/react"
import "@mantine/core/styles.css"

import { plumVariables, plumTheme } from "../src/theme"

export const decorators = [
    (renderStory: any) => (
        <MantineProvider
            theme={plumTheme}
            cssVariablesResolver={plumVariables}
        >
            {renderStory()}
        </MantineProvider>
    ),
]

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: "white", // Default background color
            values: [
                {
                    name: "white",
                    value: "#ffffff", // White background color
                },
                {
                    name: "Sidebar Background",
                    value: "#FBFAFE", // Violet 0, Sidebar Background
                },
                {
                    name: "Topbar Background",
                    value: "#503ABD", // Violet 7, Top Nav Background
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
