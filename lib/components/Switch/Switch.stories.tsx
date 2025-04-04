import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "."
import { Tooltip } from "@/components/Tooltip"
import { CircleInfoFarFAIcon } from "@/components/Icons"
import { Label } from "@/components/Label"

const meta = {
    title: "Components/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
    args: {
        label: "Switch label",
    },
}

export const WithTooltip: Story = {
    args: {
        label: (
            <Label
                label="Switch with tooltip"
                rightSection={(
                    <Tooltip label="This is a helpful tooltip">
                        <CircleInfoFarFAIcon />
                    </Tooltip>
                )}
            />
        ),
    },
}

export const Required: Story = {
    args: {
        label: <Label label="Required switch" withAsterisk />,
        required: true,
    },
    parameters: {
        docs: {
            description: {
                story: "Use the `withAsterisk` prop on the Label component to show the required indicator.",
            },
        },
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


