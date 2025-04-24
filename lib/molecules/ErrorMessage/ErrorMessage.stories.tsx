import type { Meta, StoryObj } from "@storybook/react"
import { ErrorMessage } from "."
import { TextField } from "@/components/TextField"

const meta: Meta<typeof ErrorMessage> = {
    title: "Molecules/ErrorMessage",
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
        error: "Error message", // Always use sentence case, Not Title Case
    },
    render: () => (
        <ErrorMessage
            error="Error message" // Always use sentence case, Not Title Case
        />
    ),
}

export const WithATextField: Story = {
    render: () => (
        <TextField
            label="Label"
            placeholder="Placeholder text"
            error="Error message" // Always use sentence case, Not Title Case
        />
    ),
}
