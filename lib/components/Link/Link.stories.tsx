import type { Meta, StoryObj } from "@storybook/react"
import { Link, LinkProps } from "@/components/Link"

const meta: Meta<typeof Link> = {
    title: "Components/Link",
    component: Link,
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
