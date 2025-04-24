import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Pagination } from "./index"

const meta: Meta<typeof Pagination> = {
    title: "Components/Pagination",
    component: Pagination,
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
    tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
    render: () => {
        const [activePage, setPage] = useState(1)
        return (
            <Pagination
                total={10}
                value={activePage}
                onChange={setPage}
            />
        )
    },
}

export const WithCustomBoundaries: Story = {
    name: "Boundaries",

    render: () => {
        const [activePage, setPage] = useState(1)
        return (
            <Pagination
                total={20}
                value={activePage}
                onChange={setPage}
                boundaries={2}
                siblings={2}
            />
        )
    },
}

export const Disabled: Story = {
    name: "Disabled",

    render: () => (
        <Pagination
            total={10}
            value={1}
            onChange={() => {}}
            disabled
        />
    ),
}
