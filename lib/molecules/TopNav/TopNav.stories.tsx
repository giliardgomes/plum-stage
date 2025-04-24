import type { Meta, StoryObj } from "@storybook/react"
import { TopNav } from "@/molecules/TopNav"

const meta = {
    title: "Molecules/TopNav", // Removed unnecessary Navigation categorization
    component: TopNav,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: "Documentation: https://plum.quorum.us/top-nav",
            },
        },
    },
    args: {
        logoUrl: "https://plum.quorum.us/logo.svg",
        logoAlt: "Company logo",
        organizations: [
            { label: "Organization 1", value: "org1" },
            { label: "Organization 2", value: "org2" },
            { label: "Organization 3", value: "org3" },
        ],
        selectedOrg: "org1",
        userAvatarUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
        notificationCount: 0,
    },
} satisfies Meta<typeof TopNav>

export default meta

type Story = StoryObj<typeof TopNav>

export const Default: Story = {
    args: {
        onOrgChange: (value) => console.log("Organization changed:", value),
        onNotificationClick: () => console.log("Notifications clicked"),
        onSettingsClick: () => console.log("Settings clicked"),
        onHelpClick: () => console.log("Help clicked"),
        onLogoutClick: () => console.log("Logout clicked"),
        onManageUsersClick: () => console.log("Manage users clicked"),
        onManageOrganizationsClick: () => console.log("Manage organizations clicked"),
        onDownloadsClick: () => console.log("Downloads clicked"),
        onHelpCenterClick: () => console.log("Help center clicked"),
        onContactUsClick: () => console.log("Contact us clicked"),
        onLaunchChatClick: () => console.log("Launch chat clicked"),
        onWhatsNewClick: () => console.log("What's new clicked"),
    },
}

export const WithNotifications: Story = {
    args: {
        ...Default.args,
        notificationCount: 5,
    },
}

export const Loading: Story = {
    args: {
        ...Default.args,
        isLoading: true,
    },
}

export const WithCustomHomeUrl: Story = {
    args: {
        ...Default.args,
        homeUrl: "https://custom-home.example.com",
    },
}

export const WithManyOrganizations: Story = {
    args: {
        ...Default.args,
        organizations: Array.from({ length: 10 }, (_, i) => ({
            label: `Organization ${i + 1}`,
            value: `org${i + 1}`,
        })),
    },
}
