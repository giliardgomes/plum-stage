import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"
import { useState } from "react"
import { TimePicker } from "."

const meta = {
    title: "Components/TimePicker",
    component: TimePicker,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: (
                    "<a href='https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-figma'></i>  Figma</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    + "<a href='https://plum.quorum.us' target='_blank' rel='noopener noreferrer'><i class='fa-regular fa-folder'></i>  Documentation</a>"
                ),
            },
            story: {
                height: "400px",
                iframeHeight: 400,
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TimePicker>

export default meta
type Story = StoryObj<typeof TimePicker>

const DemoWrapper = ({ children }: { children: React.ReactNode }) => (
    <Stack gap="xs" style={{ padding: "24px", maxWidth: "480px" }}>
        {children}
    </Stack>
)

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState<string>("")
        return (
            <DemoWrapper>
                <TimePicker
                    value={value}
                    onChange={setValue}
                    label="Time"
                />
            </DemoWrapper>
        )
    },
}

export const WithDescription: Story = {
    name: "Description",
    render: () => {
        const [value, setValue] = useState<string>("")
        return (
            <DemoWrapper>
                <TimePicker
                    value={value}
                    onChange={setValue}
                    label="Time"
                    description="Select a time for your event"
                />
            </DemoWrapper>
        )
    },
}

export const WithError: Story = {
    name: "Error",
    render: () => {
        const [value, setValue] = useState<string>("")
        return (
            <DemoWrapper>
                <TimePicker
                    value={value}
                    onChange={setValue}
                    label="Time"
                    error="Please select a valid time"
                />
            </DemoWrapper>
        )
    },
}

export const WithTimezone: Story = {
    name: "Timezone",
    render: () => {
        const [value, setValue] = useState<string>("")
        const [timezone, setTimezone] = useState("EST")
        return (
            <DemoWrapper>
                <TimePicker
                    variant="timezone"
                    value={value}
                    onChange={setValue}
                    timezone={timezone}
                    onTimezoneChange={setTimezone}
                    label="Time"
                />
            </DemoWrapper>
        )
    },
}
