import React from "react"
import { MantineProvider } from "@mantine/core"
import type { Preview } from "@storybook/react"
import '@mantine/core/styles.css';

import { theme } from "../src/theme"

export const decorators = [
    (renderStory: any) => (
        <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
    )
]

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
