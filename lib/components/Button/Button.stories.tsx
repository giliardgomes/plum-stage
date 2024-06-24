import type { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps } from "@/components/Button"
import { Tooltip } from "@mantine/core"

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
        designVariant: "accent",
        size: "sm",
        children: "My Button",
    },
    render: (props: ButtonProps) => (
        <Button
            designVariant={props.designVariant}
            leftSection={props.leftSection}
            rightSection={props.rightSection}
            size={props.size}
            loading={props.loading}
            disabled={props.disabled}
        >
            {props.children}
        </Button>
    ),
}

export const IconOnlyWithTooltip: Story = {
    args: {
        designVariant: "accent",
        size: "sm",
        leftSection: "♺",
    },
    render: (props: ButtonProps) => (
        <Tooltip label="Recycle">
            <Button
                designVariant={props.designVariant}
                leftSection={props.leftSection}
                rightSection={props.rightSection}
                size={props.size}
                loading={props.loading}
                disabled={props.disabled}
            >
                {props.children}
            </Button>
        </Tooltip>
    ),
}

export const WithLeftSection: Story = {
    args: {
        designVariant: "accent",
        size: "sm",
        children: "My Button",
        leftSection: "♺",
    },
    render: (props: ButtonProps) => (
        <Button
            designVariant={props.designVariant}
            leftSection={props.leftSection}
            rightSection={props.rightSection}
            size={props.size}
            loading={props.loading}
            disabled={props.disabled}
        >
            {props.children}
        </Button>
    ),
}

export const WithRightSection: Story = {
    args: {
        designVariant: "accent",
        size: "sm",
        rightSection: "♺",
        children: "My Button",
    },
    render: (props: ButtonProps) => (
        <Button
            designVariant={props.designVariant}
            leftSection={props.leftSection}
            rightSection={props.rightSection}
            size={props.size}
            loading={props.loading}
            disabled={props.disabled}
        >
            {props.children}
        </Button>
    ),
}

export const WithBothSections: Story = {
    args: {
        designVariant: "accent",
        size: "sm",
        rightSection: "♺",
        leftSection: "♺",
        children: "My Button",
    },
    render: (props: ButtonProps) => (
        <Button
            designVariant={props.designVariant}
            leftSection={props.leftSection}
            rightSection={props.rightSection}
            size={props.size}
            loading={props.loading}
            disabled={props.disabled}
        >
            {props.children}
        </Button>
    ),
}
