import { forwardRef } from "react"
import { Divider as MantineDivider, DividerProps as MantineDividerProps } from "@mantine/core"
import classes from "./Divider.module.css"

export interface DividerProps extends Omit<MantineDividerProps, "classNames"> {
    /** Set a static selector for engagement tracking with third party tools (ie: Pendo) */
    "data-plum-id"?: string
    /** Divider orientation */
    orientation?: "horizontal" | "vertical"
    /** Divider variant */
    variant?: "solid" | "dashed" | "dotted"
    /** Divider label position */
    labelPosition?: "left" | "center" | "right"
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(({
    "data-plum-id": dataPlumId,
    orientation = "horizontal",
    variant = "solid",
    labelPosition = "center",
    ...props
}, ref) => {
    return (
        <MantineDivider
            ref={ref}
            orientation={orientation}
            variant={variant}
            labelPosition={labelPosition}
            classNames={classes}
            data-plum-id={dataPlumId}
            {...props}
        />
    )
})

Divider.displayName = "Divider"
