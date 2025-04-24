import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"
import { Label, LabelProps } from "@/components/Label"
import { Tooltip } from "@/components/Tooltip"
import { CircleInfoFarFAIcon } from "@/components/Icons/index"
import { TextField } from "@/components/TextField"

const meta: Meta<typeof Label> = {
    title: "Components/Label",
    component: Label,
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
    },
}

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
    args: {
        label: "Label text", // Always use sentence case, Not Title Case
        withAsterisk: true,
    },
    render: (props: LabelProps) => (
        <Label label={props.label} withAsterisk={props.withAsterisk} />
    ),
}

export const WithTooltip: Story = {
    name: "With tooltip",

    args: {
        label: "Label with tooltip", // Always use sentence case, Not Title Case
        withAsterisk: true,
    },
    render: (props: LabelProps) => (
        <Label
            label={props.label}
            withAsterisk={props.withAsterisk}
            rightSection={(
                <Tooltip label="This label has a tooltip.">
                    <CircleInfoFarFAIcon ariaHidden="false" />
                </Tooltip>
            )}
        />
    ),
}

export const RequiredAttribute: Story = {
    args: {
        label: "Label on a TextField marked `required`",
    },
    name: "TextField",
    parameters: {
        docs: {
            description: {
                story: "We recommend using the `required` attribute on the labeled component. There are some use cases where you must use `withAsterisk` separately.",
            },
        },
    },

    render: (props: LabelProps) => {
        return (
            <>
                <Stack>
                    <TextField label={<Label label={props.label} />} required />
                    <TextField label={<Label label="Label with `withAsterisk`" withAsterisk />} />
                </Stack>
            </>
        )
    },
}
