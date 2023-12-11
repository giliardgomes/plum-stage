import type { Meta, StoryObj } from "@storybook/react"

import { Example } from "./Example"

const meta: Meta<typeof Example> = {
    component: Example,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Example>

export const Text: Story = {
    args: {},
}
