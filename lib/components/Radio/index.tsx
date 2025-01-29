import React, { forwardRef } from "react"
import { Radio as MantineRadio, Flex, rem } from "@mantine/core"
import classes from "@/components/Radio/Radio.module.css"
import { ErrorMessage } from "@/components/ErrorMessage"

export interface RadioGroupProps {
    /** The value for a controlled component */
    value?: string | null

    /** The default value for an uncontrolled component */
    defaultValue?: string | null

    /** The error, if any, currently applicable */
    error?: string

    /** The orientation of the group */
    horizontal?: boolean

    /** The display label text or Component for the group */
    label: string | React.ReactNode

    /** The function to call when the value changes */
    onChange: (value: string) => void

    /** Where possible, use 'rules { required: "Reason" }' to identify required fields instead. */
    required?: boolean

    children: React.ReactNode
}

const Group = forwardRef<HTMLDivElement, RadioGroupProps> (({
    error,
    horizontal,
    ...props
}, ref) => {
    return (
        <MantineRadio.Group
            error={error && (
                <ErrorMessage error={error} />
            )}
            aria-invalid={Boolean(error)}
            {...props}
            classNames={{
                label: classes.radioGroupLabel,
                root: classes.radioGroupRoot,
            }}
            ref={ref}
        >
            <Flex direction={horizontal ? "row" : "column"} gap={rem(horizontal ? 24 : 8)}>
                {props.children}
            </Flex>
        </MantineRadio.Group>
    )
})

export interface RadioProps {
    /** The display label text or Component for the radio item */
    label: string | React.ReactNode

    /** The value of the Radio */
    value: string | number

    disabled?: boolean
}

const Item = forwardRef<HTMLInputElement, RadioProps> (({ label, disabled, ...props }: RadioProps, ref) => {
    return (
        <MantineRadio
            classNames={{
                body: classes.radioBody,
                radio: classes.radio,
                inner: classes.radioInner,
                label: classes.radioLabel,
            }}
            disabled={disabled}
            label={label}
            ref={ref}
            variant="outline"
            {...props}
        />
    )
})

// Attach the Group component to the Radio component in a way that Typescript doesn't hate
export const Radio = Object.assign({}, Item, {
    Group: Group,
})
