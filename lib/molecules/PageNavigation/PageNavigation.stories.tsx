import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"
import { PageNavigation } from "./index"
import { CogFarFAIcon, CheckFarFAIcon } from "@/components/Icons"

const meta = {
    title: "Molecules/PageNavigation",
    component: PageNavigation,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        title: { control: "text" },
        onBackClick: { action: "clicked" },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof PageNavigation>

export default meta

type Story = StoryObj<typeof PageNavigation>

export const Default: Story = {
    args: {
        title: "Settings",
    },
}

export const WithBackButton: Story = {
    args: {
        title: "Settings",
        onBackClick: () => console.log("Back clicked"),
    },
}

export const LongTitle: Story = {
    args: {
        title: "This is a very long title that might need to be handled properly",
        onBackClick: () => console.log("Back clicked"),
    },
}

export const Variations: Story = {
    render: (props) => (
        <Stack gap="xl">
            <PageNavigation {...props} title="Regular navigation" />
            <PageNavigation {...props} title="With back button" onBackClick={() => console.log("Back clicked")} />
            <PageNavigation {...props} title="Long title example that might need special handling" onBackClick={() => console.log("Back clicked")} />
        </Stack>
    ),
}

export const WithActions: Story = {
    args: {
        title: "Page with actions",
        onBackClick: () => console.log("Back clicked"),
        actions: [
            {
                children: "Save",
                variant: "accent",
                onClick: () => console.log("Save clicked"),
            },
        ],
    },
}

export const MultipleActions: Story = {
    args: {
        title: "Page with multiple actions",
        onBackClick: () => console.log("Back clicked"),
        actions: [
            {
                "aria-label": "Cancel",
                variant: "tertiary",
                onClick: () => console.log("Cancel clicked"),
                children: <CogFarFAIcon size={16} />,
            },
            {
                "aria-label": "Save draft",
                variant: "secondary",
                onClick: () => console.log("Save draft clicked"),
                children: <CheckFarFAIcon size={16} />,
            },
            {
                children: "Publish",
                variant: "accent",
                onClick: () => console.log("Publish clicked"),
            },
        ],
    },
}
