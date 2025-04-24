import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { DraggableList, type DraggableItem } from "./index"
import { Text, Avatar, Flex, Badge, Stack } from "@mantine/core"

const meta: Meta<typeof DraggableList> = {
    title: "Components/DraggableList",
    component: DraggableList,
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
type Story = StoryObj<typeof DraggableList>

// Simple text items
const simpleItems: DraggableItem[] = [
    { id: "1", content: "Draggable Item 1" },
    { id: "2", content: "Draggable Item 2" },
    { id: "3", content: "Draggable Item 3" },
    { id: "4", content: "Draggable Item 4" },
    { id: "5", content: "Draggable Item 5" },
]

// Complex items with user information
const userItems: DraggableItem[] = [
    {
        id: "1",
        content: (
            <Flex justify="space-between" style={{ width: "100%" }} align="center">
                <Flex gap="sm" align="center">
                    <Avatar size="sm" src="https://i.pravatar.cc/150?u=1" />
                    <Stack gap={0}>
                        <Text size="sm" fw={500} lh="1rem">Sarah Johnson</Text>
                        <Text size="xs" c="gray.7">sarah.j@example.com</Text>
                    </Stack>
                </Flex>
                <Badge color="violet">Admin</Badge>
            </Flex>
        ),
    },
    {
        id: "2",
        content: (
            <Flex justify="space-between" style={{ width: "100%" }} align="center">
                <Flex gap="sm" align="center">
                    <Avatar size="sm" src="https://i.pravatar.cc/150?u=2" />
                    <Stack gap={0}>
                        <Text size="sm" fw={500} lh="1rem">Michael Chen</Text>
                        <Text size="xs" c="gray.7">m.chen@example.com</Text>
                    </Stack>
                </Flex>
                <Badge color="blue">Editor</Badge>
            </Flex>
        ),
    },
    {
        id: "3",
        content: (
            <Flex justify="space-between" style={{ width: "100%" }} align="center">
                <Flex gap="sm" align="center">
                    <Avatar size="sm" src="https://i.pravatar.cc/150?u=3" />
                    <Stack gap={0}>
                        <Text size="sm" fw={500} lh="1rem">Emma Wilson</Text>
                        <Text size="xs" c="gray.7">emma.w@example.com</Text>
                    </Stack>
                </Flex>
                <Badge color="green">Viewer</Badge>
            </Flex>
        ),
    },
]

// Task items with status
const taskItems: DraggableItem[] = [
    {
        id: "1",
        content: (
            <Flex justify="space-between" style={{ width: "100%" }}>
                <Text size="sm">Update user documentation</Text>
                <Badge color="yellow">In Progress</Badge>
            </Flex>
        ),
    },
    {
        id: "2",
        content: (
            <Flex justify="space-between" style={{ width: "100%" }}>
                <Text size="sm">Fix navigation bug</Text>
                <Badge color="red">High Priority</Badge>
            </Flex>
        ),
    },
    {
        id: "3",
        content: (
            <Flex justify="space-between" style={{ width: "100%" }}>
                <Text size="sm">Implement new feature</Text>
                <Badge color="blue">Planning</Badge>
            </Flex>
        ),
    },
]

export const SimpleList: Story = {
    name: "Simple list",

    render: () => {
        const [items, setItems] = useState(simpleItems)
        return (
            <DraggableList
                items={items}
                onReorder={setItems}
            />
        )
    },
    parameters: {
        docs: {
            description: {
                story: "Basic draggable list with simple text content.",
            },
        },
    },
}

export const UserList: Story = {
    name: "User list",

    render: () => {
        const [items, setItems] = useState(userItems)
        return (
            <DraggableList
                items={items}
                onReorder={setItems}
            />
        )
    },
    parameters: {
        docs: {
            description: {
                story: "Draggable list with user information, including avatars and badges.",
            },
        },
    },
}

export const TaskList: Story = {
    name: "Task list",

    render: () => {
        const [items, setItems] = useState(taskItems)
        return (
            <DraggableList
                items={items}
                onReorder={setItems}
            />
        )
    },
    parameters: {
        docs: {
            description: {
                story: "Draggable list showing tasks with status badges.",
            },
        },
    },
}

export const WithArrowButtons: Story = {
    name: "With arrows",

    render: () => {
        const [items, setItems] = useState(simpleItems)
        return (
            <DraggableList
                items={items}
                onReorder={setItems}
                variant="arrows"
            />
        )
    },
    parameters: {
        docs: {
            description: {
                story: "Alternative version with arrow buttons for reordering items one by one.",
            },
        },
    },
}
