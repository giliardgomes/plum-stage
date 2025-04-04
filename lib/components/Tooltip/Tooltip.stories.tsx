import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip, TooltipProps } from "@/components/Tooltip"
import { Button } from "@/components/Button"

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
    parameters: {
        docs: {
            description: {
                component: "Documentation: https://plum.quorum.us/4a128e208/p/164fbd-tooltip",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
    },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
    args: {
        label: "This is a bottom left tooltip.",
        position: "bottom-start",
    },
    render: (props: TooltipProps) => (
        <Tooltip label={props.label} position={props.position}>
            <Button>Hover me</Button>
        </Tooltip>
    ),
}
