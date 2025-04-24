import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"
import { useListState } from "@mantine/hooks"

import { Checkbox } from "./index"
import { Label } from "@/components/Label"
import { ErrorMessage } from "@/molecules/ErrorMessage"

import type { CheckboxGroupProps } from "./CheckboxGroup"

const meta: Meta<typeof Checkbox.Group> = {
    title: "Components/Checkbox",
    component: Checkbox.Group,
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
    argTypes: {
        label: { control: "text" },
        error: { control: "text" },
        required: { control: "boolean" },
        orientation: { control: "select", options: ["vertical", "horizontal"] },
    },
}

export default meta

type CheckboxStory = StoryObj<typeof Checkbox.Group>

export const CheckboxGroup: CheckboxStory = {
    name: "Group",

    args: {
        label: "Interests",
    },
    render: (props: CheckboxGroupProps) => (
        <Checkbox.Group label={props.label} error={props.error} orientation={props.orientation} required={props.required}>
            <Checkbox value="travel" label="Travel" />
            <Checkbox value="music" label="Music" />
            <Checkbox value="gym" label="Gym" />
        </Checkbox.Group>
    ),
}

/**
 * Nested Checkboxes cannot be built from a Checkbox Group, because the Checkbox Group Provider will attempt to manage the
 * state of _all_ Checkbox descendants. This example shows how to build a nested Checkbox pattern with a plausible state
 * management strategy and design.
 */
export const NestedCheckbox: CheckboxStory = {
    name: "Nested",

    render: () => {
        const initialValues = [
            { value: "email", label: "Email", checked: false, key: 1 },
            { value: "text", label: "Text message", checked: false, key: 2 },
            { value: "push", label: "Push notification", checked: false, key: 3 },
        ]

        const [values, handlers] = useListState(initialValues)

        const allChecked = values.every((value) => value.checked)
        const indeterminate = values.some((value) => value.checked) && !allChecked

        const items = values.map((value, index) => (
            <Checkbox
                label={value.label}
                key={value.key}
                value={value.value}
                checked={value.checked}
                onChange={(event) => handlers.setItemProp(index, "checked", event.currentTarget.checked)}
                ml="1.5rem"
            />
        ))

        return (
            <Stack gap="0.5rem">
                {/* Label for the group */}
                <Label label="Notifications" />

                {/* Checkbox to toggle all nested checkboxes */}
                <Checkbox
                    checked={allChecked}
                    indeterminate={indeterminate}
                    label="Receive all notifications"
                    onChange={() => handlers.setState((current) =>
                        current.map((value) => ({ ...value, checked: !allChecked })),
                    )}
                />

                {/* Nested checkboxes */}
                {items}

                {/* Error message */}
                {!values.some((value) => value.checked) && <ErrorMessage error="This field is required" />}
            </Stack>
        )
    },
}

export const Regular: CheckboxStory = {
    name: "Vertical",

    render: () => (
        <Stack gap="0.5rem">
            <Checkbox value="option1" label="Option 1" />
            <Checkbox value="option2" label="Option 2" />
            <Checkbox value="option3" label="Option 3" defaultChecked />
            <Checkbox value="option4" label="Option 4 (disabled)" disabled />
            <Checkbox value="option5" label="Option 5 (disabled checked)" disabled defaultChecked />
        </Stack>
    ),
}

export const RegularHorizontal: CheckboxStory = {
    name: "Horizontal",

    render: () => (
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Checkbox value="option1" label="Option 1" />
            <Checkbox value="option2" label="Option 2" />
            <Checkbox value="option3" label="Option 3" defaultChecked />
            <Checkbox value="option4" label="Option 4 (disabled)" disabled />
            <Checkbox value="option5" label="Option 5 (disabled checked)" disabled defaultChecked />
        </div>
    ),
}

export const WithError: CheckboxStory = {
    name: "With error",

    render: () => (
        <Stack>
            <Checkbox.Group
                label="Select options"
                error="This field has an error"
                required
            >
                <Checkbox value="option1" label="Option 1" />
                <Checkbox value="option2" label="Option 2" />
                <Checkbox value="option3" label="Option 3" />
            </Checkbox.Group>
        </Stack>
    ),
}

export const HorizontalWithLabel: CheckboxStory = {
    name: "Horizontal with label",

    render: () => (
        <Checkbox.Group
            label="Select your preferred tools"
            orientation="horizontal"
            defaultValue={["vscode", "github"]}
        >
            <Checkbox value="vscode" label="VS Code" />
            <Checkbox value="github" label="GitHub" />
            <Checkbox value="jira" label="Jira" />
            <Checkbox value="slack" label="Slack" />
            <Checkbox value="figma" label="Figma" />
        </Checkbox.Group>
    ),
}
