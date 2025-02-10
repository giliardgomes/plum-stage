import { forwardRef } from "react"
import { Checkbox as MantineCheckbox } from "@mantine/core"
import { useUncontrolled } from "@mantine/hooks"

import { ErrorMessage } from "@/components/ErrorMessage"

import classes from "./CheckboxGroup.module.css"

export interface CheckboxGroupProps {
    /** The label rendered above the group */
    label: string | React.ReactNode

    /** The orientation of the group */
    orientation?: "vertical" | "horizontal"

    /** Indicate that the field is required */
    required?: boolean

    /** The default value (for uncontrolled components) */
    defaultValue?: string[]

    /** The value (for controlled components) */
    value?: string[]

    /** The callback function when the value changes */
    onChange?: (value: string[]) => void

    /** The error message rendered below the group */
    error?: string

    /** Should be one or more Checkbox components */
    children: React.ReactNode
}

export const Group = forwardRef<HTMLDivElement, CheckboxGroupProps>((
    {
        label,
        orientation = "vertical",
        required,
        error,
        children,
        value,
        defaultValue,
        onChange,
    },
    ref,
) => {
    const [_value, handleChange] = useUncontrolled({
        value,
        defaultValue: defaultValue || [],
        onChange,
    })

    return (
        <div className={classes.container}>
            <MantineCheckbox.Group
                label={label}
                value={_value}
                onChange={handleChange}
                ref={ref}
                classNames={{
                    root: classes.root,
                    label: classes.label,
                }}
                mod={{
                    orientation,
                    required,
                }}
                withAsterisk={required}
            >
                {children}
            </MantineCheckbox.Group>

            {error && <ErrorMessage error={error} />}
        </div>
    )
})

Group.displayName = "Checkbox.Group"
