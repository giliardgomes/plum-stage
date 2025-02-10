import type { Meta, StoryObj } from "@storybook/react"
import { Stack } from "@mantine/core"
import { useListState } from "@mantine/hooks"

import { Checkbox } from "./index"
import { Label } from "@/components/Label"
import { ErrorMessage } from "@/components/ErrorMessage"

import type { CheckboxGroupProps } from "./CheckboxGroup"

const meta: Meta<typeof Checkbox.Group> = {
    component: Checkbox.Group,
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
    render: () => {
        const initialValues = [
            { value: "email", label: "Email", checked: false, key: 1 },
            { value: "text", label: "Text Message", checked: false, key: 2 },
            { value: "push", label: "Push Notification", checked: false, key: 3 },
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
