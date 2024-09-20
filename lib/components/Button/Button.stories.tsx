import { Button, ButtonProps } from "@/components/Button"
import { Tooltip } from "@mantine/core"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
    component: Button,
    parameters: {
        docs: {
            description: {
                component: "Documentation: https://zeroheight.com/4a128e208/p/86dae8-button",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        variant: "accent",
        size: "sm",
        children: "My Button",
    },
    render: (props: ButtonProps) => (
        <Button {...props}>
            {props.children}
        </Button>
    ),
}

export const IconOnlyWithTooltip: Story = {
    args: {
        variant: "accent",
        size: "sm",
    },
    render: (props: ButtonProps) => (
        <Tooltip label="Recycle">
            <Button {...props}>
                <span>♺</span>
            </Button>
        </Tooltip>
    ),
}

export const WithLeftSection: Story = {
    args: {
        variant: "accent",
        size: "sm",
        children: "My Button",
        leftSection: "♺",
    },
    render: (props: ButtonProps) => (
        <Button {...props}>
            {props.children}
        </Button>
    ),
}

export const WithRightSection: Story = {
    args: {
        variant: "accent",
        size: "sm",
        rightSection: "♺",
        children: "My Button",
    },
    render: (props: ButtonProps) => (
        <Button {...props}>
            {props.children}
        </Button>
    ),
}

export const WithBothSections: Story = {
    args: {
        variant: "accent",
        size: "sm",
        rightSection: "♺",
        leftSection: "♺",
        children: "My Button",
    },
    render: (props: ButtonProps) => (
        <Button {...props}>
            {props.children}
        </Button>
    ),
}
