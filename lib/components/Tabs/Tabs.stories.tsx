import type { Meta, StoryObj } from "@storybook/react"
import { Stack, Text } from "@mantine/core"

import { Tabs, TabsProps } from "@/components/Tabs"
import {
    UserFarFAIcon,
    ShieldFarFAIcon,
    BellFarFAIcon,
    CreditCardFarFAIcon,
    EnvelopeFarFAIcon,
    CogFarFAIcon,
    StarFarFAIcon,
} from "@/components/Icons"

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
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
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof Tabs>

const TabContent = ({ title }: { title: string }) => (
    <Stack gap="md" p="md">
        <Text c="gray.9" fw={500} size="lg">{title}</Text>
        <Text c="gray.7">
            This is the content for the
            {" "}
            {title.toLowerCase()}
            {" "}
            tab. Tab panels can contain any content,
            including text, forms, tables, and other components.
        </Text>
    </Stack>
)

export const AccountSettings: Story = {
    name: "Default",

    args: { defaultValue: "profile" },
    render: (props: TabsProps) => (
        <Tabs {...props}>
            <Tabs.List>
                <Tabs.Tab value="profile" leftSection={<UserFarFAIcon />}>
                    Profile
                </Tabs.Tab>
                <Tabs.Tab value="security" leftSection={<ShieldFarFAIcon />}>
                    Security
                </Tabs.Tab>
                <Tabs.Tab value="notifications" leftSection={<BellFarFAIcon />}>
                    Notifications
                </Tabs.Tab>
                <Tabs.Tab value="billing" leftSection={<CreditCardFarFAIcon />}>
                    Billing
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="profile">
                <TabContent title="Profile settings" />
            </Tabs.Panel>
            <Tabs.Panel value="security">
                <TabContent title="Security settings" />
            </Tabs.Panel>
            <Tabs.Panel value="notifications">
                <TabContent title="Notification preferences" />
            </Tabs.Panel>
            <Tabs.Panel value="billing">
                <TabContent title="Billing information" />
            </Tabs.Panel>
        </Tabs>
    ),
}

export const MessageCenter: Story = {
    name: "Disabled",

    args: { defaultValue: "inbox" },
    render: (props: TabsProps) => (
        <Tabs {...props}>
            <Tabs.List>
                <Tabs.Tab value="inbox">
                    Inbox
                </Tabs.Tab>
                <Tabs.Tab value="sent">
                    Sent
                </Tabs.Tab>
                <Tabs.Tab value="drafts">
                    Drafts
                </Tabs.Tab>
                <Tabs.Tab disabled value="archived">
                    Archived
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="inbox">
                <TabContent title="Inbox messages" />
            </Tabs.Panel>
            <Tabs.Panel value="sent">
                <TabContent title="Sent messages" />
            </Tabs.Panel>
            <Tabs.Panel value="drafts">
                <TabContent title="Draft messages" />
            </Tabs.Panel>
            <Tabs.Panel value="archived">
                <TabContent title="Archived messages" />
            </Tabs.Panel>
        </Tabs>
    ),
}

export const VerticalSettings: Story = {
    name: "Vertical",

    args: { defaultValue: "general", orientation: "vertical" },
    render: (props: TabsProps) => (
        <Tabs {...props}>
            <Tabs.List>
                <Tabs.Tab value="general" leftSection={<CogFarFAIcon />}>
                    General
                </Tabs.Tab>
                <Tabs.Tab value="messages" leftSection={<EnvelopeFarFAIcon />}>
                    Messages
                </Tabs.Tab>
                <Tabs.Tab value="security" leftSection={<ShieldFarFAIcon />}>
                    Security
                </Tabs.Tab>
                <Tabs.Tab value="advanced" leftSection={<StarFarFAIcon />}>
                    Advanced
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="general">
                <TabContent title="General settings" />
            </Tabs.Panel>
            <Tabs.Panel value="messages">
                <TabContent title="Message settings" />
            </Tabs.Panel>
            <Tabs.Panel value="security">
                <TabContent title="Security settings" />
            </Tabs.Panel>
            <Tabs.Panel value="advanced">
                <TabContent title="Advanced settings" />
            </Tabs.Panel>
        </Tabs>
    ),
}
