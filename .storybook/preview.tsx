import React from "react"
import { MantineProvider } from "@mantine/core"
import type { Preview } from "@storybook/react"
import '@mantine/core/styles.css';

import { plumVariables, plumTheme } from "../src/theme"

export const decorators = [
    (renderStory: any) => (
        <MantineProvider 
            theme={plumTheme}
            cssVariablesResolver={plumVariables}
        >{renderStory()}</MantineProvider>
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
