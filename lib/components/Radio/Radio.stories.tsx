import type { Meta, StoryObj } from "@storybook/react"
import { useArgs } from "@storybook/preview-api"
import { fn } from "@storybook/test"

import { Radio, RadioGroupProps } from "@/components/Radio"
import { Label } from "@/components/Label"
import { Tooltip } from "@/components/Tooltip"
import { CircleInfoFarFAIcon } from "../Icons"

const meta: Meta<typeof Radio.Group> = {
    title: "Components/Radio",
    args: {
        onChange: fn(),
    },
    component: Radio.Group,
    decorators: [
        function Component(Story, ctx) {
            const [, setArgs] = useArgs<typeof ctx.args>()

            const onChange = (value: string | null) => {
                ctx.args.onChange?.(value)
                if (ctx.args.value !== undefined) {
                    setArgs({ value })
                }
            }

            return <Story args={{ ...ctx.args, onChange }} />
        },
    ],
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
    subcomponents: { Radio: Radio as any, Label: Label as any },
    tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Radio.Group>

// Basic Examples
export const BasicVertical: Story = {
    name: "Basic vertical",
    args: {
        label: "Notification preferences",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group {...props}>
            <Radio label="Email" value="email" />
            <Radio label="SMS" value="sms" />
            <Radio label="Push notification" value="push" />
        </Radio.Group>
    ),
}

export const BasicHorizontal: Story = {
    name: "Basic horizontal",
    args: {
        label: "View mode",
        horizontal: true,
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group {...props}>
            <Radio label="List" value="list" />
            <Radio label="Grid" value="grid" />
            <Radio label="Table" value="table" />
        </Radio.Group>
    ),
}

export const WithDefaultValue: Story = {
    name: "With default value",
    args: {
        label: "Preferred contact method",
        defaultValue: "phone",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group {...props}>
            <Radio label="Phone" value="phone" />
            <Radio label="Email" value="email" />
            <Radio label="Mail" value="mail" />
        </Radio.Group>
    ),
}

// States and Variations
export const WithError: Story = {
    name: "With error",
    args: {
        label: "Select a plan",
        error: "Please select a subscription plan",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group {...props}>
            <Radio label="Basic" value="basic" />
            <Radio label="Pro" value="pro" />
            <Radio label="Enterprise" value="enterprise" />
        </Radio.Group>
    ),
}

export const Required: Story = {
    name: "Required",
    args: {
        label: "Payment method",
        required: true,
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group {...props}>
            <Radio label="Credit card" value="credit" />
            <Radio label="Bank transfer" value="bank" />
            <Radio label="PayPal" value="paypal" />
        </Radio.Group>
    ),
}

export const WithDisabledOptions: Story = {
    name: "With disabled options",
    args: {
        label: "Subscription tier",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group {...props}>
            <Radio label="Free" value="free" />
            <Radio label="Premium (Coming soon)" value="premium" disabled />
            <Radio label="Enterprise (Contact sales)" value="enterprise" disabled />
        </Radio.Group>
    ),
}

export const ControlledWithTooltips: Story = {
    name: "Controlled with tooltips",
    args: {
        label: "Data center region",
        value: "us-east",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group {...props}>
            <Radio
                label={(
                    <Label
                        label="US East"
                        rightSection={(
                            <Tooltip label="Virginia & Ohio">
                                <CircleInfoFarFAIcon />
                            </Tooltip>
                        )}
                    />
                )}
                value="us-east"
            />
            <Radio
                label={(
                    <Label
                        label="US West"
                        rightSection={(
                            <Tooltip label="Oregon & California">
                                <CircleInfoFarFAIcon />
                            </Tooltip>
                        )}
                    />
                )}
                value="us-west"
            />
            <Radio
                label={(
                    <Label
                        label="EU Central"
                        rightSection={(
                            <Tooltip label="Frankfurt & Paris">
                                <CircleInfoFarFAIcon />
                            </Tooltip>
                        )}
                    />
                )}
                value="eu-central"
            />
        </Radio.Group>
    ),
}

export const GroupWithTooltip: Story = {
    name: "Group with tooltip",
    args: {
        defaultValue: "monthly",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group
            {...props}
            label={(
                <Label
                    label="Billing cycle"
                    rightSection={(
                        <Tooltip label="Choose how often you want to be billed">
                            <CircleInfoFarFAIcon />
                        </Tooltip>
                    )}
                />
            )}
        >
            <Radio label="Monthly" value="monthly" />
            <Radio label="Quarterly" value="quarterly" />
            <Radio label="Yearly (Save 20%)" value="yearly" />
        </Radio.Group>
    ),
}

export const HorizontalWithError: Story = {
    name: "Horizontal with error",
    args: {
        label: "Experience level",
        horizontal: true,
        error: "Please select your experience level",
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group {...props}>
            <Radio label="Beginner" value="beginner" />
            <Radio label="Intermediate" value="intermediate" />
            <Radio label="Advanced" value="advanced" />
        </Radio.Group>
    ),
}

export const ComplexLayout: Story = {
    name: "Complex layout",
    args: {
        label: "Notification settings",
        required: true,
    },
    render: (props: RadioGroupProps) => (
        <Radio.Group
            {...props}
            label={(
                <Label
                    label="Notification settings"
                    rightSection={(
                        <Tooltip label="Choose how you want to receive important updates">
                            <CircleInfoFarFAIcon />
                        </Tooltip>
                    )}
                    withAsterisk
                />
            )}
        >
            <Radio
                label={(
                    <Label
                        label="Instant notifications"
                        rightSection={(
                            <Tooltip label="Receive notifications as soon as they happen">
                                <CircleInfoFarFAIcon />
                            </Tooltip>
                        )}
                    />
                )}
                value="instant"
            />
            <Radio
                label={(
                    <Label
                        label="Daily digest"
                        rightSection={(
                            <Tooltip label="Receive a summary of notifications once per day">
                                <CircleInfoFarFAIcon />
                            </Tooltip>
                        )}
                    />
                )}
                value="daily"
            />
            <Radio
                label={(
                    <Label
                        label="Weekly summary"
                        rightSection={(
                            <Tooltip label="Receive a weekly summary of all notifications">
                                <CircleInfoFarFAIcon />
                            </Tooltip>
                        )}
                    />
                )}
                value="weekly"
            />
        </Radio.Group>
    ),
}
