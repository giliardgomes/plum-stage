import type { Meta, StoryObj } from "@storybook/react"
import { SearchPopdown } from "./index"
import { useState } from "react"
import { Text } from "@mantine/core"

const meta: Meta<typeof SearchPopdown> = {
    component: SearchPopdown,
    parameters: {
        docs: {
            description: {
                component: "A search component that shows a popdown with content when focused",
            },
        },
    },
    tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SearchPopdown>

export const Default: Story = {
    render: () => {
        const [opened, setOpened] = useState(false)
        const [searchValue, setSearchValue] = useState("")

        return (
            <SearchPopdown
                opened={opened}
                onOpenChange={setOpened}
                onChange={setSearchValue}
                placeholder="Search items"
            >
                <Text c="gray.7">
                    Searching for:
                    {searchValue}
                </Text>
                <Text c="gray.7">Your search results will appear here</Text>
            </SearchPopdown>
        )
    },
}

export const WithFavorites: Story = {
    render: () => {
        const [opened, setOpened] = useState(false)

        return (
            <SearchPopdown
                opened={opened}
                onOpenChange={setOpened}
                placeholder="Search favorites"
                onFavorite={() => console.log("Favorite clicked")}
            >
                <Text c="gray.7">Your favorite items will appear here</Text>
            </SearchPopdown>
        )
    },
}
