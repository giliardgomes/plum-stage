import type { Meta, StoryObj } from "@storybook/react"
import { Stack, Group, Flex } from "@mantine/core"
import { Avatar } from "./index"

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatar",
    component: Avatar,
    parameters: {
        docs: {
            description: {
                component: (
                    "<a href='https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-figma'></i>  Figma</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    + "<a href='https://plum.quorum.us' target='_blank' rel='noopener noreferrer'><i class='fa-regular fa-folder'></i>  Documentation</a>"
                ),
            },
        },
        pseudo: {
            hover: "[data-hover]",
            focus: "[data-focus]",
            disabled: "[data-disabled]",
        },
    },
    tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
    args: {
        size: "md",
    },
}

export const WithImage: Story = {
    name: "With image",

    args: {
        size: "md",
        src: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
        alt: "Profile picture",
    },
}

export const WithText: Story = {
    name: "With text",

    args: {
        size: "md",
        children: "JD",
    },
}

export const Sizes: Story = {
    render: () => (
        <Flex gap="xl" justify="center">
            <Avatar size="xs" />
            <Avatar size="sm" />
            <Avatar size="md" />
            <Avatar size="lg" />
            <Avatar size="xl" />
        </Flex>
    ),
}

export const States: Story = {
    render: () => (
        <Flex gap="xl" justify="center">
            <Avatar>JD</Avatar>
            <Avatar data-hover>JD</Avatar>
            <Avatar data-focus>JD</Avatar>
            <Avatar data-disabled>JD</Avatar>
        </Flex>
    ),
    parameters: {
        pseudo: {
            hover: "[data-hover]",
            focus: "[data-focus]",
            disabled: "[data-disabled]",
        },
    },
}

export const Republican: Story = {
    render: () => (
        <Flex gap="xl" justify="center">
            <Avatar variant="republican" size="md" />
            <Avatar variant="republican" size="md">JD</Avatar>
            <Avatar variant="republican" size="md" data-hover />
            <Avatar variant="republican" size="md" data-focus />
            <Avatar variant="republican" size="md" data-disabled />
        </Flex>
    ),
}

export const Democrat: Story = {
    render: () => (
        <Flex justify="center" gap="xl">
            <Avatar variant="democrat" size="md" />
            <Avatar variant="democrat" size="md">JD</Avatar>
            <Avatar variant="democrat" size="md" data-hover />
            <Avatar variant="democrat" size="md" data-focus />
            <Avatar variant="democrat" size="md" data-disabled />
        </Flex>
    ),
}

export const AllVariants: Story = {
    name: "All variants",

    render: () => (
        <Stack align="center" gap="xl">
            <Flex justify="flex-start" gap="md">
                <Avatar size="md" />
                <Avatar variant="republican" size="md" />
                <Avatar variant="democrat" size="md" />
            </Flex>
            <Flex align="flex-start" gap="md">
                <Avatar size="md">JD</Avatar>
                <Avatar variant="republican" size="md">JD</Avatar>
                <Avatar variant="democrat" size="md">JD</Avatar>
            </Flex>
        </Stack>
    ),
}

export const PartyVariants: Story = {
    name: "Party variants",

    render: () => (
        <Stack align="center" gap="xl">
            {/* Republicans */}
            <Group gap="xl">
                {/* With image */}
                <Avatar
                    variant="republican"
                    size="md"
                    src="https://avatars.githubusercontent.com/u/1?v=4"
                    alt="Example Republican Avatar"
                />
                {/* Without image */}
                <Avatar variant="republican" size="md" />
            </Group>

            {/* Democrats */}
            <Group gap="xl">
                {/* With image */}
                <Avatar
                    variant="democrat"
                    size="md"
                    src="https://avatars.githubusercontent.com/u/2?v=4"
                    alt="Example Democrat Avatar"
                />
                {/* Without image */}
                <Avatar variant="democrat" size="md" />
            </Group>
        </Stack>
    ),
}
