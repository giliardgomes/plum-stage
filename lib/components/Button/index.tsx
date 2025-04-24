import React from "react"
import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core"
import { FAIconProps } from "@/components/Icons"
import classes from "@/components/Button/Button.module.css"

export type ButtonVariant = "accent" | "primary" | "secondary" | "tertiary"

export interface ButtonProps extends Omit<MantineButtonProps, "size">, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color" | "style" | "type"> {
    /** Button variant type. Defaults to "accent" */
    variant?: ButtonVariant
    /** Is this button Dangerous (should it be Red) */
    danger?: boolean
    /** Set the button to be disabled */
    disabled?: boolean
    /** Set the button to display a loading spinner */
    loading?: boolean
    /** Set the size of button, md and lg are better suitable for touch interfaces. Default to "sm" */
    size?: "lg" | "md" | "sm"
    /** Set a Font Awesome icon component at the left side */
    leftIcon?: React.ComponentType<FAIconProps>
    /** Set a Font Awesome icon component at the right side */
    rightIcon?: React.ComponentType<FAIconProps>
    /** Set an icon (or any other component) at the left side. Should be preferred for icon only button */
    leftSection?: React.ReactNode
    /** Set an icon (or any other component) at the right side */
    rightSection?: React.ReactNode
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
    danger = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    leftSection,
    rightSection,
    ...rest
}, ref) => {
    // Convert FA icons to sections if provided
    const finalLeftSection = LeftIcon ? <LeftIcon size={14} /> : leftSection
    const finalRightSection = RightIcon ? <RightIcon size={14} /> : rightSection

    return (
        <MantineButton
            classNames={classNames ?? classes}
            {...rest}
            ref={ref}
            mod={{
                "data-icon-only": countVisualElements(children) === 1,
                size,
                "data-design-variant": variant,
                "data-dangerous": danger,
            }}
            leftSection={finalLeftSection}
            rightSection={finalRightSection}
        >
            {children}
        </MantineButton>
    )
})
