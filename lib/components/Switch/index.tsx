import React from "react"
import { forwardRef, useState } from "react"
import { Switch as MantineSwitch, type SwitchProps as MantineSwitchProps } from "@mantine/core"
import cx from "clsx"
import { Label } from "@/components/Label"

import classes from "./Switch.module.css"

export type SwitchVariant = "default" | "wide" | "standalone"

export interface SwitchProps extends Omit<MantineSwitchProps, "checked" | "defaultChecked"> {
    /** Content of the label associated with the switch */
    label?: React.ReactNode
    /** Controlled checked state */
    checked?: boolean
    /** Default value for uncontrolled mode */
    defaultChecked?: boolean
    /** Called when checked state changes */
    onToggle?: (checked: boolean) => void
    /** Switch variant */
    variant?: SwitchVariant
    /** Whether to show the asterisk, independent of required state */
    withAsterisk?: boolean
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((
    {
        color = "violet",
        classNames,
        checked,
        defaultChecked = false,
        onToggle,
        onChange,
        label,
        variant = "default",
        withAsterisk,
        ...rest
    },
    ref,
) => {
    const [isChecked, setIsChecked] = useState(defaultChecked)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.currentTarget.checked
        if (checked === undefined) {
            setIsChecked(newChecked)
        }
        onChange?.(event)
        onToggle?.(newChecked)
    }

    const labelContent = typeof label === "string"
        ? <Label label={label} withAsterisk={withAsterisk} />
        : label

    return (
        <MantineSwitch
            classNames={{
                ...classNames,
                root: cx(classes.root),
                track: classes.track,
                thumb: classes.thumb,
                input: classes.input,
                label: classes.label,
                body: classes.body,
            }}
            checked={checked ?? isChecked}
            onChange={handleChange}
            {...rest}
            color={color}
            ref={ref}
            onLabel={undefined}
            offLabel={undefined}
            label={variant !== "standalone" ? labelContent : null}
            mod={{ variant }}
        />
    )
})

Switch.displayName = "Switch"
