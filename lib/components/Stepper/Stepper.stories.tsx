import { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Stepper, Step } from "."
import { Group, Stack } from "@mantine/core"
import { Button } from "../Button"

const meta = {
    title: "Components/Stepper",

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

    component: Stepper,
    tags: ["autodocs"],
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
    name: "Horizontal",

    args: {
        orientation: "horizontal",
        active: 0,
        children: <Step label="Step" />,
    },
    render: () => {
        const [active, setActive] = useState(1)

        return (
            <>
                <Stepper active={active} orientation="horizontal">
                    <Step label="Step 1" />
                    <Step label="Step 2" />
                    <Step label="Step 3" />
                    <Step label="Step 4" />
                </Stepper>

                <Group mt="xl" gap="xs" justify="center">
                    <Button
                        variant="secondary"
                        onClick={() => setActive((current) => (current > 0 ? current - 1 : current))}
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() => setActive((current) => (current < 4 ? current + 1 : current))}
                    >
                        Next
                    </Button>
                </Group>
            </>
        )
    },
}

export const Vertical: Story = {
    name: "Vertical",

    args: {
        orientation: "vertical",
        active: 0,
        children: <Step label="Step" />,
    },
    render: () => {
        const [active, setActive] = useState(1)

        return (
            <Stack align="center" maw={393} mx="auto">
                <Stepper active={active} orientation="vertical">
                    <Step label="Step 1" />
                    <Step label="Step 2" />
                    <Step label="Step 3" />
                    <Step label="Step 4" />
                </Stepper>

                <Group mt="xl" gap="xs" justify="center">
                    <Button
                        variant="secondary"
                        onClick={() => setActive((current) => (current > 0 ? current - 1 : current))}
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() => setActive((current) => (current < 4 ? current + 1 : current))}
                    >
                        Next
                    </Button>
                </Group>
            </Stack>
        )
    },
}

export const WithError: Story = {
    name: "Error",
    args: {
        active: 1,
        children: <Step label="Step" />,
    },
    render: () => {
        const [active, setActive] = useState(1)

        return (
            <>
                <Stepper
                    active={active}
                    errorSteps={[1]}
                >
                    <Step label="Completed" />
                    <Step label="Error" />
                    <Step label="Pending" />
                    <Step label="Pending" />
                </Stepper>

                <Group mt="xl" gap="xs" justify="center">
                    <Button
                        variant="secondary"
                        onClick={() => setActive((current) => (current > 0 ? current - 1 : current))}
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() => setActive((current) => (current < 4 ? current + 1 : current))}
                        disabled
                    >
                        Next
                    </Button>
                </Group>
            </>
        )
    },
}

export const WithLoading: Story = {
    name: "Loading",
    args: {
        active: 1,
        children: <Step label="Step" />,
    },
    render: () => {
        const [active, setActive] = useState(1)

        return (
            <>
                <Stepper
                    active={active}
                    loadingSteps={[1]}
                >
                    <Step label="Completed" />
                    <Step label="Loading" />
                    <Step label="Pending" />
                    <Step label="Pending" />
                </Stepper>

                <Group mt="xl" gap="xs" justify="center">
                    <Button
                        variant="secondary"
                        onClick={() => setActive((current) => (current > 0 ? current - 1 : current))}
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() => setActive((current) => (current < 4 ? current + 1 : current))}
                    >
                        Next
                    </Button>
                </Group>
            </>
        )
    },
}
