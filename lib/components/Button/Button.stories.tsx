import { Button } from "@/components/Button"
import { Tooltip } from "@/components/Tooltip"
import type { Meta, StoryObj } from "@storybook/react"
import {
    PlusFarFAIcon,
} from "@/components/Icons"

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
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
    args: {
        variant: "accent",
        size: "sm",
        danger: false,
    },
}

export default meta
type Story = StoryObj<typeof Button>

// Basic story with controls
export const Controls: Story = {
    args: {
        children: "Button",
        variant: "accent",
        size: "sm",
    },
}

export const Variants: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Accent variant */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="accent"
                        size="sm"
                    >
                        Button
                    </Button>
                    <Button
                        variant="accent"
                        size="md"
                    >
                        Button
                    </Button>
                    <Button
                        variant="accent"
                        size="lg"
                    >
                        Button
                    </Button>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="accent"
                        size="sm"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                    <Button
                        variant="accent"
                        size="md"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                    <Button
                        variant="accent"
                        size="lg"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="accent"
                        size="sm"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                    <Button
                        variant="accent"
                        size="md"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                    <Button
                        variant="accent"
                        size="lg"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                </div>
            </div>

            {/* Primary variant */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="primary"
                        size="sm"
                    >
                        Button
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                    >
                        Button
                    </Button>
                    <Button
                        variant="primary"
                        size="lg"
                    >
                        Button
                    </Button>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="primary"
                        size="sm"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                    <Button
                        variant="primary"
                        size="lg"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="primary"
                        size="sm"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                    <Button
                        variant="primary"
                        size="lg"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                </div>
            </div>

            {/* Secondary variant */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="secondary"
                        size="sm"
                    >
                        Button
                    </Button>
                    <Button
                        variant="secondary"
                        size="md"
                    >
                        Button
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                    >
                        Button
                    </Button>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="secondary"
                        size="sm"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                    <Button
                        variant="secondary"
                        size="md"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="secondary"
                        size="sm"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                    <Button
                        variant="secondary"
                        size="md"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                </div>
            </div>

            {/* Tertiary variant */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="tertiary"
                        size="sm"
                    >
                        Button
                    </Button>
                    <Button
                        variant="tertiary"
                        size="md"
                    >
                        Button
                    </Button>
                    <Button
                        variant="tertiary"
                        size="lg"
                    >
                        Button
                    </Button>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="tertiary"
                        size="sm"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                    <Button
                        variant="tertiary"
                        size="md"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                    <Button
                        variant="tertiary"
                        size="lg"
                        leftSection={<PlusFarFAIcon />}
                    >
                        Button
                    </Button>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Button
                        variant="tertiary"
                        size="sm"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                    <Button
                        variant="tertiary"
                        size="md"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                    <Button
                        variant="tertiary"
                        size="lg"
                        aria-label="Add new"
                    >
                        <PlusFarFAIcon />
                    </Button>
                </div>
            </div>
        </div>
    ),
}

export const WithLeftIcon: Story = {

    name: "Left icon",

    render: () => (
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Button
                variant="accent"
                size="sm"
                leftSection={<PlusFarFAIcon />}
            >
                Add new
            </Button>
            <Button
                variant="primary"
                size="sm"
                leftSection={<PlusFarFAIcon />}
            >
                Add new
            </Button>
            <Button
                variant="tertiary"
                size="sm"
                leftSection={<PlusFarFAIcon />}
            >
                Add new
            </Button>
        </div>
    ),
}

export const WithRightIcon: Story = {
    name: "Right icon",

    render: () => (
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Button
                variant="accent"
                size="sm"
                rightSection={<PlusFarFAIcon />}
            >
                Add new
            </Button>
            <Button
                variant="primary"
                size="sm"
                rightSection={<PlusFarFAIcon />}
            >
                Add new
            </Button>
            <Button
                variant="tertiary"
                size="sm"
                rightSection={<PlusFarFAIcon />}
            >
                Add new
            </Button>
        </div>
    ),
}

export const IconOnly: Story = {
    name: "Icon only",

    render: () => (
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Button
                variant="accent"
                size="sm"
                aria-label="Add new"
            >
                <PlusFarFAIcon />
            </Button>
            <Button
                variant="primary"
                size="sm"
                aria-label="Add new"
            >
                <PlusFarFAIcon />
            </Button>
            <Button
                variant="tertiary"
                size="sm"
                aria-label="Add new"
            >
                <PlusFarFAIcon />
            </Button>
        </div>
    ),
}

export const IconOnlyWithTooltip: Story = {
    name: "Icon only with tooltip",

    render: () => (
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Tooltip label="Add new">
                <Button
                    variant="accent"
                    size="sm"
                >
                    <PlusFarFAIcon />
                </Button>
            </Tooltip>
            <Tooltip label="Add new">
                <Button
                    variant="accent"
                    size="md"
                >
                    <PlusFarFAIcon />
                </Button>
            </Tooltip>
            <Tooltip label="Add new">
                <Button
                    variant="accent"
                    size="lg"
                >
                    <PlusFarFAIcon />
                </Button>
            </Tooltip>
        </div>
    ),
}
