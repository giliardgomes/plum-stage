import type { Meta, StoryObj } from "@storybook/react"
import { ErrorMessage } from "."
import { TextField } from "@/components/TextField"

const meta: Meta<typeof ErrorMessage> = {
    component: ErrorMessage,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "See, for example, the error message in: https://plum.quorum.us/4a128e208/p/3311f2-text-field",
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
    args: {
        error: "Error Message",
    },
    render: () => (
        <ErrorMessage
            error="Error Message"
        />
    ),
}

export const WithATextField: Story = {
    render: () => (
        <TextField
            label="Label"
            placeholder="Placeholder text"
            error="Error Message"
        />
    ),
}
