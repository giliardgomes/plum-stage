import type { Meta, StoryObj } from "@storybook/react"
import { ProgressIndicator } from "."
import { Group, Stack } from "@mantine/core"

const meta = {
    title: "Components/ProgressIndicator",
    component: ProgressIndicator,
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
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: "select",
            options: ["violet", "blue", "brass", "green", "orange", "red", "gray", "republican", "democrat", "white"],
            description: "Color of the loader",
        },
        variant: {
            control: "radio",
            options: ["circular", "linear"],
            description: "Type of progress indicator",
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
            description: "Size of the indicator",
        },
        value: {
            control: "number",
            description: "Value for linear progress (0-100)",
            if: { arg: "variant", eq: "linear" },
        },
    },
} satisfies Meta<typeof ProgressIndicator>

export default meta
type Story = StoryObj<typeof ProgressIndicator>

export const Circular: Story = {
    args: {
        variant: "circular",
        size: "md",
        color: "violet",
    },
}

export const CircularSizes: Story = {
    name: "Circular sizes",
    render: () => (
        <Group>
            <ProgressIndicator
                size="sm"
                variant="circular"
            />
            <ProgressIndicator
                size="md"
                variant="circular"
            />
            <ProgressIndicator
                size="lg"
                variant="circular"
            />
        </Group>
    ),
}

export const Linear: Story = {
    args: {
        variant: "linear",
        value: 60,
        color: "violet",
        style: { width: "500px" },
    },
}

export const CustomColor: Story = {
    name: "Custom color",
    render: () => {
        return (
            <Stack>
                <Group>
                    <Group style={{ background: "var(--mantine-color-democrat-1)" }} p="md">
                        <ProgressIndicator
                            size="lg"
                            color="democrat"
                            variant="circular"
                        />
                    </Group>
                    <Group style={{ background: "var(--mantine-color-republican-1)" }} p="md">
                        <ProgressIndicator
                            size="lg"
                            color="republican"
                            variant="circular"
                        />
                    </Group>
                    <Group style={{ background: "var(--mantine-color-violet-5)" }} p="md">
                        <ProgressIndicator
                            size="lg"
                            color="white"
                            variant="circular"
                        />
                    </Group>
                </Group>
                <Group grow>
                    <ProgressIndicator
                        variant="linear"
                        value={75}
                        color="democrat"
                    />
                    <ProgressIndicator
                        variant="linear"
                        value={60}
                        color="republican"
                    />
                </Group>
            </Stack>
        )
    },
}
