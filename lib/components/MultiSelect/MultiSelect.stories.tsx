import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Flex, Stack } from "@mantine/core"

import { Button } from "@/components/Button"
import { MultiSelect, MultiSelectProps } from "./index"

const meta: Meta<typeof MultiSelect> = {
    component: MultiSelect,
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
        placeholder: "Select fruit",
        onChange: (value, selectedOption) => console.log({ value, selectedOption }),
    },
}

export default meta

type Story = StoryObj<typeof MultiSelect>

export const Basic: Story = {
    render: (props: MultiSelectProps) => <MultiSelect {...props} />,
}

export const WithDescription: Story = {
    args: {
        description: "Gift baskets will be made based on your preference",
    },
    render: (props: MultiSelectProps) => <MultiSelect {...props} />,
}

export const WithDefaultValue: Story = {
    args: {
        defaultValue: ["Blueberry"],
    },
    render: (props: MultiSelectProps) => <MultiSelect {...props} />,
}

export const WithControlledValue: Story = {
    args: {
        value: ["Apple"],
    },
    render: (props: MultiSelectProps) => {
        const [value, setValue] = useState(props.value)
        return (
            <Stack>
                <MultiSelect {...props} value={value} />
                <Flex gap="md">
                    <Button onClick={() => setValue(["Banana", "Blueberry", "Strawberry"])}>Make Smoothie</Button>
                    <Button onClick={() => setValue(["Cherry"])}>Set Cherry</Button>
                </Flex>
            </Stack>
        )
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (props: MultiSelectProps) => <MultiSelect {...props} />,
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
    render: (props: MultiSelectProps) => <MultiSelect {...props} />,
}

export const WithError: Story = {
    args: {
        description: "Select your favorite fruits from the list",
        error: "This field is required",
    },
    render: (props: MultiSelectProps) => <MultiSelect {...props} />,
}
