import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./index"

const meta = {
    title: "Components/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: "Badge",
    },
}

export const Variants: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Badge variant="filled">Filled</Badge>
            <Badge variant="light">Light</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="dot">Dot</Badge>
            <Badge variant="gradient">Gradient</Badge>
        </div>
    ),
}

export const Colors: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Badge color="blue">Blue</Badge>
            <Badge color="red">Red</Badge>
            <Badge color="green">Green</Badge>
            <Badge color="yellow">Yellow</Badge>
            <Badge color="purple">Purple</Badge>
            <Badge color="gray">Gray</Badge>
        </div>
    ),
}

export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Badge size="xs">Extra Small</Badge>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
        </div>
    ),
}

export const FullWidth: Story = {
    args: {
        children: "Full Width Badge",
        fullWidth: true,
    },
}
