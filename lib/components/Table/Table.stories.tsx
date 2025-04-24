import type { Meta, StoryObj } from "@storybook/react"
import { Table } from "./index"
import { TableActions } from "./TableActions"
import { Button } from "../Button"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

const meta: Meta<typeof Table> = {
    title: "Components/Table",
    component: Table,
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
}

export default meta
type Story = StoryObj<typeof Table>

const mockData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Admin" },
]

export const Default: Story = {
    render: () => {
        const columns = [
            { key: "name", header: "Name" },
            { key: "email", header: "Email" },
            { key: "role", header: "Role" },
        ]

        return <Table data={mockData} columns={columns} />
    },
}

export const WithActions: Story = {
    render: () => {
        const columns = [
            { key: "name", header: "Name" },
            { key: "email", header: "Email" },
            { key: "role", header: "Role" },
            {
                key: "actions",
                header: "Actions",
                render: () => (
                    <TableActions
                        onEdit={() => console.log("Edit clicked")}
                        onDelete={() => console.log("Delete clicked")}
                    />
                ),
            },
        ]

        return <Table data={mockData} columns={columns} />
    },
}

export const Loading: Story = {
    render: () => {
        const columns = [
            { key: "name", header: "Name" },
            { key: "email", header: "Email" },
            { key: "role", header: "Role" },
        ]

        return <Table data={[]} columns={columns} loading />
    },
}

export const Empty: Story = {
    render: () => {
        const columns = [
            { key: "name", header: "Name" },
            { key: "email", header: "Email" },
            { key: "role", header: "Role" },
        ]

        return (
            <Table
                data={[]}
                columns={columns}
                emptyMessage="No users found"
            />
        )
    },
}

export const CustomColumnWidth: Story = {
    render: () => {
        const columns = [
            { key: "name", header: "Name", width: "30%" },
            { key: "email", header: "Email", width: "40%" },
            { key: "role", header: "Role", width: "30%" },
        ]

        return <Table data={mockData} columns={columns} />
    },
}

export const WithCustomRender: Story = {
    render: () => {
        const columns = [
            { key: "name", header: "Name" },
            { key: "email", header: "Email" },
            {
                key: "role",
                header: "Role",
                render: (row: { role: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => (
                    <Button
                        variant="tertiary"
                        size="sm"
                        onClick={() => console.log(`Role clicked: ${row.role}`)}
                    >
                        {row.role}
                    </Button>
                ),
            },
        ]

        return <Table data={mockData} columns={columns} />
    },
}
