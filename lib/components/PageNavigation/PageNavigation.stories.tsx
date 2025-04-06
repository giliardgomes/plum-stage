import type { Meta, StoryObj } from "@storybook/react"

import { PageNavigation } from "."

const meta = {
    title: "Navigation/PageNavigation",
    component: PageNavigation,
    tags: ["autodocs"],
} satisfies Meta<typeof PageNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: "Settings",
    },
}

export const WithBackHandler: Story = {
    args: {
        title: "Settings",
        onBackClick: () => console.log("Back clicked"),
    },
}
