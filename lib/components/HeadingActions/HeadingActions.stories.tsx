import type { Meta, StoryObj } from "@storybook/react"
import { HeadingActions } from "."

const meta = {
    title: "Components/HeadingActions",
    component: HeadingActions,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof HeadingActions>

export default meta
type Story = StoryObj<typeof HeadingActions>

export const Default: Story = {
    args: {
        heading: "42 custom fields",
        primaryActionLabel: "Add field",
        primaryActionIcon: <i className="fa-regular fa-plus" />,
        onPrimaryAction: () => console.log("Primary action clicked"),
        secondaryActions: [
            {
                label: "Download",
                icon: <i className="fa-regular fa-arrow-to-bottom" />,
                onClick: () => console.log("Download clicked"),
            },
            {
                label: "Save list",
                icon: <i className="fa-regular fa-bookmark" />,
                onClick: () => console.log("Save clicked"),
            },
            {
                label: "Create alert",
                icon: <i className="fa-regular fa-bell" />,
                onClick: () => console.log("Alert clicked"),
            },
        ],
    },
}

export const WithoutPrimaryAction: Story = {
    args: {
        heading: "Saved items",
        secondaryActions: [
            {
                label: "Download",
                icon: <i className="fa-regular fa-arrow-to-bottom" />,
                onClick: () => console.log("Download clicked"),
            },
            {
                label: "Save list",
                icon: <i className="fa-regular fa-bookmark" />,
                onClick: () => console.log("Save clicked"),
            },
        ],
    },
}

export const PrimaryActionOnly: Story = {
    args: {
        heading: "Team members",
        primaryActionLabel: "Add field",
        primaryActionIcon: <i className="fa-regular fa-plus" />,
        onPrimaryAction: () => console.log("Primary action clicked"),
    },
}
