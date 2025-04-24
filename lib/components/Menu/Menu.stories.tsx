import type { Meta, StoryObj } from "@storybook/react"
import {
    PlusFarFAIcon,
    TrashFarFAIcon,
    PenFarFAIcon,
    CopyFarFAIcon,
    ArrowToBottomFarFAIcon,
    ShareFarFAIcon,
    FileAltFarFAIcon,
    FolderFarFAIcon,
    SquareKanbanFarFAIcon,
} from "@/components/Icons"

import { Button } from "@/components/Button"
import { Menu, MenuProps } from "@/components/Menu"

const meta: Meta<typeof Menu> = {
    title: "Components/Menu",
    component: Menu,
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
        disabled: {
            control: "boolean",
            description: "Disable the entire menu",
        },
        closeOnItemClick: {
            control: "boolean",
            description: "Close menu when item is clicked",
            defaultValue: true,
        },
    },
}

export default meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {
    render: (props: MenuProps) => (
        <Menu {...props}>
            <Menu.Target>
                <Button variant="secondary">Actions</Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item leftSection={<PenFarFAIcon />}>
                    Edit
                </Menu.Item>
                <Menu.Item leftSection={<CopyFarFAIcon />}>
                    Duplicate
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<TrashFarFAIcon />} data-danger>
                    Delete
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    ),
}

export const WithCustomTrigger: Story = {
    name: "Custom trigger",

    render: (props: MenuProps) => (
        <Menu {...props}>
            <Menu.Target>
                <Button
                    variant="accent"
                    leftSection={<PlusFarFAIcon />}
                >
                    Create new
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item leftSection={<FileAltFarFAIcon />}>
                    New document
                </Menu.Item>
                <Menu.Item leftSection={<FolderFarFAIcon />}>
                    New folder
                </Menu.Item>
                <Menu.Item leftSection={<SquareKanbanFarFAIcon />}>
                    New project
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    ),
}

export const WithDisabledItems: Story = {
    name: "Disabled items",

    render: (props: MenuProps) => (
        <Menu {...props}>
            <Menu.Target>
                <Button variant="secondary">File options</Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item leftSection={<PenFarFAIcon />}>
                    Edit file
                </Menu.Item>
                <Menu.Item leftSection={<ShareFarFAIcon />} disabled>
                    Share (Coming soon)
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<ArrowToBottomFarFAIcon />}>
                    Download
                </Menu.Item>
                <Menu.Item leftSection={<TrashFarFAIcon />} data-danger disabled>
                    Delete (Requires permission)
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    ),
}

export const DisabledMenu: Story = {
    name: "Disabled menu",

    render: (props: MenuProps) => (
        <Menu {...props} disabled>
            <Menu.Target>
                <Button variant="secondary">Actions (Disabled)</Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item leftSection={<PenFarFAIcon />}>
                    Edit
                </Menu.Item>
                <Menu.Item leftSection={<CopyFarFAIcon />}>
                    Duplicate
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<TrashFarFAIcon />} data-danger>
                    Delete
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    ),
}

export const WithClickHandlers: Story = {
    name: "Click handlers",

    render: (props: MenuProps) => (
        <Menu {...props}>
            <Menu.Target>
                <Button variant="secondary">Interactive menu</Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item
                    leftSection={<PenFarFAIcon />}
                    onClick={() => alert("Edit clicked")}
                >
                    Click to edit
                </Menu.Item>
                <Menu.Item
                    leftSection={<CopyFarFAIcon />}
                    onClick={() => alert("Duplicate clicked")}
                >
                    Click to duplicate
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                    leftSection={<TrashFarFAIcon />}
                    data-danger
                    onClick={() => alert("Delete clicked")}
                >
                    Click to delete
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    ),
}
