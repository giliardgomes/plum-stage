import React from "react"
import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core"
import classes from "@/components/Button/Button.module.css"

export interface ButtonProps extends MantineButtonProps {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Set the button to be disabled */
    disabled?: boolean
    /** Set an icon (or any other component) at the left side */
    leftSection?: React.ReactNode
    /** Set an icon (or any other component) at the right side */
    rightSection?: React.ReactNode
    /** Set the button to display a loading spinner */
    loading?: boolean
    /** Set the size of button, md and lg are better suitable for touch interfaces. Default to "sm" */
    size?: "sm" | "md" | "lg"
    /** Button variant type. Defaults to "accent" */
    designVariant?: "accent" | "primary" | "secondary" | "tertiary" | "danger"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    size = "sm",
    designVariant = "accent",
    ...props
}, ref) => {
    const isIconOnly = !children
    return (
        <MantineButton
            classNames={{
                root: classes.root,
                inner: classes.buttonInner,
                section: classes.section,
                label: classes.label,
            }}
            {...props}
            ref={ref}
            mod={{
                "data-icon-only": isIconOnly,
                size,
                "data-design-variant": designVariant,
            }}
        >
            {children}
        </MantineButton>
    )
})
