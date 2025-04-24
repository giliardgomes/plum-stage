import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"

import { Switch } from "."
import { Tooltip } from "@/components/Tooltip"
import { CircleInfoFarFAIcon } from "@/components/Icons"
import { Label } from "@/components/Label"

const meta: Meta<typeof Switch> = {
    title: "Components/Switch",
    component: Switch,
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
    args: {
        label: "Switch label",
    },
    argTypes: {
        label: { control: "text" },
        error: { control: "text" },
        disabled: { control: "boolean" },
        variant: {
            control: "select",
            options: ["default", "wide", "standalone"],
        },
    },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Basic: Story = {
    args: {
        label: "Basic switch",
    },
}

export const WithTooltip: Story = {
    render: () => (
        <Stack>
            <Switch
                label={(
                    <Label
                        label="Switch with tooltip"
                        rightSection={(
                            <Tooltip label="This is a helpful tooltip">
                                <CircleInfoFarFAIcon />
                            </Tooltip>
                        )}
                    />
                )}
            />
        </Stack>
    ),
}

export const Required: Story = {
    args: {
        withAsterisk: true,
        label: "Switch with asterisk",
    },
}

export const Wide: Story = {
    args: {
        label: "Wide switch",
        variant: "wide",
    },
    parameters: {
        docs: {
            description: {
                story: "Wide variant places the label on the left and the switch on the right, with a width between 320px and 480px.",
            },
        },
    },
}

export const Standalone: Story = {
    args: {
        variant: "standalone",
    },
    parameters: {
        docs: {
            description: {
                story: "Standalone variant shows just the switch without any label.",
            },
        },
    },
}

export const Disabled: Story = {
    render: () => (
        <Stack>
            <Switch label="Disabled unchecked" disabled />
            <Switch label="Disabled checked" disabled defaultChecked />
        </Stack>
    ),
}

export const WithError: Story = {
    args: {
        label: "Switch with error",
        error: "This field is required",
    },
}
