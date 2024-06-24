import type { Meta, StoryObj } from "@storybook/react"
import { TextField, TextFieldProps } from "."

const meta: Meta<typeof TextField> = {
    component: TextField,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Documentation: https://zeroheight.com/4a128e208/p/3311f2-text-field",
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
    args: {
        label: "Label",
        placeholder: "Placeholder text",
        description: "Description",
    },
    render: (props: TextFieldProps) => (
        <TextField
            {...props}
        />
    ),
}

export const WithIcon: Story = {
    args: {
        leftSection: <i className="fa-sharp fa-regular fa-bullseye"></i>,
        label: "Label",
        placeholder: "Placeholder text",
        description: "Description",
    },
    render: (props: TextFieldProps) => (
        <TextField
            {...props}
        />
    ),
}

export const WithTrailingIcon: Story = {
    args: {
        rightSection: <i className="fa-sharp fa-regular fa-bullseye"></i>,
        label: "Label",
        placeholder: "Placeholder text",
        description: "Description",
    },
    render: (props: TextFieldProps) => (
        <TextField
            {...props}
        />
    ),
}

export const WithIconAndTrailingIcon: Story = {
    args: {
        leftSection: <i className="fa-sharp fa-regular fa-bullseye"></i>,
        rightSection: <i className="fa-sharp fa-regular fa-bullseye"></i>,
        label: "Label",
        placeholder: "Placeholder text",
        description: "Description",
    },
    render: (props: TextFieldProps) => (
        <TextField
            {...props}
        />
    ),
}
