import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"

import { SegmentedControl } from "./index"

const meta: Meta<typeof SegmentedControl> = {
    component: SegmentedControl,
    tags: ["autodocs"],
    args: {
        data: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
        ],
    },
}

export default meta

type Story = StoryObj<typeof SegmentedControl>

export const Basic: Story = {
    render: (props) => <SegmentedControl {...props} />,
}

export const Sizes: Story = {
    render: (props) => (
        <Stack gap="xl">
            <SegmentedControl {...props} size="sm" />
            <SegmentedControl {...props} size="md" />
            <SegmentedControl {...props} size="lg" />
        </Stack>
    ),
}

export const WithDefaultValue: Story = {
    render: (props) => (
        <SegmentedControl
            {...props}
            defaultValue="2"
        />
    ),
}

export const FullWidth: Story = {
    render: (props) => (
        <SegmentedControl
            {...props}
            fullWidth
        />
    ),
}

export const Disabled: Story = {
    render: (props) => (
        <Stack gap="md">
            <SegmentedControl
                {...props}
                disabled
            />
            <SegmentedControl
                {...props}
                data={props.data.map((item) => ({ ...item, disabled: true }))}
            />
        </Stack>
    ),
}
