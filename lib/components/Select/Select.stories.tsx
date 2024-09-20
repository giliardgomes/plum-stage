import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Flex, Stack } from "@mantine/core"

import { Button } from "@/components/Button"
import { Select, SelectProps } from "./index"

const meta: Meta<typeof Select> = {
    component: Select,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        description: { control: "text" },
        error: { control: "text" },
        placeholder: { control: "text" },
        disabled: { control: "boolean" },
    },
    args: {
        data: [
            { label: "Apple", value: "Apple" },
            { label: "Banana", value: "Banana" },
            { label: "Cherry", value: "Cherry" },
            "Blueberry",
            "Strawberry",
            "Melon",
        ],
        label: "Favorite Fruit",
        placeholder: "Select a fruit",
    },
}

export default meta

type Story = StoryObj<typeof Select>

export const Basic: Story = {
    render: (props: SelectProps) => <Select {...props} />,
}

export const WithDescription: Story = {
    args: {
        description: "Gift baskets will be made based on your preference",
    },
    render: (props: SelectProps) => <Select {...props} />,
}

export const WithDefaultValue: Story = {
    args: {
        defaultValue: "Blueberry",
    },
    render: (props: SelectProps) => <Select {...props} />,
}

export const WithControlledValue: Story = {
    args: {
        value: "Banana",
    },
    render: (props: SelectProps) => {
        const [value, setValue] = useState(props.value)
        return (
            <Stack>
                <Select {...props} value={value} />
                <Flex gap="md">
                    <Button onClick={() => setValue("Apple")}>Set Apple</Button>
                    <Button onClick={() => setValue("Banana")}>Set Banana</Button>
                </Flex>
            </Stack>
        )
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (props: SelectProps) => <Select {...props} />,
}

export const DisabledItem: Story = {
    args: {
        data: [
            { label: "Apple", value: "Apple" },
            { label: "Banana", value: "Banana", disabled: true },
            { label: "Cherry", value: "Cherry" },
            "Blueberry",
            "Strawberry",
            "Melon",
        ],
    },
    render: (props: SelectProps) => <Select {...props} />,
}

export const WithError: Story = {
    args: {
        description: "Select your favorite fruit from the list",
        error: "This field is required",
    },
    render: (props: SelectProps) => <Select {...props} />,
}
