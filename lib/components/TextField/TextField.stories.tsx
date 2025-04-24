import type { Meta, StoryObj } from "@storybook/react"
import { TextField, TextFieldProps } from "."
import { StarFarFAIcon } from "../Icons"

const meta: Meta<typeof TextField> = {
    title: "Components/TextField",
    component: TextField,
    tags: ["autodocs"],
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

export const TrailingIcon: Story = {
    name: "Trailing icon",

    args: {
        leftSection: <StarFarFAIcon />,
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

export const Error: Story = {
    name: "Error",

    args: {
        label: "Label",
        placeholder: "Placeholder text",
        description: "Description",
        error: "There is an error",
    },
    render: (props: TextFieldProps) => (
        <TextField
            {...props}
        />
    ),
}

export const Disabled: Story = {
    name: "Disabled",

    args: {
        label: "Label",
        placeholder: "Placeholder text",
        description: "Description",
        disabled: true,
    },
    render: (props: TextFieldProps) => (
        <TextField
            {...props}
        />
    ),
}
