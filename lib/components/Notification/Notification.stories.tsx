import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Notification } from "."

const meta = {
    title: "Components/Notification",
    component: Notification,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Notification>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
    args: {
        message: "Operation completed successfully",
        variant: "success",
    },
}

export const Warning: Story = {
    args: {
        message: "Please be careful with this action",
        variant: "warning",
    },
}

export const Error: Story = {
    args: {
        message: "Something went wrong. Please try again",
        variant: "error",
    },
}

export const WithAction: Story = {
    args: {
        message: "Changes saved successfully",
        variant: "success",
        actionLabel: "Action",
        onAction: () => console.log("Action clicked"),
    },
}

export const WithoutCloseButton: Story = {
    args: {
        message: "This notification cannot be dismissed",
        variant: "warning",
        withCloseButton: false,
    },
}

export const WithTransition: Story = {
    args: {
        message: "This notification slides in from the right",
        variant: "success",
        visible: true,
    },
}
