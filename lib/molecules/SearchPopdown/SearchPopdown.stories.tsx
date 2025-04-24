import type { Meta } from "@storybook/react"
import { SearchPopdown } from "./index"

const meta = {
    title: "Molecules/SearchPopdown",
    component: SearchPopdown,
    parameters: {
        docs: {
            disable: true,
        },
        previewTabs: {
            "storybook/docs/panel": { hidden: true },
        },
    },
} satisfies Meta<typeof SearchPopdown>

export default meta
