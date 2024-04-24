import React, { forwardRef } from "react"
import { Paper, createPolymorphicComponent } from "@mantine/core"
import type { PaperProps } from "@mantine/core"
import { clsx } from "clsx"

import classes from "@/components/Tile/Tile.module.css"

export type TileOrientation = "horizontal" | "vertical"
export type TileSize = "sm" | "md" | "lg"
export type TileVariant = "primary" | "secondary"

export interface TileProps extends PaperProps {
    /** Tile Size */
    size?: TileSize

    /** Controls Tile appearance */
    variant?: TileVariant

    /** Tile orientation */
    orientation?: TileOrientation

    /** Icon before/above label */
    icon?: React.ReactNode

    /** Adds Badge after/above label */
    badge?: React.ReactNode

    /** Disabled State */
    disabled?: boolean

    /** Tile label */
    children?: React.ReactNode

    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
}

const defaultProps: Partial<TileProps> = {
    size: "sm",
    variant: "primary",
    orientation: "vertical",
}

const _Tile = forwardRef<HTMLButtonElement, TileProps>((props, ref) => {
    const {
        badge,
        children,
        icon,
        orientation,
        size,
        variant,
        className,
        ...rest
    } = { ...defaultProps, ...props }

    return (
        <Paper
            component="button"
            className={clsx(classes.root, className)}
            // Allow setting polymorphic props eg: `href` for an `<a />`
            ref={ref}
            mod={{
                size,
                orientation,
                variant,
                badged: Boolean(badge),
            }}
            {...rest}
        >
            {icon}
            <span className={classes.label}>{children}</span>
            {badge && <div className={classes.badge}>{badge}</div>}
        </Paper>
    )
})

_Tile.displayName = "Tile"

/**
 * # Tile Component
 * Description
 */
export const Tile = createPolymorphicComponent<"button", TileProps>(_Tile)
