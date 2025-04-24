import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Stack, Text } from "@mantine/core"
import { Collapse } from "./index"

const meta: Meta<typeof Collapse> = {
    title: "Components/Collapse",
    component: Collapse,
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
}

export default meta
type Story = StoryObj<typeof Collapse>

const DemoContent = () => (
    <Text>
        From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
)

export const Default: Story = {
    render: () => {
        const [opened, setOpened] = useState(false)

        return (
            <Stack mx="auto" maw="480px">
                <Collapse
                    in={opened}
                    label={opened ? "Hide content" : "Show content"}
                    onToggle={() => setOpened((o) => !o)}
                >
                    <DemoContent />
                </Collapse>
            </Stack>
        )
    },
    parameters: {
        docs: {
            description: {
                story: "Basic collapse component with default animation duration (200ms) and opacity animation.",
            },
        },
    },
}

export const WithCustomDuration: Story = {
    name: "Custom duration",

    render: () => {
        const [opened, setOpened] = useState(false)

        return (
            <Stack mx="auto" maw="480px">
                <Collapse
                    in={opened}
                    label={opened ? "Hide content" : "Show content"}
                    onToggle={() => setOpened((o) => !o)}
                    transitionDuration={500}
                >
                    <DemoContent />
                </Collapse>
            </Stack>
        )
    },
    parameters: {
        docs: {
            description: {
                story: "Collapse with custom transition duration of 500ms for slower animation.",
            },
        },
    },
}

export const Card: Story = {
    name: "Card",

    render: () => {
        const [opened, setOpened] = useState(false)

        return (
            <Stack mx="auto" maw="480px">
                <Collapse
                    in={opened}
                    label={opened ? "Hide content" : "Show content"}
                    onToggle={() => setOpened((o) => !o)}
                    variant="card"
                >
                    <DemoContent />
                </Collapse>
            </Stack>
        )
    },
    parameters: {
        docs: {
            description: {
                story: "Card variant with border, background and hover effects.",
            },
        },
    },
}
