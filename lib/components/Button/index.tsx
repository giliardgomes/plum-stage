import React from "react"

import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core"

import classes from "@/components/Button/Button.module.css"

export interface ButtonProps extends Omit<MantineButtonProps, "size">, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color" | "style"> {
    /** Button variant type. Defaults to "accent" */
    variant?: "accent" | "danger" | "primary" | "secondary" | "tertiary"
    /** Set the button to be disabled */
    disabled?: boolean
    /** Set the button to display a loading spinner */
    loading?: boolean
    /** Set the size of button, md and lg are better suitable for touch interfaces. Default to "sm" */
    size?: "lg" | "md" | "sm"
    /** Set an icon (or any other component) at the left side. Should be preferred for icon only button */
    leftSection?: React.ReactNode
    /** Set an icon (or any other component) at the right side */
    rightSection?: React.ReactNode
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Set custom classNames */
    classNames?: object
    /** Set the click handler */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * Helper function to count children size including leaf nodes
 * This approach ensures that even if the children prop contains nested elements,
 * the component can accurately determine if only one visual item is rendered considering even primitive types.
 */
const countVisualElements = (node: React.ReactNode): number => {
    if (React.isValidElement(node)) {
        if (React.Children.count(node.props.children) === 0) {
            return 1
        }
        return React.Children.toArray(node.props.children).reduce((count: number, child) => count + countVisualElements(child), 0)
    }
    if (typeof node === "string" || typeof node === "number") {
        return node.toString().length
    }
    return 0
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    size = "sm",
    variant = "accent",
    classNames,
    ...rest
}, ref) => (
    <MantineButton
        classNames={classNames ?? classes}
        {...rest}
        ref={ref}
        mod={{
            "data-icon-only": countVisualElements(children) === 1,
            size,
            "data-design-variant": variant,
        }}
    >
        {children}
    </MantineButton>
))
