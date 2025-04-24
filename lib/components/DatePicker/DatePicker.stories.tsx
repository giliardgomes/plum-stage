import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"
import { useState } from "react"
import { DatePicker } from "."

const meta = {
    title: "Components/DatePicker",
    component: DatePicker,
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
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof DatePicker>

const DemoWrapper = ({ children }: { children: React.ReactNode }) => (
    <Stack gap="xs" style={{ padding: "24px", maxWidth: "480px" }}>
        {children}
    </Stack>
)

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState<Date | null>(null)
        return (
            <DemoWrapper>
                <DatePicker
                    value={value as Date}
                    onChange={(value) => setValue(value as Date)}
                    label="Date"
                />
            </DemoWrapper>
        )
    },
}

export const WithDescription: Story = {
    name: "Description",

    render: () => {
        const [value, setValue] = useState<Date | null>(null)
        return (
            <DemoWrapper>
                <DatePicker
                    value={value as Date}
                    onChange={(value) => setValue(value as Date)}
                    label="Date"
                    description="Select a date for your event"
                />
            </DemoWrapper>
        )
    },
}

export const WithError: Story = {
    name: "Error",

    render: () => {
        const [value, setValue] = useState<Date | null>(null)
        return (
            <DemoWrapper>
                <DatePicker
                    value={value as Date}
                    onChange={(value) => setValue(value as Date)}
                    label="Date"
                    error="Please select a valid date"
                />
            </DemoWrapper>
        )
    },
}

export const Range: Story = {
    name: "Range",

    render: () => {
        const [value, setValue] = useState<[Date | null, Date | null]>([null, null])
        return (
            <DemoWrapper>
                <DatePicker
                    variant="range"
                    value={value}
                    onChange={(value) => setValue(value as [Date | null, Date | null])}
                    label="Date range"
                />
            </DemoWrapper>
        )
    },
}

export const RangeWithDescription: Story = {
    name: "Range with description",

    render: () => {
        const [value, setValue] = useState<[Date | null, Date | null]>([null, null])
        return (
            <DemoWrapper>
                <DatePicker
                    variant="range"
                    value={value}
                    onChange={(value) => setValue(value as [Date | null, Date | null])}
                    label="Date range"
                    description="Select start and end dates"
                />
            </DemoWrapper>
        )
    },
}

export const RangeWithError: Story = {
    name: "Range with error",

    render: () => {
        const [value, setValue] = useState<[Date | null, Date | null]>([null, null])
        return (
            <DemoWrapper>
                <DatePicker
                    variant="range"
                    value={value}
                    onChange={(value) => setValue(value as [Date | null, Date | null])}
                    label="Date range"
                    error="Please select both start and end dates"
                />
            </DemoWrapper>
        )
    },
}
