import { Button, ButtonProps } from "@/components/Button"
import { Tooltip } from "@mantine/core"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
    component: Button,
    parameters: {
        docs: {
            description: {
                component: "Documentation: https://plum.quorum.us/4a128e208/p/86dae8-button",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: ["accent", "primary", "secondary", "tertiary"],
        },
    },
    args: {
        danger: false,
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

export const AllTheVariants: Story = {
    render: () => (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
        }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                }}
            >
                <Button variant="accent" size="sm">
                    Accent
                </Button>
                <Button variant="accent" size="sm" danger={true}>
                    Accent
                </Button>

                <Button variant="accent" size="sm" disabled={true}>
                    Accent
                </Button>

                <Button variant="accent" size="sm" danger={true} disabled={true}>
                    Accent
                </Button>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                }}
            >
                <Button variant="primary" size="sm">
                    Primary
                </Button>
                <Button variant="primary" size="sm" danger={true}>
                    Primary
                </Button>
                <Button variant="primary" size="sm" disabled={true}>
                    Primary
                </Button>
                <Button variant="primary" size="sm" danger={true} disabled={true}>
                    Primary
                </Button>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                }}
            >
                <Button variant="secondary" size="sm">
                    Secondary
                </Button>
                <Button variant="secondary" size="sm" danger={true}>
                    Secondary
                </Button>
                <Button variant="secondary" size="sm" disabled={true}>
                    Secondary
                </Button>
                <Button variant="secondary" size="sm" danger={true} disabled={true}>
                    Secondary
                </Button>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                }}
            >
                <Button variant="tertiary" size="sm">
                    Tertiary
                </Button>
                <Button variant="tertiary" size="sm" danger={true}>
                    Tertiary
                </Button>
                <Button variant="tertiary" size="sm" disabled={true}>
                    Tertiary
                </Button>
                <Button variant="tertiary" size="sm" danger={true} disabled={true}>
                    Tertiary
                </Button>
            </div>
        </div>
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
