import React, { ChangeEventHandler } from "react"

import { Textarea as MantineTextArea, TextareaProps as MantineTextAreaProps } from "@mantine/core"
import { ErrorMessage } from "@/components/ErrorMessage"

import classes from "@/components/TextField/TextField.module.css"

/** Props for the TextField component. */
export interface TextFieldProps extends MantineTextAreaProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Determines if the TextField is disabled. */
    disabled?: boolean
    /** The label for the TextField, either text or a Label component. */
    label: string | React.ReactNode
    /** The placeholder text for the TextField. */
    placeholder?: string
    /** The description text for the TextField. */
    description?: string
    /** The error message. */
    error?: string
    /** Set the initial value. */
    value?: string
    /** Add a component at the leading part of the TextField. */
    leftSection?: React.ReactNode | string
    /** Add a component at the trailing part of the TextField. */
    rightSection?: React.ReactNode | string
    /** The event handler for the onChange event of the TextField. */
    onChange?: ChangeEventHandler | undefined
    /** Display an asterisk to indicate a required field (used in controlled components) */
    withAsterisk?: boolean
    /** Determines whether the input can have multiple lines */
    multiline?: boolean
    /** Maximum rows for autosize textarea to grow, ignored if `autosize` prop is not set */
    maxRows?: number
    /** Minimum rows of autosize textarea, ignored if `autosize` prop is not set */
    minRows?: number
    /** The number of characters threshold  */
    maxLength?: number
}

export const TextField = React.forwardRef<HTMLTextAreaElement, TextFieldProps>(({
    error,
    rightSection,
    multiline,
    maxRows = 5,
    minRows = 1,
    ...props
}, ref) => {
    return (
        <MantineTextArea
            classNames={{
                root: classes.root,
                input: classes.input,
                label: classes.label,
                section: classes.section,
                error: classes.error,
                description: classes.description,
            }}
            // Render either the error or the description
            inputWrapperOrder={["label", "input", error ? "error" : "description"]}
            autosize={true}
            maxRows={maxRows}
            minRows={minRows}
            error={error && <ErrorMessage error={error} />}
            {...props}
            ref={ref}
            rightSection={rightSection}
            component={multiline ? undefined : "input"}
        />
    )
})
