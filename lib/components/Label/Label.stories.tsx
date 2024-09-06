import type { Meta, StoryObj } from "@storybook/react"
import { Label, LabelProps } from "@/components/Label"
import { Tooltip } from "@/components/Tooltip"
import { StorybookDemoIcon } from "./StorybookDemoIcon"
import { TextField } from "@/components/TextField"

const meta: Meta<typeof Label> = {
    component: Label,
    parameters: {
        docs: {
            description: {
                component: "Documentation: https://www.figma.com/design/mjUSsYy7JxOtylceOQgr3r/Design-System?node-id=10355-12140&t=eAJiNCw1mukItxzz-0",
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
        label: "Label Text",
        withAsterisk: true,
    },
    render: (props: LabelProps) => (
        <Label label={props.label} withAsterisk={props.withAsterisk} />
    ),
}

export const WithTooltip: Story = {
    args: {
        label: "Label With Tooltip",
        withAsterisk: true,
    },
    render: (props: LabelProps) => (
        <Label
            label={props.label}
            withAsterisk={props.withAsterisk}
            rightSection={(
                <Tooltip label="This label has a tooltip.">
                    <StorybookDemoIcon />
                </Tooltip>
            )}
        />
    ),
}

export const RequiredAttribute: Story = {
    args: {
        label: "Label on a TextField marked `required`",
    },
    name: "Label using the TextField built-in `required` attribute",
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
                <div><TextField label={<Label label={props.label} />} required /></div>
                <div><TextField label={<Label label="Label with `withAsterisk`" withAsterisk />} /></div>
            </>
        )
    },
}
