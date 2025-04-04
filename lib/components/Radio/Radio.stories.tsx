import type { Meta, StoryObj } from "@storybook/react"
import { useArgs } from "@storybook/preview-api"
import { fn } from "@storybook/test"

import { Radio, RadioGroupProps } from "@/components/Radio"
import { Label } from "@/components/Label"
import { Tooltip } from "@/components/Tooltip"
import { CircleInfoFarFAIcon } from "../Icons"

const meta: Meta<typeof Radio.Group> = {
    args: {
        onChange: fn(),
    },
    component: Radio.Group,
    decorators: [
        function Component(Story, ctx) {
            const [, setArgs] = useArgs<typeof ctx.args>()

            const onChange = (value: string | null) => {
                ctx.args.onChange?.(value)
                // Check if the component is controlled
                if (ctx.args.value !== undefined) {
                    setArgs({ value })
                }
            }

            return <Story args={{ ...ctx.args, onChange }} />
        },
    ],
    parameters: {
        docs: {
            description: {
                component: "Documentation: https://www.figma.com/design/mjUSsYy7JxOtylceOQgr3r/Design-System?node-id=0-42970&p=f&t=4VmqOmWwu8ST4935-0",
            },
        },
    },
    // @ts-expect-error Radio isn't allowed as a subcomponent for some reason
    subcomponents: { Radio },
    tags: ["autodocs"],
    argTypes: {
    },
}

export default meta

type Story = StoryObj<typeof Radio.Group>

export const Basic: Story = {
    args: {
        defaultValue: "A",
        label: "Favorite Fruit",
        required: false,
        error: "",
        horizontal: false,
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group
            label={props.label}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
        >
            <Radio label="Apple" value="A" />
            <Radio label="Banana" value="B" />
        </Radio.Group>
    ),
}

export const Clearable: Story = {
    args: {
        defaultValue: "A",
        label: "Favorite Fruit",
        required: false,
        error: "",
        horizontal: false,
        clearable: true,
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group {...props}>
            <Radio label="Apple" value="A" />
            <Radio label="Banana" value="B" />
        </Radio.Group>
    ),
}

export const ControlledOptionsClearable: Story = {
    args: {
        value: "e",
        label: "Default Region",
        clearable: true,
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group {...props}>
            <Radio label="East" value="e" />
            <Radio label="West" value="w" />
            <Radio label="North" value="n" />
        </Radio.Group>
    ),
}

export const OptionsDisabled: Story = {
    args: {
        label: "Group with Disabled Option",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group
            label={props.label}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
        >
            <Radio label="Option 1" value="option1" />
            <Radio label="Option 2" value="option2" disabled />
            <Radio label="Option 3" value="option3" />
        </Radio.Group>
    ),
}

export const WithError: Story = {
    args: {
        label: "Group with Error",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group
            defaultValue={props.defaultValue}
            error="Show an error message"
            label={props.label}
            onChange={props.onChange}
        >
            <Radio label="Option 1" value="option1" />
            <Radio label="Option 2" value="option2" />
        </Radio.Group>
    ),
}

export const Horizontal: Story = {
    args: {
        defaultValue: "option1",
        label: "Horizontal Group",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group
            defaultValue={props.defaultValue}
            horizontal
            label={props.label}
            onChange={props.onChange}
        >
            <Radio label="Option 1" value="option1" />
            <Radio label="Option 2" value="option2" />
        </Radio.Group>
    ),
}

export const HorizontalWithError: Story = {
    args: {
        defaultValue: "option1",
        label: "Horizontal With Error",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group
            defaultValue={props.defaultValue}
            error="Show an error message"
            horizontal
            label={props.label}
            onChange={props.onChange}
        >
            <Radio label="Option 1" value="option1" />
            <Radio label="Option 2" value="option2" />
        </Radio.Group>
    ),
}

/**
 * Passing in a custom Element for the label is possible at both the Group and Option levels,
 * including attaching a Tooltip if you want.
 */
export const WithOwnLabelElements: Story = {
    args: {
        defaultValue: "A",
        label: "Favorite Fruit",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group
            label={(
                <Label
                    label={`${props.label}`}
                    withAsterisk
                    rightSection={(
                        <Tooltip label="Tomatoes are a Fruit, but you can't choose them.">
                            <CircleInfoFarFAIcon filled={true} />
                        </Tooltip>
                    )}
                />
            )}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
        >
            <Radio label={<Label label="Apple" />} value="A" />
            <Radio
                label={(
                    <Label
                        label="Banana"
                        rightSection={(
                            <Tooltip label="Bananas are techincally a Berry (which is a Fruit).">
                                <CircleInfoFarFAIcon filled={true} />
                            </Tooltip>
                        )}
                    />
                )}
                value="B"
            />
        </Radio.Group>
    ),
}
