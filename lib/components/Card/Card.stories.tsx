import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./index"
import { Text, Grid, Stack } from "@mantine/core"
import {
    FolderFarFAIcon,
    PenFarFAIcon,
    TrashFarFAIcon,
    CopyFarFAIcon,
    UsersFarFAIcon,
    ChartLineFarFAIcon,
    CogFarFAIcon,
    BellFarFAIcon,
    ShieldFarFAIcon,
    EnvelopeFarFAIcon,
} from "@/components/Icons"

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
    args: {
        icon: <FolderFarFAIcon size={24} />,
        title: "Project folder",
        description: "Contains all project related documents and files",
        ctaLink: "/projects",
        ctaText: "View all files",
        menuItems: [
            {
                label: "Edit",
                icon: <PenFarFAIcon />,
                onClick: () => console.log("Edit clicked"),
            },
            {
                label: "Duplicate",
                icon: <CopyFarFAIcon />,
                onClick: () => console.log("Duplicate clicked"),
            },
            {
                label: "Delete",
                icon: <TrashFarFAIcon />,
                onClick: () => console.log("Delete clicked"),
                "data-danger": true,
            },
        ],
    },
}

export const WithoutMenu: Story = {
    name: "Without menu",

    args: {
        icon: <FolderFarFAIcon size={24} />,
        title: "Project folder",
        description: "Contains all project related documents and files",
        ctaLink: "/projects",
        ctaText: "View all files",
    },
}

export const WithoutIcon: Story = {
    name: "Without icon",

    args: {
        title: "Project folder",
        description: "Contains all project related documents and files",
    },
}

export const WithCustomContent: Story = {
    name: "With custom content",

    args: {
        title: "Custom content",
        children: (
            <Text c="gray.7">
                This is custom content that can be added to the card.
            </Text>
        ),
    },
}

export const Vertical: Story = {
    name: "Vertical",

    args: {
        icon: <FolderFarFAIcon size={24} />,
        title: "Project folder",
        description: "Contains all project related documents and files",
        ctaLink: "/projects",
        ctaText: "View all files",
        variant: "vertical",
        menuItems: [
            {
                label: "Edit",
                icon: <PenFarFAIcon />,
                onClick: () => console.log("Edit clicked"),
            },
            {
                label: "Duplicate",
                icon: <CopyFarFAIcon />,
                onClick: () => console.log("Duplicate clicked"),
            },
            {
                label: "Delete",
                icon: <TrashFarFAIcon />,
                onClick: () => console.log("Delete clicked"),
                "data-danger": true,
            },
        ],
    },
}

export const ComplexLayout: Story = {
    name: "Complex Layout",

    render: () => (
        <Stack gap="xl">
            {/* Featured Cards Row */}
            <Grid gutter="md">
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <Card
                        icon={<ChartLineFarFAIcon size={24} />}
                        title="Analytics dashboard"
                        description="Get detailed insights about your organization's performance and engagement metrics"
                        ctaLink="/analytics"
                        ctaText="View analytics"
                        menuItems={[
                            {
                                label: "Export data",
                                icon: <CopyFarFAIcon />,
                                onClick: () => console.log("Export clicked"),
                            },
                            {
                                label: "Settings",
                                icon: <CogFarFAIcon />,
                                onClick: () => console.log("Settings clicked"),
                            },
                        ]}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Card
                        icon={<BellFarFAIcon size={24} />}
                        title="Recent notifications"
                        description="5 unread messages"
                        ctaLink="/notifications"
                        ctaText="View all"
                    />
                </Grid.Col>
            </Grid>

            {/* Regular Cards Grid */}
            <Grid gutter="md">
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                    <Card
                        variant="vertical"
                        icon={<UsersFarFAIcon size={24} />}
                        title="Team members"
                        description="Manage your team and their permissions"
                        ctaLink="/team"
                        ctaText="View team"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                    <Card
                        variant="vertical"
                        icon={<ShieldFarFAIcon size={24} />}
                        title="Security settings"
                        description="Configure your security preferences"
                        ctaLink="/security"
                        ctaText="Configure"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                    <Card
                        variant="vertical"
                        icon={<EnvelopeFarFAIcon size={24} />}
                        title="Message center"
                        description="View and manage your communications"
                        ctaLink="/messages"
                        ctaText="Open messages"
                    />
                </Grid.Col>
            </Grid>

            {/* Small Cards Row */}
            <Grid gutter="md">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Card
                        icon={<FolderFarFAIcon size={24} />}
                        title="Documents"
                        description="Access your shared files and folders"
                        ctaLink="/documents"
                        ctaText="Browse files"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Card
                        icon={<CogFarFAIcon size={24} />}
                        title="Preferences"
                        description="Customize your workspace settings"
                        ctaLink="/settings"
                        ctaText="Configure"
                    />
                </Grid.Col>
            </Grid>
        </Stack>
    ),
}
