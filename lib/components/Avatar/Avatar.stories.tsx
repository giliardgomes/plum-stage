import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "./index"

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    parameters: {
        docs: {
            description: {
                component: (
                    "Documentation: https://plum.quorum.us/avatar<br>"
                    + "Figma: https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System?node-id=avatar"
                ),
            },
        },
    },
    tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
    args: {
        size: "md",
    },
}

export const WithImage: Story = {
    args: {
        size: "md",
        src: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
        alt: "Profile picture",
    },
}

export const WithText: Story = {
    args: {
        size: "md",
        children: "JD",
    },
}

export const Small: Story = {
    args: {
        size: "sm",
    },
}

export const Medium: Story = {
    args: {
        size: "md",
    },
}

export const Large: Story = {
    args: {
        size: "lg",
    },
}
