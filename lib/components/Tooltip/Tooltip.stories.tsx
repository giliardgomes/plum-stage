import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip, TooltipProps } from "@/components/Tooltip"
import { Button } from "@/components/Button"
import { PlusFarFAIcon, CircleInfoFarFAIcon } from "@/components/Icons"
import { Stack } from "@mantine/core"

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
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
        opened: {
            control: "boolean",
            defaultValue: true,
        },
        label: {
            control: "text",
        },
        position: {
            control: "select",
            options: [
                "top",
                "top-start",
                "top-end",
                "right",
                "right-start",
                "right-end",
                "bottom",
                "bottom-start",
                "bottom-end",
                "left",
                "left-start",
                "left-end",
            ],
        },
    },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
    args: {
        label: "This is a helpful tooltip",
        position: "bottom",
        opened: true,
    },
    render: (props: TooltipProps) => (
        <Stack align="center" style={{ minHeight: "100px" }}>
            <Tooltip {...props}>
                <CircleInfoFarFAIcon />
            </Tooltip>
        </Stack>
    ),
}

export const Positions: Story = {
    render: () => (
        <Stack align="center" gap={100}>
            <Tooltip label="Top tooltip" position="top" opened>
                <CircleInfoFarFAIcon />
            </Tooltip>
            <Tooltip label="Right tooltip" position="right" opened>
                <CircleInfoFarFAIcon />
            </Tooltip>
            <Tooltip label="Bottom tooltip" position="bottom" opened>
                <CircleInfoFarFAIcon />
            </Tooltip>
            <Tooltip label="Left tooltip" position="left" opened>
                <CircleInfoFarFAIcon />
            </Tooltip>
        </Stack>
    ),
}

export const WithButton: Story = {
    name: "Button",

    render: () => (
        <Stack align="center" style={{ minHeight: "100px" }}>
            <Tooltip label="Add new item" position="bottom">
                <Button
                    variant="primary"
                    size="sm"
                    aria-label="Add new item"
                >
                    <PlusFarFAIcon />
                </Button>
            </Tooltip>
        </Stack>
    ),
}
