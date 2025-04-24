import { forwardRef } from "react"
import { Checkbox as MantineCheckbox, type CheckboxProps as MantineCheckboxProps } from "@mantine/core"

import { ErrorMessage } from "@/molecules/ErrorMessage"
import { Label } from "@/components/Label"
import { Group } from "./CheckboxGroup"
import { CheckFarFAIcon } from "@/components/Icons" // Import the check icon from Plum's icon library

import classes from "./Checkbox.module.css"

export interface CheckboxProps extends MantineCheckboxProps {
    label: React.ReactNode
    error?: string
}

export const Item = forwardRef<HTMLInputElement, CheckboxProps>((
    {
        error,
        mod,
        label,
        ...rest
    },
    ref,
) => {
    const hasError = Boolean(error) || undefined

    return (
        <div className={classes.container}>
            <MantineCheckbox
                {...rest}
                aria-invalid={hasError}
                classNames={{
                    root: classes.root,
                    body: classes.body,
                    input: classes.input,
                    label: classes.label,
                }}
                mod={{ error: hasError }}
                ref={ref}
                label={<Label label={String(label)} />}
                icon={CheckFarFAIcon}
            />

            {error && <ErrorMessage error={error} />}
        </div>
    )
})

Item.displayName = "Checkbox"

export const Checkbox = Object.assign(Item, { Group })
