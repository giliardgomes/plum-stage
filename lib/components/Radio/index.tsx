import React, { forwardRef, createContext, useContext } from "react"
import { Radio as MantineRadio, Flex, rem } from "@mantine/core"
import classes from "@/components/Radio/Radio.module.css"
import { ErrorMessage } from "@/components/ErrorMessage"
import { useForwardedRef } from "@/hooks"

interface RadioGroupContext {
    onClick?: (ref: React.RefObject<HTMLInputElement>) => void
}
const RadioGroupContext = createContext<RadioGroupContext>({})

export interface RadioGroupProps {
    children: React.ReactNode

    /** Can the selected option be unselected by clicking on the selected item */
    clearable?: boolean

    /** The default value for an uncontrolled component */
    defaultValue?: string | null

    /** The error, if any, currently applicable */
    error?: string

    /** The orientation of the group */
    horizontal?: boolean

    /** The display label text or Component for the group */
    label: string | React.ReactNode

    /** The function to call when the value changes */
    onChange: (value: string | null) => void

    /** Where possible, use 'rules { required: "Reason" }' to identify required fields instead. */
    required?: boolean

    /** The value for a controlled component */
    value?: string | null
}

const Group = forwardRef<HTMLDivElement, RadioGroupProps>(({
    clearable = false,
    error,
    horizontal,
    onChange,
    value,
    ...props
}, ref) => {
    const onClick = (ref: React.RefObject<HTMLInputElement>) => {
        if (!ref.current) {
            return
        }
        const wasChecked = ref.current.checked
        ref.current.checked = !wasChecked
        onChange(wasChecked ? null : ref.current.value)
    }
    return (
        <MantineRadio.Group
            aria-invalid={Boolean(error)}
            classNames={{
                label: classes.radioGroupLabel,
                root: classes.radioGroupRoot,
            }}
            error={error && (
                <ErrorMessage error={error} />
            )}
            onChange={onChange}
            ref={ref}
            value={value}
            {...props}
        >
            <RadioGroupContext.Provider value={(clearable && { onClick }) || {}}>
                <Flex direction={horizontal ? "row" : "column"} gap={rem(horizontal ? 24 : 8)}>
                    {props.children}
                </Flex>
            </RadioGroupContext.Provider>
        </MantineRadio.Group>
    )
})

export interface RadioProps {
    disabled?: boolean

    label: string | React.ReactNode

    value: string | number
}

const Item = forwardRef<HTMLInputElement, RadioProps>(({ label, disabled, ...props }: RadioProps, ref) => {
    const { onClick } = useContext(RadioGroupContext)
    const thisRef = useForwardedRef(ref)
    return (
        <MantineRadio
            classNames={{
                body: classes.radioBody,
                icon: classes.radioIcon,
                inner: classes.radioInner,
                label: classes.radioLabel,
                radio: classes.radio,
            }}
            disabled={disabled}
            label={label}
            onClick={onClick && (() => onClick(thisRef))}
            onKeyDown={(e) => {
                if (thisRef.current && (e.key === " ")) {
                    e.preventDefault()
                    onClick && onClick(thisRef)
                }
            }}
            ref={thisRef}
            variant="outline"
            {...props}
        />
    )
})

// Attach the Group component to the Radio component in a way that Typescript doesn't hate
export const Radio = Object.assign({}, Item, {
    Group: Group,
})
