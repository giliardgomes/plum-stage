import type { Meta, StoryObj } from "@storybook/react"
import { Sidebar } from "./index"
import { useState } from "react"
import { MemoryRouter } from "react-router-dom"

const meta: Meta<typeof Sidebar> = {
    title: "Molecules/Sidebar",
    component: Sidebar,
    parameters: {
        docs: {
            description: {
                component: (
                    "Documentation: https://plum.quorum.us/sidebar<br>"
                    + "Figma: https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System?node-id=sidebar"
                ),
            },
        },
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
    tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
    render: () => {
        const [activeItem, setActiveItem] = useState("home")
        return (
            <Sidebar
                activeItem={activeItem}
                onItemClick={setActiveItem}
                width={280}
            />
        )
    },
}
