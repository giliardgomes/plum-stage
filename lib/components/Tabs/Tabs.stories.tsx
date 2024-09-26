import type { Meta, StoryObj } from "@storybook/react"

import { Tabs, TabsProps } from "@/components/Tabs"
import { TriangleExclamationFarFAIcon } from "@/components/TextField/Icon/TriangleExclamationFarFAIcon"

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    parameters: {
        docs: {
            description: {
                component: "Documentation: https://plum.quorum.us/4a128e208/p/641ec9-tabs",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof Tabs>

export const HorizontalWithIcons: Story = {
    args: { defaultValue: "video" },
    render: (props: TabsProps) => (
        <Tabs {...props}>
            <Tabs.List>
                <Tabs.Tab value="video" leftSection={<TriangleExclamationFarFAIcon />}>
                    Video
                </Tabs.Tab>
                <Tabs.Tab value="image" leftSection={<TriangleExclamationFarFAIcon />}>
                    Image
                </Tabs.Tab>
                <Tabs.Tab value="audio" leftSection={<TriangleExclamationFarFAIcon />}>
                    Audio
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="video">
                Video tab content
            </Tabs.Panel>
            <Tabs.Panel value="image">
                Image tab content
            </Tabs.Panel>
            <Tabs.Panel value="audio">
                Audio tab content
            </Tabs.Panel>
        </Tabs>
    ),
}

export const Horizontal: Story = {
    args: { defaultValue: "fish" },
    render: (props: TabsProps) => (
        <Tabs {...props}>
            <Tabs.List>
                <Tabs.Tab value="dogs">
                    Dogs
                </Tabs.Tab>
                <Tabs.Tab value="cats">
                    Cats
                </Tabs.Tab>
                <Tabs.Tab disabled value="birds">
                    Birds
                </Tabs.Tab>
                <Tabs.Tab value="fish">
                    Fish Fish Fish Fish Fish Fish Fish
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="dogs">
                Dogs tab content
            </Tabs.Panel>
            <Tabs.Panel value="cats">
                Cats tab content
            </Tabs.Panel>
            <Tabs.Panel value="birds">
                Birds tab content
            </Tabs.Panel>
            <Tabs.Panel value="fish">
                Fish tab content
            </Tabs.Panel>
        </Tabs>
    ),
}

export const Vertical: Story = {
    args: { defaultValue: "fish", orientation: "vertical" },
    render: (props: TabsProps) => (
        <Tabs {...props}>
            <Tabs.List>
                <Tabs.Tab value="dogs">
                    Dogs
                </Tabs.Tab>
                <Tabs.Tab value="cats">
                    Cats
                </Tabs.Tab>
                <Tabs.Tab disabled value="birds">
                    Birds
                </Tabs.Tab>
                <Tabs.Tab value="fish">
                    Fish Fish Fish Fish Fish Fish Fish
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="dogs">
                Dogs tab content
            </Tabs.Panel>
            <Tabs.Panel value="cats">
                Cats tab content
            </Tabs.Panel>
            <Tabs.Panel value="birds">
                Birds tab content
            </Tabs.Panel>
            <Tabs.Panel value="fish">
                Fish tab content
            </Tabs.Panel>
        </Tabs>
    ),
}
