import type { Meta, StoryObj } from "@storybook/react"

import { Select, SelectProps } from "./index"

const meta: Meta<typeof Select> = {
    title: "Components/Select",
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
        label: "Favorite fruit",
        placeholder: "Select a fruit",
        onChange: (value, selectedOption) => console.log({ value, selectedOption }),
    },
    parameters: {
        docs: {
            description: {
                component: (
                    "<a href='https://www.figma.com/file/mjUSsYy7JxOtylceOQgr3r/Design-System' target='_blank' rel='noopener noreferrer'><i class='fa-brands fa-figma'></i>  Figma</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    + "<a href='https://plum.quorum.us' target='_blank' rel='noopener noreferrer'><i class='fa-regular fa-folder'></i>  Documentation</a>"
                ),
            },
            story: {
                height: "400px",
                iframeHeight: 400,
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof Select>

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        {children}
    </div>
)

export const Basic: Story = {
    name: "Basic",
    render: (props: SelectProps) => (
        <Wrapper>
            <Select {...props} />
        </Wrapper>
    ),
}

export const WithDescription: Story = {
    name: "With description",
    args: {
        description: "Gift baskets will be made based on your preference",
    },
    render: (props: SelectProps) => (
        <Wrapper>
            <Select {...props} />
        </Wrapper>
    ),
}

export const WithDefaultValue: Story = {
    name: "Default value",
    args: {
        defaultValue: "Blueberry",
    },
    render: (props: SelectProps) => (
        <Wrapper>
            <Select {...props} />
        </Wrapper>
    ),
}

export const Disabled: Story = {
    name: "Disabled",
    args: {
        disabled: true,
    },
    render: (props: SelectProps) => (
        <Wrapper>
            <Select {...props} />
        </Wrapper>
    ),
}

export const DisabledItem: Story = {
    name: "Disabled item",
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
    render: (props: SelectProps) => (
        <Wrapper>
            <Select {...props} />
        </Wrapper>
    ),
}

export const WithError: Story = {
    name: "Error",
    args: {
        description: "Select your favorite fruit from the list",
        error: "This field is required",
    },
    render: (props: SelectProps) => (
        <Wrapper>
            <Select {...props} />
        </Wrapper>
    ),
}
