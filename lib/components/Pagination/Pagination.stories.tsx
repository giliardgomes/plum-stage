import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Pagination } from "./index"

const meta: Meta<typeof Pagination> = {
    component: Pagination,
    parameters: {
        docs: {
            description: {
                component: "Pagination component for navigating through multiple pages",
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
    render: () => (
        <Pagination
            total={10}
            value={1}
            onChange={() => {}}
            disabled
        />
    ),
}
