import React, { ReactNode } from "react"
import {
    Tooltip as MantineTooltip,
    TooltipProps as MantineTooltipProps,
} from "@mantine/core"

export interface TooltipProps extends Omit<MantineTooltipProps, "children" | "label"> {
    /** Set the actual text of the tooltip */
    label: string
    /** Set the location of the tooltip, defaults to "top" */
    position?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end"
    /** Set the child element (must be only one) */
    children: ReactNode
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps> (({
    children,
    label,
    position,
    ...rest
}, ref) => {
    const isLeftOrRight = position && (position.startsWith("left") || position.startsWith("right"))
    return (
        <MantineTooltip
            arrowOffset={isLeftOrRight ? 8 : 16}
            arrowPosition="side"
            events={{ hover: true, focus: true, touch: false }}
            label={label}
            offset={4}
            position={position}
            ref={ref}
            withArrow
            {...rest}
        >
            {children}
        </MantineTooltip>
    )
})
