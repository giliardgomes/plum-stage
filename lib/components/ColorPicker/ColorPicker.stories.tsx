import type { Meta, StoryObj } from "@storybook/react"
import { ColorPicker } from "."

const meta = {
    title: "Components/ColorPicker",
    component: ColorPicker,
    tags: ["autodocs"],
} satisfies Meta<typeof ColorPicker>

export default meta
type Story = StoryObj<typeof ColorPicker>

export const Default: Story = {
    args: {
        label: "Color",
        description: "Pick a color",
        placeholder: "Pick color",
    },
}

export const WithError: Story = {
    args: {
        label: "Color",
        error: "Please select a valid color",
        value: "#FF0000",
    },
}

export const Required: Story = {
    args: {
        label: "Color",
        required: true,
        value: "#00FF00",
    },
}

export const Disabled: Story = {
    args: {
        label: "Color",
        disabled: true,
        value: "#0000FF",
    },
}

export const WithSwatches: Story = {
    args: {
        label: "Color",
        swatches: [
            "#25262b", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2",
            "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e",
            "#fab005", "#fd7e14",
        ],
    },
}
