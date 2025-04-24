import type { Meta, StoryObj } from "@storybook/react"
import { Notification } from "."

const meta = {
    title: "Components/Notification",
    component: Notification,
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
    decorators: [
        (Story) => (
            <div style={{
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0",
                width: "100%",
                minWidth: "400px",
            }}
            >
                <Story />
            </div>
        ),
    ],
    tags: ["autodocs"],
} satisfies Meta<typeof Notification>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
    args: {
        message: "Operation completed successfully",
        variant: "success",
        position: "bottom-right",
    },
}

export const Warning: Story = {
    args: {
        message: "Please be careful with this action",
        variant: "warning",
        position: "bottom-right",
    },
}

export const Error: Story = {
    args: {
        message: "Something went wrong. Please try again",
        variant: "error",
        position: "bottom-right",
    },
}

export const WithAction: Story = {
    name: "With action",
    args: {
        message: "Changes saved successfully",
        variant: "success",
        actionLabel: "Action",
        onAction: () => console.log("Action clicked"),
        position: "bottom-right",
    },
}
