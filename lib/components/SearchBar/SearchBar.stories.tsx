import type { Meta, StoryObj } from "@storybook/react"
import { SearchBar } from "."

const meta: Meta<typeof SearchBar> = {
    title: "Components/SearchBar",
    component: SearchBar,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        placeholder: { control: "text" },
        value: { control: "text" },
        disabled: { control: "boolean" },
    },
    args: {
        placeholder: "Search",
        onChange: (value) => console.log(value),
    },
}

export default meta

type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
    args: {
        placeholder: "Search",
    },
}

export const WithValue: Story = {
    args: {
        value: "Initial search term",
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: "Search disabled",
    },
}

export const WithCustomPlaceholder: Story = {
    args: {
        placeholder: "Search for items...",
    },
}

export const Standalone: Story = {
    args: {
        variant: "standalone",
        placeholder: "Search",
        onChange: (value) => console.log(value),
    },
}
