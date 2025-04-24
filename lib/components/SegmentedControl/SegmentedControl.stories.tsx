import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"

import { SegmentedControl } from "./index"

const meta: Meta<typeof SegmentedControl> = {
    component: SegmentedControl,
    tags: ["autodocs"],
    title: "Components/SegmentedControl",
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: (
                    "<a href='https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-figma'></i>  Figma</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    + "<a href='https://plum.quorum.us' target='_blank' rel='noopener noreferrer'><i class='fa-regular fa-folder'></i>  Documentation</a>"
                ),
            },
        },
    },
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
    name: "Sizes",

    render: (props) => (
        <Stack gap="xl">
            <SegmentedControl {...props} size="sm" />
            <SegmentedControl {...props} size="md" />
            <SegmentedControl {...props} size="lg" />
        </Stack>
    ),
}

export const WithDefaultValue: Story = {
    name: "Default value",

    render: (props) => (
        <SegmentedControl
            {...props}
            defaultValue="2"
        />
    ),
}

export const FullWidth: Story = {
    name: "Full width",

    render: (props) => (
        <SegmentedControl
            {...props}
            fullWidth
        />
    ),
}

export const Disabled: Story = {
    name: "Disabled",

    render: (props) => (
        <Stack gap="md">
            <SegmentedControl
                {...props}
                disabled
            />
            <SegmentedControl
                {...props}
                data={props.data.map((item) => (
                    typeof item === "string"
                        ? { label: item, value: item, disabled: true }
                        : { ...item, disabled: true }
                ))}
            />
        </Stack>
    ),
}
