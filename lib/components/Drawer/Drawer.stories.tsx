import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"
import { Drawer } from "./index"
import { TextField } from "@/components/TextField"
import { Select } from "@/components/Select"
import { useState } from "react"

const meta = {
    title: "Components/Drawer",
    component: Drawer,
    parameters: {
        docs: {
            description: {
                component: (
                    "<a href='https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-figma'></i>  Figma</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;"
                    + "<a href='https://plum.quorum.us' target='_blank' rel='noopener noreferrer'><i class='fa-regular fa-folder'></i>  Documentation</a>"
                ),
            },
            story: {
                height: "600px",
                inline: false,
            },
        },
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
        },
        position: {
            control: "radio",
            options: ["left", "right"],
        },
    },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof Drawer>

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div style={{ height: "600px", position: "relative", overflow: "hidden" }}>
        {children}
    </div>
)

const DrawerContent = () => (
    <Stack gap="lg">
        <TextField
            label="Full name"
            defaultValue="Sarah Thompson"
        />
        <TextField
            label="Email"
            defaultValue="sarah.thompson@example.com"
            type="email"
        />
        <Select
            label="Role"
            defaultValue="editor"
            data={[
                { value: "admin", label: "Administrator" },
                { value: "editor", label: "Editor" },
                { value: "viewer", label: "Viewer" },
            ]}
        />
    </Stack>
)

export const Default: Story = {
    render: () => {
        const [opened, setOpened] = useState(true)

        return (
            <Wrapper>
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Edit profile"
                    description="Update your profile information and preferences"
                    actions={[
                        {
                            label: "Skip",
                            onClick: () => setOpened(false),
                            variant: "tertiary",
                            position: "left",
                        },
                        {
                            label: "Cancel",
                            onClick: () => setOpened(false),
                            variant: "tertiary",
                        },
                        {
                            label: "Save",
                            onClick: () => setOpened(false),
                        },
                    ]}
                >
                    <DrawerContent />
                </Drawer>
            </Wrapper>
        )
    },
}

export const ExtraSmall: Story = {
    render: () => {
        const [opened, setOpened] = useState(true)
        return (
            <Wrapper>
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Extra Small Drawer"
                    description="This is an XS drawer with width of 320px"
                    size="xs"
                    actions={[
                        {
                            label: "Cancel",
                            onClick: () => setOpened(false),
                            variant: "tertiary",
                        },
                        {
                            label: "Save",
                            onClick: () => setOpened(false),
                        },
                    ]}
                >
                    <DrawerContent />
                </Drawer>
            </Wrapper>
        )
    },
}

export const Small: Story = {
    render: () => {
        const [opened, setOpened] = useState(true)
        return (
            <Wrapper>
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Small Drawer"
                    description="This is a Small drawer with width of 380px"
                    size="sm"
                    actions={[
                        {
                            label: "Cancel",
                            onClick: () => setOpened(false),
                            variant: "tertiary",
                        },
                        {
                            label: "Save",
                            onClick: () => setOpened(false),
                        },
                    ]}
                >
                    <DrawerContent />
                </Drawer>
            </Wrapper>
        )
    },
}

export const Medium: Story = {
    render: () => {
        const [opened, setOpened] = useState(true)
        return (
            <Wrapper>
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Medium Drawer"
                    description="This is a Medium drawer with width of 440px"
                    size="md"
                    actions={[
                        {
                            label: "Cancel",
                            onClick: () => setOpened(false),
                            variant: "tertiary",
                        },
                        {
                            label: "Save",
                            onClick: () => setOpened(false),
                        },
                    ]}
                >
                    <DrawerContent />
                </Drawer>
            </Wrapper>
        )
    },
}

export const Large: Story = {
    render: () => {
        const [opened, setOpened] = useState(true)
        return (
            <Wrapper>
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Large Drawer"
                    description="This is a Large drawer with width of 620px"
                    size="lg"
                    actions={[
                        {
                            label: "Cancel",
                            onClick: () => setOpened(false),
                            variant: "tertiary",
                        },
                        {
                            label: "Save",
                            onClick: () => setOpened(false),
                        },
                    ]}
                >
                    <DrawerContent />
                </Drawer>
            </Wrapper>
        )
    },
}

export const ExtraLarge: Story = {
    render: () => {
        const [opened, setOpened] = useState(true)
        return (
            <Wrapper>
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Extra Large Drawer"
                    description="This is an XL drawer with width of 780px"
                    size="xl"
                    actions={[
                        {
                            label: "Cancel",
                            onClick: () => setOpened(false),
                            variant: "tertiary",
                        },
                        {
                            label: "Save",
                            onClick: () => setOpened(false),
                        },
                    ]}
                >
                    <DrawerContent />
                </Drawer>
            </Wrapper>
        )
    },
}
