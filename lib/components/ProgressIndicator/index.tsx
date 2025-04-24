import { forwardRef } from "react"
import { Loader as MantineLoader, LoaderProps as MantineLoaderProps } from "@mantine/core"
import classes from "./ProgressIndicator.module.css"

export interface ProgressIndicatorProps extends Omit<MantineLoaderProps, "color" | "classNames"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Color of the loader. Uses theme colors */
    color?: "violet" | "blue" | "brass" | "green" | "orange" | "red" | "gray" | "republican" | "democrat" | "white"
    /** Type of progress indicator */
    variant?: "circular" | "linear"
    /** Value for linear progress (0-100) */
    value?: number
}

export const ProgressIndicator = forwardRef<HTMLDivElement, ProgressIndicatorProps>(({
    "data-plum-id": dataPlumId,
    color = "violet",
    style,
    variant = "circular",
    value = 0,
    ...props
}, ref) => {
    // Special handling for white color
    const colorVar = color === "white"
        ? "var(--mantine-color-white)"
        : color ? `var(--mantine-color-${color}-6)` : undefined

    if (variant === "linear") {
        return (
            <div
                {...props as React.HTMLAttributes<HTMLDivElement>}
                ref={ref}
                role="progressbar"
                aria-valuenow={value}
                data-plum-id={dataPlumId}
                className={classes.bar}
                data-color={color}
                style={{
                    ...style,
                    "--progress-value": `${value}%`,
                    "--progress-background": color === "white"
                        ? "var(--mantine-color-gray-2)"
                        : `var(--mantine-color-${color}-2)`,
                } as unknown as React.CSSProperties}
            />
        )
    }

    return (
        <MantineLoader
            ref={ref}
            classNames={classes}
            data-plum-id={dataPlumId}
            style={{
                ...style,
                "--progress-indicator-color": colorVar,
            } as unknown as React.CSSProperties}
            {...props}
        />
    )
})

ProgressIndicator.displayName = "ProgressIndicator"
