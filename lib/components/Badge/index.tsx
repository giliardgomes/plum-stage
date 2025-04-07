import { forwardRef } from "react"
import { Badge as MantineBadge, BadgeProps as MantineBadgeProps } from "@mantine/core"
import classes from "./Badge.module.css"

export interface BadgeProps extends Omit<MantineBadgeProps, "variant"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** The variant of the badge */
    variant?: "filled" | "light" | "outline" | "dot" | "gradient"
    /** The size of the badge */
    size?: "xs" | "sm" | "md" | "lg"
    /** Whether the badge is full width */
    fullWidth?: boolean
    /** The color of the badge */
    color?: "blue" | "red" | "green" | "yellow" | "purple" | "gray"
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(({
    children,
    variant = "light",
    size = "sm",
    fullWidth,
    color = "gray",
    className,
    ...rest
}, ref) => {
    return (
        <MantineBadge
            ref={ref}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            color={color}
            className={className}
            classNames={classes}
            {...rest}
        >
            {children}
        </MantineBadge>
    )
})

Badge.displayName = "Badge"
