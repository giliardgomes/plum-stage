import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"

import { SelectableTag } from "./index"

const meta: Meta<typeof SelectableTag> = {
    component: SelectableTag,
    tags: ["autodocs"],
    args: {
        children: "Tag",
    },
}

export default meta

type Story = StoryObj<typeof SelectableTag>

export const Basic: Story = {
    render: (props) => <SelectableTag {...props} />,
}

export const Sizes: Story = {
    render: () => (
        <Stack gap="md">
            <SelectableTag size="sm">Small tag</SelectableTag>
            <SelectableTag size="md">Medium tag</SelectableTag>
            <SelectableTag size="lg">Large tag</SelectableTag>
        </Stack>
    ),
}

export const States: Story = {
    render: () => (
        <Stack gap="md">
            <SelectableTag>Unselected tag</SelectableTag>
            <SelectableTag checked>Selected tag</SelectableTag>
            <SelectableTag disabled>Disabled tag</SelectableTag>
            <SelectableTag checked disabled>Disabled selected tag</SelectableTag>
        </Stack>
    ),
}
