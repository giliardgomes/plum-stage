import type { Meta, StoryObj } from "@storybook/react"
import { Link, LinkProps } from "@/components/Link"

const meta: Meta<typeof Link> = {
    component: Link,
    parameters: {
        docs: {
            description: {
                component: "Documentation: https://plum.quorum.us/4a128e208/p/link",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: ["inline", "standalone"],
        },
    },
}

export default meta

type Story = StoryObj<typeof Link>

export const Default: Story = {
    args: {
        children: "Link action",
        variant: "inline",
        href: "#",
    },
}

export const Standalone: Story = {
    args: {
        children: "Link action",
        variant: "standalone",
        href: "#",
    },
}

export const Disabled: Story = {
    args: {
        children: "Link action",
        disabled: true,
        href: "#",
    },
}
