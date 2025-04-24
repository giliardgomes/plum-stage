import type { Meta, StoryObj } from "@storybook/react"
import { Stack, Group } from "@mantine/core"
import { Divider } from "./index"

const meta: Meta<typeof Divider> = {
    title: "Components/Divider",
    component: Divider,
    parameters: {
        docs: {
            description: {
                component: (
                    "<a href='https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-figma'></i>  Figma</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    + "<a href='https://plum.quorum.us' target='_blank' rel='noopener noreferrer'><i class='fa-regular fa-folder'></i>  Documentation</a>"
                ),
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        orientation: {
            control: "radio",
            options: ["horizontal", "vertical"],
            description: "Divider orientation",
        },
        variant: {
            control: "select",
            options: ["solid", "dashed", "dotted"],
            description: "Visual style of the divider",
        },
        labelPosition: {
            control: "select",
            options: ["left", "center", "right"],
            description: "Position of the label",
        },
        label: {
            control: "text",
            description: "Optional text label",
        },
    },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Basic: Story = {
    args: {},
    render: (props) => (
        <Stack style={{ maxWidth: "400px" }}>
            <div>Content above</div>
            <Divider {...props} />
            <div>Content below</div>
        </Stack>
    ),
}

export const WithLabel: Story = {
    args: {
        label: "Section",
    },
    render: (props) => (
        <Stack style={{ maxWidth: "400px" }}>
            <div>Content above</div>
            <Divider {...props} />
            <div>Content below</div>
        </Stack>
    ),
}

export const LabelPositions: Story = {
    render: () => (
        <Stack style={{ maxWidth: "400px" }}>
            <Divider label="Left aligned" labelPosition="left" />
            <Divider label="Center aligned" labelPosition="center" />
            <Divider label="Right aligned" labelPosition="right" />
        </Stack>
    ),
}

export const Variants: Story = {
    render: () => (
        <Stack style={{ maxWidth: "400px" }}>
            <Divider label="Solid" variant="solid" />
            <Divider label="Dashed" variant="dashed" />
            <Divider label="Dotted" variant="dotted" />
        </Stack>
    ),
}

export const Vertical: Story = {
    args: {
        orientation: "vertical",
    },
    render: () => (
        <Group align="center" style={{ height: "100px" }}>
            <div>Left content</div>
            <Divider orientation="vertical" />
            <div>Right content</div>
        </Group>
    ),
}

export const VerticalWithLabel: Story = {
    render: () => (
        <Group align="center" style={{ height: "100px" }}>
            <div>Left content</div>
            <Divider orientation="vertical" label="Or" />
            <div>Right content</div>
        </Group>
    ),
}

export const Playground: Story = {
    args: {
        label: "Custom section",
        variant: "dashed",
        labelPosition: "left",
    },
    render: (props) => (
        <Stack style={{ maxWidth: "400px" }}>
            <div>Content above</div>
            <Divider {...props} />
            <div>Content below</div>
        </Stack>
    ),
}
