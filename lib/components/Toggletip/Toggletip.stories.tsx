import type { Meta, StoryObj } from "@storybook/react"
import { Toggletip } from "./index"

const meta = {
    title: "Components/Toggletip",
    component: Toggletip,
    parameters: {
        docs: {
            description: {
                component: (
                    "<a href='https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-figma'></i>  Figma</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;"
                    + "<a href='https://plum.quorum.us' target='_blank' rel='noopener noreferrer'><i class='fa-regular fa-folder'></i>  Documentation</a>"
                ),
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Toggletip>

export default meta
type Story = StoryObj<typeof Toggletip>

export const Default: Story = {
    args: {
        content: "Toggletip display additional information upon the click of a UI trigger element.",
    },
}

export const WithHeading: Story = {
    name: "Heading",

    args: {
        title: "Toggletip help",
        content: "Toggletip display additional information upon the click of a UI trigger element.",
    },
}

export const WithButtons: Story = {
    name: "Buttons",

    args: {
        title: "Toggletip help",
        content: "Toggletip display additional information upon the click of a UI trigger element.",
        actions: [
            {
                label: "Cancel",
                onClick: () => console.log("Cancel clicked"),
                variant: "secondary",
            },
            {
                label: "Apply",
                onClick: () => console.log("Apply clicked"),
                variant: "primary",
            },
        ],
    },
}

export const WithLink: Story = {
    name: "Call to action",

    args: {
        title: "Toggletip help",
        content: "Toggletip display additional information upon the click of a UI trigger element.",
        link: {
            label: "Link action",
            href: "#",
        },
    },
}

export const Positions: Story = {
    name: "Positions",

    render: () => (
        <div style={{ padding: "100px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", placeItems: "center" }}>
            <Toggletip
                content="Top position"
                position="top"
            />
            <Toggletip
                content="Right position"
                position="right"
            />
            <Toggletip
                content="Bottom position"
                position="bottom"
            />
            <Toggletip
                content="Left position"
                position="left"
            />
        </div>
    ),
}
