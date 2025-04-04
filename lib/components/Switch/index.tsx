import React from "react"
import { forwardRef, useState } from "react"
import { Switch as MantineSwitch, type SwitchProps as MantineSwitchProps } from "@mantine/core"
import cx from "clsx"
import { Label } from "@/components/Label"

import classes from "./Switch.module.css"

export type SwitchVariant = "default" | "wide" | "standalone"

export interface SwitchProps extends Omit<MantineSwitchProps, 'checked' | 'defaultChecked'> {
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
            label={label && variant !== "standalone" ? <Label label={String(label)} /> : null}
            mod={{ variant }}
        />
    )
})

Switch.displayName = "Switch"
